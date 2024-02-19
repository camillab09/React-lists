// Features the various dishes available in the game, as well
// as the items required to cook the meal. If a specific item
// is needed (cooking pot, electric kitchen), this is also specified
// Added buffs to the various dishes that have them

import BakedBerries from "./CookingImages/Baked_Berries_icon.webp";
import BakedMushrooms from "./CookingImages/Baked_Mushroom_icon.webp";
import Bread from "./CookingImages/Bread_icon.webp";
import BroiledDumud from "./CookingImages/Broiled_Dumud_icon.webp";
import BroncherryRibRoast from "./CookingImages/Broncherry_Rib_Roast_icon.webp";
import Cake from "./CookingImages/Cake_icon.webp"; 
import Carbonara from "./CookingImages/Carbonara_icon.webp";
import ChikipiSaute from "./CookingImages/Chikipi_Saute_icon.webp";
import DumudChowder from "./CookingImages/Dumud_Chowder_icon.webp";
import EikthyrdeerLocoMoco from "./CookingImages/Eikthyrdeer_Loco_Moco_icon.webp";
import EikthyrdeerStew from "./CookingImages/Eikthyrdeer_Stew_icon.webp";
import FriedChikipi from "./CookingImages/Fried_Chikipi_icon.webp";
import FriedEgg from "./CookingImages/Fried_Egg_icon.webp";
import FriedKelpsea from "./CookingImages/Fried_Kelpsea_icon.webp";
import GrilledChikipi from "./CookingImages/Grilled_Chikipi_icon.webp";
import GrilledGaleclaw from "./CookingImages/Grilled_Galeclaw_icon.webp";
import GrilledKelpsea from "./CookingImages/Grilled_Kelpsea_icon.webp";
import GrilledLamball from "./CookingImages/Grilled_Lamball_icon.webp";
import HerbRoastedCaprity from "./CookingImages/Herb_Roasted_Caprity_icon.webp";
import HerbRoastedLamball from "./CookingImages/Herb_Roasted_Lamball_icon.webp";
import HotMilk from "./CookingImages/Hot_Milk_icon.webp";
import JamFilledBun from "./CookingImages/Jam-filled_Bun_icon.webp";
import LamballKebab from "./CookingImages/Lamball_Kebab_icon.webp";
import MammorestSteak from "./CookingImages/Mammorest_Steak_icon.webp";
import MarinatedMushrooms from "./CookingImages/Marinated_Mushrooms_icon.webp";
import MozzarinaCheeseburger from "./CookingImages/Mozzarina_Cheeseburger_icon.webp";
import MozzarinaHamburger from "./CookingImages/Mozzarina_Hamburger_icon.webp";
import MozzarinaSteak from "./CookingImages/Mozzarina_Steak_icon.webp";
import MushroomSoup from "./CookingImages/Mushroom_Soup_icon.webp";
import Omelet from "./CookingImages/Omelet_icon.webp";
import Pancake from "./CookingImages/Pancake.webp";
import Pizza from "./CookingImages/Pizza_icon.webp";
import ReindrixStew from "./CookingImages/Reindrix_Stew_icon.webp";
import RoastEikthyrdeer from "./CookingImages/Roast_Eikthyrdeer_icon.webp";
import RoastReindrix from "./CookingImages/Roast_Reindrix_icon.webp";
import RoastRushoar from "./CookingImages/Roast_Rushoar_icon.webp";
import RushoarBaconEggs from "./CookingImages/Rushoar_Bacon_27_Eggs_icon.webp";
import RushoarHotDog from "./CookingImages/Rushoar_Hot_Dog_icon.webp";
import Salad from "./CookingImages/Salad_icon.webp";
import StewedGaleclaw from "./CookingImages/Stewed_Galeclaw_icon.webp";

