import Image from "next/image";
import arrowIcon from "./assets/arrow-dark.svg?url";
import arrowDayIcon from "./assets/arrow.svg?url";
import { useStore } from "@nanostores/react";
import { $theme } from "@/src/6_shared/store";
import { THEME_LIGHT_KEY } from "@/src/6_shared/constants";

interface TIconProps {
  style?: React.CSSProperties;
}

const ArrowIcon = ({ style }: TIconProps) => {
  const theme = useStore($theme);
  return (
    <Image
      src={theme.type === THEME_LIGHT_KEY ? arrowDayIcon : arrowIcon}
      alt="arrow"
      width={24}
      height={24}
      style={style}
    />
  );
};

export default ArrowIcon;
