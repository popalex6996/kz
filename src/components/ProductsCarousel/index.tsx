import React, { useState } from "react";
import "./index.css";
import Button from "../Button";
import Spacer from "../Spacer";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

type Product = {
  id: string;
  title: string;
  price: number;
  category: string;
  subCategory: string;
  img: string;
  quantity: number;
  isAvailable: boolean;
  rate: number;
  measurement: "kg" | "gramme" | "litres" | "piece";
};
const ProductsCarousel = ({ products }: { products: Product[] }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [slide, setSlide] = useState(0);

  return (
    <div className="carousel">
      <Button
        onClick={() => setSlide((prevState) => --prevState)}
        icon="caret-left"
        iconClassName="fa-solid"
        color="#711d1d"
        className="arrow arrow-left"
        disabled={slide === 0}
      />
      <div className="slides">
        {products.map((p, idx) => {
          return (
            <div
              key={p.title}
              onClick={() => {
                navigate(
                  `/category/${p.category}/sub-category/${p.subCategory}/product/${p.id}`,
                );
              }}
              className={
                idx < slide || idx > slide + 5
                  ? "carousel-product-wrapper carousel-product-wrapper-hidden"
                  : "carousel-product-wrapper"
              }
            >
              <div className="carousel-product-img">[image]</div>
              <div className="stars-rate-wrapper">
                {[...Array(5)].map((s, index) => {
                  return (
                    <div
                      key={p.rate + index}
                      className={
                        p.rate >= index + 1 ? "star active-star" : "star"
                      }
                    >
                      <i className="fa-solid fa-star" />
                    </div>
                  );
                })}
              </div>
              <Spacer height={15} />
              <div className="carousel-product-title">{p.title}</div>
              <Spacer height={15} />
              <div className="carousel-product-price-buy">
                <div className="carousel-product-price">
                  {p.price}
                  {t("grn")}
                </div>
                <Button
                  onClick={() => {}}
                  icon="cart-plus"
                  color="#711d1d"
                  label={t("buy")}
                  className="carousel-product-buy-btn"
                  iconClassName="fa-solid"
                />
              </div>
            </div>
          );
        })}
      </div>
      <Button
        onClick={() => setSlide((prevState) => ++prevState)}
        icon="caret-right"
        iconClassName="fa-solid"
        color="#711d1d"
        className="arrow arrow-right"
        disabled={products.length < slide + 7}
      />
    </div>
  );
};

export default ProductsCarousel;
