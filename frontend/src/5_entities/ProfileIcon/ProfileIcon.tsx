import Image from "next/image";
import avatarUrl from "./avatar.svg?url";

interface TProfileIcon {
  area: {
    width: number;
    height: number;
  };
}

const ProfileIcon = ({ area }: TProfileIcon) => {
  return (
    <Image
      src={avatarUrl}
      alt="avatar"
      width={area.width}
      height={area.height}
    />
  );
};

export default ProfileIcon;
