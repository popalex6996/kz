import React, { useState } from "react";
import "./index.css";
import Spacer from "../../components/Spacer";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { INITIAL_USER, ORDERS, PRODUCTS } from "../../utilities/constants";

const tabs = [
  {
    name: "personal-data",
    icon: "user",
  },
  {
    name: "my-products",
    icon: "hand-holding-dollar",
  },
  {
    name: "orders",
    icon: "receipt",
  },
  {
    name: "favourites",
    icon: "heart",
  },
  {
    name: "logout",
    icon: "right-from-bracket",
    onClick: () => {},
  },
];

const Account = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const [activeTab, setTab] = useState("personal-data");

  const [userData, setUserData] = useState(INITIAL_USER);

  const [orderDetails, setDetails] = useState(false);

  const onCatalogOpen = () => {
    // @ts-ignore
    const catalogShadow = document.getElementById("catalog-shadow");
    catalogShadow?.classList.toggle("catalog-shadow-visible");
    const cart = document.getElementById("catalog");
    cart?.classList.toggle("catalog-open");
  };

  return (
    <div className="account-wrapper">
      <div className="account-menu">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => (tab.onClick ? tab.onClick() : setTab(tab.name))}
            className={
              activeTab === tab.name
                ? "account-menu-active-button"
                : "account-menu-button"
            }
          >
            <div className="account-menu-icon-wrapper">
              <i className={`fa-solid fa-${tab.icon}`} />
            </div>
            <Spacer width={5} />
            <span className="account-menu-tab-name">{t(tab.name)}</span>
          </button>
        ))}
      </div>
      <Spacer width={20} />
      <div className="account-content">
        {activeTab === "personal-data" && (
          <div className="personal-data-wrapper">
            <div className="personal-data-avatar-wrapper">avatar</div>
            <Spacer width={20} />
            <div className="personal-data-inputs-wrapper">
              <div className="personal-data-form-row">
                <div className="personal-data-input-wrapper">
                  <label htmlFor="user-name" className="account-input-label">
                    {t("namePlaceholder")}
                  </label>
                  <input
                    id="user-name"
                    className="account-input"
                    type="text"
                    required
                    value={userData.name}
                    onChange={(event) =>
                      setUserData({ ...userData, name: event.target.value })
                    }
                  />
                </div>
                <Spacer width={20} />
                <div className="personal-data-input-wrapper">
                  <label
                    htmlFor="user-last-name"
                    className="account-input-label"
                  >
                    {t("lastNamePlaceholder")}
                  </label>
                  <input
                    id="user-last-name"
                    className="account-input"
                    type="text"
                    required
                    value={userData.lastName}
                    onChange={(event) =>
                      setUserData({ ...userData, lastName: event.target.value })
                    }
                  />
                </div>
              </div>
              <div className="personal-data-form-row">
                <div className="personal-data-input-wrapper">
                  <label htmlFor="user-phone" className="account-input-label">
                    {t("phonePlaceholder")}
                  </label>
                  <input
                    id="user-phone"
                    className="account-input"
                    type="tel"
                    required
                  />
                </div>
                <Spacer width={20} />
                <div className="personal-data-input-wrapper">
                  <label htmlFor="user-email" className="account-input-label">
                    {t("emailPlaceholder")}
                  </label>
                  <input
                    id="user-email"
                    className="account-input"
                    type="email"
                    required
                    value={userData.email}
                    onChange={(event) =>
                      setUserData({ ...userData, email: event.target.value })
                    }
                  />
                </div>
              </div>
              <div className="personal-data-form-row">
                <div className="personal-data-date-input-wrapper">
                  <label htmlFor="user-birth" className="account-input-label">
                    {t("birthPlaceholder")}
                  </label>
                  <input
                    id="user-birth"
                    className="account-date-input"
                    type="date"
                    required
                    value={userData.birth}
                    onChange={(event) =>
                      setUserData({ ...userData, birth: event.target.value })
                    }
                  />
                </div>
              </div>
              <div className="personal-data-save-btn-wrapper">
                <Button
                  onClick={() => {}}
                  className="personal-data-save-btn"
                  label={t("saveBtn")}
                  color="#711d1d"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "my-products" && (
          <div className="user-products-wrapper">
            {!PRODUCTS.length ? (
              <div className="user-no-products-wrapper">
                <Spacer height={30} />
                <h2 className="user-no-products-title">
                  {t("user-no-products")}
                </h2>
                <Spacer height={30} />
                <Button
                  onClick={() => {}}
                  className="user-add-products-btn"
                  label={t("addProductBtn")}
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
                          {t("grn")}
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
                          <div className="product-stat-title">
                            Підкатегорія:
                          </div>
                          <Spacer width={5} />
                          <div
                            className="product-stat-value product-stat-category"
                            onClick={() =>
                              navigate(
                                `/category/${p.category}/sub-category/${p.subCategory}`,
                              )
                            }
                          >
                            {t(p.subCategory)}
                          </div>
                        </div>
                        <div className="product-stat">
                          <div className="product-stat-title">
                            Переглядів товару
                          </div>
                          <Spacer width={5} />
                          <div className="product-stat-value">2</div>
                        </div>
                        <div className="product-stat">
                          <div className="product-stat-title">
                            Додали в список бажань
                          </div>
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
        )}

        {activeTab === "orders" && (
          <div className="orders-wrapper">
            {!ORDERS.length ? (
              <div className="no-orders-wrapper">
                <Spacer height={30} />
                <h2 className="no-orders-title">{t("user-no-orders")}</h2>
                <Spacer height={30} />
                <Button
                  onClick={onCatalogOpen}
                  className="user-add-products-btn"
                  label={t("store")}
                  icon="cart-plus"
                  iconClassName="fa-solid"
                />
                <Spacer height={30} />
              </div>
            ) : (
              <div className="orders">
                {ORDERS.map((o) => (
                  <div className="order-wrapper" key={o.id}>
                    <div className="order-details">
                      <div className="order-id-date">
                        {t("Order")}:{" "}
                        <span className="order-value">{o.id}</span> -{" "}
                        <span className="order-value">{o.date}</span>
                      </div>
                      <div className="order-status">
                        {t("status")}:{" "}
                        <span className="order-value">{o.status}</span>
                      </div>
                      <div className="order-price">
                        {t("price")}:{" "}
                        <span className="order-value">{o.price}</span>
                      </div>
                      <div className="chevron-more">
                        <Button
                          onClick={() => setDetails((prevState) => !prevState)}
                          label={
                            orderDetails
                              ? t("hideDetailsBtn")
                              : t("moreDetailsBtn")
                          }
                          icon={orderDetails ? "chevron-up" : "chevron-down"}
                          iconClassName="fa-solid"
                          className="order-details-btn"
                        />
                      </div>
                    </div>
                    {orderDetails && <Spacer height={20} />}
                    {orderDetails && (
                      <div className="order-details">
                        <div className="order-products">
                          {o.products.map((op) => (
                            <div className="order-product-wrapper" key={op.id}>
                              <div>image</div>
                              <Spacer width={20} />
                              <div>
                                {op.name} - {op.price}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="order-delivery">
                          {t("delivery")}:{" "}
                          <span className="order-value">{o.delivery}</span>
                        </div>
                      </div>
                    )}
                    {orderDetails && <Spacer height={20} />}
                    {orderDetails && (
                      <div className="order-details">
                        <Button
                          onClick={() => {}}
                          icon="circle-exclamation"
                          label={t("problemReportBtn")}
                          className="problem-btn order-details-btn"
                          iconClassName="fa-solid"
                        />
                        <Button
                          onClick={() => {}}
                          icon="rotate"
                          label={t("buyMoreBtn")}
                          className="buy-again-btn order-details-btn"
                          iconClassName="fa-solid"
                        />
                        <Button
                          onClick={() => {}}
                          icon="comment"
                          label={t("commentBtn")}
                          className="comment-btn order-details-btn"
                          iconClassName="fa-solid"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "favourites" && (
          <div className="favourites-wrapper">
            {!PRODUCTS.length ? (
              <div className="no-favourites-wrapper">
                <Spacer height={30} />
                <h2 className="no-favourites-title">
                  {t("user-no-favourites")}
                </h2>
                <Spacer height={30} />
                <Button
                  onClick={onCatalogOpen}
                  className="user-add-products-btn"
                  label={t("store")}
                  icon="circle-plus"
                  iconClassName="fa-solid"
                />
                <Spacer height={30} />
              </div>
            ) : (
              <div className="favourites">
                {PRODUCTS.map((f) => {
                  return (
                    <div
                      key={f.id + f.name}
                      className="favourites-product-wrapper"
                      onClick={() => {
                        navigate(
                          `/category/${f.category}/sub-category/${f.subCategory}/product/${f.id}`,
                        );
                      }}
                    >
                      <div className="favourite-img">[image]</div>
                      <div className="favourite-stars-rate-wrapper">
                        {[...Array(5)].map((s, index) => {
                          return (
                            <div
                              key={f.rate + index}
                              className={
                                f.rate >= index + 1
                                  ? "star active-star"
                                  : "star"
                              }
                            >
                              <i className="fa-solid fa-star" />
                            </div>
                          );
                        })}
                      </div>
                      <Spacer height={15} />
                      <div className="favourite-product-title">{f.name}</div>
                      <Spacer height={15} />
                      <div className="favourite-product-price-buy">
                        <div className="favourite-product-price">
                          {f.price}
                          {t("grn")}
                        </div>
                        <Button
                          onClick={() => {}}
                          icon="heart"
                          color="#711d1d"
                          label={t("removeBtn")}
                          className="favourite-product-heart-btn"
                          iconClassName="fa-solid"
                        />
                      </div>
                      <Spacer height={10} />
                      <Button
                        onClick={() => {}}
                        icon="cart-plus"
                        color="#711d1d"
                        label={t("buy")}
                        className="favourite-product-buy-btn"
                        iconClassName="fa-solid"
                      />
                      <Spacer height={10} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
