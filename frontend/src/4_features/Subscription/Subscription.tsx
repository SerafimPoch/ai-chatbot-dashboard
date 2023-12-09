import Image from "next/image";
import { useState } from "react";
import { BELL_IMAGE_AREA } from "./constants";
import bellHover from "./ui/bell-hover.svg?url";
import bellDay from "./ui/bell-day.svg?url";

export default function Subscription() {
  const [hovered, setHovered] = useState(false);

  const handleHover = (value: boolean) => setHovered(value);

  return (
    <button
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <Image
        src={hovered ? bellHover : bellDay}
        alt="arrow"
        width={BELL_IMAGE_AREA.width}
        height={BELL_IMAGE_AREA.height}
      />
    </button>
  );
}
