import Image from "next/image";
import { LogoutContainer, LogoutText } from "./styles";
import logoutIcon from "./ui/assets/logout-day.svg?url";

export default function Logout() {
  return (
    <LogoutContainer>
      <Image src={logoutIcon} alt="settings" width={24} height={24} />
      <LogoutText>Log out</LogoutText>
    </LogoutContainer>
  );
}
