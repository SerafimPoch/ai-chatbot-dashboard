import React from "react";
import { render } from "@testing-library/react";
import {
  SideBarContainer,
  SideBarLogoWrapper,
  SideBarListWrapper,
  SideBarLine,
} from "../SideBar.styles";

describe("SideBar page components", () => {
  it("SideBarContainer renders correctly", () => {
    const { asFragment } = render(<SideBarContainer expanded />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("SideBarLogoWrapper renders correctly", () => {
    const { asFragment } = render(<SideBarLogoWrapper />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("SideBarListWrapper renders correctly", () => {
    const { asFragment } = render(<SideBarListWrapper />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("SideBarLine renders correctly", () => {
    const { asFragment } = render(<SideBarLine />);
    expect(asFragment()).toMatchSnapshot();
  });
});
