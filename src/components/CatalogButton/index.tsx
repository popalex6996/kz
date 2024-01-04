import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Spacer from "../Spacer";
import "./index.css";

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
const subCategories = {
  "fruits-vegetables-pickles": [
    {
      title: "fruits",
      img: "",
      category: "fruits-vegetables-pickles",
      subCategory: "fruits",
      available: true,
    },
    {
      title: "vegetables",
      img: "",
      category: "fruits-vegetables-pickles",
      subCategory: "vegetables",
      available: true,
    },
    {
      title: "pickles",
      img: "",
      category: "fruits-vegetables-pickles",
      subCategory: "pickles",
      available: true,
    },
    {
      title: "dried fruits",
      img: "",
      category: "fruits-vegetables-pickles",
      subCategory: "dried-fruits",
      available: true,
    },
    {
      title: "mushrooms",
      img: "",
      category: "fruits-vegetables-pickles",
      subCategory: "mushrooms",
      available: true,
    },
    {
      title: "nuts",
      img: "",
      category: "fruits-vegetables-pickles",
      subCategory: "nuts",
      available: true,
    },
  ],
  meat: [
    {
      title: "poultry meat",
      img: "",
      category: "meat",
      subCategory: "poultry-meat",
      available: true,
    },
    {
      title: "pork",
      img: "",
      category: "meat",
      subCategory: "pork",
      available: true,
    },
    {
      title: "beef and veal",
      img: "",
      category: "meat",
      subCategory: "beef-veal",
      available: true,
    },
    {
      title: "salo",
      img: "",
      category: "meat",
      subCategory: "salo",
      available: true,
    },
    {
      title: "rabbit",
      img: "",
      category: "meat",
      subCategory: "rabbit",
      available: true,
    },
    {
      title: "lamb",
      img: "",
      category: "meat",
      subCategory: "lamb",
      available: true,
    },
    {
      title: "offal",
      img: "",
      category: "meat",
      subCategory: "offal",
      available: true,
    },
  ],
  fish: [
    {
      title: "fresh fish",
      img: "",
      category: "fish",
      subCategory: "fresh-fish",
      available: true,
    },
    {
      title: "smoked fish",
      img: "",
      category: "fish",
      subCategory: "smoked-fish",
      available: true,
    },
    {
      title: "cancers",
      img: "",
      category: "fish",
      subCategory: "cancers",
      available: true,
    },
  ],
  cheeses: [
    {
      title: "semi-hard cheeses",
      img: "",
      category: "cheeses",
      subCategory: "semi-hard-cheeses",
      available: true,
    },
    {
      title: "brined cheeses",
      img: "",
      category: "cheeses",
      subCategory: "brined-cheeses",
      available: true,
    },
    {
      title: "soft cheeses",
      img: "",
      category: "cheeses",
      subCategory: "soft-cheeses",
      available: true,
    },
    {
      title: "processed cheeses",
      img: "",
      category: "cheeses",
      subCategory: "processed-cheeses",
      available: true,
    },
    {
      title: "hard cheeses",
      img: "",
      category: "cheeses",
      subCategory: "hard-cheeses",
      available: true,
    },
  ],
  "bakery-products": [
    {
      title: "bread",
      img: "",
      category: "bakery-products",
      subCategory: "bread",
      available: true,
    },
    {
      title: "buns",
      img: "",
      category: "bakery-products",
      subCategory: "buns",
      available: true,
    },
    {
      title: "croissant puffs",
      img: "",
      category: "bakery-products",
      subCategory: "croissant-puffs",
      available: true,
    },
    {
      title: "pita cakes and blanks",
      img: "",
      category: "bakery-products",
      subCategory: "pita-cakes-blanks",
      available: true,
    },
    {
      title: "drying and breadcrumbs",
      img: "",
      category: "bakery-products",
      subCategory: "drying-breadcrumbs",
      available: true,
    },
  ],
  "milk-eggs": [
    {
      title: "milk cream",
      img: "",
      category: "milk-eggs",
      subCategory: "milk-cream",
      available: true,
    },
    {
      title: "yogurts desserts",
      img: "",
      category: "milk-eggs",
      subCategory: "yogurts-desserts",
      available: true,
    },
    {
      title: "eggs",
      img: "",
      category: "milk-eggs",
      subCategory: "eggs",
      available: true,
    },
    {
      title: "cottage cheese",
      img: "",
      category: "milk-eggs",
      subCategory: "cottage-cheese",
      available: true,
    },
    {
      title: "sour cream",
      img: "",
      category: "milk-eggs",
      subCategory: "sour-cream",
      available: true,
    },
    {
      title: "butter margarine",
      img: "",
      category: "milk-eggs",
      subCategory: "butter-margarine",
      available: true,
    },
  ],
  grocery: [
    {
      title: "groats",
      img: "",
      category: "grocery",
      subCategory: "groats",
      available: true,
    },
    {
      title: "pasta",
      img: "",
      category: "grocery",
      subCategory: "pasta",
      available: true,
    },
    {
      title: "oil",
      img: "",
      category: "grocery",
      subCategory: "oil",
      available: true,
    },
    {
      title: "sugar",
      img: "",
      category: "grocery",
      subCategory: "sugar",
      available: true,
    },
    {
      title: "salt",
      img: "",
      category: "grocery",
      subCategory: "salt",
      available: true,
    },
    {
      title: "flour",
      img: "",
      category: "grocery",
      subCategory: "flour",
      available: true,
    },
  ],
  "sauces-canned": [
    {
      title: "sauces",
      img: "",
      category: "sauces-canned",
      subCategory: "sauces",
      available: true,
    },
    {
      title: "seasonings spices",
      img: "",
      category: "sauces-canned",
      subCategory: "seasonings-spices",
      available: true,
    },
    {
      title: "jams preserves",
      img: "",
      category: "sauces-canned",
      subCategory: "jams-preserves",
      available: true,
    },
    {
      title: "canned meat",
      img: "",
      category: "sauces-canned",
      subCategory: "canned-meat",
      available: true,
    },
    {
      title: "canned fruits",
      img: "",
      category: "sauces-canned",
      subCategory: "canned-fruits",
      available: true,
    },
    {
      title: "honey",
      img: "",
      category: "sauces-canned",
      subCategory: "honey",
      available: true,
    },
  ],
  tea: [
    {
      title: "herbal tea compositions",
      img: "",
      category: "tea",
      subCategory: "herbal-tea-compositions",
      available: true,
    },
    {
      title: "herbs",
      img: "",
      category: "tea",
      subCategory: "herbs",
      available: true,
    },
  ],
  drinks: [
    {
      title: "juice",
      img: "",
      category: "drinks",
      subCategory: "juice",
      available: true,
    },
    {
      title: "kvass",
      img: "",
      category: "drinks",
      subCategory: "kvass",
      available: true,
    },
    {
      title: "compote",
      img: "",
      category: "drinks",
      subCategory: "compote",
      available: true,
    },
  ],
  garden: [
    {
      title: "flowers",
      img: "",
      category: "garden",
      subCategory: "flowers",
      available: true,
    },
    {
      title: "indoor plants",
      img: "",
      category: "garden",
      subCategory: "indoor-plants",
      available: true,
    },
    {
      title: "bouquets",
      img: "",
      category: "garden",
      subCategory: "bouquets",
      available: true,
    },
    {
      title: "seed",
      img: "",
      category: "garden",
      subCategory: "seed",
      available: true,
    },
    {
      title: "saplings",
      img: "",
      category: "garden",
      subCategory: "saplings",
      available: true,
    },
    {
      title: "flower pots",
      img: "",
      category: "garden",
      subCategory: "flower-pots",
      available: true,
    },
  ],
};

