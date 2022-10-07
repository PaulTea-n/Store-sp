import React, { useContext } from "react";
import styles from "./Cart.module.scss";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { openModalAC, setModalDataAC } from "../../store/modal/actionCreators";
import {
  incrementCartItemAC,
  dicrementCartItemAC,
} from "../../store/cart/actionCreators";

import SelectViewContext from "../../contexts/SelectViewContext/SelectViewContext";

const Cart = (props) => {
  const { id, name, url, count } = props;
  const dispatch = useDispatch();

  const { currentView } = useContext(SelectViewContext);

  return (
    <div
      className={
        currentView === "CARDS" ? styles.productCard : styles.productCardTable
      }
    >
      <a>
        <img className={styles.productImg} src={url} alt={name} />
      </a>
      <span className={styles.productName}>{name}</span>

      <div className={styles.btnContainer}>
        <Button
          handleClick={() => dispatch(dicrementCartItemAC(id))}
          className={styles.btn}
          text="-"
          backgroundColor="#085454"
        ></Button>
        <span className={styles.count_cart}>{count}</span>
        <Button
          handleClick={() => dispatch(incrementCartItemAC(id))}
          className={styles.btn}
          text="+"
          backgroundColor="#085454"
        ></Button>
        <Button
          handleClick={() => {
            dispatch(setModalDataAC({ id }));
            dispatch(openModalAC());
          }}
          color="red"
          className={styles.btn}
          text="ВИДАЛИТИ"
        ></Button>
      </div>
    </div>
  );
};

Cart.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  url: PropTypes.string,
  count: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
};

Cart.defaultProps = {
  id: 0,
  name: "Назва товару",
  url: "фото товару",
  count: 0,
};

export default Cart;
