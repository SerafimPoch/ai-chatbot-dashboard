import React from "react";
import { render } from "@testing-library/react";
import { ProgressBarContainer, ProgressBarLine } from "../ProgressBar.styles";

describe("ProgressBar page components", () => {
  it("ProgressBarContainer renders correctly", () => {
    const { asFragment } = render(<ProgressBarContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("ProgressBarLine renders correctly", () => {
    const { asFragment } = render(
      <ProgressBarLine width={100} color="green" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
