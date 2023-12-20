import React from "react";
import Hamburger from "../Hamburger";
import "./index.css";
import SearchBar from "../SearchBar";
import Cart from "../Cart";
import Index from "../Account";
import Spacer from "../Spacer";
import LanguageSwitch from "../LanguageSwitch";

const Header: React.FC = () => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <Hamburger />
        <SearchBar />
        <div className="settings-bar">
          <LanguageSwitch />
          <Spacer width={15} />
          <Cart />
          <Spacer width={15} />
          <Index />
        </div>
      </div>
    </div>
  );
};

export default Header;
