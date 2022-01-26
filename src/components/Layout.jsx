import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";


const Layout = (props) => {
  const { cartItems} = props;
  return (
    <>
      <div className="content">
        <Header cartItems={cartItems}/>
        <div className="content-container container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
