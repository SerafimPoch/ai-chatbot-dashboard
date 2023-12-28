import { useStore } from "@nanostores/react";
import Modal from "react-modal";
import Image from "next/image";
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
import { ThemeToggle } from "@/src/4_features/ThemeToggle";
import { Logout } from "@/src/4_features/Logout";
import { THEME_LIGHT_KEY } from "@/src/6_shared/constants";
import userIcon from "./assets/user-day.svg?url";
import chatBotIcon from "./assets/manageBot-day.svg?url";
import settingsIcon from "./assets/settings-day.svg?url";
import {
  ProfileTag,
  ProfileInfoWrapper,
  ProfileName,
  ProfileInfoOptionList,
  ProfileThemeWrapper,
  ProfileLogoutWrapper,
  ProfileItemWrapper,
  ProfileItemText,
} from "./ProfileModal.styles";

export default function ProfileModal() {
  const isProfileModalOpen = useStore($isProfileModalOpen);
  const theme = useStore($theme);
  const iconArea = 24;

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
        <ProfileItemWrapper>
          <Image src={userIcon} alt="user" width={iconArea} height={iconArea} />
          <ProfileItemText>Profile</ProfileItemText>
        </ProfileItemWrapper>
        <ProfileItemWrapper>
          <Image src={chatBotIcon} alt="manage-bot" width={24} height={24} />
          <ProfileItemText>Manage chatbots</ProfileItemText>
        </ProfileItemWrapper>
        <ProfileItemWrapper>
          <Image src={settingsIcon} alt="settings" width={24} height={24} />
          <ProfileItemText>Settings</ProfileItemText>
        </ProfileItemWrapper>
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
