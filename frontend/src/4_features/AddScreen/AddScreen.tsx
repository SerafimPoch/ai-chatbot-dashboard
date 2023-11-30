import { useState } from "react";
import PlusIcon from "./ui/PlusIcon";

export default function AddScreen() {
  const [hovered, setHovered] = useState(false);

  const handleHover = (value: boolean) => setHovered(value);

  return (
    <button
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <PlusIcon active={hovered} />
    </button>
  );
}
