import Image from "next/image";
import { StatisticInfo } from "@/src/5_entities/StatisticInfo";
import {
  StatisticContainer,
  StatisticBoyIconWrapper,
  StatisticTitle,
  StatisticTitleWrapper,
  ViewEarningBtn,
} from "./styles";
import boyIcon from "./assets/boy.svg?url";
import { ArrowIcon } from "@/src/6_shared/ui/icons/ArrowIcon";

export default function Statistic() {
  return (
    <StatisticContainer>
      <StatisticTitleWrapper>
        <StatisticTitle>
          Unlock Pro <br /> Insights
        </StatisticTitle>
        <ViewEarningBtn>
          View earning
          <ArrowIcon style={{ filter: "invert(100%)" }} />
        </ViewEarningBtn>
      </StatisticTitleWrapper>
      <StatisticBoyIconWrapper>
        <Image priority src={boyIcon} width={576} height={576} alt="boy" />
      </StatisticBoyIconWrapper>
      <StatisticInfo />
    </StatisticContainer>
  );
}
