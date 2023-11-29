"use client";
import { useStore } from "@nanostores/react";
import { $activeScreen, changeActiveScreen } from "@/shared/store";
import { ScreenSwitcherContainer } from "./ScreenSwitcher.styles";
import { ARROW_IMAGE_AREA } from "./consts";
import ArrowButton from "./ui/ArrowButton";

export default function ScreenSwitcher() {
  const activeScreen = useStore($activeScreen);

  const handlePrevScreen = () => changeActiveScreen(activeScreen - 1);
  const handleNextScreen = () => changeActiveScreen(activeScreen + 1);

  return (
    <ScreenSwitcherContainer>
      <ArrowButton
        handleScreenClick={handlePrevScreen}
        area={ARROW_IMAGE_AREA}
        style={{ rotate: "180deg" }}
      />

      <ArrowButton
        handleScreenClick={handleNextScreen}
        area={ARROW_IMAGE_AREA}
      />
    </ScreenSwitcherContainer>
  );
}
