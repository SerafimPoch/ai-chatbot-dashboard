import Image from "next/image";
import { useMemo, useState } from "react";
import { useStore } from "@nanostores/react";
import { $theme } from "@/src/6_shared/store";
import bellHover from "./ui/assets/bell-hover.svg?url";
import bellDay from "./ui/assets/bell-day.svg?url";
import bellNight from "./ui/assets/bell-night.svg?url";
import { THEME_LIGHT_KEY } from "@/src/6_shared/constants";

export default function Subscription() {
  const [hovered, setHovered] = useState(false);

  const theme = useStore($theme);

  const subscriptionIcon = useMemo(
    () => (theme.type === THEME_LIGHT_KEY ? bellDay : bellNight),
    [theme.type]
  );

  const handleHover = (value: boolean) => setHovered(value);

  return (
    <button
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <Image
        src={hovered ? bellHover : subscriptionIcon}
        alt="bell"
        width={48}
        height={48}
      />
    </button>
  );
}
