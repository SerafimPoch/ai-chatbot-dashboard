import { useThemeContext } from "@/src/6_shared/contexts/ThemeContext";
import styled from "@emotion/styled";

export const StatisticInfoContainer = styled.div`
  ${() => {
    const themeColors = useThemeContext();

    return `
      padding: 24px 36px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      border-radius: 24px;
      border: 1px solid rgba(255, 255, 255, 0.7);
      background-color: ${themeColors?.coreBackground};
      backdrop-filter: blur(24px);
    `;
  }}
`;

export const StatisticInfoTitle = styled.p`
  ${() => {
    const themeColors = useThemeContext();

    return `
      font-family: var(--font-sf-pro-rounded);
      font-size: 18px;
      font-weight: 600;
      line-height: 24px;
      color: ${themeColors?.textPrimary};
      margin-bottom: 8px;
    `;
  }}
`;

export const StatisticInfoValue = styled.p`
  ${() => {
    const themeColors = useThemeContext();

    return `
      font-family: var(--font-sf-pro-display);
      color: ${themeColors?.textPrimary};
      font-size: 56px;
      font-weight: 700;
      line-height: 64px;
      letter-spacing: -0.84px;
    `;
  }}
`;

export const StatisticInfoNumbersWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
