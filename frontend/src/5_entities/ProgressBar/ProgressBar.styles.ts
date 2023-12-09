import styled from "@emotion/styled";

interface TProgressBarLine {
  width: number;
  color: string;
}

export const ProgressBarContainer = styled.div`
  height: 24px;
  border-radius: 4px;
  background: #f2f2f2;
`;

export const ProgressBarLine = styled.div<TProgressBarLine>`
  width: ${({ width }) => `${width}%`};
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: ${({ color }) => color};
  transition: width 0.4s ease;
  height: 100%;
  padding: 0 8px;
`;
