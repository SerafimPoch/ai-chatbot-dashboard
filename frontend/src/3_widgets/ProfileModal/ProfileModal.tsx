import { useStore } from "@nanostores/react";
import Modal from "react-modal";
import {
  $isProfileModalOpen,
  handleProfileModalState,
} from "@/src/6_shared/store";
import { CUSTOM_MODAL_STYLES, PROFILE_MODAL_ICON_AREA } from "./constants";
import { ProfileIcon } from "@/src/5_entities/ProfileIcon";
import { UserOption } from "@/src/5_entities/UserOption";
import { ManageBotOption } from "@/src/5_entities/ManageBotOption";
import { SettingsOption } from "@/src/5_entities/SettingsOption";
import {
  ProfileTag,
  ProfileInfoWrapper,
  ProfileName,
  ProfileInfoOptionList,
} from "./ProfileModal.styles";

export default function ProfileModal() {
  const isProfileModalOpen = useStore($isProfileModalOpen);

  const onCloseProfileModal = () => handleProfileModalState(false);

  return (
    <Modal
      id="profile_modal"
      isOpen={isProfileModalOpen}
      onRequestClose={onCloseProfileModal}
      contentLabel="Profile"
      style={CUSTOM_MODAL_STYLES}
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
    </Modal>
  );
}
