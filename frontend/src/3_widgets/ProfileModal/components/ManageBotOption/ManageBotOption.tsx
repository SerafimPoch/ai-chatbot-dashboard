import Image from "next/image";
import {
  ManageBotOptionContainer,
  ManageBotOptionText,
} from "./ManageBotOption.styles";
import chatBotIcon from "./assets/manageBot-day.svg?url";

export default function ManageBotOption() {
  return (
    <ManageBotOptionContainer>
      <Image src={chatBotIcon} alt="manage-bot" width={24} height={24} />
      <ManageBotOptionText>Manage chatbots</ManageBotOptionText>
    </ManageBotOptionContainer>
  );
}
