import { atom } from "nanostores";

export const $activeScreen = atom<number>(0);

export function changeActiveScreen(screen: number) {
  $activeScreen.set(screen);
}
