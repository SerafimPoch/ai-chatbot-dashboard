import React from "react";
import { render } from "@testing-library/react";
import { MainContentWrapper } from "../Main.styles";

describe("MainContentWrapper", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<MainContentWrapper />);
    expect(asFragment()).toMatchSnapshot();
  });
});
