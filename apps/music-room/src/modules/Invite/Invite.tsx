import { Room, useSelectProfile } from '@music-room/data-access';
import { ReactElement } from 'react';
import { useUser } from '../../utils/contexts/UserContext';
import { ProfileHeader } from '../Headers/ProfileHeader/ProfileHeader';
import { Layout } from '../Layout/Layout';
import { InviteAccept } from './InviteAccept/InviteAccept';

type Props = {
  room: Room;
};

export const Invite = ({ room }: Props): ReactElement => {
  const user = useUser();

  const { data: profile } = useSelectProfile(
    { userId: user?.id ?? '' },
    { enabled: !!user }
  );

  return (
    <Layout header={<ProfileHeader />}>
      {profile && <InviteAccept room={room} profile={profile} />}
    </Layout>
  );
};
