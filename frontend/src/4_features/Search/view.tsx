import { useMemo, useState } from "react";
import Image from "next/image";
import { useStore } from "@nanostores/react";
import { $theme } from "@/src/6_shared/store";
import { THEME_LIGHT_KEY } from "@/src/6_shared/constants";
import { SearchContainer, SearchInput } from "./styles";
import searchDay from "./ui/assets/search-day.svg?url";
import searchNight from "./ui/assets/search-night.svg?url";

export default function Search() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const theme = useStore($theme);

  const searchIcon = useMemo(
    () => (theme.type === THEME_LIGHT_KEY ? searchDay : searchNight),
    [theme.type]
  );

  const handleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <SearchContainer>
      {isSearchOpen && (
        <SearchInput type="search" onBlur={() => handleSearch()} />
      )}
      <button onClick={() => handleSearch()}>
        <Image src={searchIcon} alt="search" width={48} height={48} />
      </button>
    </SearchContainer>
  );
}
