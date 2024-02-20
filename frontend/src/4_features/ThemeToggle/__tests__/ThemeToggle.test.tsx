import React from "react";
import { render } from "@testing-library/react";
import { ThemeToggleContainer, ThemeItem } from "../styles";

describe("ThemeToggle page components", () => {
  it("ThemeToggleContainer renders correctly", () => {
    const { asFragment } = render(<ThemeToggleContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("ThemeItem renders correctly", () => {
    const { asFragment } = render(<ThemeItem active />);
    expect(asFragment()).toMatchSnapshot();
  });
});
