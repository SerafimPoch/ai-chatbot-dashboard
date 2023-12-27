import { useThemeContext } from "@/src/6_shared/contexts/ThemeContext";
import { LAPTOP_MQ, MOBILE_MQ } from "@/src/6_shared/media-queries";
import styled from "@emotion/styled";

export const StatisticContainer = styled.div`
  border-radius: 32px;
  padding: 12px;
  position: relative;
  height: 100%;
  background: linear-gradient(
    245deg,
    #d6dcd1 57.34%,
    #ffddb4 81.64%,
    #c7b4ff 105.59%
  );
  grid-row: 1 / span 2;

  @media (max-width: ${LAPTOP_MQ}px) {
    grid-row: 1;
    grid-column: 1/3;
  }
`;

export const StatisticBoyIconWrapper = styled.div`
  position: absolute;
  right: -80px;
  top: -150px;

  @media (max-width: ${MOBILE_MQ}px) {
    display: none;
  }
`;

export const StatisticTitleWrapper = styled.div`
  padding: 36px;
  margin-bottom: 46px;

  @media (max-width: ${MOBILE_MQ}px) {
    padding: 10px;
    margin-bottom: 0px;
  }
`;

export const StatisticTitle = styled.p`
  font-family: var(--font-sf-pro-display);
  font-size: 64px;
  font-weight: 700;
  line-height: 64px;
  color: var(--neutral-05);
  margin-bottom: 24px;
`;

export const ViewEarningBtn = styled.button`
  ${() => {
    const themeColors = useThemeContext();

    return `
      width: fit-content;
      height: 48px;
      padding: 12px 24px;
      display: flex;
      align-items: center;
      gap: 12px;
      border-radius: 12px;
      background-color: ${themeColors?.textPrimary};
      color: ${themeColors?.coreBackground};
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      font-family: var(--font-sf-pro-rounded);

      &:hover {
        opacity: 0.5;
      }
    `;
  }}
`;
