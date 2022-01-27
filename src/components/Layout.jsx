import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";


const Layout = () => {
  return (
    <>
      <div className="content">
        <Header/>
        <div className="content-container container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
