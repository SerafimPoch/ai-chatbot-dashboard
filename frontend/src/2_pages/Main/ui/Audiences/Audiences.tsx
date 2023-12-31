import Image from "next/image";
import { useStore } from "@nanostores/react";
import {
  AudienceChartContainer,
  AudienceChartLabel,
  AudienceChartLabelText,
  AudienceChartLabelWrapper,
  AudienceChartPercent,
  AudiencesContainer,
  AudiencesTitle,
} from "./Audiences.styles";
import { ArrowToggler } from "@/src/4_features/ArrowToggler";
import { $activeAudienceChart } from "@/src/6_shared/store";
import { PercentIndicator } from "@/src/6_shared/ui/components/PercentIndicator";
import { AUDIENCE_DATA } from "./constants";
import chartMockIcon from "./assets/circle.svg?url";

export default function Audiences() {
  const activeId = useStore($activeAudienceChart);

  return (
    <AudiencesContainer>
      <div>
        <AudiencesTitle>Audiences</AudiencesTitle>
        <AudienceChartContainer>
          <Image
            src={chartMockIcon}
            alt="chart-mock"
            width={138}
            height={138}
          />
          {AUDIENCE_DATA.filter((el) => el.id === activeId).map(
            ({ id, percent, info }) => (
              <div key={id}>
                <AudienceChartPercent>{percent}%</AudienceChartPercent>
                {info.map(({ name, color, percent }) => (
                  <AudienceChartLabelWrapper key={name}>
                    <AudienceChartLabel color={color} />
                    <AudienceChartLabelText>{name}</AudienceChartLabelText>
                    <PercentIndicator percent={percent} />
                  </AudienceChartLabelWrapper>
                ))}
              </div>
            )
          )}
        </AudienceChartContainer>
      </div>
      <ArrowToggler />
    </AudiencesContainer>
  );
}
