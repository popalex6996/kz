import React, { useState } from "react";
import "./index.css";
import Spacer from "../Spacer";
import { INITIAL_USER } from "../../utilities/constants";
import { useTranslation } from "react-i18next";

interface PersonalDataFormProps {
  noDate?: boolean;
}

const PersonalDataForm: React.FC<PersonalDataFormProps> = ({
  noDate = false,
}) => {
  const { t } = useTranslation();
  const [userData, setUserData] = useState(INITIAL_USER);

  return (
    <div className="personal-data-form">
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
          <label htmlFor="user-last-name" className="account-input-label">
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
      <Spacer height={20} />
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
      {!noDate && <Spacer height={20} />}
      {!noDate && (
        <div className="personal-data-form-row">
          <div className="personal-data-input-wrapper">
            <label htmlFor="user-birth" className="account-input-label">
              {t("birthPlaceholder")}
            </label>
            <input
              id="user-birth"
              className="account-input"
              type="date"
              required
              value={userData.birth}
              onChange={(event) =>
                setUserData({ ...userData, birth: event.target.value })
              }
            />
          </div>
          <Spacer width={20} />
        </div>
      )}
    </div>
  );
};
export default PersonalDataForm;
