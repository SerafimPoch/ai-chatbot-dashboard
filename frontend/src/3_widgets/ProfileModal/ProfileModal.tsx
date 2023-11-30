import { useStore } from "@nanostores/react";
import Modal from "react-modal";
import {
  $isProfileModalOpen,
  handleProfileModalState,
} from "@/src/6_shared/store";

export default function ProfileModal() {
  const isProfileModalOpen = useStore($isProfileModalOpen);

  const onCloseProfileModal = () => handleProfileModalState(false);

  return (
    <Modal
      isOpen={isProfileModalOpen}
      onRequestClose={onCloseProfileModal}
      contentLabel="Profile"
    >
      <h2>Моя Модалка</h2>
      <button onClick={onCloseProfileModal}>закрыть</button>
      <div>Содержимое модалки...</div>
    </Modal>
  );
}
