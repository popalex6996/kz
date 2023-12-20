import React from "react";
import Hamburger from "../Hamburger/Hamburger";
import "./index.css";
import SearchBar from "../SearchBar/SearchBar";
import Cart from "../Cart/Cart";
import Account from "../Account/Account";
import Spacer from "../Spacer/Spacer";

const Header: React.FC = () => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <Hamburger />
        <SearchBar />
        <div className="settings-bar">
          <button>
            <span>UA</span> |<span>EN</span>
          </button>
          <Spacer width={15} />
          <Cart />
          <Spacer width={15} />
          <Account />
        </div>
      </div>
    </div>
  );
};

export default Header;
