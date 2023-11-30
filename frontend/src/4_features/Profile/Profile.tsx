import { handleProfileModalState } from "@/src/6_shared/store";
import { PROFILE_AVATAR_IMAGE_AREA } from "./constants";
import ProfileIcon from "@/src/5_entities/ProfileIcon/ProfileIcon";

export default function Profile() {
  return (
    <button onClick={() => handleProfileModalState(true)}>
      <ProfileIcon area={PROFILE_AVATAR_IMAGE_AREA} />
    </button>
  );
}
