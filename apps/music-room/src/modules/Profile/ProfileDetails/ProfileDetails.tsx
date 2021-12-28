import { ReactElement } from 'react';
import { useUpdateProfile } from '../../../services/data/profiles/updateProfile';
import { Profile } from '../../../services/data/types';
import { ProfileDetailsView } from './ProfileDetailsView/ProfileDetailsView';

type Props = {
  profile: Profile;
  View?: typeof ProfileDetailsView;
};

export const ProfileDetails = ({
  profile,
  View = ProfileDetailsView,
}: Props): ReactElement => {
  const {
    mutate: updateProfile,
    isLoading,
    data,
    error,
  } = useUpdateProfile(profile.user_id);

  return (
    <View
      profile={{ ...profile, ...data }}
      error={error}
      isLoading={isLoading}
      onSubmit={({ name }) => updateProfile({ id: profile.id, name })}
    />
  );
};
