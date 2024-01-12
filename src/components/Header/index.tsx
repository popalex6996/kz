import React from "react";
import Hamburger from "../Hamburger";
import "./index.css";
import SearchBar from "../SearchBar";
import Spacer from "../Spacer";
import LanguageSwitch from "../LanguageSwitch";
import CartButton from "../CartButton";
import CatalogButton from "../CatalogButton";
import Account from "../Account";
import Breadcrumb from "../Breadcrumb";
// import images from "../../assets/images";

const Header: React.FC = () => {
  return (
    <div className="header-wrapper">
      <div className="header">
        {/*<div>
          <img src={images.logo} alt="logo" className="logo" />
        </div>*/}
        <div className="menu-catalog">
          <Hamburger />
          <Spacer width={15} />
          <CatalogButton />
        </div>
        <SearchBar />
        <div className="settings-bar">
          <LanguageSwitch />
          <Spacer width={15} />
          <CartButton />
          <Spacer width={15} />
          <Account />
        </div>
      </div>
      <Breadcrumb />
    </div>
  );
};

export default Header;