export const recipes = [
  {
    dish: "Baked Berries",
    nutrition: 21,
    sanity: 1,
    ingredients: ["1 Red Berries"],
    buffs: "None",
    cooker: "Available from Campfire",
    image: BakedBerries,
  },
  {
    dish: "Baked Mushrooms",
    nutrition: 18,
    sanity: 1,
    ingredients: ["1 Mushrooms"],
    buffs: "None",
    cooker: "Available from Campfire",
    image: BakedMushrooms,
  },
  {
    dish: "Bread",
    nutrition: 27,
    sanity: 4,
    ingredients: ["1 Flour"],
    buffs: "None",
    cooker: "Available from Campfire",
    image: Bread,
  },
  {
    dish: "Broiled Dumud",
    nutrition: 70,
    sanity: 1,
    ingredients: ["1 Raw Dumud"],
    buffs: "None",
    cooker: "Available from Campfire",
    image: BroiledDumud,
  },
  {
    dish: "Broncherry Rib Roast",
    nutrition: 252,
    sanity: 23,
    ingredients: ["1 Broncherry Meat"],
    buffs: "None",
    cooker: "Available from Campfire",
    image: BroncherryRibRoast,
  },
  {
    dish: "Cake",
    nutrition: 656,
    sanity: 82,
    ingredients: ["2 Flour", "8 Red Berries", "7 Milk", "8 Eggs", "2 Honey"],
    buffs: "Required for breeding.",
    cooker: "Available from Cooking Pot",
    image: Cake,
  },
  {
    dish: "Carbonara",
    nutrition: 129,
    sanity: 16,
    ingredients: ["1 Flour", "2 Eggs", "2 Milk"],
    buffs: "Increases defence with 20%. ",
    cooker: "Available from Electric Kitchen",
    image: Carbonara,
  },
  {
    dish: "Chikipi Sauté",
    nutrition: 92,
    sanity: 12,
    ingredients: ["1 Chikipi Poultry", "2 Red Berries"],
    buffs: "Increases work speed with 30%.",
    cooker: "Available from Cooking Pot",
    image: ChikipiSaute,
  },
  {
    dish: "Dumud Chowder",
    nutrition: 170,
    sanity: 21,
    ingredients: ["1 Raw Dumud", "2 Lettuce", "2 Tomatoes"],
    buffs: "Increases work speed with 50%.",
    cooker: "Available from Electric Kitchen",
    image: DumudChowder,
  },
  {
    dish: "Eikthyrdeer Loco Moco",
    nutrition: 174,
    sanity: 22,
    ingredients: ["1 Eikthyrdeer Venison", "2 Red Berries", "2 Eggs"],
    buffs: "Increases attack with 20%.",
    cooker: "Available from Electric Kitchen",
    image: EikthyrdeerLocoMoco,
  },
  {
    dish: "Eikthyrdeer Stew",
    nutrition: 212,
    sanity: 27,
    ingredients: ["1 Eikthyrdeer Venison", "1 Mushroom", "2 Milk"],
    buffs: "Increases defence with 20%.",
    cooker: "Available from Electric Kitchen",
    image: EikthyrdeerStew,
  },
  {
    dish: "Fried Chikipi",
    nutrition: 108,
    sanity: 14,
    ingredients: [
      "1 Chikipi Poultry",
      "1 Flour",
      "1 Egg",
      "1 High Quality Pal Oil",
    ],
    buffs: "Increases work speed with 30%, slows sanity decrease.",
    cooker: "Available from Electric Kitchen",
    image: FriedChikipi,
  },
  {
    dish: "Fried Egg",
    nutrition: 23,
    sanity: 1,
    ingredients: ["1 Egg"],
    buffs: "None",
    cooker: "Available from Campfire",
    image: FriedEgg,
  },
  {
    dish: "Fried Kelpsea",
    nutrition: 108,
    sanity: 14,
    ingredients: [
      "1 Raw Kelpsea",
      "1 Flour",
      "1 Egg",
      "1 High Quality Pal Oil",
    ],
    buffs: "Increases defence with 10%, slows sanity decrease.",
    cooker: "Available from Electric Kitchen",
    image: FriedKelpsea,
  },
  {
    dish: "Grilled Chikipi",
    nutrition: 50,
    sanity: 11,
    ingredients: ["1 Chikipi Poultry"],
    buffs: "None",
    cooker: "Available from Campfire",
    image: GrilledChikipi,
  },
  {
    dish: "Grilled Galeclaw",
    nutrition: 50,
    sanity: 11,
    ingredients: ["1 Galeclaw Poultry"],
    buffs: "None",
    cooker: "Available from Campfire",
    image: GrilledGaleclaw,
  },
  {
    dish: "Grilled Kelpsea",
    nutrition: 50,
    sanity: 11,
    ingredients: ["1 Raw Kelpsea"],
    buffs: "None",
    cooker: "Available from Campfire",
    image: GrilledKelpsea,
  },
  {
    dish: "Grilled Lamball",
    nutrition: 147,
    sanity: 18,
    ingredients: ["1 Lamball Mutton"],
    buffs: "Increases work speed with 30%, slows sanity decrease.",
    cooker: "Available from Cooking Pot",
    image: GrilledLamball,
  },
  {
    dish: "Herb Roasted Caprity",
    nutrition: 80,
    sanity: 11,
    ingredients: ["1 Caprity Meat"],
    buffs: "None",
    cooker: "Available from Campfire",
    image: HerbRoastedCaprity,
  },
  {
    dish: "Herb Roasted Lamball",
    nutrition: 80,
    sanity: 11,
    ingredients: ["1 Lamball Mutton", "2 Red Berries"],
    buffs: "Increases defence with 10%.",
    cooker: "Available from Cooking Pot",
    image: HerbRoastedLamball,
  },
  {
    dish: "Hot Milk",
    nutrition: 16,
    sanity: 1,
    ingredients: ["1 Milk"],
    buffs: "None",
    cooker: "Available from Campfire",
    image: HotMilk,
  },
  {
    dish: "Jam-Filled Bun",
    nutrition: 51,
    sanity: 6,
    ingredients: ["1 Flour", "2 Red Berries"],
    buffs: "None",
    cooker: "Available from Cooking Pot",
    image: JamFilledBun,
  },
  {
    dish: "Lamball Kebab",
    nutrition: 52,
    sanity: 11,
    ingredients: ["1 Lamball Mutton "],
    buffs: "None",
    cooker: "Available from Campfire",
    image: LamballKebab,
  },
  {
    dish: "Mammorest Steak",
    nutrition: 252,
    sanity: 23,
    ingredients: ["1 Mammorest Meat"],
    buffs: "None",
    cooker: "Available from Campfire",
    image: MammorestSteak,
  },
  {
    dish: "Marinated Mushrooms",
    nutrition: 60,
    sanity: 7,
    ingredients: ["1 Mushroom", "2 Red Berries"],
    buffs: "Increases defence with 10%",
    cooker: "Available from Cooking Pot",
    image: MarinatedMushrooms,
  },
  {
    dish: "Mozzarina Cheeseburger",
    nutrition: 288,
    sanity: 36,
    ingredients: ["1 Mozzarina Meat", "1 Flour", "2 Tomatoes", "2 Milk"],
    buffs: "Increases attack with 20%, slows hunger decrease. ",
    cooker: "Available from Electric Kitchen",
    image: MozzarinaCheeseburger,
  },
  {
    dish: "Mozzarina Hamburger",
    nutrition: 162,
    sanity: 20,
    ingredients: ["1 Mozzarina Meat", "1 Flour", "2 Lettuce"],
    buffs: "Increases work speed with 50%, slows sanity decrease.",
    cooker: "Available from Electric Kitchen",
    image: MozzarinaHamburger,
  },
  {
    dish: "Mozzarina Steak",
    nutrition: 80,
    sanity: 1,
    ingredients: ["1 Mozzarina Meat"],
    buffs: "None",
    cooker: "Available from Campfire",
    image: MozzarinaSteak,
  },
  {
    dish: "Mushroom Soup",
    nutrition: 52,
    sanity: 7,
    ingredients: ["1 Mushroom", "2 Milk"],
    buffs: "Slows hunger decrease.",
    cooker: "Available from Cooking Pot",
    image: MushroomSoup,
  },
  {
    dish: "Omelet",
    nutrition: 67,
    sanity: 7,
    ingredients: ["1 Tomato", "2 Eggs"],
    buffs: "Increases attack with 10%.",
    cooker: "Available from Cooking Pot",
    image: Omelet,
  },
  {
    dish: "Pancakes",
    nutrition: 42,
    sanity: 5,
    ingredients: ["1 Flour", "1 Milk"],
    buffs: "Slows sanity decrease.",
    cooker: "Available from Cooking Pot",
    image: Pancake,
  },
  {
    dish: "Pizza",
    nutrition: 184,
    sanity: 23,
    ingredients: ["1 Flour", "2 Red Berries", "2 Tomatoes", "2 Milk"],
    buffs: "Increases work speed with 30%, slows hunger decrease.",
    cooker: "Available from Electric Kitchen",
    image: Pizza,
  },
  {
    dish: "Reindrix Stew",
    nutrition: 132,
    sanity: 17,
    ingredients: ["1 Reindrix Venison", "2 Tomatoes"],
    buffs: "Slows hunger decrease.",
    cooker: "Available from Cooking Pot",
    image: ReindrixStew,
  },
  {
    dish: "Roast Eikthyrdeer",
    nutrition: 70,
    sanity: 1,
    ingredients: ["1 Eikthyrdeer Venison"],
    buffs: "None",
    cooker: "Available from Campfire",
    image: RoastEikthyrdeer,
  },
  {
    dish: "Roast Reindrix",
    nutrition: 252,
    sanity: 21,
    ingredients: ["1 Reindrix Venison"],
    buffs: "None",
    cooker: "Available from Campfire",
    image: RoastReindrix,
  },

  {
    dish: "Roast Rushoar",
    nutrition: 60,
    sanity: 1,
    ingredients: ["1 Rushoar Pork"],
    buffs: "None",
    cooker: "Available from Campfire",
    image: RoastRushoar,
  },
  {
    dish: "Rushoar Bacon 'n' Eggs",
    nutrition: 167,
    sanity: 21,
    ingredients: ["2 Rushoar Pork", "2 Egg"],
    buffs: "Increases attack with 10%.",
    cooker: "Available from Cooking Pot",
    image: RushoarBaconEggs,
  },
  {
    dish: "Rushoar Hot Dog",
    nutrition: 140,
    sanity: 18,
    ingredients: ["1 Rushoar Pork", "1 Flour", "2 Lettuce"],
    buffs: "Increases defence with 20%.",
    cooker: "Available from Electric Kitchen",
    image: RushoarHotDog,
  },
  {
    dish: "Salad",
    nutrition: 84,
    sanity: 11,
    ingredients: ["2 Lettuce", "2 Tomatoes"],
    buffs: "Increases work speed with 30%.",
    cooker: "Available from Cooking Pot",
    image: Salad,
  },
  {
    dish: "Stewed Galeclaw",
    nutrition: 92,
    sanity: 12,
    ingredients: ["1 Galeclaw Poultry", "2 Red Berries"],
    buffs: "Slows sanity decrease.",
    cooker: "Available from Cooking Pot",
    image: StewedGaleclaw,
  },
];
