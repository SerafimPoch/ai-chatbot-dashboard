import Image from "next/image";
import searchDay from "./assets/search-day.svg?url";
import searchHover from "./assets/search-hover.svg?url";
import { SEARCH_IMAGE_AREA } from "../constants";

interface TIconProps {
  active: boolean;
}

const SearchIcon = ({ active }: TIconProps) => (
  <Image
    src={active ? searchHover : searchDay}
    alt="arrow"
    width={SEARCH_IMAGE_AREA.width}
    height={SEARCH_IMAGE_AREA.height}
  />
);

SearchIcon.displayName = "SearchIcon";
export default SearchIcon;
