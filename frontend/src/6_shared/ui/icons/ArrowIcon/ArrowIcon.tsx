import Image from "next/image";
import arrowIcon from "./arrow.svg?url";
import { ARROW_IMAGE_AREA } from "@/src/4_features/ScreenSwitcher/consts";

interface TIconProps {
  style?: React.CSSProperties;
}

const ArrowIcon = ({ style }: TIconProps) => {
  return (
    <Image
      src={arrowIcon}
      alt="arrow"
      width={ARROW_IMAGE_AREA.width}
      height={ARROW_IMAGE_AREA.height}
      style={style}
    />
  );
};

export default ArrowIcon;
