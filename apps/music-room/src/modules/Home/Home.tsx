import { User } from '@supabase/supabase-js';
import { ReactElement } from 'react';
import { ProfileHeader } from '../Headers/ProfileHeader/ProfileHeader';
import { Layout } from '../Layout/Layout';
import { CreateRoom } from './CreateRoom/CreateRoom';
import { Rooms } from './Rooms/Rooms';

type Props = {
  user: User;
};

export const Home = ({ user }: Props): ReactElement => (
  <Layout header={<ProfileHeader />}>
    <CreateRoom user={user} />
    <Rooms user={user} />
  </Layout>
);
