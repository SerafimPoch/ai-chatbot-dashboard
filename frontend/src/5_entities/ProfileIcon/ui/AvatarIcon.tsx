import React, { memo } from "react";
import Image from "next/image";
import { TIconProps } from "@/shared/types";

const AvatarIcon = memo(({ area, style }: TIconProps) => {
  return (
    <Image
      src="/icons/avatar.svg"
      alt="arrow"
      width={area.width}
      height={area.height}
      style={style}
    />
  );
});

AvatarIcon.displayName = "AvatarIcon";
export default AvatarIcon;
