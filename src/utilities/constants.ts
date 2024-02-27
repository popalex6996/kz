import {
  Category,
  Feedback,
  Order,
  Product,
  SubCategories,
  SubCategory,
  User,
} from "./types";
import images from "../assets/images";

export const MENU_LINKS = [
  {
    link: "home",
    icon: "fa-house",
  },
  {
    link: "account",
    icon: "fa-user",
  },
  {
    link: "cart",
    icon: "fa-cart-shopping",
  },
  {
    link: "platform",
    icon: "fa-shop",
  },
  {
    link: "payment",
    icon: "fa-money-check-dollar",
  },
  {
    link: "exchange",
    icon: "fa-arrow-right-arrow-left",
  },
  {
    link: "contacts",
    icon: "fa-square-phone-flip",
  },
];

export const INITIAL_USER: User = {
  id: "",
  image: "",
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
    available: false,
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

export const SUB_CATEGORIES: SubCategories = {
  "fruits-vegetables-pickles": [
    {
      image: "",
      category: "fruits-vegetables-pickles",
      subCategory: "fruits",
      available: true,
    },
    {
      image: "",
      category: "fruits-vegetables-pickles",
      subCategory: "vegetables",
      available: false,
    },
    {
      image: "",
      category: "fruits-vegetables-pickles",
      subCategory: "pickles",
      available: true,
    },
    {
      image: "",
      category: "fruits-vegetables-pickles",
      subCategory: "dried-fruits",
      available: true,
    },
    {
      image: "",
      category: "fruits-vegetables-pickles",
      subCategory: "mushrooms",
      available: true,
    },
    {
      image: "",
      category: "fruits-vegetables-pickles",
      subCategory: "nuts",
      available: true,
    },
  ],
  meat: [
    {
      image: "",
      category: "meat",
      subCategory: "poultry-meat",
      available: true,
    },
    {
      image: "",
      category: "meat",
      subCategory: "pork",
      available: true,
    },
    {
      image: "",
      category: "meat",
      subCategory: "beef-veal",
      available: true,
    },
    {
      image: "",
      category: "meat",
      subCategory: "salo",
      available: true,
    },
    {
      image: "",
      category: "meat",
      subCategory: "rabbit",
      available: true,
    },
    {
      image: "",
      category: "meat",
      subCategory: "lamb",
      available: true,
    },
    {
      image: "",
      category: "meat",
      subCategory: "offal",
      available: true,
    },
  ],
  fish: [
    {
      image: "",
      category: "fish",
      subCategory: "fresh-fish",
      available: true,
    },
    {
      image: "",
      category: "fish",
      subCategory: "smoked-fish",
      available: true,
    },
    {
      image: "",
      category: "fish",
      subCategory: "cancers",
      available: true,
    },
  ],
  cheeses: [
    {
      image: "",
      category: "cheeses",
      subCategory: "semi-hard-cheeses",
      available: true,
    },
    {
      image: "",
      category: "cheeses",
      subCategory: "brined-cheeses",
      available: true,
    },
    {
      image: "",
      category: "cheeses",
      subCategory: "soft-cheeses",
      available: true,
    },
    {
      image: "",
      category: "cheeses",
      subCategory: "processed-cheeses",
      available: true,
    },
    {
      image: "",
      category: "cheeses",
      subCategory: "hard-cheeses",
      available: true,
    },
  ],
  "bakery-products": [
    {
      image: "",
      category: "bakery-products",
      subCategory: "bread",
      available: true,
    },
    {
      image: "",
      category: "bakery-products",
      subCategory: "buns",
      available: true,
    },
    {
      image: "",
      category: "bakery-products",
      subCategory: "croissant-puffs",
      available: true,
    },
    {
      image: "",
      category: "bakery-products",
      subCategory: "pita-cakes-blanks",
      available: true,
    },
    {
      image: "",
      category: "bakery-products",
      subCategory: "drying-breadcrumbs",
      available: true,
    },
  ],
  "milk-eggs": [
    {
      image: "",
      category: "milk-eggs",
      subCategory: "milk-cream",
      available: true,
    },
    {
      image: "",
      category: "milk-eggs",
      subCategory: "yogurts-desserts",
      available: true,
    },
    {
      image: "",
      category: "milk-eggs",
      subCategory: "eggs",
      available: true,
    },
    {
      image: "",
      category: "milk-eggs",
      subCategory: "cottage-cheese",
      available: true,
    },
    {
      image: "",
      category: "milk-eggs",
      subCategory: "sour-cream",
      available: true,
    },
    {
      image: "",
      category: "milk-eggs",
      subCategory: "butter-margarine",
      available: true,
    },
  ],
  grocery: [
    {
      image: "",
      category: "grocery",
      subCategory: "groats",
      available: true,
    },
    {
      image: "",
      category: "grocery",
      subCategory: "pasta",
      available: true,
    },
    {
      image: "",
      category: "grocery",
      subCategory: "oil",
      available: true,
    },
    {
      image: "",
      category: "grocery",
      subCategory: "sugar",
      available: true,
    },
    {
      image: "",
      category: "grocery",
      subCategory: "salt",
      available: true,
    },
    {
      image: "",
      category: "grocery",
      subCategory: "flour",
      available: true,
    },
  ],
  "sauces-canned": [
    {
      image: "",
      category: "sauces-canned",
      subCategory: "sauces",
      available: true,
    },
    {
      image: "",
      category: "sauces-canned",
      subCategory: "seasonings-spices",
      available: true,
    },
    {
      image: "",
      category: "sauces-canned",
      subCategory: "jams-preserves",
      available: true,
    },
    {
      image: "",
      category: "sauces-canned",
      subCategory: "canned-meat",
      available: true,
    },
    {
      image: "",
      category: "sauces-canned",
      subCategory: "canned-fruits",
      available: true,
    },
    {
      image: "",
      category: "sauces-canned",
      subCategory: "honey",
      available: true,
    },
  ],
  tea: [
    {
      image: "",
      category: "tea",
      subCategory: "herbal-tea-compositions",
      available: true,
    },
    {
      image: "",
      category: "tea",
      subCategory: "herbs",
      available: true,
    },
  ],
  drinks: [
    {
      image: "",
      category: "drinks",
      subCategory: "juice",
      available: true,
    },
    {
      image: "",
      category: "drinks",
      subCategory: "kvass",
      available: true,
    },
    {
      image: "",
      category: "drinks",
      subCategory: "compote",
      available: true,
    },
  ],
  garden: [
    {
      image: "",
      category: "garden",
      subCategory: "flowers",
      available: true,
    },
    {
      image: "",
      category: "garden",
      subCategory: "indoor-plants",
      available: true,
    },
    {
      image: "",
      category: "garden",
      subCategory: "bouquets",
      available: true,
    },
    {
      image: "",
      category: "garden",
      subCategory: "seed",
      available: true,
    },
    {
      image: "",
      category: "garden",
      subCategory: "saplings",
      available: true,
    },
    {
      image: "",
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
  image: images.apple,
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

export const FEEDBACK: Feedback = {
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
