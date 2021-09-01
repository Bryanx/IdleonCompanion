import { EffectData, Effects } from "./Utilities";

export enum CardCategory {
  BlunderHills = "Blunder Hills",
  YumYumDesert = "Yum Yum Desert",
  EasyResources = "Easy Resources",
  MediumResources = "Medium Resources",
  HardResources = "Hard Resources",
  FrostbiteTundra = "Frostbite Tundra",
  Bosses = "Bosses",
  Events = "Events",
}

export type Card = {
  id: string;
  category: CardCategory;
  effect: EffectData;
  base: number;
  source?: string;
};

const BlunderHillCards: Card[] = [
  {
    id: "Green Mushroom",
    category: CardCategory.BlunderHills,
    effect: Effects.BaseHP,
    base: 12,
    source: "Green Mushrooms (1/10,000)",
  },
  {
    id: "Red Mushroom",
    category: CardCategory.BlunderHills,
    effect: Effects.BaseLUK,
    base: 3,
    source: "Red Mushroom (1/10,000)",
  },
  {
    id: "Frog",
    category: CardCategory.BlunderHills,
    effect: Effects.BaseMP,
    base: 10,
    source: "Frog (1/10,000)",
  },
  {
    id: "Bored Bean",
    category: CardCategory.BlunderHills,
    effect: Effects.BaseDamage,
    base: 7,
    source: "Bored Bean (1/10,300)",
  },
  {
    id: "Slime",
    category: CardCategory.BlunderHills,
    effect: Effects.BaseWIS,
    base: 2,
    source: "Slime (1/10,500)",
  },
  {
    id: "Baby Boa",
    category: CardCategory.BlunderHills,
    effect: Effects.MoveSpeed,
    base: 1,
    source: "Baby Boa (1/10,600)",
  },
  {
    id: "Carrotman",
    category: CardCategory.BlunderHills,
    effect: Effects.BaseAGI,
    base: 2,
    source: "Carrotman (1/11,100)",
  },
  {
    id: "Glublin",
    category: CardCategory.BlunderHills,
    effect: Effects.TotalHP,
    base: 2,
    source: "Glublin (1/11,600)",
  },
  {
    id: "Wode Board",
    category: CardCategory.BlunderHills,
    effect: Effects.BaseSTR,
    base: 2,
    source: "Wode Board (1/12,500)",
  },
  {
    id: "Gigafrog",
    category: CardCategory.BlunderHills,
    effect: Effects.CardChance,
    base: 5,
    source: "Gigafrog (1/14,300)",
  },
  {
    id: "Poop",
    category: CardCategory.BlunderHills,
    effect: Effects.CrystalChance,
    base: 10,
    source: "Poop (1/16,700)",
  },
  {
    id: "Rat",
    category: CardCategory.BlunderHills,
    effect: Effects.CritChance,
    base: 1,
    source: "Rat (1/20,000)",
  },
  {
    id: "Walking Stick",
    category: CardCategory.BlunderHills,
    effect: Effects.BaseWIS,
    base: 5,
    source: "Walking Stick (1/16,700)",
  },
  {
    id: "Nutto",
    category: CardCategory.BlunderHills,
    effect: Effects.MonsterMoney,
    base: 5,
    source: "Nutto (1/20,000)",
  },
  {
    id: "Crystal Carrot",
    category: CardCategory.BlunderHills,
    effect: Effects.DropRate,
    base: 5,
    source: "Crystal Carrot (1/100)",
  },
  {
    id: "Wood Mushroom",
    category: CardCategory.BlunderHills,
    effect: Effects.TotalAccuracy,
    base: 5,
    source: "Wood Mushroom (1/10,000)",
  },
];

