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
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  font-family: var(--font-sf-pro-rounded);
  color: var(--text-primary);
`;

export const ProfileTag = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  font-family: var(--font-sf-pro-rounded);
  color: var(--text-secondary);
`;

export const ProfileInfoOptionList = styled.div`
  margin: 0 -28px;
  padding: 8px 12px;
  border-bottom: 1px solid #f2f2f2;
`;
