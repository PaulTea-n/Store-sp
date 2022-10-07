import SelectView from "./SelectView";
import { render } from "@testing-library/react";

describe("SelectView component working", () => {
  test("should render working", () => {
    render(
      <SelectView name="view" id="view" value="test" onChange={() => {}} />
    );
  });

  test("should SelectView fragment match snapshot", () => {
    const { asFragment } = render(
      <SelectView name="view" id="view" value="test" onChange={() => {}} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
