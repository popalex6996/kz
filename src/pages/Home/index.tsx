import React from 'react';

import './index.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import redLogo from '../../assets/images/logo-red.png';
import ProductsCarousel from '../../components/ProductsCarousel';
import Spacer from '../../components/Spacer';
import { useAuth } from '../../hooks/useAuth';
import { CATEGORIES, PRODUCTS } from '../../utilities/constants';
import { Category } from '../../utilities/types';

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isAuth } = useAuth();

  return (
    <div className="home-wrapper">
      <div className="logo-slogan-wrapper">
        <img src={redLogo} alt="logo" className="home-logo" />
        <h1 className="slogan">{t('slogan')}</h1>
      </div>
      <Spacer height={10} />
      <div className="home-catalog-wrapper">
        {CATEGORIES.map(({ name, icon }: Category) => (
          <button
            key={name}
            className="home-category"
            onClick={() => navigate(`/category/${name}`)}
          >
            <i className={`fa-solid fa-${icon}`} />
            <Spacer width={5} />
            <span>{t(name)}</span>
          </button>
        ))}
      </div>
      <Spacer height={10} />
      <div className="home-season-banner">
        Медовий місяць вже стартонув! Мершій перетвори його на рік :) [банер]
      </div>
      <div className="home-carousel">
        <Spacer height={10} />
        <h3 className="home-carousel-title">{t('popularProducts')}</h3>
        <ProductsCarousel products={PRODUCTS} />
      </div>
      <Spacer height={10} />
      {!!PRODUCTS.length && (
        <div className="home-carousel">
          <Spacer height={10} />
          <h3 className="home-carousel-title">{t('viewedProducts')}</h3>
          <ProductsCarousel products={PRODUCTS} />
        </div>
      )}
      {!!PRODUCTS.length && isAuth && (
        <div className="home-carousel">
          <Spacer height={10} />
          <h3 className="home-carousel-title">{t('favouritesProducts')}</h3>
          <ProductsCarousel products={PRODUCTS} />
        </div>
      )}
    </div>
  );
};

export default Home;
