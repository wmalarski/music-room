import { useSelectProfile, useUser } from '@music-room/data-access';
import { ReactElement } from 'react';
import { ProfileHeader } from '../Headers/ProfileHeader/ProfileHeader';
import { Layout } from '../Layout/Layout';
import { InviteAccept } from './InviteAccept/InviteAccept';

export const Invite = (): ReactElement => {
  const user = useUser();

  const { data: profile } = useSelectProfile(
    { userId: user?.id ?? '' },
    { enabled: !!user }
  );

  return (
    <Layout header={<ProfileHeader />}>
      {profile && <InviteAccept profile={profile} />}
    </Layout>
  );
};
