import React from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../../store";
import SelectView from "../SelectView/SelectView";

const Header = () => {
  const cartCounter = useSelector((store) => store.cart.cartCounter);
  const favoriteCounter = useSelector(
    (store) => store.favorite.favoriteCounter
  );

  return (
    <header className={styles.header}>
      <div>
        <NavLink to="/">
          <img
            className={styles.logo_img}
            src="./images/logo-header.png"
            alt="logo"
          />
        </NavLink>
      </div>

      <div>
        <ul>
          <li>
            <a href="">Доставка і оплата</a>
          </li>
          <li>
            <a href="">Повернення і обмін</a>
          </li>
          <li>
            <a href="">Гарантія</a>
          </li>
        </ul>
      </div>

      <div className={styles.iconHeader}>
        <span className={styles.cart}>
          <NavLink to="/favorite">
            <img
              className={styles.cartImg}
              src="./images/favorite-check.png"
              alt="star"
            />
          </NavLink>

          <span> {favoriteCounter}</span>
        </span>

        <span className={styles.cart}>
          <NavLink to="/cart">
            <img
              className={styles.cartImg}
              src="./images/shopping-cart.png"
              alt="cart"
            />
          </NavLink>

          <span>{cartCounter}</span>
        </span>
        <SelectView />
      </div>
    </header>
  );
};

export default Header;
