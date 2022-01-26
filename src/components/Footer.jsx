import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__column">
          <div className="footer__logo logo">
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
          <div className="social">
            <h4 className="social__title" title="Социальные сети">Соц. сети:</h4>
            <ul className="social__list">
              <li className="social__item">
                <a title="Instagram" href="https://www.instagram.com/?hl=ru" target="_blank">
                  <img
                    className="social__image"
                    src="./images/instagram.svg"
                    alt="instagram"
                  />
                </a>
              </li>
              <li className="social__item">
                <a title="Facebook" href="https://www.facebook.com/" target="_blank">
                  <img
                    className="social__image"
                    src="./images/facebook.svg"
                    alt="facebook"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__column">
          <div className="info">
            <p className="info__row">© 2022 — love&sushi</p>
            <p className="info__row">г. Киев, ул. Иванова 1Б</p>
            <p className="info__row">
              <a href="tel:+380995529031">+38(099)55-29-031</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
