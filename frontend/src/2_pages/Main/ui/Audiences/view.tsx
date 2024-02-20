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
} from "./styles";
import { ArrowToggler } from "@/src/4_features/ArrowToggler";
import { $activeAudienceChart } from "@/src/6_shared/store";
import { PercentIndicator } from "@/src/6_shared/ui/components/PercentIndicator";
import chartMockIcon from "./assets/circle.svg?url";
import { useAudience } from "./api";

export default function Audiences() {
  const activeId = useStore($activeAudienceChart);
  const { data, isLoading } = useAudience();

  return (
    <AudiencesContainer>
      {isLoading ? (
        <AudiencesTitle>Loading...</AudiencesTitle>
      ) : (
        <div>
          <AudiencesTitle>Audiences</AudiencesTitle>
          <AudienceChartContainer>
            <Image
              src={chartMockIcon}
              alt="chart-mock"
              width={138}
              height={138}
            />
            {data
              ?.filter((el) => el.id === activeId)
              .map(({ id, percent, info }) => (
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
              ))}
          </AudienceChartContainer>
        </div>
      )}

      <ArrowToggler />
    </AudiencesContainer>
  );
}
