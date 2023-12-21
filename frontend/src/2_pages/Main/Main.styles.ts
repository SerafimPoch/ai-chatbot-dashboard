import { useThemeContext } from "@/src/6_shared/contexts/ThemeContext";
import styled from "@emotion/styled";

export const MainContainer = styled.main`
  ${({ theme }) => {
    const themeColors = useThemeContext();

    return `
      width: 100vw;
      padding: 44px 64px 64px 20px;
      background: ${themeColors?.coreBackground};
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 64px;
    `;
  }}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
`;

export const MainContentWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(700px, 1.5fr) minmax(500px, 1fr);
  grid-row-gap: 8px;
  grid-column-gap: 8px;
`;
