import {
  GET_PRODUCTS,
  GET_PRODUCTS_LOCAL_STORAGE,
  SET_FAVORITE_PRODUCTS,
} from "./actions";
import produce from "immer";

const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return produce(state, (draftState) => {
        draftState.products = action.payload;

        localStorage.setItem("products", JSON.stringify(draftState.products));
      });
    }

    case GET_PRODUCTS_LOCAL_STORAGE: {
      return produce(state, (draftState) => {
        draftState.products = action.payload;
      });
    }

    case SET_FAVORITE_PRODUCTS: {
      return produce(state, (draftState) => {
        const index = action.payload.favorites.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index === -1) {
          const index = draftState.products.findIndex(
            (el) => el.id === action.payload.id
          );
          draftState.products[index]["isFavorite"] = true;
          localStorage.setItem("products", JSON.stringify(draftState.products));
        } else {
          const index = draftState.products.findIndex(
            (el) => el.id === action.payload.id
          );

          draftState.products[index]["isFavorite"] = false;
          localStorage.setItem("products", JSON.stringify(draftState.products));
        }
      });
    }

    default: {
      return state;
    }
  }
};

export default productsReducer;
