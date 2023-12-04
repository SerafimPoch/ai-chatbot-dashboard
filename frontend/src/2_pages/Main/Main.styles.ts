import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const MainContainer = styled.div`
  margin: 20px 64px 24px 20px;
  padding: 0 64px;
`;

export const MainContentWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(700px, 2fr) minmax(500px, 1fr);
  grid-row-gap: 8px;
  grid-column-gap: 8px;
`;
