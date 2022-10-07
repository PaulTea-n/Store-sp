import { OPEN_MODAL, CLOSE_MODAL, SET_MODAL_DATA } from "./actions";

export const openModalAC = () => ({ type: OPEN_MODAL });
export const closeModalAC = () => ({ type: CLOSE_MODAL });
export const setModalDataAC = (payload) => ({ type: SET_MODAL_DATA, payload });
