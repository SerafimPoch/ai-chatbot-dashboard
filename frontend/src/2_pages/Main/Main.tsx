"use client";
import { useStore } from "@nanostores/react";
import dynamic from "next/dynamic";
import { Header } from "@/src/3_widgets/Header";
import { ProfileModal } from "@/src/3_widgets/ProfileModal";
import { $isProfileModalOpen } from "@/src/6_shared/store";
import { MainContainer, MainContentWrapper } from "./Main.styles";

const Membership = dynamic(
  () => import("@/src/3_widgets/Membership").then((mod) => mod.Membership),
  {
    ssr: false,
  }
);

export default function MainPage() {
  const isProfileModalOpen = useStore($isProfileModalOpen);

  return (
    <MainContainer>
      {isProfileModalOpen && <ProfileModal />}
      <Header />
      <MainContentWrapper>
        <Membership />
      </MainContentWrapper>
    </MainContainer>
  );
}
