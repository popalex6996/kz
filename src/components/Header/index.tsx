import React from "react";
import { useNavigate } from "react-router-dom";

import AccountButton from "../AccountButton";
import Breadcrumb from "../Breadcrumb";
import CartButton from "../CartButton";
import CatalogButton from "../CatalogButton";
import HamburgerButton from "../HamburgerButton";
import SearchBar from "../SearchBar";
import Spacer from "../Spacer";
import LanguageSwitch from "../LanguageSwitch";

import "./index.css";

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="header-wrapper">
      <div className="header">
        {/*Left header part*/}
        <div className="header-side-part">
          {/*Hamburger nav menu*/}
          <HamburgerButton />

          <Spacer width={15} />

          {/*Catalog nav menu*/}
          <CatalogButton />

          <Spacer width={15} />

          {/*todo: logo button with surprise like goose from the right side*/}
          <button onClick={() => navigate("/home")} className="logo-btn" />
        </div>

        {/*Global search input in the center*/}
        <SearchBar />

        {/*Right header part*/}
        <div className="header-side-part">
          {/*todo: change LanguageSwitch to an announcement*/}
          <LanguageSwitch />
          <Spacer width={15} />
          {/*Cart button*/}
          <CartButton />
          <Spacer width={15} />
          {/*Account button*/}
          <AccountButton />
        </div>
      </div>
      <Breadcrumb />
    </div>
  );
};

export default Header;
