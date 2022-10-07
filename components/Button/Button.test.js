import Button from "./Button";
import { render, screen, fireEvent } from "@testing-library/react";

const handleClick = jest.fn();

describe("Render Button", () => {
  test("should button render", () => {
    const { asFragment } = render(
      <Button type={"submit"} className="btn">
        Add to cart
      </Button>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Handle click at a button", () => {
  test("should handleClick work", () => {
    render(
      <Button type={"submit"} className="btn" handleClick={handleClick}>
        Add to cart
      </Button>
    );
    const btn = screen.getByText("Add to cart");
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalled();
  });
});
