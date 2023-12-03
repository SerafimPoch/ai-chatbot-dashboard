import { ArrowIcon } from "@/src/6_shared/ui/icons/ArrowIcon";
import { ArrowTogglerContainer } from "./ArrowToggler.styles";
import { useStore } from "@nanostores/react";
import {
  $activeAudienceChart,
  changeActiveAudienceChart,
} from "@/src/6_shared/store";

export default function ArrowToggler() {
  const activeId = useStore($activeAudienceChart);

  const onIncreaseId = () => changeActiveAudienceChart(activeId + 1);
  const onDecreaseId = () => changeActiveAudienceChart(activeId - 1);

  return (
    <ArrowTogglerContainer>
      <button onClick={onIncreaseId}>
        <ArrowIcon style={{ rotate: "270deg" }} />
      </button>
      <button onClick={onDecreaseId}>
        <ArrowIcon style={{ rotate: "90deg" }} />
      </button>
    </ArrowTogglerContainer>
  );
}
