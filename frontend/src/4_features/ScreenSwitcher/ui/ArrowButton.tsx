import { TIconProps } from "@/src/6_shared/types";
import { ArrowIcon } from "@/src/6_shared/ui/icons/Arrow";
import { memo } from "react";

interface TArrowButtonProps {
  area: TIconProps["area"];
  style?: TIconProps["style"];
  handleScreenClick: React.MouseEventHandler;
}

const ArrowButton = memo(
  ({ area, style, handleScreenClick }: TArrowButtonProps) => (
    <button onClick={handleScreenClick}>
      <ArrowIcon area={area} style={style} />
    </button>
  )
);

ArrowButton.displayName = "ArrowButton";
export default ArrowButton;
