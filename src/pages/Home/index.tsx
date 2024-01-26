import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import images from "../../assets/images";
import Spacer from "../../components/Spacer";
import { useNavigate } from "react-router-dom";
import ProductsCarousel from "../../components/ProductsCarousel";

type Product = {
  id: string;
  title: string;
  price: number;
  category: string;
  subCategory: string;
  img: string;
  quantity: number;
  isAvailable: boolean;
  rate: number;
  measurement: "kg" | "gramme" | "litres" | "piece";
};

const categories = [
  {
    title: "fruits-vegetables-pickles",
    icon: "apple-whole",
    category: "fruits-vegetables-pickles",
    available: true,
  },
  {
    title: "meat",
    icon: "drumstick-bite",
    category: "meat",
    available: true,
  },
  {
    title: "fish",
    icon: "fish",
    category: "fish",
    available: true,
  },
  {
    title: "cheeses",
    icon: "cheese",
    category: "cheeses",
    available: true,
  },
  {
    title: "bakery-products",
    icon: "bread-slice",
    category: "bakery-products",
    available: true,
  },
  {
    title: "milk-eggs",
    icon: "egg",
    category: "milk-eggs",
    available: true,
  },
  {
    title: "grocery",
    icon: "seedling",
    category: "grocery",
    available: true,
  },
  {
    title: "sauces-canned",
    icon: "bottle-droplet",
    category: "sauces-canned",
    available: true,
  },
  {
    title: "tea",
    icon: "mug-hot",
    category: "tea",
    available: true,
  },
  {
    title: "drinks",
    icon: "bottle-water",
    category: "drinks",
    available: true,
  },
  {
    title: "garden",
    icon: "leaf",
    category: "garden",
    available: true,
  },
];
const products: Product[] = [
  {
    title: "Apple",
    category: "fruits-vegetables-pickles",
    subCategory: "fruits",
    price: 10,
    quantity: 20,
    rate: 4,
    measurement: "kg",
    img: "",
    isAvailable: true,
    id: "1",
  },
  {
    title: "Cherry",
    category: "fruits-vegetables-pickles",
    subCategory: "fruits",
    price: 20,
    quantity: 30,
    rate: 3,
    measurement: "kg",
    img: "",
    isAvailable: true,
    id: "1",
  },
  {
    title: "Hazelnut",
    category: "fruits-vegetables-pickles",
    subCategory: "nuts",
    price: 20,
    quantity: 30,
    rate: 1,
    measurement: "gramme",
    img: "",
    isAvailable: true,
    id: "3",
  },
  {
    title: "Apple2",
    category: "fruits-vegetables-pickles",
    subCategory: "fruits",
    price: 10,
    quantity: 20,
    rate: 4,
    measurement: "kg",
    img: "",
    isAvailable: true,
    id: "1",
  },
  {
    title: "Cherry2",
    category: "fruits-vegetables-pickles",
    subCategory: "fruits",
    price: 20,
    quantity: 30,
    rate: 3,
    measurement: "kg",
    img: "",
    isAvailable: true,
    id: "1",
  },
  {
    title: "Hazelnut2",
    category: "fruits-vegetables-pickles",
    subCategory: "nuts",
    price: 20,
    quantity: 30,
    rate: 1,
    measurement: "gramme",
    img: "",
    isAvailable: true,
    id: "3",
  },
  {
    title: "Apple3",
    category: "fruits-vegetables-pickles",
    subCategory: "fruits",
    price: 10,
    quantity: 20,
    rate: 4,
    measurement: "kg",
    img: "",
    isAvailable: true,
    id: "1",
  },
  {
    title: "Cherry3",
    category: "fruits-vegetables-pickles",
    subCategory: "fruits",
    price: 20,
    quantity: 30,
    rate: 3,
    measurement: "kg",
    img: "",
    isAvailable: true,
    id: "1",
  },
  {
    title: "Hazelnut3",
    category: "fruits-vegetables-pickles",
    subCategory: "nuts",
    price: 20,
    quantity: 30,
    rate: 1,
    measurement: "gramme",
    img: "",
    isAvailable: true,
    id: "3",
  },
];
const viewedProducts: Product[] = [
  {
    title: "Apple",
    category: "fruits-vegetables-pickles",
    subCategory: "fruits",
    price: 10,
    quantity: 20,
    rate: 4,
    measurement: "kg",
    img: "",
    isAvailable: true,
    id: "1",
  },
  {
    title: "Cherry",
    category: "fruits-vegetables-pickles",
    subCategory: "fruits",
    price: 20,
    quantity: 30,
    rate: 3,
    measurement: "kg",
    img: "",
    isAvailable: true,
    id: "1",
  },
  {
    title: "Hazelnut",
    category: "fruits-vegetables-pickles",
    subCategory: "nuts",
    price: 20,
    quantity: 30,
    rate: 1,
    measurement: "gramme",
    img: "",
    isAvailable: true,
    id: "3",
  },
  {
    title: "Apple2",
    category: "fruits-vegetables-pickles",
    subCategory: "fruits",
    price: 10,
    quantity: 20,
    rate: 4,
    measurement: "kg",
    img: "",
    isAvailable: true,
    id: "1",
  },
  {
    title: "Cherry2",
    category: "fruits-vegetables-pickles",
    subCategory: "fruits",
    price: 20,
    quantity: 30,
    rate: 3,
    measurement: "kg",
    img: "",
    isAvailable: true,
    id: "1",
  },
  {
    title: "Hazelnut2",
    category: "fruits-vegetables-pickles",
    subCategory: "nuts",
    price: 20,
    quantity: 30,
    rate: 1,
    measurement: "gramme",
    img: "",
    isAvailable: true,
    id: "3",
  },
  {
    title: "Apple3",
    category: "fruits-vegetables-pickles",
    subCategory: "fruits",
    price: 10,
    quantity: 20,
    rate: 4,
    measurement: "kg",
    img: "",
    isAvailable: true,
    id: "1",
  },
  {
    title: "Cherry3",
    category: "fruits-vegetables-pickles",
    subCategory: "fruits",
    price: 20,
    quantity: 30,
    rate: 3,
    measurement: "kg",
    img: "",
    isAvailable: true,
    id: "1",
  },
  {
    title: "Hazelnut3",
    category: "fruits-vegetables-pickles",
    subCategory: "nuts",
    price: 20,
    quantity: 30,
    rate: 1,
    measurement: "gramme",
    img: "",
    isAvailable: true,
    id: "3",
  },
];
const favouritesProducts: Product[] = [
  {
    title: "Apple",
    category: "fruits-vegetables-pickles",
    subCategory: "fruits",
    price: 10,
    quantity: 20,
    rate: 4,
    measurement: "kg",
    img: "",
    isAvailable: true,
    id: "1",
  },
  {
    title: "Cherry",
    category: "fruits-vegetables-pickles",
    subCategory: "fruits",
    price: 20,
    quantity: 30,
    rate: 3,
    measurement: "kg",
    img: "",
    isAvailable: true,
    id: "1",
  },
  {
    title: "Hazelnut",
    category: "fruits-vegetables-pickles",
    subCategory: "nuts",
    price: 20,
    quantity: 30,
    rate: 1,
    measurement: "gramme",
    img: "",
    isAvailable: true,
    id: "3",
  },
  {
    title: "Apple2",
    category: "fruits-vegetables-pickles",
    subCategory: "fruits",
    price: 10,
    quantity: 20,
    rate: 4,
    measurement: "kg",
    img: "",
    isAvailable: true,
    id: "1",
  },
  {
    title: "Cherry2",
    category: "fruits-vegetables-pickles",
    subCategory: "fruits",
    price: 20,
    quantity: 30,
    rate: 3,
    measurement: "kg",
    img: "",
    isAvailable: true,
    id: "1",
  },
  {
    title: "Hazelnut2",
    category: "fruits-vegetables-pickles",
    subCategory: "nuts",
    price: 20,
    quantity: 30,
    rate: 1,
    measurement: "gramme",
    img: "",
    isAvailable: true,
    id: "3",
  },
  {
    title: "Apple3",
    category: "fruits-vegetables-pickles",
    subCategory: "fruits",
    price: 10,
    quantity: 20,
    rate: 4,
    measurement: "kg",
    img: "",
    isAvailable: true,
    id: "1",
  },
  {
    title: "Cherry3",
    category: "fruits-vegetables-pickles",
    subCategory: "fruits",
    price: 20,
    quantity: 30,
    rate: 3,
    measurement: "kg",
    img: "",
    isAvailable: true,
    id: "1",
  },
  {
    title: "Hazelnut3",
    category: "fruits-vegetables-pickles",
    subCategory: "nuts",
    price: 20,
    quantity: 30,
    rate: 1,
    measurement: "gramme",
    img: "",
    isAvailable: true,
    id: "3",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="home-wrapper">
      <div className="logo-slogan-wrapper">
        <img src={images.logo} alt="logo" className="logo" />
        <h1 className="slogan">{t("slogan")}</h1>
      </div>
      <Spacer height={10} />
      <div className="home-catalog-wrapper">
        {categories.map((c) => (
          <button
            className="home-category"
            onClick={() => navigate(`category/${c.category}`)}
          >
            <i className={`fa-solid fa-${c.icon}`} />
            <Spacer width={5} />
            <span>{t(c.title)}</span>
          </button>
        ))}
      </div>
      <div className="home-carousel">
        <Spacer height={10} />
        <h3 className="home-carousel-title">{t("popularProducts")}</h3>
        <ProductsCarousel products={products} />
      </div>
      {!!viewedProducts.length && (
        <div className="home-carousel">
          <Spacer height={10} />
          <h3 className="home-carousel-title">{t("viewedProducts")}</h3>
          <ProductsCarousel products={viewedProducts} />
        </div>
      )}
      {!!favouritesProducts.length && (
        <div className="home-carousel">
          <Spacer height={10} />
          <h3 className="home-carousel-title">{t("favouritesProducts")}</h3>
          <ProductsCarousel products={favouritesProducts} />
        </div>
      )}
    </div>
  );
};

export default Home;
