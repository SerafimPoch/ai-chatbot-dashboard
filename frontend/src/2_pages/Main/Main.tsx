"use client";
import { useStore } from "@nanostores/react";
import dynamic from "next/dynamic";
import { Header } from "@/src/3_widgets/Header";
import { ProfileModal } from "@/src/3_widgets/ProfileModal";
import { Audiences } from "@/src/2_pages/Main/components/Audiences";
import { Earnings } from "./components/Earnings";
import { $isProfileModalOpen } from "@/src/6_shared/store";
import { Statistic } from "./components/Statistic";
import { Container, MainContainer, MainContentWrapper } from "./Main.styles";

const Membership = dynamic(() =>
  import("@/src/5_entities/Membership").then((mod) => mod.Membership)
);

export default function MainPage() {
  const isProfileModalOpen = useStore($isProfileModalOpen);

  return (
    <MainContainer>
      {isProfileModalOpen && <ProfileModal />}
      <Container>
        <Header />
        <MainContentWrapper>
          <Statistic />
          <Membership />
          <Audiences />
          <Earnings />
        </MainContentWrapper>
      </Container>
    </MainContainer>
  );
}