const CatalogButton = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [category, setCategory] = useState("fruits-vegetables-pickles");

  const onOpen = () => {
    const catalogShadow = document.getElementById("catalog-shadow");
    catalogShadow?.classList.toggle("catalog-shadow-visible");
    const cart = document.getElementById("catalog");
    cart?.classList.toggle("catalog-open");
  };

  const onClose = () => {
    const catalogShadow = document.getElementById("catalog-shadow");
    catalogShadow?.classList.remove("catalog-shadow-visible");
    const cart = document.getElementById("catalog");
    cart?.classList.remove("catalog-open");
  };

  return (
    <div className="catalog-button-wrapper">
      <button onClick={onOpen} className="catalog-button">
        <i className="fa-solid fa-store" />
        <Spacer width={5} />
        <span>{t("allProducts")}</span>
        <Spacer width={5} />
        <i className="fa-solid fa-chevron-down"></i>
      </button>
      <div id="catalog-shadow" className="catalog-shadow" onClick={onClose}>
        <div
          id="catalog"
          className="catalog"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="catalog-menu">
            {categories.map((p) => (
              <button
                key={p.category}
                onClick={() => setCategory(p.category)}
                className={
                  category === p.category
                    ? "catalog-menu-active-button"
                    : "catalog-menu-button"
                }
              >
                <div className="icon-wrapper">
                  <i className={`fa-solid fa-${p.icon}`} />
                </div>
                <Spacer width={5} />
                <span className="category-name">{t(p.title)}</span>
              </button>
            ))}
          </div>
          <div className="catalog-content">
            <div className="category-name-title">{t(category)}</div>
            <Spacer height={10} />
            <div className="product-variety-cards">
              {subCategories[category as keyof typeof subCategories].map(
                (cp) => (
                  <div
                    className="product-variety-card"
                    onClick={() =>
                      navigate(
                        `category/${cp.category}/sub-category/:${cp.subCategory}`,
                      )
                    }
                  >
                    <span>{t(cp.title)}</span>
                  </div>
                ),
              )}
              <div
                className="product-variety-card"
                onClick={() => navigate(`category/${category}`)}
              >
                <span>{t("lookAtAll")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogButton;
