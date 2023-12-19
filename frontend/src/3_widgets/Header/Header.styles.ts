import { useThemeColor } from "@/src/6_shared/hooks/useThemeColor";
import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 68px;
`;

export const HeaderTitle = styled.h3`
  font-size: 36px;
  font-weight: 700;
  line-height: 32px;
  color: ${() => useThemeColor().textPrimary};
  margin-right: 40px;
  font-family: var(--font-sf-pro-display);
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