const YumYumDesertCards: Card[] = [
  {
    id: "Sandy Pot",
    category: CardCategory.YumYumDesert,
    effect: Effects.ExpConversion,
    base: 12,
    source: "Sandy Pot (1/10,000)",
  },
  {
    id: "Mimic",
    category: CardCategory.YumYumDesert,
    effect: Effects.DropRate,
    base: 3,
    source: "Mimic (1/10,000)",
  },
  {
    id: "Crabcake",
    category: CardCategory.YumYumDesert,
    effect: Effects.NoFoodConsume,
    base: 6,
    source: "Crabcake (1/10,000)",
  },
  {
    id: "Mafioso",
    category: CardCategory.YumYumDesert,
    effect: Effects.BaseAGI,
    base: 5,
    source: "Mafioso (1/10,000)",
  },
  {
    id: "Sand Castle",
    category: CardCategory.YumYumDesert,
    effect: Effects.TotalAccuracy,
    base: 4,
    source: "Sand Castle (1/10,000)",
  },
  {
    id: "Pincermin",
    category: CardCategory.YumYumDesert,
    effect: Effects.WeaponPower,
    base: 1,
    source: "Pincermin (1/10,000)",
  },
  {
    id: "Mashed Potato",
    category: CardCategory.YumYumDesert,
    effect: Effects.CritDamage,
    base: 3,
    source: "Mashed Potato (1/10,000)",
  },
  {
    id: "Tyson",
    category: CardCategory.YumYumDesert,
    effect: Effects.BaseSTR,
    base: 5,
    source: "Tyson (1/10,000)",
  },
  {
    id: "Moonmoon",
    category: CardCategory.YumYumDesert,
    effect: Effects.MonsterExpActive,
    base: 8,
    source: "Moonmoon (1/10,000)",
  },
  {
    id: "Sand Giant",
    category: CardCategory.YumYumDesert,
    effect: Effects.MinimumDamage,
    base: 2,
    source: "Sand Giant (1/10,000)",
  },
  {
    id: "Snelbie",
    category: CardCategory.YumYumDesert,
    effect: Effects.CardChance,
    base: 8,
    source: "Snelbie (1/10,000)",
  },
  {
    id: "Dig Doug",
    category: CardCategory.YumYumDesert,
    effect: Effects.BaseLUK,
    base: 6,
    source: "Dig Doug (1/10,000)",
  },
  {
    id: "Crystal Crabal",
    category: CardCategory.YumYumDesert,
    effect: Effects.MonsterExp,
    base: 2,
    source: "Crystal Crabal (1/125)",
  },
  {
    id: "Bandit Bob",
    category: CardCategory.YumYumDesert,
    effect: Effects.MonsterMoney,
    base: 1,
    source: "Survive Bandit Bob",
  },
];

const EasyResourcesCards: Card[] = [
  {
    id: "Copper Ore",
    category: CardCategory.EasyResources,
    effect: Effects.BaseAccuracy,
    base: 4,
    source: "Mining Copper",
  },
  {
    id: "Iron Ore",
    category: CardCategory.EasyResources,
    effect: Effects.MiningEfficiency,
    base: 5,
    source: "Mining Iron",
  },
  {
    id: "Gold Ore",
    category: CardCategory.EasyResources,
    effect: Effects.MiningExp,
    base: 5,
    source: "Mining Gold",
  },
  {
    id: "Fire Forge",
    category: CardCategory.EasyResources,
    effect: Effects.SmithingExp,
    base: 4,
    source: "Smelting Ore in Slots 1-4",
  },
  {
    id: "Oak Logs",
    category: CardCategory.EasyResources,
    effect: Effects.BaseDefense,
    base: 3,
    source: "Choppin Oak Tree",
  },
  {
    id: "Bleach Logs",
    category: CardCategory.EasyResources,
    effect: Effects.ChoppinEfficiency,
    base: 5,
    source: "Choppin Birch Tree",
  },
  {
    id: "Jungle Logs",
    category: CardCategory.EasyResources,
    effect: Effects.ChoppinExp,
    base: 5,
    source: "Choppin Jungle Tree",
  },
  {
    id: "Forest Fibres",
    category: CardCategory.EasyResources,
    effect: Effects.ExpConversion,
    base: 8,
    source: "Choppin Forest Tree",
  },
  {
    id: "Goldfish",
    category: CardCategory.EasyResources,
    effect: Effects.TotalMP,
    base: 3,
    source: "Fishing Goldfish",
  },
  {
    id: "Hermit Can",
    category: CardCategory.EasyResources,
    effect: Effects.FishingEfficiency,
    base: 5,
    source: "Fishing Hermit Cans",
  },
  {
    id: "Jellyfish",
    category: CardCategory.EasyResources,
    effect: Effects.FishingExp,
    base: 5,
    source: "Fishing Jellyfish",
  },
  {
    id: "Fly",
    category: CardCategory.EasyResources,
    effect: Effects.MonsterExpActive,
    base: 4,
    source: "Catching Flies",
  },
  {
    id: "Butterfly",
    category: CardCategory.EasyResources,
    effect: Effects.CatchingEfficiency,
    base: 5,
    source: "Catching Butterflies",
  },
];

