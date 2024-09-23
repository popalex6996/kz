import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import images from "../../assets/images";
import Spacer from "../../components/Spacer";
import { useNavigate } from "react-router-dom";
import ProductsCarousel from "../../components/ProductsCarousel";
import { CATEGORIES, INITIAL_USER, PRODUCTS } from "../../utilities/constants";
import { Category } from "../../utilities/types";

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="home-wrapper">
      <div className="logo-slogan-wrapper">
        <img src={images.redLogo} alt="logo" className="home-logo" />
        <h1 className="slogan">{t("slogan")}</h1>
      </div>
      <Spacer height={10} />
      <div className="home-catalog-wrapper">
        {CATEGORIES.map(({ category, icon }: Category) => (
          <button
            key={category}
            className="home-category"
            onClick={() => navigate(`category/${category}`)}
          >
            <i className={`fa-solid fa-${icon}`} />
            <Spacer width={5} />
            <span>{t(category)}</span>
          </button>
        ))}
      </div>
      <Spacer height={10} />
      <div className="home-season-banner">
        Медовий місяць вже стартонув! Мершій перетвори його на рік :) [банер]
      </div>
      <div className="home-carousel">
        <Spacer height={10} />
        <h3 className="home-carousel-title">{t("popularProducts")}</h3>
        <ProductsCarousel products={PRODUCTS} />
      </div>
      <Spacer height={10} />
      {!!PRODUCTS.length && (
        <div className="home-carousel">
          <Spacer height={10} />
          <h3 className="home-carousel-title">{t("viewedProducts")}</h3>
          <ProductsCarousel products={PRODUCTS} />
        </div>
      )}
      {!!PRODUCTS.length && INITIAL_USER.id && (
        <div className="home-carousel">
          <Spacer height={10} />
          <h3 className="home-carousel-title">{t("favouritesProducts")}</h3>
          <ProductsCarousel products={PRODUCTS} />
        </div>
      )}
    </div>
  );
};

export default Home;
