import Image from "next/image";
import plusDay from "./assets/plus-day.svg?url";
import plusHover from "./assets/plus-hover.svg?url";
import { PLUS_ICON_AREA } from "../consts";

interface TIconProps {
  active: boolean;
}

const PlusIcon = ({ active }: TIconProps) => (
  <Image
    src={active ? plusHover : plusDay}
    alt="arrow"
    width={PLUS_ICON_AREA.width}
    height={PLUS_ICON_AREA.height}
  />
);

PlusIcon.displayName = "PlusIcon";
export default PlusIcon;
