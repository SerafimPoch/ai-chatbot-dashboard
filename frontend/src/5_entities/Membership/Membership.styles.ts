import { useThemeContext } from "@/src/6_shared/contexts/ThemeContext";
import { LAPTOP_MQ, MOBILE_MQ } from "@/src/6_shared/media-queries";
import styled from "@emotion/styled";

export const MembershipContainer = styled.div`
  border-radius: 32px;
  border: 2px solid #f2f2f2;
  grid-column: 2;
  padding: 24px 16px 24px 32px;

  @media (max-width: ${LAPTOP_MQ}px) {
    grid-row: 2;
    grid-column: 1;
  }

  @media (max-width: ${LAPTOP_MQ}px) {
    grid-column: 1/3;
  }

  @media (max-width: ${MOBILE_MQ}px) {
    padding: 24px 16px 24px 24px;
  }
`;

export const MembershipTitle = styled.p`
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

export const CustomBarComponent = styled.rect`
  fill: ${({ color }) => color};
  rx: 12px;
  ry: 12px;
`;
