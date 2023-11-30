"use client";
import { Header } from "@/src/3_widgets/Header";
import { MainContainer } from "./Main.styles";
import { ProfileModal } from "@/src/3_widgets/ProfileModal";
import { useStore } from "@nanostores/react";
import { $isProfileModalOpen } from "@/src/6_shared/store";

export default function MainPage() {
  const isProfileModalOpen = useStore($isProfileModalOpen);

  return (
    <MainContainer>
      {isProfileModalOpen && <ProfileModal />}
      <Header />
    </MainContainer>
  );
}
