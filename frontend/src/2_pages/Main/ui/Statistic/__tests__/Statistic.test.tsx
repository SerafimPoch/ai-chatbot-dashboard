import React from "react";
import { render } from "@testing-library/react";
import {
  StatisticContainer,
  StatisticBoyIconWrapper,
  StatisticTitleWrapper,
  StatisticTitle,
  ViewEarningBtn,
} from "../Statistic.styles";

describe("Statistic page components", () => {
  it("StatisticContainer renders correctly", () => {
    const { asFragment } = render(<StatisticContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("StatisticBoyIconWrapper renders correctly", () => {
    const { asFragment } = render(<StatisticBoyIconWrapper />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("StatisticTitleWrapper renders correctly", () => {
    const { asFragment } = render(<StatisticTitleWrapper />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("StatisticTitle renders correctly", () => {
    const { asFragment } = render(<StatisticTitle />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("ViewEarningBtn renders correctly", () => {
    const { asFragment } = render(<ViewEarningBtn />);
    expect(asFragment()).toMatchSnapshot();
  });
});
