import React from 'react';

import './index.css';
import { useTranslation } from 'react-i18next';

import Button from '../../../../components/Button';
import ProductCard from '../../../../components/ProductCard';
import Spacer from '../../../../components/Spacer';
import { PRODUCTS } from '../../../../utilities/constants';

const FavouritesTab = () => {
  const { t } = useTranslation();

  const toggleCatalog = () => {
    const catalogShadow = document.getElementById('catalog-shadow');
    catalogShadow?.classList.toggle('catalog-shadow-visible');
    const cart = document.getElementById('catalog');
    cart?.classList.toggle('catalog-open');
  };

  return (
    <div className="favourites-wrapper">
      {!PRODUCTS.length ? (
        <div className="no-favourites-wrapper">
          <Spacer height={30} />
          <h2 className="no-favourites-title">{t('user-no-favourites')}</h2>
          <Spacer height={30} />
          <Button
            onClick={toggleCatalog}
            className="user-add-products-btn"
            label={t('store')}
            icon="circle-plus"
            iconClassName="fa-solid"
          />
          <Spacer height={30} />
        </div>
      ) : (
        <div className="favourites">
          {PRODUCTS.map((product, index) => (
            <ProductCard product={product} key={product.name + index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavouritesTab;
