import React from "react";
import logo from "../images/icon.webp";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={logo} alt="Logo" className="footer__logo" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Home Page
                </a>
              </li>
              <li className="footer__item">
                <a href="/gallery" className="footer__link">
                  Photo Gallery
                </a>
              </li>
              <li className="footer__item">
                <a href="/travel-information" className="footer__link">
                  Travel Information
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://grandbay-puntacana.com/"
              className="footer__copyright__companyLink"
              target="_blank"
            >
              Grand Bay of the Sea
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
