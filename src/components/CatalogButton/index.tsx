import "./index.css";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Spacer from "../Spacer";

const catalogMenu = [
  {
    name: "fruits",
    icon: "apple-whole",
    id: "1",
  },
  {
    name: "vegetables",
    icon: "carrot",
    id: "2",
  },
  {
    name: "pickles",
    icon: "jar",
    id: "3",
  },
  {
    name: "meat",
    icon: "drumstick-bite",
    id: "4",
  },
  {
    name: "nuts",
    icon: "bowl-rice",
    id: "5",
  },
  {
    name: "cheese",
    icon: "cheese",
    id: "6",
  },
  {
    name: "bakery products",
    icon: "bread-slice",
    id: "7",
  },
  {
    name: "milk-eggs",
    icon: "egg",
    id: "8",
  },
  {
    name: "sauces",
    icon: "bottle-droplet",
    id: "9",
  },
  {
    name: "tea",
    icon: "seedling",
    id: "10",
  },
  {
    name: "drinks",
    icon: "bottle-water",
    id: "11",
  },
  {
    name: "garden",
    icon: "leaf",
    id: "12",
  },
];
const catalog = {
  fruits: [
    {
      title: "apples",
      img: "",
      availability: true,
    },
    {
      title: "pears",
      img: "",
      availability: true,
    },
    {
      title: "grape",
      img: "",
      availability: true,
    },
    {
      title: "apricots",
      img: "",
      availability: true,
    },
    {
      title: "peaches",
      img: "",
      availability: true,
    },
    {
      title: "strawberry",
      img: "",
      availability: true,
    },
    {
      title: "raspberry",
      img: "",
      availability: true,
    },
    {
      title: "plums",
      img: "",
      availability: true,
    },
    {
      title: "hawthorn",
      img: "",
      availability: true,
    },
    {
      title: "mountain ash",
      img: "",
      availability: true,
    },
  ],
  vegetables: [
    {
      title: "tomatoes",
      img: "",
      availability: true,
    },
    {
      title: "cucumbers",
      img: "",
      availability: true,
    },
    {
      title: "cabbage",
      img: "",
      availability: true,
    },
    {
      title: "potatoes",
      img: "",
      availability: true,
    },
    {
      title: "beets",
      img: "",
      availability: true,
    },
  ],
  pickles: [
    {
      title: "pickled cucumber",
      img: "",
      availability: true,
    },
    {
      title: "honey",
      img: "",
      availability: true,
    },
    {
      title: "jams",
      img: "",
      availability: true,
    },
    {
      title: "pickled tomato",
      img: "",
      availability: true,
    },
    {
      title: "pickled cabbage",
      img: "",
      availability: true,
    },
  ],
  meat: [
    {
      title: "chicken",
      img: "",
      availability: true,
    },
    {
      title: "pork",
      img: "",
      availability: true,
    },
    {
      title: "veal",
      img: "",
      availability: true,
    },
    {
      title: "beef",
      img: "",
      availability: true,
    },
    {
      title: "lamb",
      img: "",
      availability: true,
    },
  ],
  nuts: [
    {
      title: "walnut",
      img: "",
      availability: true,
    },
    {
      title: "hazelnut",
      img: "",
      availability: true,
    },
    {
      title: "chickpeas",
      img: "",
      availability: true,
    },
  ],
  cheese: [
    {
      title: "parmesan",
      img: "",
      availability: true,
    },
    {
      title: "cheddar",
      img: "",
      availability: true,
    },
    {
      title: "mozzarella",
      img: "",
      availability: true,
    },
  ],
  "bakery products": [
    {
      title: "bread",
      img: "",
      availability: true,
    },
    {
      title: "cupcake",
      img: "",
      availability: true,
    },
    {
      title: "loaf",
      img: "",
      availability: true,
    },
    {
      title: "baguette",
      img: "",
      availability: true,
    },
    {
      title: "biscuits",
      img: "",
      availability: true,
    },
  ],
  "milk-eggs": [
    {
      title: "eggs",
      img: "",
      availability: true,
    },
    {
      title: "milk",
      img: "",
      availability: true,
    },
    {
      title: "cottage cheese",
      img: "",
      availability: true,
    },
    {
      title: "yogurt",
      img: "",
      availability: true,
    },
  ],
  sauces: [
    {
      title: "tkemali",
      img: "",
      availability: true,
    },
    {
      title: "ketchup",
      img: "",
      availability: true,
    },
    {
      title: "mayonnaise",
      img: "",
      availability: true,
    },
    {
      title: "adjika",
      img: "",
      availability: true,
    },
  ],
  tea: [
    {
      title: "black tea",
      img: "",
      availability: true,
    },
    {
      title: "green tea",
      img: "",
      availability: true,
    },
    {
      title: "herbage tea",
      img: "",
      availability: true,
    },
  ],
  drinks: [
    {
      title: "camisole",
      img: "",
      availability: true,
    },
    {
      title: "lemonade",
      img: "",
      availability: true,
    },
    {
      title: "juices",
      img: "",
      availability: true,
    },
    {
      title: "kvass",
      img: "",
      availability: true,
    },
  ],
  garden: [
    { title: "flowers", img: "", availability: true },
    { title: "flower pots", img: "", availability: true },
    {
      title: "goods for garden and vegetable garden",
      img: "",
      availability: true,
    },
    {
      title: "indoor plants",
      img: "",
      availability: true,
    },
  ],
};

const CatalogButton = () => {
  const { t } = useTranslation();

  const [category, setCategory] = useState("fruits");

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
            {catalogMenu.map((p) => (
              <button
                key={p.id}
                onClick={() => setCategory(p.name)}
                className={
                  category === p.name
                    ? "catalog-menu-active-button"
                    : "catalog-menu-button"
                }
              >
                <div className="icon-wrapper">
                  <i className={`fa-solid fa-${p.icon}`} />
                </div>
                <Spacer width={5} />
                <span className="category-name">{t(p.name)}</span>
              </button>
            ))}
          </div>
          <div className="catalog-content">
            <div className="category-name-title">{t(category)}</div>
            <Spacer height={10} />
            <div className="product-variety-cards">
              {catalog[category as keyof typeof catalog].map((cp) => (
                <div className="product-variety-card">
                  <span>{t(cp.title)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogButton;
