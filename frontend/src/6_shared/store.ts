import { atom } from "nanostores";
import { THEME_LIGHT_KEY } from "./constants";

export const $activeScreen = atom<number>(0);
export const $isProfileModalOpen = atom<boolean>(false);
export const $theme = atom<string>(THEME_LIGHT_KEY);
export const $activeAudienceChart = atom<number>(0);
export const $periodOfTime = atom<string>("1d");

export const changeActiveScreen = (screen: number) => $activeScreen.set(screen);
export const changeActiveAudienceChart = (value: number) =>
  $activeAudienceChart.set(value);

export const handleProfileModalState = (state: boolean) =>
  $isProfileModalOpen.set(state);

export const onChangeTheme = (theme: string) => $theme.set(theme);
export const onChangePeriodOfTime = (value: string) => $periodOfTime.set(value);
