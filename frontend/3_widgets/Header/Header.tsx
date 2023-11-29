"use client";
import { ScreenSwitcher } from "@/4_features/ScreenSwitcher";
import { HeaderContainer, HeaderTitle, SwitcherWrapper } from "./Header.styles";
import { ProfileIcon } from "@/5_entities/ProfileIcon";

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
