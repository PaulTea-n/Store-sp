import {
  GET_PRODUCTS,
  GET_PRODUCTS_LOCAL_STORAGE,
  SET_FAVORITE_PRODUCTS,
} from "./actions";

export const getProductsAC = () => async (dispatch) => {
  const products = await fetch("./products.json").then((res) => res.json());
  dispatch({ type: GET_PRODUCTS, payload: products });
};

export const getProductsLocalStorageAC = (payload) => {
  return { type: GET_PRODUCTS_LOCAL_STORAGE, payload };
};

export const setFavoriteProductsAC = (payload) => {
  return { type: SET_FAVORITE_PRODUCTS, payload };
};
