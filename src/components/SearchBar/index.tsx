import "./index.css";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../Button";
import Icon from "../Icon";

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
        <Icon name="search" width={16} height={16} />
      </div>
      <input
        type="search"
        className="search-input"
        placeholder={t("searchPlaceholder")}
        value={searchInput}
        onChange={handleChange}
        onKeyUp={onKeyUp}
      />
      <Button
        label={t("searchBtn")}
        className="search-btn"
        disabled={!searchInput}
        onClick={onClick}
      />
    </div>
  );
};

export default SearchBar;
