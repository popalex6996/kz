import "./index.css";
import React, { useState } from "react";
import { Product } from "../../utilities/types";
import Button from "../Button";
import Spacer from "../Spacer";
import CartProducts from "../CartProducts";
import { useTranslation } from "react-i18next";

interface ExpandableCartProductsProps {
  products: Product[];
}

const ExpandableCartProducts: React.FC<ExpandableCartProductsProps> = ({
  products,
}) => {
  const { t } = useTranslation();
  const [isExpanded, setExpanded] = useState<boolean>(true);
  return (
    <div className="expandable-cart-products-wrapper">
      <div
        className="stage-title-collapse-bnt"
        onClick={() => setExpanded((prevState) => !prevState)}
      >
        <h2 className="stage-title">
          {t("selected-products")} ({products.length})
        </h2>
        <Button
          onClick={() => setExpanded((prevState) => !prevState)}
          icon={isExpanded ? "chevron-up" : "chevron-down"}
          iconClassName="fa-solid"
          className="products-collapse-btn"
        />
      </div>
      {isExpanded && <Spacer height={10} />}
      {isExpanded && <CartProducts products={products} />}
    </div>
  );
};

export default ExpandableCartProducts;
