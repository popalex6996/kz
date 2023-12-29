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
    name: "bread",
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
                <span className="category-name">{t([p.name])}</span>
              </button>
            ))}
          </div>
          <div className="catalog-content">{category}</div>
        </div>
      </div>
    </div>
  );
};

export default CatalogButton;
