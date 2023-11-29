import { memo } from "react";
import Image from "next/image";
import { TIconProps } from "@/shared/types";
import avatarUrl from "./avatar.svg?url";

const AvatarIcon = memo(({ area, style }: TIconProps) => (
  <Image
    src={avatarUrl}
    alt="arrow"
    width={area.width}
    height={area.height}
    style={style}
  />
));

AvatarIcon.displayName = "AvatarIcon";
export default AvatarIcon;
