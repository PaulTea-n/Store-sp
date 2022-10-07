import React, { useContext } from "react";
import Favorite from "../Favorite/Favorite";
import styles from "./FavoriteList.module.scss";
import { useSelector } from "react-redux";
import store from "../../store";

import SelectViewContext from "../../contexts/SelectViewContext/SelectViewContext";

const FavoriteList = () => {
  const favorites = useSelector((store) => store.favorite.favorites);

  const { currentView } = useContext(SelectViewContext);

  return (
    <div>
      <ul className={currentView === "CARDS" ? styles.list : styles.listTable}>
        {favorites.map(({ id, name, price, url, artcl, color, isFavorite }) => (
          <li key={id}>
            <Favorite
              isFavorite={isFavorite}
              id={id}
              name={name}
              price={price}
              url={url}
              artcl={artcl}
              color={color}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteList;
