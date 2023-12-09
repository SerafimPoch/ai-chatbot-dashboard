import Image from "next/image";
import { UserOptionContainer, UserOptionText } from "./UserOption.styles";
import userIcon from "./assets/user-day.svg?url";

export default function UserOption() {
  return (
    <UserOptionContainer>
      <Image src={userIcon} alt="arrow" width={24} height={24} />
      <UserOptionText>Profile</UserOptionText>
    </UserOptionContainer>
  );
}
