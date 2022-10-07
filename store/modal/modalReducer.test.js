import modalReducer from "./modalReducer";
import { OPEN_MODAL, SET_MODAL_DATA, CLOSE_MODAL } from "./actions";

const initialState = {
  modalData: {},
  isOpenModalFirst: false,
};

describe("modalReducer works", () => {
  test("should return initial state if no arguments given", () => {
    expect(modalReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  test("should change isOpenModalFirst to true", () => {
    expect(
      modalReducer(initialState, { type: OPEN_MODAL, payload: true })
    ).toEqual({
      isOpenModalFirst: true,
      modalData: {},
    });
  });

  test("should change isOpenModalFirst to false", () => {
    expect(
      modalReducer(initialState, { type: CLOSE_MODAL, payload: false })
    ).toEqual({
      isOpenModalFirst: false,
      modalData: {},
    });
  });

  test("should set modalData", () => {
    expect(
      modalReducer(initialState, {
        type: SET_MODAL_DATA,
        payload: { text: "test" },
      })
    ).toEqual({
      isOpenModalFirst: false,
      modalData: { text: "test" },
    });
  });
});
