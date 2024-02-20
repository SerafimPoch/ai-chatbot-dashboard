import React from "react";
import { render } from "@testing-library/react";
import {
  ProfileInfoWrapper,
  ProfileName,
  ProfileTag,
  ProfileInfoOptionList,
  ProfileThemeWrapper,
  ProfileLogoutWrapper,
  ProfileItemWrapper,
  ProfileItemText,
} from "../styles";

describe("ProfileModal page components", () => {
  it("ProfileInfoWrapper renders correctly", () => {
    const { asFragment } = render(<ProfileInfoWrapper />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("ProfileName renders correctly", () => {
    const { asFragment } = render(<ProfileName />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("ProfileTag renders correctly", () => {
    const { asFragment } = render(<ProfileTag />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("ProfileInfoOptionList renders correctly", () => {
    const { asFragment } = render(<ProfileInfoOptionList />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("ProfileThemeWrapper renders correctly", () => {
    const { asFragment } = render(<ProfileThemeWrapper />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("ProfileLogoutWrapper renders correctly", () => {
    const { asFragment } = render(<ProfileLogoutWrapper />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("ProfileItemWrapper renders correctly", () => {
    const { asFragment } = render(<ProfileItemWrapper />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("ProfileItemText renders correctly", () => {
    const { asFragment } = render(<ProfileItemText />);
    expect(asFragment()).toMatchSnapshot();
  });
});
