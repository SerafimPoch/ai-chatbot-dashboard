import { useState } from "react";
import SearchIcon from "./ui/SearchIcon";
import { SearchContainer } from "./Search.styles";

export default function Search() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <SearchContainer>
      {isSearchOpen && <input type="search" />}
      <button onClick={() => handleSearch()}>
        <SearchIcon active={isSearchOpen} />
      </button>
    </SearchContainer>
  );
}
