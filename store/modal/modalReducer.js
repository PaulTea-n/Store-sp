import { OPEN_MODAL, CLOSE_MODAL, SET_MODAL_DATA } from "./actions";
import produce from "immer";

const initialState = {
  modalData: {},
  isOpenModalFirst: false,
};

const modalReduser = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return produce(state, (draftState) => {
        draftState.isOpenModalFirst = true;
      });
    }

    case CLOSE_MODAL: {
      return produce(state, (draftState) => {
        draftState.isOpenModalFirst = false;
      });
    }

    case SET_MODAL_DATA: {
      return produce(state, (draftState) => {
        draftState.modalData = action.payload;
      });
    }

    default: {
      return state;
    }
  }
};

export default modalReduser;
