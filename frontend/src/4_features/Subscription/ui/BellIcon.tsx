import Image from "next/image";
import bellDay from "./assets/bell-day.svg?url";
import bellHover from "./assets/bell-hover.svg?url";
import { BELL_IMAGE_AREA } from "../consts";

interface TIconProps {
  active: boolean;
}

const BellIcon = ({ active }: TIconProps) => (
  <Image
    src={active ? bellHover : bellDay}
    alt="arrow"
    width={BELL_IMAGE_AREA.width}
    height={BELL_IMAGE_AREA.height}
  />
);

BellIcon.displayName = "BellIcon";
export default BellIcon;
