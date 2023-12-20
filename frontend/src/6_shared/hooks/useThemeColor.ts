import { useStore } from "@nanostores/react";
import { $theme } from "../store";
import { THEME_LIGHT_KEY } from "../constants";

export const useThemeColor = () => {
  const theme = useStore($theme);
  const isLightTheme = theme.type === THEME_LIGHT_KEY;

  return {
    coreBackground: isLightTheme ? "#fff" : "#1D1D1D",
    textPrimary: isLightTheme ? "#1D1D1D" : "#fff",
    textSecondary: isLightTheme ? "#A0A5A9" : "#929292",
    grey: isLightTheme ? "#F2F2F2" : "#323232",
  };
};
