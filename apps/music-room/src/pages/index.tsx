import React from 'react';
import { CreateRoom, Rooms } from '../molecules';
import { UserHeader } from '../organisms';
import GuestHomeTemplate from '../templates/GuestHomeTemplate/GuestHomeTemplate';
import UserHomeTemplate from '../templates/UserHomeTemplate/UserHomeTemplate';
import { useUserContext } from '../utils/auth/UserContext';

const Index = (): JSX.Element => {
  const { user } = useUserContext();

  return user ? (
    <UserHomeTemplate
      header={<UserHeader user={user} />}
      left={<CreateRoom user={user} />}
      center={<Rooms user={user} />}
    />
  ) : (
    <GuestHomeTemplate />
  );
};

export default Index;
