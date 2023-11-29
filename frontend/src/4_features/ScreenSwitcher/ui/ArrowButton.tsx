import { TIconProps } from "@/src/6_shared/types";
import { ArrowIcon } from "@/src/6_shared/ui/icons/Arrow";

interface TArrowButtonProps {
  area: TIconProps["area"];
  style?: TIconProps["style"];
  handleScreenClick: React.MouseEventHandler;
}

const ArrowButton = ({ area, style, handleScreenClick }: TArrowButtonProps) => (
  <button onClick={handleScreenClick}>
    <ArrowIcon area={area} style={style} />
  </button>
);

export default ArrowButton;
