import { User } from '@supabase/supabase-js';
import React, { ReactElement } from 'react';
import Layout from '../Layout/Layout';
import UserHeader from '../UserHeader/UserHeader';
import { CreateRoom } from './CreateRoom/CreateRoom';
import { Rooms } from './Rooms/Rooms';

type Props = {
  user: User;
};

export const Home = ({ user }: Props): ReactElement => (
  <Layout header={<UserHeader user={user} />}>
    <CreateRoom user={user} />
    <Rooms user={user} />
  </Layout>
);
