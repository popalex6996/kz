import React, { useEffect, useState } from "react";
import "./index.css";
import Button from "../Button";
import { Product } from "../../utilities/types";
import ProductCard from "../ProductCard";

const PRODUCT_CARD_WIDTH = 200;

const ProductsCarousel = ({ products }: { products: Product[] }) => {
  const [slide, setSlide] = useState(0);

  const [slidesToDisplay, setSlides] = useState(1);

  const handleResize = () => {
    const slidesEl = document.getElementById("slides");
    if (slidesEl) {
      setSlides(Math.floor(slidesEl.offsetWidth / PRODUCT_CARD_WIDTH) - 1 || 1);
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <div id="slides" className="slides">
        {products.map((product, index) => (
          <ProductCard
            key={product.name + index}
            product={product}
            hide={index < slide || index > slide + slidesToDisplay - 1}
          />
        ))}
      </div>
      <Button
        onClick={() => setSlide((prevState) => ++prevState)}
        icon="caret-right"
        iconClassName="fa-solid"
        color="#711d1d"
        className="arrow arrow-right"
        disabled={products.length - 1 < slide + slidesToDisplay}
      />
    </div>
  );
};

export default ProductsCarousel;
