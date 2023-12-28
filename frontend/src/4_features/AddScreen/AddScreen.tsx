import { useMemo, useState } from "react";
import Image from "next/image";
import { useStore } from "@nanostores/react";
import { $theme } from "@/src/6_shared/store";
import plusDay from "./ui/assets/plus-day.svg?url";
import plusNight from "./ui/assets/plus-night.svg?url";
import plusHover from "./ui/assets/plus-hover.svg?url";
import { PLUS_ICON_AREA } from "./AddScreen.constants";
import { THEME_LIGHT_KEY } from "@/src/6_shared/constants";

export default function AddScreen() {
  const [hovered, setHovered] = useState(false);

  const theme = useStore($theme);

  const screenIcon = useMemo(
    () => (theme.type === THEME_LIGHT_KEY ? plusDay : plusNight),
    [theme]
  );

  const handleHover = (value: boolean) => setHovered(value);

  return (
    <button
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <Image
        src={hovered ? plusHover : screenIcon}
        alt="screen"
        width={PLUS_ICON_AREA.width}
        height={PLUS_ICON_AREA.height}
      />
    </button>
  );
}
