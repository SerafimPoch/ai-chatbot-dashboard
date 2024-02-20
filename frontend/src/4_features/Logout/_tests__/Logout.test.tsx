import React from "react";
import { render } from "@testing-library/react";
import { LogoutContainer, LogoutText } from "../styles";

describe("Logout page components", () => {
  it("LogoutContainer renders correctly", () => {
    const { asFragment } = render(<LogoutContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("LogoutText renders correctly", () => {
    const { asFragment } = render(<LogoutText />);
    expect(asFragment()).toMatchSnapshot();
  });
});
