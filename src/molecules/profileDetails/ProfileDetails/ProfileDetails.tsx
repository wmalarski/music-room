import React from "react";
import { useUpdateProfile } from "../../../services/data/profiles/updateProfile";
import { Profile } from "../../../services/data/types";
import ProfileDetailsView from "../ProfileDetailsView/ProfileDetailsView";

export type ProfileDetailsProps = {
  profile: Profile;
};

const ProfileDetails = ({ profile }: ProfileDetailsProps): JSX.Element => {
  const { mutate: updateProfile } = useUpdateProfile(profile.user_id);

  return (
    <ProfileDetailsView
      profile={profile}
      onSubmit={({ name }) => updateProfile({ id: profile.id, name })}
    />
  );
};

export default ProfileDetails;
