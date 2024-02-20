import { useThemeContext } from "@/src/6_shared/contexts/ThemeContext";
import styled from "@emotion/styled";

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SearchInput = styled.input`
  ${() => {
    const themeColors = useThemeContext();

    return `
      background: transparent;
      border: 1px solid #5d74f1;
      outline: none;
      border-radius: 6px;
      padding: 0 5px;
      color: ${themeColors?.textPrimary};
    `;
  }}
`;
