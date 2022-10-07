import productsReducer from "./productsReducer";
import { GET_PRODUCTS, GET_PRODUCTS_LOCAL_STORAGE } from "./actions";

const initialState = {
  products: [],
};

describe("Products reducer works", () => {
  test("shuld return the initial state", () => {
    expect(productsReducer(undefined, { type: undefined })).toEqual(
      initialState
    );
  });

  test("should get products", () => {
    expect(
      productsReducer(initialState, {
        type: GET_PRODUCTS,
        payload: ["test"],
      })
    ).toEqual({
      products: ["test"],
    });
  });

  test("should get products LS", () => {
    expect(
      productsReducer(initialState, {
        type: GET_PRODUCTS_LOCAL_STORAGE,
        payload: ["test"],
      })
    ).toEqual({
      products: ["test"],
    });
  });
});
