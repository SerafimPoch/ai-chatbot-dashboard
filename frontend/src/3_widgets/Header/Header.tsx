"use client";
import { ScreenSwitcher } from "@/src/4_features/ScreenSwitcher";
import { HeaderContainer, HeaderTitle, SwitcherWrapper } from "./Header.styles";

export default function Header() {
  return (
    <HeaderContainer>
      <SwitcherWrapper>
        <HeaderTitle>Insights</HeaderTitle>
        <ScreenSwitcher />
      </SwitcherWrapper>
    </HeaderContainer>
  );
}
