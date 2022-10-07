import {
  ADD_TO_CART,
  GET_CART_LOCAL_STORAGE,
  INCREMENT_CART_ITEM,
  DICREMENT_CART_ITEM,
  DELETE_CART_ITEM,
  GET_CART_COUNTER_LOCAL_STORAGE,
  CLEAN_PRODUCTS_TO_BUY,
} from "./actions";

export const addToCartAC = (payload) => {
  return { type: ADD_TO_CART, payload };
};

export const getCartLocalStorageAC = (payload) => {
  return { type: GET_CART_LOCAL_STORAGE, payload };
};

export const incrementCartItemAC = (payload) => {
  return { type: INCREMENT_CART_ITEM, payload };
};

export const dicrementCartItemAC = (payload) => {
  return { type: DICREMENT_CART_ITEM, payload };
};

export const deleteCartItemAC = (payload) => {
  return { type: DELETE_CART_ITEM, payload };
};
export const getCartCounterLocalStorageAC = (payload) => {
  return { type: GET_CART_COUNTER_LOCAL_STORAGE, payload };
};

export const cleanProductsToBuy = (payload) => {
  return { type: CLEAN_PRODUCTS_TO_BUY, payload };
};
