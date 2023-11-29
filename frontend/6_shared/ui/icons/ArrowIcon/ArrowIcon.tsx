import Image from "next/image";
import arrowIcon from "./arrow.svg?url";
import { TIconProps } from "../../../types";

const ArrowIcon = ({ area, style }: TIconProps) => {
  return (
    <Image
      src={arrowIcon}
      alt="arrow"
      width={area.width}
      height={area.height}
      style={style}
    />
  );
};

export default ArrowIcon;
