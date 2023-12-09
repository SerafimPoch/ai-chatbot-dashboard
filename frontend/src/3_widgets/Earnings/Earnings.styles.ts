import styled from "@emotion/styled";

export const EarningsContainer = styled.div`
  border-radius: 32px;
  border: 2px solid #f2f2f2;
  padding: 24px 32px;
  grid-row: 3;
  grid-column: 1/3;
`;

export const EarningsTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const EarningsTitle = styled.p`
  font-family: var(--font-sf-pro-rounded);
  color: var(--text-primary);
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const EarningsContent = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 2fr repeat(4, 1fr);
  margin-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 20px;
`;

export const EarningsItemWrapper = styled(EarningsContent)`
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

export const EarningsContentHeadlines = styled.p`
  font-family: var(--font-sf-pro-rounded);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--text-secondary);
`;

export const EarningsContentBoldText = styled(EarningsTitle)`
  font-size: 16px;
`;

export const EarningsContentLifeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const EarningsContentLightText = styled(EarningsContentBoldText)`
  color: var(--text-secondary);
`;

export const EarningsContentCapacity = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;