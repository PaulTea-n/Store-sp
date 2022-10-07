import Modal from "./Modal";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import store from "../../store";
import { openModalAC, closeModalAC } from "../../store/modal/actionCreators";

const confirmBtnAction = jest.fn();

const Component = ({ text, confirmBtnAction }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Modal text={text} confirmBtnAction={confirmBtnAction} />
      <button
        onClick={() => {
          dispatch(openModalAC());
        }}
      >
        OPEN
      </button>
      <button
        onClick={() => {
          dispatch(closeModalAC());
        }}
      >
        CLOSE
      </button>
    </>
  );
};

const MockedProvider = ({ text, confirmBtnAction }) => {
  return (
    <Provider store={store}>
      <Component text={text} confirmBtnAction={confirmBtnAction} />
    </Provider>
  );
};

describe("Modal renders", () => {
  test("should Modal no render without isOpenModalFirst props", () => {
    const { asFragment } = render(<MockedProvider text="Add to cart" />);
    fireEvent.click(screen.getByText("OPEN"));
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Modal confirmBtnAction works", () => {
  test("should confirmBtnAction be called when 'ТАК' btn is clicked", () => {
    render(
      <MockedProvider text="Add to cart" confirmBtnAction={confirmBtnAction} />
    );

    fireEvent.click(screen.getByText("OPEN"));
    fireEvent.click(screen.getByText("ТАК"));

    expect(confirmBtnAction).toHaveBeenCalled();
  });
});

describe("Modal opens and closes on state changes", () => {
  test("should Modal open when isOpenModalFirst is true", () => {
    render(<MockedProvider text="test text" />, { store });

    fireEvent.click(screen.getByText("OPEN"));

    expect(screen.getByTestId("modal-container")).toBeInTheDocument();
  });

  test("should Modal close when isOpenModalFirst is false", () => {
    render(<MockedProvider text="test text" />, { store });

    fireEvent.click(screen.getByText("OPEN"));
    fireEvent.click(screen.getByText("CLOSE"));

    expect(screen.queryByTestId("modal-container")).not.toBeInTheDocument();
  });
});

describe("Modal closeModal fn works", () => {
  test("should closeModal be called when bg is clicked", () => {
    render(<MockedProvider text="Add to cart" />);

    fireEvent.click(screen.getByText("OPEN"));

    expect(screen.getByTestId("modal-container")).toBeInTheDocument();
  });

  test("should closeModal be called when X is clicked", () => {
    render(<MockedProvider text="Add to cart" />);

    fireEvent.click(screen.getByText("OPEN"));
    fireEvent.click(screen.getByText("X"));

    expect(screen.getByTestId("modal-container")).toBeInTheDocument();
  });

  test("should closeModal be called when 'НІ' is clicked", () => {
    render(
      <MockedProvider text="Add to cart" confirmBtnAction={confirmBtnAction} />
    );

    fireEvent.click(screen.getByText("OPEN"));
    fireEvent.click(screen.getByText("НІ"));

    expect(screen.queryByTestId("modal-container")).not.toBeInTheDocument();
  });
});
