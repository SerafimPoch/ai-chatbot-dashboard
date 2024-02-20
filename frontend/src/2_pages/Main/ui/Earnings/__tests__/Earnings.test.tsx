import React from "react";
import { render } from "@testing-library/react";
import {
  EarningsContainer,
  EarningsTitleWrapper,
  EarningsTitle,
  EarningsContent,
  EarningsItemWrapper,
  EarningsContentHeadlines,
  EarningsContentBoldText,
  EarningsContentLifeWrapper,
  EarningsContentLightText,
  EarningsContentCapacity,
  EarningsChatBotContainer,
  EarningsChatBotName,
  EarningsChatBotModel,
  EarningsProgressBarWrapper,
  EarningsPercentIndicatorWrapper,
  EarningsTimeSwitcherWrapper,
} from "../styles";

describe("Earnings page components", () => {
  it("EarningsContainer renders correctly", () => {
    const { asFragment } = render(<EarningsContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("EarningsTitleWrapper renders correctly", () => {
    const { asFragment } = render(<EarningsTitleWrapper />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("EarningsTitle renders correctly", () => {
    const { asFragment } = render(<EarningsTitle />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("EarningsContent renders correctly", () => {
    const { asFragment } = render(<EarningsContent />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("EarningsItemWrapper renders correctly", () => {
    const { asFragment } = render(<EarningsItemWrapper />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("EarningsContentHeadlines renders correctly", () => {
    const { asFragment } = render(<EarningsContentHeadlines />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("EarningsContentBoldText renders correctly", () => {
    const { asFragment } = render(<EarningsContentBoldText />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("EarningsContentLifeWrapper renders correctly", () => {
    const { asFragment } = render(<EarningsContentLifeWrapper />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("EarningsContentLightText renders correctly", () => {
    const { asFragment } = render(<EarningsContentLightText />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("EarningsContentCapacity renders correctly", () => {
    const { asFragment } = render(<EarningsContentCapacity />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("EarningsChatBotContainer renders correctly", () => {
    const { asFragment } = render(<EarningsChatBotContainer />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("EarningsChatBotName renders correctly", () => {
    const { asFragment } = render(<EarningsChatBotName />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("EarningsChatBotModel renders correctly", () => {
    const { asFragment } = render(<EarningsChatBotModel />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("EarningsProgressBarWrapper renders correctly", () => {
    const { asFragment } = render(<EarningsProgressBarWrapper />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("EarningsPercentIndicatorWrapper renders correctly", () => {
    const { asFragment } = render(<EarningsPercentIndicatorWrapper />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("EarningsTimeSwitcherWrapper renders correctly", () => {
    const { asFragment } = render(<EarningsTimeSwitcherWrapper />);
    expect(asFragment()).toMatchSnapshot();
  });
});
