import {
  ADD_TO_FAVORITE,
  GET_FAVORITE_LOCAL_STORAGE,
  FAVORITE_CAUNTER,
} from "./actions";

export const addToFavoriteAC = (payload) => {
  return { type: ADD_TO_FAVORITE, payload };
};

export const getFavoriteLocalStorageAC = () => async (dispatch) => {
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  const favoriteCounter = JSON.parse(localStorage.getItem("favoriteCounter"));

  if (favorites !== null) {
    dispatch({ type: GET_FAVORITE_LOCAL_STORAGE, payload: favorites });
  }
  if (favoriteCounter !== null) {
    dispatch({
      type: FAVORITE_CAUNTER,
      payload: favoriteCounter,
    });
  }
};

export const favoriteCaunterAC = (payload) => {
  return { type: FAVORITE_CAUNTER, payload };
};
