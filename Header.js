import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  const [{ basket, user }] = useStateValue();
  console.log(basket);
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="imgaa"
          src="https://oralcancerfoundation.org/wp-content/uploads/2018/11/white-amazon-logo-png-6.png"
          alt="logo"
        />
      </Link>
      <div className="head_search">
        <input type="text" className="search" />
        <SearchIcon className="icon" />
      </div>
      <div className="head_nav">
        <Link to={!user && "/login"} className="right_1">
          <div onClick={login} className="head_r">
            <span className="line_one">Hello {user?.email}</span>
            <span className="line_two">{user ? "Sign Out " : "Sign In"}</span>
          </div>
        </Link>
        <Link to="/" className="right_1">
          <div className="head_r">
            <span className="line_one">Returns</span>
            <span className="line_two">Orders</span>
          </div>
        </Link>
        <Link to="/" className="right_1">
          <div className="head_r">
            <span className="line_one">Your</span>
            <span className="line_two">Prime</span>
          </div>
        </Link>

        <Link className="right_1" to="/checkout">
          <div className="basket">
            <ShoppingBasketIcon />
            <span className="line_two basket_count">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
