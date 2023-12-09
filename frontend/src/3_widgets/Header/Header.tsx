import { ScreenSwitcher } from "@/src/4_features/ScreenSwitcher";
import { AddScreen } from "@/src/4_features/AddScreen";
import { Subscription } from "@/src/4_features/Subscription";
import { Search } from "@/src/4_features/Search";
import { ProfileIcon } from "@/src/6_shared/ui/icons/ProfileIcon";
import { handleProfileModalState } from "@/src/6_shared/store";
import {
  HeaderContainer,
  HeaderTitle,
  SwitcherWrapper,
  HeaderNavbar,
} from "./Header.styles";

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
        <button onClick={() => handleProfileModalState(true)}>
          <ProfileIcon area={{ width: 48, height: 48 }} />
        </button>
      </HeaderNavbar>
    </HeaderContainer>
  );
}
