import { useProfile, useUpdateProfile } from '@music-room/data-access';
import { ReactElement } from 'react';
import { ProfileDetailsView } from './ProfileDetailsView/ProfileDetailsView';
import { ProfileDetailsViewData } from './ProfileDetailsView/ProfileDetailsView.utils';

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

  const handleSubmit = (data: ProfileDetailsViewData) => {
    updateProfile({ id: profile.id, name: data.name });
  };

  return (
    <View
      profile={{ ...profile, ...data }}
      error={error}
      isLoading={isLoading}
      onSubmit={handleSubmit}
    />
  );
};
