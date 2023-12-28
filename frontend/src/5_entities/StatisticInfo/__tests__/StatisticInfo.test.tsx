import React from "react";
import { render } from "@testing-library/react";
import {
  StatisticInfoContainer,
  StatisticInfoTitle,
  StatisticInfoValue,
  StatisticInfoNumbersWrapper,
} from "../StatisticInfo.styles";

describe("StatisticInfo page components", () => {
  it("StatisticInfoContainer renders correctly", () => {
    const { asFragment } = render(<StatisticInfoContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("StatisticInfoTitle renders correctly", () => {
    const { asFragment } = render(<StatisticInfoTitle />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("StatisticInfoValue renders correctly", () => {
    const { asFragment } = render(<StatisticInfoValue />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("StatisticInfoNumbersWrapper renders correctly", () => {
    const { asFragment } = render(<StatisticInfoNumbersWrapper />);
    expect(asFragment()).toMatchSnapshot();
  });
});
