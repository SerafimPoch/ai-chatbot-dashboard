import Image from "next/image";
import {
  EarningsChatBotContainer,
  EarningsChatBotModel,
  EarningsChatBotName,
} from "./EarningsChatBot.styles";
import chatBotIcon from "./ui/chatbot.svg?url";
import chatBotRedIcon from "./ui/chatbot-red.svg?url";

interface TEarningsChatBot {
  version: number;
}

export default function EarningsChatBot({ version }: TEarningsChatBot) {
  return (
    <EarningsChatBotContainer>
      {version === 4 ? (
        <Image src={chatBotIcon} alt="chatbot" width={64} height={64} />
      ) : (
        <Image src={chatBotRedIcon} alt="chatbot-red" width={64} height={64} />
      )}
      <div>
        <EarningsChatBotName>EchoBot</EarningsChatBotName>
        <EarningsChatBotModel>{`GPT${version}-based`}</EarningsChatBotModel>
      </div>
    </EarningsChatBotContainer>
  );
}
