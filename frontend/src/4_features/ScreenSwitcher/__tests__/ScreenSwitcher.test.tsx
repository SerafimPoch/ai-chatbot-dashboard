import React from "react";
import { render } from "@testing-library/react";
import { ScreenSwitcherContainer } from "../styles";

describe("ScreenSwitcher page components", () => {
  it("LogoutContainer renders correctly", () => {
    const { asFragment } = render(<ScreenSwitcherContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
