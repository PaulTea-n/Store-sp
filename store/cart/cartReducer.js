import produce from "immer";
import {
  ADD_TO_CART,
  GET_CART_LOCAL_STORAGE,
  INCREMENT_CART_ITEM,
  DICREMENT_CART_ITEM,
  DELETE_CART_ITEM,
  GET_CART_COUNTER_LOCAL_STORAGE,
  CLEAN_PRODUCTS_TO_BUY,
} from "./actions";

const initialState = {
  carts: [],
  cartCounter: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return produce(state, (draftState) => {
        const index = draftState.carts.findIndex(
          (el) => el.id === action.payload.id
        );
        if (index === -1) {
          draftState.carts.push({ ...action.payload, count: 1 });
        } else {
          draftState.carts[index].count += 1;
        }

        localStorage.setItem("carts", JSON.stringify(draftState.carts));

        draftState.cartCounter = draftState.carts.reduce(
          (sum, current) => sum + current.count,
          0
        );
        localStorage.setItem(
          "cartCounter",
          JSON.stringify(draftState.cartCounter)
        );
      });
    }

    case GET_CART_LOCAL_STORAGE: {
      return produce(state, (draftState) => {
        draftState.carts = action.payload;
      });
    }

    case INCREMENT_CART_ITEM: {
      return produce(state, (draftState) => {
        const index = draftState.carts.findIndex(
          (item) => item.id === action.payload
        );

        if (index !== -1) {
          draftState.carts[index].count += 1;
        }

        localStorage.setItem("carts", JSON.stringify(draftState.carts));

        draftState.cartCounter = draftState.carts.reduce(
          (sum, current) => sum + current.count,
          0
        );
        localStorage.setItem(
          "cartCounter",
          JSON.stringify(draftState.cartCounter)
        );
      });
    }

    case DICREMENT_CART_ITEM: {
      return produce(state, (draftState) => {
        const index = draftState.carts.findIndex(
          (item) => item.id === action.payload
        );

        if (index !== -1 && draftState.carts[index].count > 1) {
          draftState.carts[index].count -= 1;
        }
        localStorage.setItem("carts", JSON.stringify(draftState.carts));

        draftState.cartCounter = draftState.carts.reduce(
          (sum, current) => sum + current.count,
          0
        );

        localStorage.setItem(
          "cartCounter",
          JSON.stringify(draftState.cartCounter)
        );
      });
    }

    case DELETE_CART_ITEM: {
      return produce(state, (draftState) => {
        const index = draftState.carts.findIndex(
          (el) => el.id === action.payload.id
        );

        if (index !== -1) {
          draftState.carts.splice(index, 1);
        }

        localStorage.setItem("carts", JSON.stringify(draftState.carts));

        draftState.cartCounter = draftState.carts.reduce(
          (sum, current) => sum + current.count,
          0
        );
        localStorage.setItem(
          "cartCounter",
          JSON.stringify(draftState.cartCounter)
        );
      });
    }

    case GET_CART_COUNTER_LOCAL_STORAGE: {
      return produce(state, (draftState) => {
        draftState.cartCounter = action.payload;
      });
    }

    case CLEAN_PRODUCTS_TO_BUY: {
      return produce(state, (draftState) => {
        draftState.cartCounter = 0;
        draftState.carts = [];

        localStorage.setItem(
          "cartCounter",
          JSON.stringify(draftState.cartCounter)
        );
        localStorage.setItem("carts", JSON.stringify(draftState.carts));
      });
    }

    default: {
      return state;
    }
  }
};

export default cartReducer;
