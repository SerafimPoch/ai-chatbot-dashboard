import styled from "@emotion/styled";

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

export const Test = styled.div`
  width: 100%;
  background: green;
`;
