import React from "react";
import Image from "next/image";
import { TIconProps } from "../../types";

export const ArrowIcon = ({ area, style }: TIconProps) => {
  return (
    <Image
      src="@/public/icons/arrow.svg"
      alt="arrow"
      layout="fixed"
      width={area.width}
      height={area.height}
      style={style}
    />
  );
};
