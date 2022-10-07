import React, { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.scss";
import PropTypes from "prop-types";

import SelectViewContext from "../../contexts/SelectViewContext/SelectViewContext";

const ProductList = (props) => {
  const { products } = props;

  const { currentView } = useContext(SelectViewContext);

  return (
    <div>
      <ul className={currentView === "CARDS" ? styles.list : styles.listTable}>
        {products.map(({ id, name, price, url, artcl, color, isFavorite }) => (
          <li key={id}>
            <ProductCard
              id={id}
              name={name}
              price={price}
              url={url}
              artcl={artcl}
              color={color}
              isFavorite={isFavorite}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array,
};

ProductList.defaultProps = {
  products: [],
};

export default ProductList;
