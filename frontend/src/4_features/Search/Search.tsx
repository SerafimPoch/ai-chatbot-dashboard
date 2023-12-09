import { useState } from "react";
import Image from "next/image";
import { SearchContainer } from "./Search.styles";
import searchHover from "./assets/search-hover.svg?url";
import searchDay from "./assets/search-day.svg?url";
import { SEARCH_IMAGE_AREA } from "./constants";

export default function Search() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <SearchContainer>
      {isSearchOpen && <input type="search" />}
      <button onClick={() => handleSearch()}>
        <Image
          src={isSearchOpen ? searchHover : searchDay}
          alt="arrow"
          width={SEARCH_IMAGE_AREA.width}
          height={SEARCH_IMAGE_AREA.height}
        />
      </button>
    </SearchContainer>
  );
}
