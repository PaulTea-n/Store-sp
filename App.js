import { useState, useEffect } from "react";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import AppRoutes from "./AppRoutes";
import {
  getProductsAC,
  getProductsLocalStorageAC,
} from "./store/products/actionCreators";
import { useDispatch } from "react-redux";
import {
  getCartLocalStorageAC,
  getCartCounterLocalStorageAC,
} from "./store/cart/actionCreators";
import {
  getFavoriteLocalStorageAC,
  favoriteCaunterAC,
} from "./store/favorite/actionCreators";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const products = localStorage.getItem("products");
    if (products) {
      dispatch(getProductsLocalStorageAC(JSON.parse(products)));
    } else {
      dispatch(getProductsAC());
    }
    const carts = localStorage.getItem("carts");
    if (carts) {
      dispatch(getCartLocalStorageAC(JSON.parse(carts)));
    }
    const cartCounter = localStorage.getItem("cartCounter");
    if (cartCounter) {
      dispatch(getCartCounterLocalStorageAC(JSON.parse(cartCounter)));
    }

    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      dispatch(getFavoriteLocalStorageAC(JSON.parse(favorites)));
    }
    const favoriteCounter = localStorage.getItem("favoriteCounter");
    if (favoriteCounter) {
      dispatch(favoriteCaunterAC(JSON.parse(favoriteCounter)));
    }
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      <main>
        <section>
          <AppRoutes />
        </section>
      </main>
    </div>
  );
};

export default App;
