import { User } from '@supabase/supabase-js';
import { ReactElement } from 'react';
import { Profile, Room } from '../../services/data/types';
import Layout from '../Layout/Layout';
import UserHeader from '../UserHeader/UserHeader';
import { InviteAccept } from './InviteAccept/InviteAccept';

type Props = {
  profile?: Profile;
  user: User;
  room: Room;
};

export const Invite = ({ profile, user, room }: Props): ReactElement => (
  <Layout header={<UserHeader user={user} />}>
    {profile && <InviteAccept room={room} profile={profile} />}
  </Layout>
);