const MediumResourcesCards: Card[] = [
  {
    id: "Platinum Ore",
    category: CardCategory.MediumResources,
    effect: Effects.MiningAfk,
    base: 2,
    source: "Mining Platinum",
  },
  {
    id: "Dementia Ore",
    category: CardCategory.MediumResources,
    effect: Effects.MiningSpeed,
    base: 4,
    source: "Mining Dementia",
  },
  {
    id: "Void Ore",
    category: CardCategory.MediumResources,
    effect: Effects.CardChance,
    base: 6,
    source: "Mining Void",
  },
  {
    id: "Cinder Forge",
    category: CardCategory.MediumResources,
    effect: Effects.SmithingExp,
    base: 7,
    source: "Smelting Ore in Slots 5-8",
  },
  {
    id: "Tropilogs",
    category: CardCategory.MediumResources,
    effect: Effects.ChoppinAfk,
    base: 2,
    source: "Choppin Palm Tree",
  },
  {
    id: "Potty Rolls",
    category: CardCategory.MediumResources,
    effect: Effects.ChoppinSpeed,
    base: 4,
    source: "Choppin Toilet Tree",
  },
  {
    id: "Veiny Logs",
    category: CardCategory.MediumResources,
    effect: Effects.TotalAccuracy,
    base: 3,
    source: "Choppin Stump Tree",
  },
  {
    id: "Bloach",
    category: CardCategory.MediumResources,
    effect: Effects.FishingAfk,
    base: 2,
    source: "Fishing Bloaches",
  },
  {
    id: "Sentient Cereal",
    category: CardCategory.MediumResources,
    effect: Effects.CatchingExp,
    base: 5,
    source: "Catching Sentient Cereal",
  },
  {
    id: "Fruitfly",
    category: CardCategory.MediumResources,
    effect: Effects.CatchingAfk,
    base: 2,
    source: "Catching Fruitflies",
  },
  {
    id: "Forest Soul",
    category: CardCategory.MediumResources,
    effect: Effects.EquipmentDefense,
    base: 3,
    source: "Glublin Totem",
  },
  {
    id: "Dune Soul",
    category: CardCategory.MediumResources,
    effect: Effects.WorshipPoints,
    base: 3,
    source: "",
  },
  {
    id: "Froge",
    category: CardCategory.MediumResources,
    effect: Effects.TrappingShiny,
    base: 3,
    source: "Trapping Froges",
  },
  {
    id: "Crabbo",
    category: CardCategory.MediumResources,
    effect: Effects.TrappingEfficiency,
    base: 5,
    source: "Trapping Crabbos",
  },
  {
    id: "Scorpie",
    category: CardCategory.MediumResources,
    effect: Effects.TrappingExp,
    base: 5,
    source: "Trapping Scorpies",
  },
];

const HardResourcesCards: Card[] = [
  {
    id: "Lustre Ore",
    category: CardCategory.HardResources,
    effect: Effects.BaseLUK,
    base: 4,
    source: "Mining Lustre",
  },
  {
    id: "Rooted Soul",
    category: CardCategory.HardResources,
    effect: Effects.WorshipPoints,
    base: 6,
    source: "Acorn Assault (Worship)",
  },
  {
    id: "Frigid Soul",
    category: CardCategory.HardResources,
    effect: Effects.WorshipCharge,
    base: 2.5,
    source: "Frosty Firefight (Worship)",
  },
  {
    id: "Squiddy Soul",
    category: CardCategory.HardResources,
    effect: Effects.WorshipChargeRate,
    base: 2.5,
    source: "Unobtainable",
  },
  {
    id: "Mousey",
    category: CardCategory.HardResources,
    effect: Effects.TrappingShiny,
    base: 2.5,
    source: "Rats Nest (Trapping)",
  },
  {
    id: "Owlio",
    category: CardCategory.HardResources,
    effect: Effects.MonsterExp,
    base: 1.25,
    source: "Hollowed Trunk (Trapping)",
  },
  {
    id: "Pingy",
    category: CardCategory.HardResources,
    effect: Effects.TrappingShiny,
    base: 6,
    source: "The Stache Split (Trapping)",
  },
  {
    id: "Bunny",
    category: CardCategory.HardResources,
    effect: Effects.SkillAfk,
    base: 1,
    source: "Thermonuclear Climb (Trapping)",
  },
  {
    id: "Tundra Logs",
    category: CardCategory.HardResources,
    effect: Effects.ChoppinAfk,
    base: 2.5,
    source: "Chopping Saharan Foal",
  },
  {
    id: "Wispy Lumber",
    category: CardCategory.HardResources,
    effect: Effects.ChoppinSpeed,
    base: 6,
    source: "Chopping Wispy Tree",
  },
  {
    id: "Mosquisnow",
    category: CardCategory.HardResources,
    effect: Effects.CatchingEfficiency,
    base: 7,
    source: "Catching Mosquisnow",
  },
  {
    id: "Flycicle",
    category: CardCategory.HardResources,
    effect: Effects.CatchingAfk,
    base: 2.5,
    source: "Catching Flycicle",
  },
];

