import { Category, Order, Product, SubCategory, User } from "./types";
import images from "../assets/images";

export const INITIAL_USER: User = {
  id: "1",
  img: "",
  name: "Oleksandr",
  lastName: "Popov",
  phone: "+380 (__) ___-__-__",
  email: "",
  birth: "",
};

export const CATEGORIES: Category[] = [
  {
    icon: "apple-whole",
    category: "fruits-vegetables-pickles",
    available: true,
  },
  {
    icon: "drumstick-bite",
    category: "meat",
    available: true,
  },
  {
    icon: "fish",
    category: "fish",
    available: true,
  },
  {
    icon: "cheese",
    category: "cheeses",
    available: true,
  },
  {
    icon: "bread-slice",
    category: "bakery-products",
    available: true,
  },
  {
    icon: "egg",
    category: "milk-eggs",
    available: true,
  },
  {
    icon: "seedling",
    category: "grocery",
    available: true,
  },
  {
    icon: "bottle-droplet",
    category: "sauces-canned",
    available: true,
  },
  {
    icon: "mug-hot",
    category: "tea",
    available: true,
  },
  {
    icon: "bottle-water",
    category: "drinks",
    available: true,
  },
  {
    icon: "leaf",
    category: "garden",
    available: true,
  },
];

export const SUB_CATEGORIES: SubCategory = {
  "fruits-vegetables-pickles": [
    {
      img: "",
      category: "fruits-vegetables-pickles",
      subCategory: "fruits",
      available: true,
    },
    {
      img: "",
      category: "fruits-vegetables-pickles",
      subCategory: "vegetables",
      available: true,
    },
    {
      img: "",
      category: "fruits-vegetables-pickles",
      subCategory: "pickles",
      available: true,
    },
    {
      img: "",
      category: "fruits-vegetables-pickles",
      subCategory: "dried-fruits",
      available: true,
    },
    {
      img: "",
      category: "fruits-vegetables-pickles",
      subCategory: "mushrooms",
      available: true,
    },
    {
      img: "",
      category: "fruits-vegetables-pickles",
      subCategory: "nuts",
      available: true,
    },
  ],
  meat: [
    {
      img: "",
      category: "meat",
      subCategory: "poultry-meat",
      available: true,
    },
    {
      img: "",
      category: "meat",
      subCategory: "pork",
      available: true,
    },
    {
      img: "",
      category: "meat",
      subCategory: "beef-veal",
      available: true,
    },
    {
      img: "",
      category: "meat",
      subCategory: "salo",
      available: true,
    },
    {
      img: "",
      category: "meat",
      subCategory: "rabbit",
      available: true,
    },
    {
      img: "",
      category: "meat",
      subCategory: "lamb",
      available: true,
    },
    {
      img: "",
      category: "meat",
      subCategory: "offal",
      available: true,
    },
  ],
  fish: [
    {
      img: "",
      category: "fish",
      subCategory: "fresh-fish",
      available: true,
    },
    {
      img: "",
      category: "fish",
      subCategory: "smoked-fish",
      available: true,
    },
    {
      img: "",
      category: "fish",
      subCategory: "cancers",
      available: true,
    },
  ],
  cheeses: [
    {
      img: "",
      category: "cheeses",
      subCategory: "semi-hard-cheeses",
      available: true,
    },
    {
      img: "",
      category: "cheeses",
      subCategory: "brined-cheeses",
      available: true,
    },
    {
      img: "",
      category: "cheeses",
      subCategory: "soft-cheeses",
      available: true,
    },
    {
      img: "",
      category: "cheeses",
      subCategory: "processed-cheeses",
      available: true,
    },
    {
      img: "",
      category: "cheeses",
      subCategory: "hard-cheeses",
      available: true,
    },
  ],
  "bakery-products": [
    {
      img: "",
      category: "bakery-products",
      subCategory: "bread",
      available: true,
    },
    {
      img: "",
      category: "bakery-products",
      subCategory: "buns",
      available: true,
    },
    {
      img: "",
      category: "bakery-products",
      subCategory: "croissant-puffs",
      available: true,
    },
    {
      img: "",
      category: "bakery-products",
      subCategory: "pita-cakes-blanks",
      available: true,
    },
    {
      img: "",
      category: "bakery-products",
      subCategory: "drying-breadcrumbs",
      available: true,
    },
  ],
  "milk-eggs": [
    {
      img: "",
      category: "milk-eggs",
      subCategory: "milk-cream",
      available: true,
    },
    {
      img: "",
      category: "milk-eggs",
      subCategory: "yogurts-desserts",
      available: true,
    },
    {
      img: "",
      category: "milk-eggs",
      subCategory: "eggs",
      available: true,
    },
    {
      img: "",
      category: "milk-eggs",
      subCategory: "cottage-cheese",
      available: true,
    },
    {
      img: "",
      category: "milk-eggs",
      subCategory: "sour-cream",
      available: true,
    },
    {
      img: "",
      category: "milk-eggs",
      subCategory: "butter-margarine",
      available: true,
    },
  ],
  grocery: [
    {
      img: "",
      category: "grocery",
      subCategory: "groats",
      available: true,
    },
    {
      img: "",
      category: "grocery",
      subCategory: "pasta",
      available: true,
    },
    {
      img: "",
      category: "grocery",
      subCategory: "oil",
      available: true,
    },
    {
      img: "",
      category: "grocery",
      subCategory: "sugar",
      available: true,
    },
    {
      img: "",
      category: "grocery",
      subCategory: "salt",
      available: true,
    },
    {
      img: "",
      category: "grocery",
      subCategory: "flour",
      available: true,
    },
  ],
  "sauces-canned": [
    {
      img: "",
      category: "sauces-canned",
      subCategory: "sauces",
      available: true,
    },
    {
      img: "",
      category: "sauces-canned",
      subCategory: "seasonings-spices",
      available: true,
    },
    {
      img: "",
      category: "sauces-canned",
      subCategory: "jams-preserves",
      available: true,
    },
    {
      img: "",
      category: "sauces-canned",
      subCategory: "canned-meat",
      available: true,
    },
    {
      img: "",
      category: "sauces-canned",
      subCategory: "canned-fruits",
      available: true,
    },
    {
      img: "",
      category: "sauces-canned",
      subCategory: "honey",
      available: true,
    },
  ],
  tea: [
    {
      img: "",
      category: "tea",
      subCategory: "herbal-tea-compositions",
      available: true,
    },
    {
      img: "",
      category: "tea",
      subCategory: "herbs",
      available: true,
    },
  ],
  drinks: [
    {
      img: "",
      category: "drinks",
      subCategory: "juice",
      available: true,
    },
    {
      img: "",
      category: "drinks",
      subCategory: "kvass",
      available: true,
    },
    {
      img: "",
      category: "drinks",
      subCategory: "compote",
      available: true,
    },
  ],
  garden: [
    {
      img: "",
      category: "garden",
      subCategory: "flowers",
      available: true,
    },
    {
      img: "",
      category: "garden",
      subCategory: "indoor-plants",
      available: true,
    },
    {
      img: "",
      category: "garden",
      subCategory: "bouquets",
      available: true,
    },
    {
      img: "",
      category: "garden",
      subCategory: "seed",
      available: true,
    },
    {
      img: "",
      category: "garden",
      subCategory: "saplings",
      available: true,
    },
    {
      img: "",
      category: "garden",
      subCategory: "flower-pots",
      available: true,
    },
  ],
};

