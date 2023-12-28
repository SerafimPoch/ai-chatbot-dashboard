import React from "react";
import { render } from "@testing-library/react";
import {
  HeaderContainer,
  HeaderTitle,
  SwitcherWrapper,
  HeaderNavbar,
} from "../Header.styles";

describe("Header page components", () => {
  it("HeaderContainer renders correctly", () => {
    const { asFragment } = render(<HeaderContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("HeaderTitle renders correctly", () => {
    const { asFragment } = render(<HeaderTitle />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("SwitcherWrapper renders correctly", () => {
    const { asFragment } = render(<SwitcherWrapper />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("HeaderNavbar renders correctly", () => {
    const { asFragment } = render(<HeaderNavbar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
