"use client";
import { ScreenSwitcher } from "@/src/4_features/ScreenSwitcher";
import { HeaderContainer, HeaderTitle, SwitcherWrapper } from "./Header.styles";
import { ProfileIcon } from "@/src/5_entities/ProfileIcon";

export default function Header() {
  return (
    <HeaderContainer>
      <SwitcherWrapper>
        <HeaderTitle>Insights</HeaderTitle>
        <ScreenSwitcher />
      </SwitcherWrapper>
      <ProfileIcon />
    </HeaderContainer>
  );
}
