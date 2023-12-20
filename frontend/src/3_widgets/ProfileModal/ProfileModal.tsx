import { useStore } from "@nanostores/react";
import Modal from "react-modal";
import {
  $isProfileModalOpen,
  $theme,
  handleProfileModalState,
} from "@/src/6_shared/store";
import {
  CUSTOM_MODAL_STYLES_DAY,
  CUSTOM_MODAL_STYLES_NIGHT,
  PROFILE_MODAL_ICON_AREA,
} from "./constants";
import { ProfileIcon } from "@/src/6_shared/ui/icons/ProfileIcon";
import { UserOption } from "./components/UserOption";
import { ManageBotOption } from "./components/ManageBotOption";
import { SettingsOption } from "./components/SettingsOption";
import { ThemeToggle } from "@/src/4_features/ThemeToggle";
import { Logout } from "@/src/4_features/Logout";
import {
  ProfileTag,
  ProfileInfoWrapper,
  ProfileName,
  ProfileInfoOptionList,
  ProfileThemeWrapper,
  ProfileLogoutWrapper,
} from "./ProfileModal.styles";
import { THEME_LIGHT_KEY } from "@/src/6_shared/constants";

export default function ProfileModal() {
  const isProfileModalOpen = useStore($isProfileModalOpen);

  const theme = useStore($theme);

  const onCloseProfileModal = () => handleProfileModalState(false);

  return (
    <Modal
      id="profile_modal"
      isOpen={isProfileModalOpen}
      onRequestClose={onCloseProfileModal}
      contentLabel="Profile"
      style={
        theme.type === THEME_LIGHT_KEY
          ? CUSTOM_MODAL_STYLES_DAY
          : CUSTOM_MODAL_STYLES_NIGHT
      }
    >
      <ProfileInfoWrapper>
        <div>
          <ProfileName>Moyo Shiro</ProfileName>
          <ProfileTag>@moyoshirotora</ProfileTag>
        </div>
        <ProfileIcon area={PROFILE_MODAL_ICON_AREA} />
      </ProfileInfoWrapper>
      <ProfileInfoOptionList>
        <UserOption />
        <ManageBotOption />
        <SettingsOption />
      </ProfileInfoOptionList>
      <ProfileThemeWrapper>
        <ThemeToggle />
      </ProfileThemeWrapper>
      <ProfileLogoutWrapper>
        <Logout />
      </ProfileLogoutWrapper>
    </Modal>
  );
}
