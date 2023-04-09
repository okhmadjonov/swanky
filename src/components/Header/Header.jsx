import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/home/logo.png";
import { FaUserAlt, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import "./header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <nav>
          <div className="menu">
            <Link className="menu__link">HOME</Link>
            <Link className="menu__link">ABOUT</Link>
            <Link className="menu__link">SHOP</Link>
            <Link className="menu__link">BLOGS</Link>
            <Link className="menu__link">CONTACT</Link>
          </div>
          <div className="logo">
            <Link className="logo_img">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="login__search__like__cart">
            <Link className="login">
              <FaUserAlt /> LOGIN
            </Link>
            <Link className="search">
              {" "}
              <FaSearch />
              SEARCH...
            </Link>
            <Link className="like">
              <FaHeart /> (0)
            </Link>
            <Link className="cart">
              <FaShoppingCart /> (0)
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
