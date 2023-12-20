import "./index.css";
import Icon from "../Icon/Icon";
import { useState } from "react";
import Button from "../Button/Button";

const SearchBar = () => {
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
        placeholder="Я шукаю..."
        value={searchInput}
        onChange={handleChange}
        onKeyUp={onKeyUp}
      />
      <Button
        label="Знайти"
        className="search-btn"
        disabled={!searchInput}
        onClick={onClick}
      />
    </div>
  );
};

export default SearchBar;
