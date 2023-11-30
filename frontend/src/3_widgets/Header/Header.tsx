"use client";
import { ScreenSwitcher } from "@/src/4_features/ScreenSwitcher";
import {
  HeaderContainer,
  HeaderTitle,
  SwitcherWrapper,
  HeaderNavbar,
} from "./Header.styles";
import { Profile } from "@/src/4_features/Profile";
import { AddScreen } from "@/src/4_features/AddScreen";
import { Subscription } from "@/src/4_features/Subscription";
import { Search } from "@/src/4_features/Search";

export default function Header() {
  return (
    <HeaderContainer>
      <SwitcherWrapper>
        <HeaderTitle>Insights</HeaderTitle>
        <ScreenSwitcher />
      </SwitcherWrapper>
      <HeaderNavbar>
        <AddScreen />
        <Subscription />
        <Search />
        <Profile />
      </HeaderNavbar>
    </HeaderContainer>
  );
}
