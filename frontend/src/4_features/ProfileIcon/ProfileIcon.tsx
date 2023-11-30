import Image from "next/image";
import { handleProfileModalState } from "@/src/6_shared/store";
import { PROFILE_AVATAR_IMAGE_AREA } from "./consts";
import avatarUrl from "./ui/avatar.svg?url";

export default function ProfileIcon() {
  return (
    <button onClick={() => handleProfileModalState(true)}>
      <Image
        src={avatarUrl}
        alt="arrow"
        width={PROFILE_AVATAR_IMAGE_AREA.width}
        height={PROFILE_AVATAR_IMAGE_AREA.height}
      />
    </button>
  );
}
