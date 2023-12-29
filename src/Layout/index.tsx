import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = (props: any) => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <div id="modal-root" />
    </>
  );
};

export default Layout;
