import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import Spacer from "../../components/Spacer";
import images from "../../assets/images";
import Button from "../../components/Button";

const Platform = () => {
  const { t } = useTranslation();

  const openCatalog = () => {
    const catalogShadow = document.getElementById("catalog-shadow");
    catalogShadow?.classList.toggle("catalog-shadow-visible");
    const cart = document.getElementById("catalog");
    cart?.classList.toggle("catalog-open");
  };

  return (
    <div className="platform-wrapper">
      <div className="platform-wrapper-background" />
      <div className="name-block">
        <div className="platform-background" />
        <Spacer height={100} />
        <h1 className="platform-name">{t("platformName")}</h1>
        <Spacer height={80} />
        <span className="platform-description">{t("platformDescription")}</span>
        <Spacer height={80} />
        <Button
          onClick={openCatalog}
          className="catalog-btn"
          label={t("store")}
          iconClassName="fa-solid"
        />
        <Spacer height={150} />
      </div>
      <div className="about-platform-wrapper">
        <Spacer height={50} />
        <h3 className="platform-features">{t("platformFeatures")}</h3>
        <div className="platform-features-wrapper">
          <div className="platform-feature">
            <div className="platform-feature-icon-wrapper">
              <img src={images.platformFeature_1} alt="feature" />
            </div>
            <span className="platform-feature-description">
              {t("platform-feature-1")}
            </span>
          </div>
          <div className="platform-feature">
            <div className="platform-feature-icon-wrapper">
              <img src={images.platformFeature_2} alt="feature" />
            </div>
            <span className="platform-feature-description">
              {t("platform-feature-2")}
            </span>
          </div>
          <div className="platform-feature">
            <div className="platform-feature-icon-wrapper">
              <img src={images.platformFeature_3} alt="feature" />
            </div>
            <span className="platform-feature-description">
              {t("platform-feature-3")}
            </span>
          </div>
        </div>
        <Spacer height={70} />
        <div className="about-platform">
          <div className="about-platform-text-wrpper">
            <h3 className="about-platform-title">{t("aboutPlatform")}</h3>
            <Spacer height={30} />
            <span>{t("aboutPlatformText1")}</span>
            <Spacer height={20} />
            <span>{t("aboutPlatformText2")}</span>
            <Spacer height={20} />
            <span>{t("aboutPlatformText3")}</span>
          </div>
          <div className="about-platform-logo-wrapper">
            <div className="about-platform-logo">Logo</div>
          </div>
        </div>
        <Spacer height={50} />
      </div>
    </div>
  );
};

export default Platform;
