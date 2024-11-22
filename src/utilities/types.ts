export type User = {
  image: string;
  name: string;
  lastName: string;
  id: string;
  phone: string;
  email: string;
  birth: string;
};

export type Measurement = "kg" | "gramme" | "litres" | "piece";

export type Product = {
  id: string;
  name: string;
  price: number;
  amountStep: number;
  maxAmount: number;
  amount: number;
  category: CategoryName;
  subCategory: SubCategoryName;
  image: string;
  isAvailable: boolean;
  isFavorite: boolean;
  seller: string;
  details: string;
  rate: number;
  measurement: Measurement;
};

export type Order = {
  id: string;
  status: string;
  date: string;
  delivery: string;
  price: number;
  products: Product[];
};

export type Feedback = { rate: number; text: string; user: string; id: string };

export type CategoryName =
  | "fruits-vegetables-pickles"
  | "meat"
  | "fish"
  | "cheeses"
  | "bakery-products"
  | "milk-eggs"
  | "grocery"
  | "sauces-canned"
  | "drinks"
  | "garden"
  | "tea";

type CategoryIcon =
  | "apple-whole"
  | "drumstick-bite"
  | "fish"
  | "cheese"
  | "bread-slice"
  | "egg"
  | "seedling"
  | "bottle-droplet"
  | "mug-hot"
  | "bottle-water"
  | "leaf";

export type Category = {
  available?: boolean;
  category: CategoryName;
  icon: CategoryIcon;
};

type SubCategoryName =
  | "fruits"
  | "vegetables"
  | "pickles"
  | "dried-fruits"
  | "mushrooms"
  | "nuts"
  | "poultry-meat"
  | "pork"
  | "beef-veal"
  | "salo"
  | "rabbit"
  | "lamb"
  | "offal"
  | "fresh-fish"
  | "smoked-fish"
  | "cancers"
  | "semi-hard-cheeses"
  | "brined-cheeses"
  | "soft-cheeses"
  | "processed-cheeses"
  | "hard-cheeses"
  | "bread"
  | "buns"
  | "pita-cakes-blanks"
  | "drying-breadcrumbs"
  | "milk-cream"
  | "yogurts-desserts"
  | "eggs"
  | "cottage-cheese"
  | "sour-cream"
  | "butter-margarine"
  | "groats"
  | "pasta"
  | "oil"
  | "sugar"
  | "salt"
  | "flour"
  | "sauces"
  | "seasonings-spices"
  | "jams-preserves"
  | "canned-meat"
  | "canned-fruits"
  | "honey"
  | "herbal-tea-compositions"
  | "herbs"
  | "juice"
  | "kvass"
  | "compote"
  | "flowers"
  | "indoor-plants"
  | "bouquets"
  | "seed"
  | "saplings"
  | "flower-pots"
  | "croissant-puffs";

export type SubCategory = {
  image: string;
  category: CategoryName;
  subCategory: SubCategoryName;
  available: boolean;
};

export type SubCategories = Record<CategoryName, SubCategory[]>;

export type Delivery = "sd" | "np" | "up" | null;

export type Payment = "uponReceipt" | "payNow" | null;

export type Modal =
  | "hamburger"
  | "catalog"
  | "cart"
  | "account"
  | "signup"
  | "footerLogin"
  | "footerSignup";
