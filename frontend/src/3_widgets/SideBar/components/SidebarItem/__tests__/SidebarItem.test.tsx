import React from "react";
import { render } from "@testing-library/react";
import { SidebarItemContainer, SidebarItemTitle } from "../SidebarItem.styles";

describe("SidebarItem page components", () => {
  it("SidebarItemContainer renders correctly", () => {
    const { asFragment } = render(<SidebarItemContainer isActiveId />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("SidebarItemTitle renders correctly", () => {
    const { asFragment } = render(<SidebarItemTitle isActiveId />);
    expect(asFragment()).toMatchSnapshot();
  });
});
