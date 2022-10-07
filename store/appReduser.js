import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import favoriteReducer from "./favorite/favoriteReducer";
import modalReduser from "./modal/modalReducer";
import productsReduser from "./products/productsReducer";

const appReduser = combineReducers({
  modal: modalReduser,
  products: productsReduser,
  cart: cartReducer,
  favorite: favoriteReducer,
});

export default appReduser;
