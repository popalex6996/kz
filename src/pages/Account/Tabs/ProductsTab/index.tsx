import React from 'react';

import './index.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Button from '../../../../components/Button';
import Spacer from '../../../../components/Spacer';
import { PRODUCTS } from '../../../../utilities/constants';

const ProductsTab = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="user-products-wrapper">
      {!PRODUCTS.length ? (
        <div className="user-no-products-wrapper">
          <Spacer height={30} />
          <h2 className="user-no-products-title">{t('user-no-products')}</h2>
          <Spacer height={30} />
          <Button
            onClick={() => {}}
            className="user-add-products-btn"
            label={t('addProductBtn')}
            icon="circle-plus"
            iconClassName="fa-solid"
          />
          <Spacer height={30} />
        </div>
      ) : (
        <div className="user-products">
          {PRODUCTS?.map((p) => {
            return (
              <div key={p.id + p.name} className="user-product-wrapper">
                <div className="user-product-img">[image]</div>
                <Spacer height={15} />
                <div className="user-product-title">{p.name}</div>
                <Spacer height={15} />
                <div className="user-product-price-buy">
                  <div className="user-product-price">
                    {p.price}
                    {t('grn')}
                  </div>
                  <div className="user-product-btns">
                    <Button
                      onClick={() => {}}
                      icon="trash-can"
                      color="#711d1d"
                      className="user-product-delete-btn"
                      iconClassName="fa-solid"
                    />
                    <Spacer width={10} />
                    <Button
                      onClick={() => {}}
                      icon="pen-to-square"
                      color="#711d1d"
                      className="user-product-edit-btn"
                      iconClassName="fa-solid"
                    />
                  </div>
                </div>
                <Spacer height={10} />
                <div className="product-stat-wrapper">
                  <div className="product-stat">
                    <div className="product-stat-title">Категорія:</div>
                    <Spacer width={5} />
                    <div
                      className="product-stat-value product-stat-category"
                      onClick={() => navigate(`/category/${p.category}`)}
                    >
                      {t(p.category)}
                    </div>
                  </div>
                  <div className="product-stat">
                    <div className="product-stat-title">Підкатегорія:</div>
                    <Spacer width={5} />
                    <div
                      className="product-stat-value product-stat-category"
                      onClick={() =>
                        navigate(`/category/${p.category}/sub-category/${p.subCategory}`)
                      }
                    >
                      {t(p.subCategory)}
                    </div>
                  </div>
                  <div className="product-stat">
                    <div className="product-stat-title">Переглядів товару</div>
                    <Spacer width={5} />
                    <div className="product-stat-value">2</div>
                  </div>
                  <div className="product-stat">
                    <div className="product-stat-title">Додали в список бажань</div>
                    <Spacer width={5} />
                    <div className="product-stat-value">2</div>
                  </div>
                  <div className="product-stat">
                    <div className="product-stat-title">Купили</div>
                    <Spacer width={5} />
                    <div className="product-stat-value">2</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductsTab;
