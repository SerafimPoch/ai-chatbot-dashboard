import { AudienceChart } from "@/src/5_entities/AudienceChart";
import { AudiencesContainer, AudiencesTitle } from "./Audiences.styles";
import { ArrowToggler } from "@/src/4_features/ArrowToggler";

export default function Audiences() {
  return (
    <AudiencesContainer>
      <div>
        <AudiencesTitle>Audiences</AudiencesTitle>
        <AudienceChart />
      </div>
      <ArrowToggler />
    </AudiencesContainer>
  );
}
