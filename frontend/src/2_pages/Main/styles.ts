import { useThemeContext } from "@/src/6_shared/contexts/ThemeContext";
import { LAPTOP_MQ, TABLET_MQ } from "@/src/6_shared/media-queries";
import styled from "@emotion/styled";

export const MainContainer = styled.main`
  ${() => {
    const themeColors = useThemeContext();

    return `
      width: 100vw;
      padding: 20px 64px 20px 20px;
      background: ${themeColors?.coreBackground};
      display: flex;
      justify-content: center;
      gap: 64px;
      align-items: stretch;

      @media(max-width:${LAPTOP_MQ}px) {
        gap: 40px;
      }

      @media(max-width:${TABLET_MQ}px) {
        gap: 20px;
        padding: 20px;
      }
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

  @media (max-width: ${LAPTOP_MQ}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${TABLET_MQ}px) {
    grid-template-columns: 1fr;
  }
`;
