import styled from "@emotion/styled";

interface TPercentIndicatorValue {
  isPercentNegative: boolean;
}

export const PercentIndicatorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const PercentIndicatorTriangle = styled.div<TPercentIndicatorValue>`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-bottom-color: ${({ isPercentNegative }) =>
    isPercentNegative ? "#EA7465" : "#349264"};
  rotate: ${({ isPercentNegative }) => (isPercentNegative ? "180deg" : "none")};
`;

export const PercentIndicatorValue = styled.p<TPercentIndicatorValue>`
  font-family: var(--font-sf-pro-rounded);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: ${({ isPercentNegative }) =>
    isPercentNegative ? "#EA7465" : "#349264"};
`;
