import React from "react";
import { render } from "@testing-library/react";
import { ArrowTogglerContainer } from "../styles";

describe("ArrowToggler page components", () => {
  it("ArrowTogglerContainer renders correctly", () => {
    const { asFragment } = render(<ArrowTogglerContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
