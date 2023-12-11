import styled from "@emotion/styled";

interface TAudienceChartLabel {
  color: string;
}

export const AudiencesContainer = styled.div`
  border-radius: 32px;
  border: 2px solid #f2f2f2;
  grid-column: 2/3;
  grid-row: 2;
  padding: 24px 16px 24px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AudiencesTitle = styled.p`
  font-family: var(--font-sf-pro-rounded);
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: var(--text-primary);
  margin-bottom: 16px;
`;

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
