import { useThemeContext } from "@/src/6_shared/contexts/ThemeContext";
import { LAPTOP_MQ } from "@/src/6_shared/media-queries";
import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 68px;

  @media (max-width: ${LAPTOP_MQ}px) {
    margin-bottom: 116px;
  }
`;

export const HeaderTitle = styled.h3`
  ${() => {
    const themeColors = useThemeContext();

    return `
      font-size: 36px;
      font-weight: 700;
      line-height: 32px;
      color: ${themeColors?.textPrimary};
      margin-right: 40px;
      font-family: var(--font-sf-pro-display);
    `;
  }}
`;

export const SwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderNavbar = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;
