import Image from "next/image";
import { PROFILE_AVATAR_IMAGE_AREA } from "./consts";
import avatarUrl from "./ui/avatar.svg?url";

export default function ProfileIcon() {
  return (
    <Image
      src={avatarUrl}
      alt="arrow"
      width={PROFILE_AVATAR_IMAGE_AREA.width}
      height={PROFILE_AVATAR_IMAGE_AREA.height}
    />
  );
}
