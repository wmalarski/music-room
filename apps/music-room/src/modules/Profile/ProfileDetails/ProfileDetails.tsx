import { ReactElement } from 'react';
import { useUpdateProfile } from '../../../services/data/profiles/updateProfile';
import { useProfile } from '../../../utils/contexts/ProfileContext';
import { ProfileDetailsView } from './ProfileDetailsView/ProfileDetailsView';

type Props = {
  View?: typeof ProfileDetailsView;
};

export const ProfileDetails = ({
  View = ProfileDetailsView,
}: Props): ReactElement => {
  const profile = useProfile();

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
