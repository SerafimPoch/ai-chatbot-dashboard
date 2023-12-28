import React from "react";
import { render } from "@testing-library/react";
import { SearchContainer, SearchInput } from "../Search.styles";

describe("Search page components", () => {
  it("SearchContainer renders correctly", () => {
    const { asFragment } = render(<SearchContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("SearchInput renders correctly", () => {
    const { asFragment } = render(<SearchInput />);
    expect(asFragment()).toMatchSnapshot();
  });
});
