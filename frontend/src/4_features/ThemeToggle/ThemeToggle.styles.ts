import styled from "@emotion/styled";

interface IThemeItem {
  active: boolean;
}

export const ThemeToggleContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 2px solid #f2f2f2;
  width: 100%;
  height: 40px;
`;

export const ThemeItem = styled.button<IThemeItem>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  width: 50%;
  height: 32px;
  background: ${({ active }) => (active ? "#f2f2f2" : "transparent")};
  color: ${({ active }) =>
    active ? "var(--text-primary)" : "var(--text-secondary)"};
  margin: 0 4px;
  transition: background-color 0.3s ease, color 0.3s ease;
`;
