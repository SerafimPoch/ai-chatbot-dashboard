import { useStore } from "@nanostores/react";
import { TimeSwitcherContainer, TimeSwitcherItem } from "./TimeSwitcher.styles";
import { TIME_SWITCHER_VALUES } from "./constants";
import { $periodOfTime, onChangePeriodOfTime } from "@/src/6_shared/store";

export default function TimeSwitcher() {
  const periodOfTime = useStore($periodOfTime);

  return (
    <TimeSwitcherContainer>
      {TIME_SWITCHER_VALUES.map(({ id, value }) => (
        <TimeSwitcherItem
          active={value === periodOfTime}
          key={id}
          onClick={() => onChangePeriodOfTime(value)}
        >
          {value}
        </TimeSwitcherItem>
      ))}
    </TimeSwitcherContainer>
  );
}
