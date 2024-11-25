import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Product } from '../../utilities/types';
import './index.css';
import Button from '../Button';
import NumberInput from '../NumberInput';
import Spacer from '../Spacer';
import StarsRate from '../StarsRate';

interface ProductCardProps {
  product: Product;
  hide?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, hide = false }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [value, setValue] = useState(0);
  return (
    <div
      className={hide ? 'hide-product-card' : 'product-card'}
      onClick={() => {
        navigate(
          `/category/${product.category}/sub-category/${product.subCategory}/product/${product.id}`,
        );
      }}
    >
      <div className="favourite-btn-wrapper">
        <Button
          onClick={() => {}}
          icon="heart"
          iconClassName={product.isFavorite ? 'fa-solid' : 'fa-regular'}
          className="favourite-btn"
        />
      </div>
      <div className="product-card-img-wrapper">
        <img src={product.image} alt={product.name} className="product-card-img" />
      </div>
      <Spacer height={15} />
      <div className="product-card-title">{product.name}</div>
      <Spacer height={15} />
      <StarsRate rate={product.rate} />
      <Spacer height={15} />
      <div className="product-card-price-buy">
        <div className="product-card-price">
          {product.price}
          {t('grn')} ({product.amountStep}
          {t(product.measurement)})
        </div>
        {value ? (
          <NumberInput
            amount={product.amount}
            maxAmount={product.maxAmount}
            step={product.amountStep}
            measurement={product.measurement}
          />
        ) : (
          <Button
            onClick={() => setValue((prevState) => ++prevState)}
            icon="cart-plus"
            color="#711d1d"
            className="product-card-buy-btn"
            iconClassName="fa-solid"
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
