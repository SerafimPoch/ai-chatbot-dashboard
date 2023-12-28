import React from "react";
import { render } from "@testing-library/react";
import { MembershipContainer, MembershipTitle } from "../Membership.styles";

describe("Membership page components", () => {
  it("MembershipContainer renders correctly", () => {
    const { asFragment } = render(<MembershipContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("MembershipTitle renders correctly", () => {
    const { asFragment } = render(<MembershipTitle />);
    expect(asFragment()).toMatchSnapshot();
  });
});
