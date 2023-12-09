"use client";
import { useStore } from "@nanostores/react";
import dynamic from "next/dynamic";
import { Header } from "@/src/3_widgets/Header";
import { ProfileModal } from "@/src/3_widgets/ProfileModal";
import { Audiences } from "@/src/3_widgets/Audiences";
import { Statistic } from "@/src/3_widgets/Statistic";
import { Earnings } from "@/src/3_widgets/Earnings";
import { $isProfileModalOpen } from "@/src/6_shared/store";
import { Container, MainContainer, MainContentWrapper } from "./Main.styles";

const Membership = dynamic(() =>
  import("@/src/3_widgets/Membership").then((mod) => mod.Membership)
);

export default function MainPage() {
  const isProfileModalOpen = useStore($isProfileModalOpen);

  return (
    <MainContainer>
      {isProfileModalOpen && <ProfileModal />}
      <Header />
      <Container>
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
