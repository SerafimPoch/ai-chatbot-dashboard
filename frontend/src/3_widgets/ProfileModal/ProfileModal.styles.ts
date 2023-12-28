import { useThemeContext } from "@/src/6_shared/contexts/ThemeContext";
import styled from "@emotion/styled";

export const ProfileInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px 24px 24px;
  margin: 0 -28px;
  border-bottom: 1px solid #f2f2f2;
`;

export const ProfileName = styled.p`
  ${() => {
    const themeColors = useThemeContext();

    return `
      font-size: 18px;
      font-weight: 600;
      line-height: 24px;
      font-family: var(--font-sf-pro-rounded);
      color: ${themeColors?.textPrimary};
    `;
  }}
`;

export const ProfileTag = styled.p`
  ${() => {
    const themeColors = useThemeContext();

    return `
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      font-family: var(--font-sf-pro-rounded);
      color: ${themeColors?.textSecondary};
    `;
  }}
`;

export const ProfileInfoOptionList = styled.div`
  margin: 0 -28px;
  padding: 8px 12px;
  border-bottom: 1px solid #f2f2f2;
`;

export const ProfileThemeWrapper = styled.div`
  margin: 0 -28px;
  padding: 20px 12px;
  border-bottom: 1px solid #f2f2f2;
`;

export const ProfileLogoutWrapper = styled(ProfileInfoOptionList)`
  border: none;
`;

export const ProfileItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  margin-bottom: 4px;
  cursor: pointer;
`;

export const ProfileItemText = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  font-family: var(--font-sf-pro-rounded);
  color: var(--text-secondary);
`;
