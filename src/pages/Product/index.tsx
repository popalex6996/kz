import React, { useState } from "react";
import "./index.css";
import Spacer from "../../components/Spacer";
import Button from "../../components/Button";
import { useTranslation } from "react-i18next";

const product = {
  title: "Apple",
  category: "fruits-vegetables-pickles",
  subCategory: "fruits",
  price: 10,
  quantity: 20,
  rate: 4,
  measurement: "kg",
  img: "",
  isAvailable: true,
  isFavorite: false,
  id: "1",
  seller: "Svitlana Popova",
  details:
    "це плід яблуні, рослини з родини трояндових. " +
    "Воно має круглий або яйцеподібний вигляд і зазвичай має діаметр від 5 до 10 сантиметрів." +
    " Його шкірка може бути різного кольору — від зеленого до жовтого, червоного і навіть темно-фіолетового.",
};

const Product = () => {
  const { t } = useTranslation();
  const [isVisibleDetails, setDetails] = useState(false);
  return (
    <div className="product-wrapper">
      <div className="product-image-details-wrapper">
        <div className="product-image-wrapper">
          <div className="product-image">[product image]</div>
        </div>
        <div className="product-details-wrapper">
          <div className="product-name-wrapper">
            <div className="product-name">{product.title}</div>
            <div className="favorite-btn-wrapper">
              <Button
                onClick={() => {}}
                icon="heart"
                color="#711d1d"
                iconClassName={product.isFavorite ? "fa-solid" : "fa-regular"}
              />
            </div>
          </div>
          <Spacer height={5} />
          <div className="stars-rate-wrapper">
            {[...Array(5)].map((s, index) => {
              return (
                <div
                  key={product.rate + index}
                  className={
                    product.rate >= index + 1 ? "star active-star" : "star"
                  }
                >
                  <i className="fa-solid fa-star" />
                </div>
              );
            })}
          </div>
          <Spacer height={20} />
          <div className="product-seller">
            <span className="seller-label">{t("seller")}:</span>
            <Button
              onClick={() => {}}
              label={product.seller}
              color="#711d1d"
              icon="up-right-from-square"
              iconClassName="fa-solid"
              className="seller-name-btn"
            />
          </div>
          <Spacer height={20} />
          <div className="product-details">
            <div className="details-label">
              {t("product-details")}:
              {product.details.length > 170 && (
                <i
                  className={
                    isVisibleDetails
                      ? "fa-solid fa-chevron-up more-text"
                      : "fa-solid fa-chevron-down more-text"
                  }
                  onClick={() => setDetails(!isVisibleDetails)}
                />
              )}
            </div>
            <span
              className={
                isVisibleDetails
                  ? "details-text opened-details"
                  : "details-text"
              }
            >
              {product.details}
            </span>
          </div>
          <Spacer height={20} />
          <div className="product-price-buy">
            <div className="product-price">
              {product.price}
              {t("grn")}
            </div>
            <Button
              onClick={() => {}}
              icon="cart-plus"
              color="#711d1d"
              label={t("buy")}
              className="product-buy-btn"
              iconClassName="fa-solid"
            />
          </div>
          <Spacer height={10} />
        </div>
      </div>
    </div>
  );
};

export default Product;
