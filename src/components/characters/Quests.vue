<template>
  <q-card v-if="currentCharacter" class="m-4">
    <q-card-section>
      <div class="flex items-center">
        <div class="text-2xl font-medium mr-2">Quests</div>
        <q-toggle v-model="hideCompletedQuests" label="Hide Completed Quests" />
      </div>
      <div class="grid grid-cols-3 mt-2">
        <div v-for="world in NUM_WORLDS">
          <div
            class="text-xl text-light text-center font-medium p-2 mx-4 rounded"
            :class="worldClass(world)"
          >
            World {{ world }} {{ getCompletedByWorldText(world) }}
          </div>
          <q-item
            v-for="quest in getQuestsByWorld(world)"
            class="flex items-center"
          >
            <q-img
              height="64px"
              width="64px"
              fit="contain"
              :src="Assets.NPCAnimated(quest.npc)"
            />
            <q-checkbox
              :model-value="questComplete(quest.id)"
              @click="onToggleQuestComplete(quest.id)"
            />
            <div class="flex flex-col">
              <div>{{ quest.name }}</div>
              <div class="text-secondary">{{ quest.npc }}</div>
            </div>
          </q-item>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { AllQuests } from "~/composables/Quests";
import { Assets } from "~/composables/Utilities";
import { defineComponent, ref } from "vue";
import { useCharacters } from "~/composables/Characters";

export default defineComponent({
  name: "Quests",
  setup() {
    const { currentCharacter } = useCharacters();

    const hideCompletedQuests = ref(false);

    const NUM_WORLDS = 3;
    const getQuestsByWorld = (world: number) => {
      return AllQuests.filter((quest) => {
        return (
          quest.world === world &&
          (hideCompletedQuests.value ? !questComplete(quest.id) : true)
        );
      });
    };

    const getCompletedByWorldText = (world: number): string => {
      let quests = getQuestsByWorld(world);
      let completed = quests.filter((x) => questComplete(x.id));
      return `(${completed.length}/${quests.length})`;
    };

    const questComplete = (id: string) => {
      return currentCharacter.value?.quests[id] ?? false;
    };

    const onToggleQuestComplete = (id: string) => {
      if (currentCharacter.value) {
        currentCharacter.value.quests[id] = !currentCharacter.value.quests[id];
      }
    };

    const worldClass = (world: number): string => {
      if (world === 1) {
        return "bg-green-600";
      }
      if (world === 2) {
        return "bg-yellow-400";
      }
      if (world === 3) {
        return "bg-blue-400";
      }
      return "";
    };

    return {
      Assets,
      currentCharacter,
      getCompletedByWorldText,
      getQuestsByWorld,
      hideCompletedQuests,
      NUM_WORLDS,
      onToggleQuestComplete,
      questComplete,
      worldClass,
    };
  },
});
</script>

<style scoped lang="sass"></style>
