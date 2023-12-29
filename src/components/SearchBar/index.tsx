import "./index.css";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../Button";

const SearchBar = () => {
  const { t } = useTranslation();

  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e: any) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const onClick = () => {
    console.log("onClick");
  };
  const onKeyUp = (e: any) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      onClick();
    }
  };

  return (
    <div className="search-wrapper">
      <div className="search-icon">
        <i className="fa-solid fa-magnifying-glass" />
      </div>
      <input
        type="search"
        className="search-input"
        placeholder={t("searchPlaceholder")}
        value={searchInput}
        onChange={handleChange}
        onKeyUp={onKeyUp}
      />
      <Button label={t("searchBtn")} className="search-btn" onClick={onClick} />
    </div>
  );
};

export default SearchBar;
