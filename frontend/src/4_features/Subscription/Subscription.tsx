import { useState } from "react";
import BellIcon from "./ui/BellIcon";

export default function Subscription() {
  const [hovered, setHovered] = useState(false);

  const handleHover = (value: boolean) => setHovered(value);

  return (
    <button
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <BellIcon active={hovered} />
    </button>
  );
}
