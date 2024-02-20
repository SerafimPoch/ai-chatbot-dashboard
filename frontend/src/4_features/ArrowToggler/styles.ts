import { useThemeContext } from "@/src/6_shared/contexts/ThemeContext";
import styled from "@emotion/styled";

export const ArrowTogglerContainer = styled.div`
  ${() => {
    const themeColors = useThemeContext();

    return `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 32px;
      align-self: stretch;
      border-radius: 12px;
      background: ${themeColors?.grey};
      width: 56px;
    `;
  }}
`;
