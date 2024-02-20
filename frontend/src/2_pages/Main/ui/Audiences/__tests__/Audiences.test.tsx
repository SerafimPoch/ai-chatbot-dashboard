import React from "react";
import { render } from "@testing-library/react";
import {
  AudiencesContainer,
  AudiencesTitle,
  AudienceChartContainer,
  AudienceChartPercent,
  AudienceChartLabelWrapper,
  AudienceChartLabel,
  AudienceChartLabelText,
} from "../styles";

describe("Audiences page components", () => {
  it("AudiencesContainer renders correctly", () => {
    const { asFragment } = render(<AudiencesContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("AudiencesTitle renders correctly", () => {
    const { asFragment } = render(<AudiencesTitle />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("AudienceChartContainer renders correctly", () => {
    const { asFragment } = render(<AudienceChartContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("AudienceChartPercent renders correctly", () => {
    const { asFragment } = render(<AudienceChartPercent />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("AudienceChartLabelWrapper renders correctly", () => {
    const { asFragment } = render(<AudienceChartLabelWrapper />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("AudienceChartLabel renders correctly", () => {
    const { asFragment } = render(<AudienceChartLabel color="green" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("AudienceChartLabelText renders correctly", () => {
    const { asFragment } = render(<AudienceChartLabelText />);
    expect(asFragment()).toMatchSnapshot();
  });
});
