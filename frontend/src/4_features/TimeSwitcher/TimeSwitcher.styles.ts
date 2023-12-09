import styled from "@emotion/styled";

interface TTimeSwitcherItem {
  active: boolean;
}

export const TimeSwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const TimeSwitcherItem = styled.button<TTimeSwitcherItem>`
  width: fit-content;
  min-width: 33px;
  height: 28px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  font-family: var(--font-sf-pro-rounded);
  color: ${({ active }) => (active ? "#fff" : "#A0A5A9")};
  background-color: ${({ active }) => (active ? "#1D1D1D" : "transparent")};
  border-radius: 8px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    color: #fff;
    background-color: #1d1d1d;
  }
`;
