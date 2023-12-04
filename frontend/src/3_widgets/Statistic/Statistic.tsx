import Image from "next/image";
import { ViewEarning } from "@/src/5_entities/ViewEarning";
import { StatisticInfo } from "@/src/5_entities/StatisticInfo";
import {
  StatisticContainer,
  StatisticBoyIconWrapper,
  StatisticTitle,
  StatisticTitleWrapper,
} from "./Statistic.styles";
import boyIcon from "./ui/boy.svg?url";

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
