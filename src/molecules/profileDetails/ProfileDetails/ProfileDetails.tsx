import React from "react";
import { useUpdateProfile } from "../../../services/data/profiles/updateProfile";
import { Profile } from "../../../services/data/types";
import ProfileDetailsView, {
  ProfileDetailsViewProps,
} from "../ProfileDetailsView/ProfileDetailsView";

export type ProfileDetailsProps = {
  profile: Profile;
  View?: React.ComponentType<ProfileDetailsViewProps>;
};

const ProfileDetails = ({
  profile,
  View = ProfileDetailsView,
}: ProfileDetailsProps): JSX.Element => {
  const { mutate: updateProfile } = useUpdateProfile(profile.user_id);

  return (
    <View
      profile={profile}
      onSubmit={({ name }) => updateProfile({ id: profile.id, name })}
    />
  );
};

export default ProfileDetails;
