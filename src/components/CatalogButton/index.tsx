import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Spacer from "../Spacer";
import "./index.css";
import Button from "../Button";
import { CATEGORIES, SUB_CATEGORIES } from "../../utilities/constants";

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
            {CATEGORIES.map((p) => (
              <button
                key={p.category}
                onClick={() => {
                  if (category === p.category) {
                    onClose();
                    navigate(`category/${category}`);
                  } else {
                    setCategory(p.category);
                  }
                }}
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
                <span className="category-name">{t(p.category)}</span>
              </button>
            ))}
          </div>
          <div className="catalog-content">
            <div className="category-name-title-close">
              <span className="category-name-title">{t(category)}</span>
              <Button
                onClick={onClose}
                icon="xmark"
                iconClassName="fa-solid"
                color="#711d1d"
                className="catalog-close-btn"
              />
            </div>
            <Spacer height={10} />
            <div className="product-variety-cards">
              {SUB_CATEGORIES[category as keyof typeof SUB_CATEGORIES].map(
                (cp) => (
                  <div
                    key={cp.subCategory}
                    className="product-variety-card"
                    onClick={() => {
                      onClose();
                      navigate(
                        `category/${cp.category}/sub-category/${cp.subCategory}`,
                      );
                    }}
                  >
                    <span>{t(cp.subCategory)}</span>
                  </div>
                ),
              )}
              <div
                className="product-variety-card"
                onClick={() => {
                  onClose();
                  navigate(`category/${category}`);
                }}
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
