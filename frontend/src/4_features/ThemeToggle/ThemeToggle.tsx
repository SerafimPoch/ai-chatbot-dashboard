import { useStore } from "@nanostores/react";
import { $theme, onChangeTheme } from "@/src/6_shared/store";
import { ThemeItem, ThemeToggleContainer } from "./ThemeToggle.styles";
import { THEME_LIGHT_KEY, THEME_DARK_KEY } from "@/src/6_shared/constants";

export default function ThemeToggle() {
  const theme = useStore($theme);
  const isLightTheme = theme.type === THEME_LIGHT_KEY;
  const isDarkTheme = theme.type === THEME_DARK_KEY;

  return (
    <ThemeToggleContainer>
      <ThemeItem
        active={isLightTheme}
        onClick={() => onChangeTheme(THEME_LIGHT_KEY)}
      >
        Light
      </ThemeItem>
      <ThemeItem
        active={isDarkTheme}
        onClick={() => onChangeTheme(THEME_DARK_KEY)}
      >
        Dark
      </ThemeItem>
    </ThemeToggleContainer>
  );
}
