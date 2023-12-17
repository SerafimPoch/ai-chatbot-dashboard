import { memo } from "react";
import { ProgressBarContainer, ProgressBarLine } from "./ProgressBar.styles";

interface TProgressBar {
  storage: number;
  color: string;
}

function ProgressBar({ storage, color }: TProgressBar) {
  return (
    <ProgressBarContainer>
      <ProgressBarLine width={storage} color={color} />
    </ProgressBarContainer>
  );
}

export default memo(ProgressBar);
