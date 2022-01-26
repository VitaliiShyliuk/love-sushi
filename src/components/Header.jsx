import React from "react";
import { Link } from "react-router-dom";
import CartLink from "./CartLink";

const Header = ({ cartItems }) => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav__column-logo logo">
            <Link title="love&sushi" className="logo__link" to="/">
              <img
                className="logo__img-brand image-brand"
                width={30}
                src="./images/lovesushi.svg"
                alt="lovesushi"
              />
              <span className="logo__title-brand title-brand">love&sushi</span>
            </Link>
          </div>
          <div className="nav__column-links">
            <ul className="nav__ul-links">
              <li className="nav__li-link">
                <Link to="/products">Меню</Link>
              </li>
              <li className="nav__li-link">
                <CartLink cartItems={cartItems} />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
