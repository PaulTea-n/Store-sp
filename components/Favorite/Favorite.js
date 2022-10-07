import React, { useContext } from "react";
import styles from "./Favorite.module.scss";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { openModalAC, setModalDataAC } from "../../store/modal/actionCreators";
import {
  addToFavoriteAC,
  favoriteCaunterAC,
} from "../../store/favorite/actionCreators";
import { setFavoriteProductsAC } from "../../store/products/actionCreators";

import SelectViewContext from "../../contexts/SelectViewContext/SelectViewContext";

const Favorite = (props) => {
  const { id, name, price, url, artcl, color, isFavorite } = props;

  const dispatch = useDispatch();
  const favorites = useSelector((store) => store.favorite.favorites);

  const { currentView } = useContext(SelectViewContext);

  return (
    <div
      className={
        currentView === "CARDS" ? styles.productCard : styles.productCardTable
      }
    >
      <button
        type="button"
        className={styles.favouriteBtn}
        onClick={() => {
          dispatch(
            addToFavoriteAC({ id, name, price, url, artcl, color, isFavorite })
          );
          dispatch(setFavoriteProductsAC({ id, favorites }));
          dispatch(favoriteCaunterAC());
        }}
      >
        <img
          className={styles.favouriteImg}
          src={
            isFavorite ? "./images/favorite-check.png" : "./images/favorite.png"
          }
          alt="star"
        />
      </button>
      <a>
        <img className={styles.productImg} src={url} alt={name} />
      </a>
      <span className={styles.productName}>{name}</span>
      <div className={styles.productBlock}>
        <div className={styles.productColor}>Колір: {color}</div>
        <div className={styles.productArtcl}>Артикул: {artcl}</div>
      </div>
      <div className={styles.productPrise}>{price}</div>
      <div className={styles.productBtn}>
        <Button
          onClick={() => {
            dispatch(setModalDataAC({ id, name, price, url }));
            dispatch(openModalAC());
          }}
          text="КУПИТИ"
          backgroundColor="#001542"
        />
      </div>
    </div>
  );
};

Favorite.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  url: PropTypes.string,
  artcl: PropTypes.number,
  color: PropTypes.string,
  isFavorite: PropTypes.bool,
};

Favorite.defaultProps = {
  id: 0,
  name: "Назва товару",
  price: "0",
  url: "фото товару",
  artcl: 0,
  color: "Колір товару",
  isFavorite: false,
};

export default Favorite;
