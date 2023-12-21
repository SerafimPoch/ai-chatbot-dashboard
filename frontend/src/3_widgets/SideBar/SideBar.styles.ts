import { useThemeContext } from "@/src/6_shared/contexts/ThemeContext";
import styled from "@emotion/styled";

interface TSideBarContainer {
  expanded: boolean;
}

export const SideBarContainer = styled.div<TSideBarContainer>`
  ${({ expanded }) => {
    const themeColors = useThemeContext();

    return `
      display: flex;
      padding: 24px 20px;
      width: ${expanded ? "260px" : "84px"};
      height: 100vh;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 20px;
      background: ${themeColors?.textPrimary};
    `;
  }}
`;

export const SideBarLogoWrapper = styled.div`
  margin-bottom: 40px;
`;

export const SideBarListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SideBarLine = styled.div`
  width: 100%;
  height: 1px;
  background: #929292;
  margin: 8px 0;
`;
