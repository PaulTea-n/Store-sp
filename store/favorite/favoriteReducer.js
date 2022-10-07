import {
  ADD_TO_FAVORITE,
  GET_FAVORITE_LOCAL_STORAGE,
  FAVORITE_CAUNTER,
} from "./actions";
import produce from "immer";

const initialState = {
  favorites: [],
  favoriteCounter: 0,
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE: {
      return produce(state, (draftState) => {
        const index = draftState.favorites.findIndex(
          (el) => el.id === action.payload.id
        );

        if (index === -1) {
          draftState.favorites.push({
            ...action.payload,
            isFavorite: true,
            favoriteCounter: 1,
          });
        } else {
          draftState.favorites.splice(index, 1);
        }
        localStorage.setItem("favorites", JSON.stringify(draftState.favorites));
        localStorage.setItem(
          "favoriteCounter",
          JSON.stringify(draftState.favoriteCounter)
        );
      });
    }

    case GET_FAVORITE_LOCAL_STORAGE: {
      return produce(state, (draftState) => {
        draftState.favorites = action.payload;
      });
    }

    case FAVORITE_CAUNTER: {
      return produce(state, (draftState) => {
        draftState.favoriteCounter = draftState.favorites.reduce(
          (sum, current) => {
            return (sum += current.favoriteCounter);
          },
          0
        );
        localStorage.setItem(
          "favoriteCounter",
          JSON.stringify(draftState.favoriteCounter)
        );
      });
    }

    default: {
      return state;
    }
  }
};

export default favoriteReducer;
