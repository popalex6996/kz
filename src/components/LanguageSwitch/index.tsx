import "./index.css";
import { useTranslation } from "react-i18next";

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  return (
    <div className="lang-switch-wrapper">
      <button
        className={i18n.language ? "lang-btn active" : "lang-btn"}
        onClick={() => i18n.changeLanguage("ua")}
      >
        UA
      </button>
      <span>|</span>
      <button
        className={i18n.language ? "lang-btn active" : "lang-btn"}
        onClick={() => i18n.changeLanguage("en")}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitch;
