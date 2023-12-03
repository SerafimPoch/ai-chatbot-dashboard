import styled from "@emotion/styled";

export const AudiencesContainer = styled.div`
  border-radius: 32px;
  border: 2px solid #f2f2f2;
  grid-column: 2/3;
  grid-row: 2;
  padding: 24px 16px 24px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AudiencesTitle = styled.p`
  font-family: var(--font-sf-pro-rounded);
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: var(--text-primary);
  margin-bottom: 16px;
`;
