import "./index.css";
import { useState } from "react";
import Button from "../Button";
import { useTranslation } from "react-i18next";
import Spacer from "../Spacer";

type Product = {
  name: string;
  price: number;
  amount: number;
  img: string;
  measurement: "kg" | "gramme" | "litres" | "piece";
};

const cart: Product[] = [
  {
    name: "Semerinka",
    price: 20,
    amount: 4,
    img: "",
    measurement: "kg",
  },
  {
    name: "Cherry",
    price: 30,
    amount: 1.4,
    img: "",
    measurement: "kg",
  },
  {
    name: "Milk",
    price: 10,
    amount: 1,
    img: "",
    measurement: "litres",
  },
  {
    name: "Pickled cucumber",
    price: 15,
    amount: 1,
    img: "",
    measurement: "piece",
  },
  {
    name: "Hazelnut",
    price: 40,
    amount: 0.1,
    img: "",
    measurement: "gramme",
  },
  {
    name: "Semerinka",
    price: 20,
    amount: 4,
    img: "",
    measurement: "kg",
  },
  {
    name: "Cherry",
    price: 30,
    amount: 1.4,
    img: "",
    measurement: "kg",
  },
  {
    name: "Milk",
    price: 10,
    amount: 1,
    img: "",
    measurement: "litres",
  },
  {
    name: "Pickled cucumber",
    price: 15,
    amount: 1,
    img: "",
    measurement: "piece",
  },
  {
    name: "Hazelnut",
    price: 40,
    amount: 0.1,
    img: "",
    measurement: "gramme",
  },
  {
    name: "Semerinka",
    price: 20,
    amount: 4,
    img: "",
    measurement: "kg",
  },
  {
    name: "Cherry",
    price: 30,
    amount: 1.4,
    img: "",
    measurement: "kg",
  },
  {
    name: "Milk",
    price: 10,
    amount: 1,
    img: "",
    measurement: "litres",
  },
  {
    name: "Pickled cucumber",
    price: 15,
    amount: 1,
    img: "",
    measurement: "piece",
  },
  {
    name: "Hazelnut",
    price: 40,
    amount: 0.1,
    img: "",
    measurement: "gramme",
  },
  {
    name: "Semerinka",
    price: 20,
    amount: 4,
    img: "",
    measurement: "kg",
  },
  {
    name: "Cherry",
    price: 30,
    amount: 1.4,
    img: "",
    measurement: "kg",
  },
  {
    name: "Milk",
    price: 10,
    amount: 1,
    img: "",
    measurement: "litres",
  },
  {
    name: "Pickled cucumber",
    price: 15,
    amount: 1,
    img: "",
    measurement: "piece",
  },
  {
    name: "Hazelnut",
    price: 40,
    amount: 0.1,
    img: "",
    measurement: "gramme",
  },
];

const CartButton = () => {
  const { t } = useTranslation();

  const [isOpen, setCartOpen] = useState(false);

  const onOpen = () => {
    setCartOpen(true);
    // @ts-ignore
    const cart = document.getElementById("cart");
    cart?.classList.toggle("cart-open");
  };

  const onClose = () => {
    setCartOpen(false);
    // @ts-ignore
    const cart = document.getElementById("cart");
    cart?.classList.remove("cart-open");
  };

  return (
    <div className="cart-button-wrapper">
      <Button icon="cart-shopping" onClick={onOpen} />
      <div className={` ${isOpen && "cart-shadow"}`} onClick={onClose}>
        <div id="cart" className="cart" onClick={(e) => e.stopPropagation()}>
          <Button
            icon="cart-shopping"
            onClick={onClose}
            className="cart-close"
          />
          <div className="cart-button-content">
            <div className="cart-button-content-title">{t("cart")}</div>
            <div className="cart-button-content-products">
              {cart.map((p) => {
                return (
                  <div className="cart-button-product-card">
                    <div className="cart-button-product-details-wrapper">
                      <span>img</span>
                      <Spacer width={15} />
                      <div className="cart-button-product-details">
                        <span className="cart-button-product-name">
                          {p.name}
                        </span>
                        <div className="cart-button-amount-buttons">
                          <Button
                            onClick={() => {}}
                            icon="plus"
                            color="#711d1d"
                            className="cart-button-amount-button"
                          />
                          <Spacer width={5} />
                          <span className="cart-button-amount">
                            {" "}
                            {p.amount}
                          </span>
                          <Spacer width={5} />
                          <Button
                            onClick={() => {}}
                            icon="minus"
                            color="#711d1d"
                            className="cart-button-amount-button"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="cart-button-product-details2">
                      <span className="cart-button-product-name">
                        {p.price * p.amount}grn
                      </span>
                      <Spacer width={10} />
                      <Button onClick={() => {}} icon="trash" color="#711d1d" />
                    </div>
                  </div>
                );
              })}
            </div>
            <Spacer height={20} />
            <div className="total-wrapper">
              <span className="total">
                {cart.reduce((sum, i) => sum + i.price * i.amount, 0)}
                grn
              </span>
              <Spacer width={20} />
              <Button
                onClick={() => {}}
                label="Оформити"
                color="711d1d"
                className="but-button"
              />
            </div>
            <Spacer height={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartButton;