const FrostbiteTundraCards: Card[] = [
  {
    id: "Sheepie",
    category: CardCategory.FrostbiteTundra,
    effect: Effects.EquipmentDefense,
    base: 3,
    source: "1/10000",
  },
  {
    id: "Frost Flake",
    category: CardCategory.FrostbiteTundra,
    effect: Effects.BaseSTR,
    base: 7,
    source: "1/10000",
  },
  {
    id: "Sir Stache",
    category: CardCategory.FrostbiteTundra,
    effect: Effects.CardChance,
    base: 8,
    source: "1/10000",
  },
  {
    id: "Bloque",
    category: CardCategory.FrostbiteTundra,
    effect: Effects.BaseAGI,
    base: 7,
    source: "1/10000",
  },
  {
    id: "Mamooth",
    category: CardCategory.FrostbiteTundra,
    effect: Effects.TotalHP,
    base: 3.5,
    source: "1/10000",
  },
  {
    id: "Snowman",
    category: CardCategory.FrostbiteTundra,
    effect: Effects.TotalDamage,
    base: 3,
    source: "1/10000",
  },
  {
    id: "Penguin",
    category: CardCategory.FrostbiteTundra,
    effect: Effects.BaseWIS,
    base: 7,
    source: "1/10000",
  },
  {
    id: "Thermister",
    category: CardCategory.FrostbiteTundra,
    effect: Effects.CritDamage,
    base: 4,
    source: "1/10000",
  },
  {
    id: "Quenchie",
    category: CardCategory.FrostbiteTundra,
    effect: Effects.BaseLUK,
    base: 7,
    source: "1/10000",
  },
  {
    id: "Cryosnake",
    category: CardCategory.FrostbiteTundra,
    effect: Effects.MPRegen,
    base: 5,
    source: "1/10000",
  },
  {
    id: "Bop Box",
    category: CardCategory.FrostbiteTundra,
    effect: Effects.DropRate,
    base: 3,
    source: "1/10000",
  },
  {
    id: "Neyeptune",
    category: CardCategory.FrostbiteTundra,
    effect: Effects.TotalAccuracy,
    base: 5,
    source: "1/10000",
  },
  {
    id: "Dedotated Ram",
    category: CardCategory.FrostbiteTundra,
    effect: Effects.WeaponPower,
    base: 2,
    source: "1/10000",
  },
  {
    id: "Xylobone",
    category: CardCategory.FrostbiteTundra,
    effect: Effects.CritChance,
    base: 1,
    source: "1/20",
  },
  {
    id: "Bloodbone",
    category: CardCategory.FrostbiteTundra,
    effect: Effects.TotalDamage,
    base: 3,
    source: "1/10000",
  },
  {
    id: "Crystal Cattle",
    category: CardCategory.FrostbiteTundra,
    effect: Effects.MonsterExp,
    base: 3,
    source: "",
  },
];

