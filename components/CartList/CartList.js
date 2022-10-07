import React, { useContext } from "react";
import Cart from "../Cart/Cart";
import styles from "./CartList.module.scss";
import { useSelector } from "react-redux";
import store from "../../store";

import SelectViewContext from "../../contexts/SelectViewContext/SelectViewContext";

const CartList = () => {
  const carts = useSelector((store) => store.cart.carts);

  const { currentView } = useContext(SelectViewContext);

  return (
    <div>
      <ul className={currentView === "CARDS" ? styles.list : styles.listTable}>
        {carts.map(({ id, name, price, url, artcl, color, count }) => (
          <li key={id}>
            <Cart
              count={count}
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

export default CartList;
