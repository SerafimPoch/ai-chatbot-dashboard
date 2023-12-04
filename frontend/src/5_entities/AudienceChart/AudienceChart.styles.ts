import styled from "@emotion/styled";

interface TAudienceChartLabel {
  color: string;
}

export const AudienceChartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const AudienceChartPercent = styled.p`
  font-family: var(--font-sf-pro-display);
  font-size: 64px;
  font-weight: 700;
  line-height: 64px;
  color: var(--text-primary);
  margin-bottom: 12px;
`;

export const AudienceChartLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const AudienceChartLabel = styled.div<TAudienceChartLabel>`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background-color: ${({ color }) => color};
`;

export const AudienceChartLabelText = styled.p`
  font-family: var(--font-sf-pro-rounded);
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: var(--text-primary);
  margin-right: 5px;
`;
