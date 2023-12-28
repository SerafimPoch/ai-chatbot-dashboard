import { useThemeContext } from "@/src/6_shared/contexts/ThemeContext";
import styled from "@emotion/styled";

interface ISidebarItemContainer {
  isActiveId: boolean;
}

export const SidebarItemContainer = styled.button<ISidebarItemContainer>`
  ${({ isActiveId }) => {
    const theme = useThemeContext();

    return `
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 12px;
      width: 100%;
      padding: 12px;
      border-radius: 12px;
      background: ${isActiveId ? theme?.lightGrey : "transparent"};
      transition: background-color 0.3s ease;

      &:hover {
        background-color: ${theme?.grey};
      }
    `;
  }}
`;

export const SidebarItemTitle = styled.span<ISidebarItemContainer>`
  ${({ isActiveId }) => {
    const theme = useThemeContext();

    return `
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      color: ${isActiveId ? theme?.textOpposite : theme?.textSecondary};
    `;
  }}
`;
