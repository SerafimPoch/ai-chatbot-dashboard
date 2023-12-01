import Image from "next/image";
import {
  SettingsOptionContainer,
  SettingsOptionText,
} from "./SettingsOption.styles";
import settingsIcon from "./ui/settings-day.svg?url";

export default function SettingsOption() {
  return (
    <SettingsOptionContainer>
      <Image src={settingsIcon} alt="manage-bot" width={24} height={24} />
      <SettingsOptionText>Settings</SettingsOptionText>
    </SettingsOptionContainer>
  );
}
