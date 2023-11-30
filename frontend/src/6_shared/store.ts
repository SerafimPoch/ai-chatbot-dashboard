import { atom } from "nanostores";

export const $activeScreen = atom<number>(0);
export const $isProfileModalOpen = atom<boolean>(false);

export const changeActiveScreen = (screen: number) => $activeScreen.set(screen);

export const handleProfileModalState = (state: boolean) =>
  $isProfileModalOpen.set(state);
