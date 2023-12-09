import Image from "next/image";
import { ViewEarning } from "@/src/5_entities/ViewEarning";
import {
  StatisticContainer,
  StatisticBoyIconWrapper,
  StatisticTitle,
  StatisticTitleWrapper,
} from "./Statistic.styles";
import boyIcon from "./assets/boy.svg?url";
import { StatisticInfo } from "./components/StatisticInfo";

export default function Statistic() {
  return (
    <StatisticContainer>
      <StatisticTitleWrapper>
        <StatisticTitle>
          Unlock Pro <br /> Insights
        </StatisticTitle>
        <ViewEarning />
      </StatisticTitleWrapper>
      <StatisticBoyIconWrapper>
        <Image priority src={boyIcon} width={576} height={576} alt="boy" />
      </StatisticBoyIconWrapper>
      <StatisticInfo />
    </StatisticContainer>
  );
}
