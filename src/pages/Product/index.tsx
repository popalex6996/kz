import React, { ChangeEvent, useState } from "react";
import "./index.css";
import Spacer from "../../components/Spacer";
import Button from "../../components/Button";
import { useTranslation } from "react-i18next";
import ImageCarousel from "../../components/ImageCarousel ";
import images from "../../assets/images/index";

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

const initialUser = {
  img: "",
  name: "Oleksandr",
  secondName: "",
  id: "1",
};

const initialFeedback = {
  user: "Alyosha",
  text: "Смачнейші яблука",
  rate: 4,
  id: "1",
};

const feedbacks = [
  initialFeedback,
  initialFeedback,
  initialFeedback,
  initialFeedback,
  initialFeedback,
  initialFeedback,
];

const imagesCarousel = [
  { src: images.apple, title: "apple" },
  { src: images.apple2, title: "apple2" },
  { src: images.apple3, title: "apple3" },
];

const Product = () => {
  const { t } = useTranslation();
  const [isVisibleDetails, setDetails] = useState(false);
  const [feedbackForm, setFeedbackForm] = useState(false);
  const [feedback, setFeedback] = useState("");

  return (
    <div className="product-wrapper">
      <div className="product-image-details-wrapper">
        <div className="product-image-wrapper">
          <ImageCarousel images={imagesCarousel} />
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
      <Spacer height={30} />
      <div className="feedback-title">
        <div className="feedback-title-text">Відгуки</div>
        {!feedbackForm && !!feedbacks.length && (
          <Button
            onClick={() => setFeedbackForm(true)}
            label={t("commentBtn")}
            color="white"
            icon="comment-medical"
            iconClassName="fa-solid"
            className="mini-left-feedback-btn"
          />
        )}
      </div>
      <Spacer height={5} />
      <div className="feedback-wrapper">
        {!!feedbacks.length ? (
          feedbacks.map((f) => {
            return (
              <div key={f.id} className="feedback">
                <div className="feedback-user-avatar-wrapper">
                  <div className="feedback-user-avatar">[User Image]</div>
                </div>
                <Spacer width={10} />
                <div className="feedback-details">
                  <div className="feedback-user">{f.user}</div>
                  <Spacer height={5} />
                  <div className="feedback-rate">
                    <div className="stars-rate-wrapper">
                      {[...Array(5)].map((s, index) => {
                        return (
                          <div
                            key={f.rate + index}
                            className={
                              f.rate >= index + 1 ? "star active-star" : "star"
                            }
                          >
                            <i className="fa-solid fa-star" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <Spacer height={10} />
                  <div className="feedback-text">{f.text}</div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-feedback">{t("no-feedback")}</div>
        )}
      </div>
      <Spacer height={5} />
      {!feedbackForm && (
        <Button
          onClick={() => setFeedbackForm(true)}
          label={t("commentBtn")}
          color="white"
          icon="comment-medical"
          iconClassName="fa-solid"
          className="left-feedback-btn"
        />
      )}
      <Spacer height={5} />
      {feedbackForm && (
        <div className="feedback  user-feedback-wrapper">
          <div className="feedback-user-avatar-wrapper">
            <div className="user-feedback-user-avatar">
              [Current User Image]
            </div>
          </div>
          <Spacer width={10} />
          <div className="feedback-details">
            <div className="user-feedback-user">{initialUser.name}</div>
            <Spacer height={5} />
            <div className="feedback-rate">
              <div className="stars-rate-wrapper">
                {[...Array(5)].map((s, index) => {
                  return (
                    <div
                      key={index}
                      className={0 >= index + 1 ? "star active-star" : "star"}
                    >
                      <i className="fa-solid fa-star" />
                    </div>
                  );
                })}
              </div>
            </div>
            <Spacer height={10} />
            <textarea
              id="user-feedback"
              className="user-feedback"
              autoFocus={true}
              placeholder="Type here..."
              value={feedback}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                setFeedback(event.target.value);
              }}
            />
            <Spacer height={10} />
            <div className="feedback-btns">
              <Button
                onClick={() => setFeedbackForm(true)}
                label={t("send-feedback")}
                color="white"
                icon="comment-medical"
                iconClassName="fa-solid"
                className="send-feedback-btn"
              />
              <Button
                onClick={() => {
                  setFeedbackForm(false);
                  setFeedback("");
                }}
                label={t("cancel")}
                color="white"
                icon="ban"
                iconClassName="fa-solid"
                className="send-feedback-btn"
              />
            </div>
          </div>
        </div>
      )}
      <Spacer height={20} />
    </div>
  );
};

export default Product;
