import favoriteReducer from "./favoriteReducer";
import { ADD_TO_FAVORITE } from "./actions";

const initialState = {
  favorites: [],
  favoriteCounter: 0,
};

describe("Favorite reducer works", () => {
  test("shuld return the initial state", () => {
    expect(favoriteReducer(undefined, { type: undefined })).toEqual(
      initialState
    );
  });

  test("should added to cart", () => {
    expect(
      favoriteReducer(initialState, {
        type: ADD_TO_FAVORITE,
        payload: { id: 1 },
      })
    ).toEqual({
      favorites: [{ id: 1, isFavorite: true, favoriteCounter: 1 }],
      favoriteCounter: 0,
    });
  });
});