const BossesCards: Card[] = [
  {
    id: "Baba Yaga",
    category: CardCategory.Bosses,
    effect: Effects.MonsterMoney,
    base: 10,
    source: "Baba Yaga (1/33.3)",
  },
  {
    id: "Dr. Defecaus",
    category: CardCategory.Bosses,
    effect: Effects.TotalDamage,
    base: 5,
    source: "Dr. Defecaus (1/33.3)",
  },
  {
    id: "Boop",
    category: CardCategory.Bosses,
    effect: Effects.FightingAfk,
    base: 1,
    source: "Boop (1/667)",
  },
  {
    id: "Normal Amarok",
    category: CardCategory.Bosses,
    effect: Effects.SkillAfk,
    base: 2.5,
    source: "Normal Amarok (1/25)",
  },
  {
    id: "Chaotic Amarok",
    category: CardCategory.Bosses,
    effect: Effects.FightingAfk,
    base: 2.5,
    source: "Chaotic Amarok (1/50)",
  },
  {
    id: "Biggie Hours",
    category: CardCategory.Bosses,
    effect: Effects.DoubleAfkChance,
    base: 3,
    source: "Biggie Hours (1/41.7)",
  },
  {
    id: "King Doot",
    category: CardCategory.Bosses,
    effect: Effects.DropRate,
    base: 6,
    source: "King Doot (1/25)",
  },
  {
    id: "Normal Efaunt",
    category: CardCategory.Bosses,
    effect: Effects.MonsterExp,
    base: 5,
    source: "Normal Efaunt (1/28.6)",
  },
  {
    id: "Chaotic Efaunt",
    category: CardCategory.Bosses,
    effect: Effects.SkillExp,
    base: 3.75,
    source: "Chaotic Efaunt (1/50)",
  },
  {
    id: "Chizoar",
    category: CardCategory.Bosses,
    effect: Effects.CogSpeed,
    base: 10,
    source: "",
  },
  {
    id: "Chaotic Chizoar",
    category: CardCategory.Bosses,
    effect: Effects.ShrineEffect,
    base: 5,
    source: "",
  },
];

const EventsCards: Card[] = [
  {
    id: "Ghost",
    category: CardCategory.Events,
    effect: Effects.MonsterExpActive,
    base: 3,
    source: "Ghost (1/20)",
  },
  {
    id: "Giftmas Blobulyte",
    category: CardCategory.Events,
    effect: Effects.DropRate,
    base: 3,
    source: "Giftmas Box",
  },
  {
    id: "Meaning of Giftmas",
    category: CardCategory.Events,
    effect: Effects.MonsterMoney,
    base: 3,
    source: "Giftmas Box",
  },
  {
    id: "Valentslime",
    category: CardCategory.Events,
    effect: Effects.EquipmentDefense,
    base: 3,
    source: "Valentslime (1/11.8)",
  },
  {
    id: "Loveulyte",
    category: CardCategory.Events,
    effect: Effects.TotalHP,
    base: 5,
    source: "Choco Box",
  },
  {
    id: "Choco Box",
    category: CardCategory.Events,
    effect: Effects.BoostFoodEffect,
    base: 4,
    source: "Choco Box",
  },
  {
    id: "Floofie",
    category: CardCategory.Events,
    effect: Effects.MPRegen,
    base: 3,
    source: "Floofie (1/20)",
  },
  {
    id: "Shell Snake",
    category: CardCategory.Events,
    effect: Effects.BaseLUK,
    base: 3,
    source: "Shell Snake (1/20)",
  },
  {
    id: "Egggulyte",
    category: CardCategory.Events,
    effect: Effects.CardChance,
    base: 1,
    source: "Egg Capsule",
  },
  {
    id: "Egg Capsule",
    category: CardCategory.Events,
    effect: Effects.CritDamage,
    base: 1,
    source: "Egg Capsule",
  },
  {
    id: "Plasti_Doug",
    category: CardCategory.Events,
    effect: Effects.BaseDefense,
    base: 3,
    source: "Egg Capsule",
  },
  {
    id: "Mr_Blueberry",
    category: CardCategory.Events,
    effect: Effects.DropRate,
    base: 3,
    source: "Egg Capsule",
  },
  {
    id: "Coastiolyte",
    category: CardCategory.Events,
    effect: Effects.FishingAfk,
    base: 1,
    source: "Egg Capsule",
  },
  {
    id: "Summer_Spirit",
    category: CardCategory.Events,
    effect: Effects.CatchingExp,
    base: 1,
    source: "Egg Capsule",
  },
];

export const Cards: Record<CardCategory, Card[]> = {
  [CardCategory.BlunderHills]: BlunderHillCards,
  [CardCategory.YumYumDesert]: YumYumDesertCards,
  [CardCategory.FrostbiteTundra]: FrostbiteTundraCards,
  [CardCategory.EasyResources]: EasyResourcesCards,
  [CardCategory.MediumResources]: MediumResourcesCards,
  [CardCategory.HardResources]: HardResourcesCards,
  [CardCategory.Bosses]: BossesCards,
  [CardCategory.Events]: EventsCards,
};

export function useCards() {
  const getCardText = (card: Card, tier: number): string => {
    const bonus = tier * card.base;
    let text = `${card.id}<br>+${bonus} ${card.effect}`;
    if (card.source) {
      text += `<br><em>Source: ${card.source}</em>`;
    }
    return text;
  };

  return {
    getCardText,
  };
}
