import Image from "next/image";
import arrowIcon from "./arrow.svg?url";

interface TIconProps {
  style?: React.CSSProperties;
}

const ArrowIcon = ({ style }: TIconProps) => {
  return (
    <Image src={arrowIcon} alt="arrow" width={24} height={24} style={style} />
  );
};

export default ArrowIcon;
