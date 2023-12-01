import { atom } from "nanostores";
import { THEME_LIGHT_KEY } from "./constants";

export const $activeScreen = atom<number>(0);
export const $isProfileModalOpen = atom<boolean>(false);
export const $theme = atom<string>(THEME_LIGHT_KEY);

export const changeActiveScreen = (screen: number) => $activeScreen.set(screen);

export const handleProfileModalState = (state: boolean) =>
  $isProfileModalOpen.set(state);

export const onChangeTheme = (theme: string) => $theme.set(theme);