export const PRODUCT: Product = {
  name: "Semerinka",
  price: 20,
  amount: 2,
  amountStep: 1,
  maxAmount: 21,
  img: images.apple,
  measurement: "kg",
  category: "fruits-vegetables-pickles",
  subCategory: "fruits",
  id: "1",
  isAvailable: true,
  rate: 2,
  isFavorite: true,
  seller: "Svitlana Popova",
  details:
    "це плід яблуні, рослини з родини трояндових. " +
    "Воно має круглий або яйцеподібний вигляд і зазвичай має діаметр від 5 до 10 сантиметрів." +
    " Його шкірка може бути різного кольору — від зеленого до жовтого, червоного і навіть темно-фіолетового.",
};

export const PRODUCTS: Product[] = [
  PRODUCT,
  PRODUCT,
  PRODUCT,
  PRODUCT,
  PRODUCT,
  PRODUCT,
  PRODUCT,
  PRODUCT,
  PRODUCT,
  PRODUCT,
  PRODUCT,
];

export const ORDER = {
  id: "id1",
  status: "as",
  date: "19.02.1996",
  delivery: "Delivery",
  price: 100,
  products: PRODUCTS,
};

export const ORDERS: Order[] = [ORDER];

export const FEEDBACK = {
  user: "Alyosha",
  text: "Смачнейші яблука",
  rate: 4,
  id: "1",
};

export const FEEDBACKS = [FEEDBACK];

export const CONTACTS = [
  {
    title: "+38907******",
    icon: "fa-phone",
    btnText: "call",
  },
  {
    title: "kz-patform@gmail.com",
    icon: "fa-envelope",
    btnText: "text us",
  },
  {
    title: "Kozinburg",
    icon: "fa-location-dot",
    btnText: "location",
  },
  {
    title: "Follow us",
    icon: "fa-hand-point-down",
    btnText: "follow",
    socials: true,
  },
];
