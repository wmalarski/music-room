import { ReactElement } from 'react';
import { Profile, Room } from '../../services/data/types';
import { ProfileHeader } from '../Headers/ProfileHeader/ProfileHeader';
import { Layout } from '../Layout/Layout';
import { InviteAccept } from './InviteAccept/InviteAccept';

type Props = {
  profile?: Profile;
  room: Room;
};

export const Invite = ({ profile, room }: Props): ReactElement => (
  <Layout header={<ProfileHeader />}>
    {profile && <InviteAccept room={room} profile={profile} />}
  </Layout>
);
