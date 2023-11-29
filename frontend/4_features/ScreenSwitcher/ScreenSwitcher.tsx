"use client";
import { useStore } from "@nanostores/react";
import { $activeScreen, changeActiveScreen } from "@/shared/store";
import { ScreenSwitcherContainer } from "./ScreenSwitcher.styles";
import { ARROW_IMAGE_AREA } from "./consts";
import { ArrowIcon } from "@/6_shared/ui/icons/ArrowIcon";

export default function ScreenSwitcher() {
  const activeScreen = useStore($activeScreen);

  const handlePrevScreen = () => changeActiveScreen(activeScreen - 1);
  const handleNextScreen = () => changeActiveScreen(activeScreen + 1);

  return (
    <ScreenSwitcherContainer>
      <button onClick={handlePrevScreen}>
        <ArrowIcon area={ARROW_IMAGE_AREA} style={{ rotate: "180deg" }} />
      </button>

      <button onClick={handleNextScreen}>
        <ArrowIcon area={ARROW_IMAGE_AREA} />
      </button>
    </ScreenSwitcherContainer>
  );
}
