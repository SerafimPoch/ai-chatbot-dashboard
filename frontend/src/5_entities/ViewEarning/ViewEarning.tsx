import { ArrowIcon } from "@/src/6_shared/ui/icons/ArrowIcon";
import { ViewEarningBtn } from "./ViewEarning.styles";

export default function ViewEarning() {
  const handleClick = () => console.log("view earning");

  return (
    <ViewEarningBtn onClick={handleClick}>
      View earning
      <ArrowIcon style={{ filter: "invert(100%)" }} />
    </ViewEarningBtn>
  );
}
