"use client";
import { useStore } from "@nanostores/react";
import dynamic from "next/dynamic";
import { Header } from "@/src/3_widgets/Header";
import { ProfileModal } from "@/src/3_widgets/ProfileModal";
import { Audiences } from "@/src/3_widgets/Audiences";
import { $isProfileModalOpen } from "@/src/6_shared/store";
import { MainContainer, MainContentWrapper, Test } from "./Main.styles";

const Membership = dynamic(() =>
  import("@/src/3_widgets/Membership").then((mod) => mod.Membership)
);

export default function MainPage() {
  const isProfileModalOpen = useStore($isProfileModalOpen);

  return (
    <MainContainer>
      {isProfileModalOpen && <ProfileModal />}
      <Header />
      <MainContentWrapper>
        <Test>test</Test>
        <Membership />
        <Audiences />
      </MainContentWrapper>
    </MainContainer>
  );
}
