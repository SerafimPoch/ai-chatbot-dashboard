import { useThemeContext } from "@/src/6_shared/contexts/ThemeContext";
import { LAPTOP_MQ, MOBILE_MQ, TABLET_MQ } from "@/src/6_shared/media-queries";
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

  @media (max-width: ${LAPTOP_MQ}px) {
    grid-row: 2;
    grid-column: 2/3;
  }

  @media (max-width: ${TABLET_MQ}px) {
    grid-row: 3;
    grid-column: 1/3;
  }

  @media (max-width: ${MOBILE_MQ}px) {
    padding: 24px 16px 24px 24px;
  }
`;

export const AudiencesTitle = styled.p`
  ${() => {
    const themeColors = useThemeContext();

    return `
      font-family: var(--font-sf-pro-rounded);
      font-size: 20px;
      font-weight: 600;
      line-height: 24px;
      color: ${themeColors?.textPrimary};
      margin-bottom: 16px;
    `;
  }}
`;

export const AudienceChartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const AudienceChartPercent = styled.p`
  ${() => {
    const themeColors = useThemeContext();

    return `
      font-family: var(--font-sf-pro-display);
      font-size: 64px;
      font-weight: 700;
      line-height: 64px;
      color: ${themeColors?.textPrimary};
      margin-bottom: 12px;
    `;
  }}
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
  ${() => {
    const themeColors = useThemeContext();

    return `
      font-family: var(--font-sf-pro-rounded);
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      color: ${themeColors?.textPrimary};
      margin-right: 5px;
    `;
  }}
`;
