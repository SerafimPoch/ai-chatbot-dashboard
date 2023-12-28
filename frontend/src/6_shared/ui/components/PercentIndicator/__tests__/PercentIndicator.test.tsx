import React from "react";
import { render } from "@testing-library/react";
import {
  PercentIndicatorContainer,
  PercentIndicatorTriangle,
  PercentIndicatorValue,
} from "../PercentIndicator.styles";

describe("PercentIndicator page components", () => {
  it("PercentIndicatorContainer renders correctly", () => {
    const { asFragment } = render(<PercentIndicatorContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("PercentIndicatorTriangle renders correctly", () => {
    const { asFragment } = render(
      <PercentIndicatorTriangle isPercentNegative />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("PercentIndicatorValue renders correctly", () => {
    const { asFragment } = render(<PercentIndicatorValue isPercentNegative />);
    expect(asFragment()).toMatchSnapshot();
  });
});
