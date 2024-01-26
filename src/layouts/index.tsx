import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Spacer from "../components/Spacer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Spacer height={170} />
      <Footer />
      <div id="modal-root" />
    </>
  );
};

export default Layout;
