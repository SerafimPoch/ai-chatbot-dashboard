import React, { createContext, useContext } from "react";
import { useStore } from "@nanostores/react";
import { $theme } from "../store";
import { THEME_LIGHT_KEY } from "../constants";

interface ThemeColors {
  coreBackground: string;
  textPrimary: string;
  textSecondary: string;
  textOpposite: string;
  grey: string;
  lightGrey: string;
}

const ThemeContext = createContext<ThemeColors | null>(null);

export const useThemeContext = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const theme = useStore($theme);
  const isLightTheme = theme.type === THEME_LIGHT_KEY;

  const themeColors: ThemeColors = {
    coreBackground: isLightTheme ? "#fff" : "#1D1D1D",
    textPrimary: isLightTheme ? "#1D1D1D" : "#fff",
    textSecondary: isLightTheme ? "#A0A5A9" : "#929292",
    textOpposite: isLightTheme ? "#1D1D1D" : "#fff",
    grey: isLightTheme ? "#F2F2F2" : "#323232",
    lightGrey: isLightTheme ? "#F0EFEF" : "#323232",
  };

  return (
    <ThemeContext.Provider value={themeColors}>
      {children}
    </ThemeContext.Provider>
  );
};
