import { AccountTabType, Category, Feedback, Order, Product, SubCategories, User } from './types';
import apple from '../assets/images/apple.png';

export const MENU_LINKS = [
  {
    link: 'home',
    icon: 'fa-house',
  },
  {
    link: 'account/personal-data',
    icon: 'fa-user',
  },
  {
    link: 'cart',
    icon: 'fa-cart-shopping',
  },
  {
    link: 'platform',
    icon: 'fa-shop',
  },
  {
    link: 'payment',
    icon: 'fa-money-check-dollar',
  },
  {
    link: 'exchange',
    icon: 'fa-arrow-right-arrow-left',
  },
  {
    link: 'contacts',
    icon: 'fa-square-phone-flip',
  },
];

export const INITIAL_USER: User = {
  id: '',
  image: '',
  name: 'Oleksandr',
  lastName: 'Popov',
  phone: '+380 (__) ___-__-__',
  email: '',
  birth: '',
};

export const CATEGORIES: Category[] = [
  {
    icon: 'apple-whole',
    name: 'fruits-vegetables-pickles',
    available: true,
  },
  {
    icon: 'drumstick-bite',
    name: 'meat',
    available: true,
  },
  {
    icon: 'fish',
    name: 'fish',
    available: true,
  },
  {
    icon: 'cheese',
    name: 'cheeses',
    available: true,
  },
  {
    icon: 'bread-slice',
    name: 'bakery-products',
    available: true,
  },
  {
    icon: 'egg',
    name: 'milk-eggs',
    available: true,
  },
  {
    icon: 'seedling',
    name: 'grocery',
    available: false,
  },
  {
    icon: 'bottle-droplet',
    name: 'sauces-canned',
    available: true,
  },
  {
    icon: 'mug-hot',
    name: 'tea',
    available: true,
  },
  {
    icon: 'bottle-water',
    name: 'drinks',
    available: true,
  },
  {
    icon: 'leaf',
    name: 'garden',
    available: true,
  },
  {
    icon: 'basket-shopping',
    name: 'other',
    available: true,
  },
];

export const SUB_CATEGORIES: SubCategories = {
  'fruits-vegetables-pickles': [
    {
      image: '',
      category: 'fruits-vegetables-pickles',
      name: 'fruits',
      available: true,
    },
    {
      image: '',
      category: 'fruits-vegetables-pickles',
      name: 'vegetables',
      available: false,
    },
    {
      image: '',
      category: 'fruits-vegetables-pickles',
      name: 'pickles',
      available: true,
    },
    {
      image: '',
      category: 'fruits-vegetables-pickles',
      name: 'dried-fruits',
      available: true,
    },
    {
      image: '',
      category: 'fruits-vegetables-pickles',
      name: 'mushrooms',
      available: true,
    },
    {
      image: '',
      category: 'fruits-vegetables-pickles',
      name: 'nuts',
      available: true,
    },
  ],
  meat: [
    {
      image: '',
      category: 'meat',
      name: 'poultry-meat',
      available: true,
    },
    {
      image: '',
      category: 'meat',
      name: 'pork',
      available: true,
    },
    {
      image: '',
      category: 'meat',
      name: 'beef-veal',
      available: true,
    },
    {
      image: '',
      category: 'meat',
      name: 'salo',
      available: true,
    },
    {
      image: '',
      category: 'meat',
      name: 'rabbit',
      available: true,
    },
    {
      image: '',
      category: 'meat',
      name: 'lamb',
      available: true,
    },
    {
      image: '',
      category: 'meat',
      name: 'offal',
      available: true,
    },
  ],
  fish: [
    {
      image: '',
      category: 'fish',
      name: 'fresh-fish',
      available: true,
    },
    {
      image: '',
      category: 'fish',
      name: 'smoked-fish',
      available: true,
    },
    {
      image: '',
      category: 'fish',
      name: 'cancers',
      available: true,
    },
  ],
  cheeses: [
    {
      image: '',
      category: 'cheeses',
      name: 'semi-hard-cheeses',
      available: true,
    },
    {
      image: '',
      category: 'cheeses',
      name: 'brined-cheeses',
      available: true,
    },
    {
      image: '',
      category: 'cheeses',
      name: 'soft-cheeses',
      available: true,
    },
    {
      image: '',
      category: 'cheeses',
      name: 'processed-cheeses',
      available: true,
    },
    {
      image: '',
      category: 'cheeses',
      name: 'hard-cheeses',
      available: true,
    },
  ],
  'bakery-products': [
    {
      image: '',
      category: 'bakery-products',
      name: 'bread',
      available: true,
    },
    {
      image: '',
      category: 'bakery-products',
      name: 'buns',
      available: true,
    },
    {
      image: '',
      category: 'bakery-products',
      name: 'croissant-puffs',
      available: true,
    },
    {
      image: '',
      category: 'bakery-products',
      name: 'pita-cakes-blanks',
      available: true,
    },
    {
      image: '',
      category: 'bakery-products',
      name: 'drying-breadcrumbs',
      available: true,
    },
  ],
  'milk-eggs': [
    {
      image: '',
      category: 'milk-eggs',
      name: 'milk-cream',
      available: true,
    },
    {
      image: '',
      category: 'milk-eggs',
      name: 'yogurts-desserts',
      available: true,
    },
    {
      image: '',
      category: 'milk-eggs',
      name: 'eggs',
      available: true,
    },
    {
      image: '',
      category: 'milk-eggs',
      name: 'cottage-cheese',
      available: true,
    },
    {
      image: '',
      category: 'milk-eggs',
      name: 'sour-cream',
      available: true,
    },
    {
      image: '',
      category: 'milk-eggs',
      name: 'butter-margarine',
      available: true,
    },
  ],
  grocery: [
    {
      image: '',
      category: 'grocery',
      name: 'groats',
      available: true,
    },
    {
      image: '',
      category: 'grocery',
      name: 'pasta',
      available: true,
    },
    {
      image: '',
      category: 'grocery',
      name: 'oil',
      available: true,
    },
    {
      image: '',
      category: 'grocery',
      name: 'sugar',
      available: true,
    },
    {
      image: '',
      category: 'grocery',
      name: 'salt',
      available: true,
    },
    {
      image: '',
      category: 'grocery',
      name: 'flour',
      available: true,
    },
  ],
  'sauces-canned': [
    {
      image: '',
      category: 'sauces-canned',
      name: 'sauces',
      available: true,
    },
    {
      image: '',
      category: 'sauces-canned',
      name: 'seasonings-spices',
      available: true,
    },
    {
      image: '',
      category: 'sauces-canned',
      name: 'jams-preserves',
      available: true,
    },
    {
      image: '',
      category: 'sauces-canned',
      name: 'canned-meat',
      available: true,
    },
    {
      image: '',
      category: 'sauces-canned',
      name: 'canned-fruits',
      available: true,
    },
    {
      image: '',
      category: 'sauces-canned',
      name: 'honey',
      available: true,
    },
  ],
  tea: [
    {
      image: '',
      category: 'tea',
      name: 'herbal-tea-compositions',
      available: true,
    },
    {
      image: '',
      category: 'tea',
      name: 'herbs',
      available: true,
    },
  ],
  drinks: [
    {
      image: '',
      category: 'drinks',
      name: 'juice',
      available: true,
    },
    {
      image: '',
      category: 'drinks',
      name: 'kvass',
      available: true,
    },
    {
      image: '',
      category: 'drinks',
      name: 'compote',
      available: true,
    },
  ],
  garden: [
    {
      image: '',
      category: 'garden',
      name: 'flowers',
      available: true,
    },
    {
      image: '',
      category: 'garden',
      name: 'indoor-plants',
      available: true,
    },
    {
      image: '',
      category: 'garden',
      name: 'bouquets',
      available: true,
    },
    {
      image: '',
      category: 'garden',
      name: 'seed',
      available: true,
    },
    {
      image: '',
      category: 'garden',
      name: 'saplings',
      available: true,
    },
    {
      image: '',
      category: 'garden',
      name: 'flower-pots',
      available: true,
    },
  ],
  other: [],
};

