import { useStore } from "@nanostores/react";
import { $activeScreen, changeActiveScreen } from "@/src/6_shared/store";
import { ScreenSwitcherContainer } from "./ScreenSwitcher.styles";
import { ArrowIcon } from "@/src/6_shared/ui/icons/ArrowIcon";

export default function ScreenSwitcher() {
  const activeScreen = useStore($activeScreen);

  const handlePrevScreen = () => changeActiveScreen(activeScreen - 1);
  const handleNextScreen = () => changeActiveScreen(activeScreen + 1);

  return (
    <ScreenSwitcherContainer>
      <button onClick={handlePrevScreen}>
        <ArrowIcon style={{ rotate: "180deg" }} />
      </button>
      <button onClick={handleNextScreen}>
        <ArrowIcon />
      </button>
    </ScreenSwitcherContainer>
  );
}
