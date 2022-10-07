import cartReducer from "./cartReducer";
import {
  ADD_TO_CART,
  DELETE_CART_ITEM,
  INCREMENT_CART_ITEM,
  DICREMENT_CART_ITEM,
  CLEAN_PRODUCTS_TO_BUY,
} from "./actions";

const initialState = {
  carts: [],
  cartCounter: 0,
};

describe("Cart reducer works", () => {
  test("shuld return the initial state", () => {
    expect(cartReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  test("shuld change cartCounter", () => {
    expect(
      cartReducer(initialState, {
        type: ADD_TO_CART,
        payload: { id: 1 },
      })
    ).toEqual({
      carts: [{ id: 1, count: 1 }],
      cartCounter: 1,
    });
  });

  test("shuld change cartCounter", () => {
    expect(
      cartReducer(initialState, {
        type: DELETE_CART_ITEM,
        payload: 1,
      })
    ).toEqual({
      carts: [],
      cartCounter: 0,
    });
  });

  test("should increment work", () => {
    expect(
      cartReducer(
        { carts: [{ id: 1, count: 3 }], cartCounter: 4 },
        {
          type: INCREMENT_CART_ITEM,
          payload: 1,
        }
      )
    ).toEqual({
      carts: [{ id: 1, count: 4 }],
      cartCounter: 4,
    });
  });

  test("should dicrement work", () => {
    expect(
      cartReducer(
        { carts: [{ id: 1, count: 3 }], cartCounter: 3 },
        {
          type: DICREMENT_CART_ITEM,
          payload: 1,
        }
      )
    ).toEqual({
      carts: [{ id: 1, count: 2 }],
      cartCounter: 2,
    });
  });

  test("should clean work", () => {
    expect(
      cartReducer(
        { carts: [{ id: 1, count: 3 }], cartCounter: 3 },
        {
          type: CLEAN_PRODUCTS_TO_BUY,
          payload: 1,
        }
      )
    ).toEqual({
      carts: [],
      cartCounter: 0,
    });
  });
});
