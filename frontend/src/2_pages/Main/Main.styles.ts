import { useThemeColor } from "@/src/6_shared/hooks/useThemeColor";
import styled from "@emotion/styled";

export const MainContainer = styled.main`
  width: 100vw;
  padding: 44px 64px 64px 64px;
  background: ${() => useThemeColor().coreBackground};
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const MainContentWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(700px, 1.5fr) minmax(500px, 1fr);
  grid-row-gap: 8px;
  grid-column-gap: 8px;
`;
