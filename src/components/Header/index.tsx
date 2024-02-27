import React from "react";
import { useNavigate } from "react-router-dom";

import AccountButton from "../AccountButton";
import Breadcrumb from "../Breadcrumb";
import LanguageSwitch from "../LanguageSwitch";
import ModalButton from "../ModalButton";
import SearchBar from "../SearchBar";
import Spacer from "../Spacer";

import "./index.css";

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="header-wrapper">
      <div className="header">
        {/* Left header part */}
        <div className="header-side-part">
          {/* Hamburger modal button */}
          <ModalButton modal="hamburger" />

          <Spacer width={15} />

          {/* Catalog modal button */}
          <ModalButton modal="catalog" />

          <Spacer width={15} />

          {/*todo: logo button with surprise like goose from the right side*/}
          <button onClick={() => navigate("/home")} className="logo-btn" />
        </div>

        {/* Global search input in the center */}
        <SearchBar />

        {/* Right header part */}
        <div className="header-side-part">
          {/* todo: change LanguageSwitch to an announcement*/}
          <LanguageSwitch />
          <Spacer width={15} />
          {/* Cart modal button */}
          <ModalButton modal="cart" />
          <Spacer width={15} />
          {/* Account button */}
          <AccountButton />
        </div>
      </div>

      {/* Breadcrumb navigation */}
      <Breadcrumb />
    </div>
  );
};

export default Header;
