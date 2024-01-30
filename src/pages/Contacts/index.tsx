import React from "react";
import "./index.css";
import Spacer from "../../components/Spacer";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button";
import SocialLinks from "../../components/SocialLinks";
import { CONTACTS } from "../../utilities/constants";

const Contacts = () => {
  const { t } = useTranslation();
  return (
    <div className="contacts-wrapper">
      <Spacer height={30} />
      <div className="contacts-page-title-wrapper">
        <h1 className="contacts-page-title">{t("contacts-title")}</h1>
        <Spacer height={20} />
        <h3 className="contacts-page-sub-title">{t("contacts-sub-title")}</h3>
        <Spacer height={20} />
        <div className="contacts-border-line" />
        <Spacer height={20} />
        <h5 className="contacts-page-work-date">{t("work-date")}</h5>
      </div>
      <Spacer height={100} />
      <div className="contacts-details-wrapper">
        {CONTACTS.map(({ title, icon, btnText, socials }) => (
          <div className="contact" key={btnText}>
            <i className={`contact-icon fa-solid ${icon}`}></i>
            <Spacer height={10} />
            <div className="contact-detail">{title}</div>
            <Spacer height={20} />
            {socials ? (
              <SocialLinks color="red" />
            ) : (
              <Button
                className="contact-btn"
                label={t(btnText)}
                onClick={() => {}}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
