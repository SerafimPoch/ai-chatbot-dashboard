import { useThemeColor } from "@/src/6_shared/hooks/useThemeColor";
import styled from "@emotion/styled";

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SearchInput = styled.input`
  background: transparent;
  border: 1px solid #5d74f1;
  outline: none;
  border-radius: 6px;
  padding: 0 5px;
  color: ${() => useThemeColor().textPrimary};
`;
