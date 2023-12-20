import styled from "@emotion/styled";
import { useThemeColor } from "@/src/6_shared/hooks/useThemeColor";

export const ArrowTogglerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  align-self: stretch;
  border-radius: 12px;
  background: ${() => useThemeColor().grey};
  width: 56px;
`;