export const PRODUCT: Product = {
  name: 'Semerinka',
  price: 20,
  amount: 2,
  amountStep: 1,
  maxAmount: 21,
  image: apple,
  measurement: 'kg',
  category: 'fruits-vegetables-pickles',
  subCategory: 'fruits',
  id: '1',
  isAvailable: true,
  rate: 2,
  isFavorite: true,
  seller: 'Svitlana Popova',
  details:
    'це плід яблуні, рослини з родини трояндових. ' +
    'Воно має круглий або яйцеподібний вигляд і зазвичай має діаметр від 5 до 10 сантиметрів.' +
    ' Його шкірка може бути різного кольору — від зеленого до жовтого, червоного і навіть темно-фіолетового.',
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
  id: 'id1',
  status: 'as',
  date: '19.02.1996',
  delivery: 'Delivery',
  price: 100,
  products: PRODUCTS,
};

export const ORDERS: Order[] = [ORDER];

export const FEEDBACK: Feedback = {
  user: 'Alyosha',
  text: 'Смачнейші яблука',
  rate: 4,
  id: '1',
};

export const FEEDBACKS = [FEEDBACK];

export const CONTACTS = [
  {
    title: '+38907******',
    icon: 'fa-phone',
    btnText: 'call',
  },
  {
    title: 'kz-patform@gmail.com',
    icon: 'fa-envelope',
    btnText: 'text us',
  },
  {
    title: 'Kozinburg',
    icon: 'fa-location-dot',
    btnText: 'location',
  },
  {
    title: 'Follow us',
    icon: 'fa-hand-point-down',
    btnText: 'follow',
    socials: true,
  },
];

export const ACCOUNT_TABS: { name: AccountTabType; icon: string }[] = [
  {
    name: 'personal-data',
    icon: 'user',
  },
  {
    name: 'favourites',
    icon: 'heart',
  },
  {
    name: 'cart',
    icon: 'shopping-cart',
  },
  {
    name: 'orders',
    icon: 'receipt',
  },
  {
    name: 'my-products',
    icon: 'hand-holding-dollar',
  },
  {
    name: 'add-product',
    icon: 'circle-plus',
  },
];
