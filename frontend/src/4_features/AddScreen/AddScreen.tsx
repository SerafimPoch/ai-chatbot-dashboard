import { useState } from "react";
import Image from "next/image";
import plusDay from "./ui/plus-day.svg?url";
import plusHover from "./ui/plus-hover.svg?url";
import { PLUS_ICON_AREA } from "./constants";

export default function AddScreen() {
  const [hovered, setHovered] = useState(false);

  const handleHover = (value: boolean) => setHovered(value);

  return (
    <button
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <Image
        src={hovered ? plusHover : plusDay}
        alt="arrow"
        width={PLUS_ICON_AREA.width}
        height={PLUS_ICON_AREA.height}
      />
    </button>
  );
}
