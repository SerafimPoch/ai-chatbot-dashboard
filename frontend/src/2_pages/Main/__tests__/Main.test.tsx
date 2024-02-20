import React from "react";
import { render } from "@testing-library/react";
import { MainContainer, Container, MainContentWrapper } from "../styles";

describe("Main page components", () => {
  it("MainContainer renders correctly", () => {
    const { asFragment } = render(<MainContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("Container renders correctly", () => {
    const { asFragment } = render(<Container />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("MainContentWrapper renders correctly", () => {
    const { asFragment } = render(<MainContentWrapper />);
    expect(asFragment()).toMatchSnapshot();
  });
});
