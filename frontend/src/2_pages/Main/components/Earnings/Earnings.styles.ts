import { useThemeContext } from "@/src/6_shared/contexts/ThemeContext";
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
  ${() => {
    const themeColors = useThemeContext();

    return `
      font-family: var(--font-sf-pro-rounded);
      color: ${themeColors?.textPrimary};
      font-size: 20px;
      font-weight: 600;
      line-height: 24px;
    `;
  }}
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
  ${() => {
    const themeColors = useThemeContext();

    return `
      font-family: var(--font-sf-pro-rounded);
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      color: ${themeColors?.textSecondary};
    `;
  }}
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
  ${() => {
    const themeColors = useThemeContext();

    return `
      color: ${themeColors?.textSecondary};
    `;
  }}
`;

export const EarningsContentCapacity = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const EarningsChatBotContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const EarningsChatBotName = styled.p`
  font-family: var(--font-sf-pro-rounded);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: var(--text-primary);
`;

export const EarningsChatBotModel = styled.p`
  font-family: var(--font-sf-pro-rounded);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: var(--text-secondary);
`;
