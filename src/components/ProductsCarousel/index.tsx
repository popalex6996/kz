import React, { useState } from "react";
import "./index.css";
import Button from "../Button";
import { Product } from "../../utilities/types";
import ProductCard from "../ProductCard";

const ProductsCarousel = ({ products }: { products: Product[] }) => {
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
        {products.map((product, index) => (
          <ProductCard
            product={product}
            hide={index < slide || index > slide + 4}
          />
        ))}
      </div>
      <Button
        onClick={() => setSlide((prevState) => ++prevState)}
        icon="caret-right"
        iconClassName="fa-solid"
        color="#711d1d"
        className="arrow arrow-right"
        disabled={products.length < slide + 8}
      />
    </div>
  );
};

export default ProductsCarousel;
