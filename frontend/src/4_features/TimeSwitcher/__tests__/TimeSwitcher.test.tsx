import React from "react";
import { render } from "@testing-library/react";
import { TimeSwitcherContainer, TimeSwitcherItem } from "../styles";

describe("TimeSwitcher page components", () => {
  it("TimeSwitcherContainer renders correctly", () => {
    const { asFragment } = render(<TimeSwitcherContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("TimeSwitcherItem renders correctly", () => {
    const { asFragment } = render(<TimeSwitcherItem active />);
    expect(asFragment()).toMatchSnapshot();
  });
});
