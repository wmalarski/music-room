import { GetServerSideProps } from 'next';
import React from 'react';
import { useSelectProfile } from '../../services/data/profiles/selectProfile';
import { selectRoomByHash } from '../../services/data/rooms/selectRoomByHash';
import { Room } from '../../services/data/types';
import GuestHomeTemplate from '../../templates/GuestHomeTemplate/GuestHomeTemplate';
import UserHomeTemplate from '../../templates/UserHomeTemplate/UserHomeTemplate';
import { useUserContext } from '../../utils/auth/UserContext';

export type InvitePageProps = {
  room: Room;
};

const InvitePage = ({ room }: InvitePageProps): JSX.Element => {
  const { user } = useUserContext();

  const { data: profile } = useSelectProfile(
    { userId: user?.id ?? '' },
    { enabled: !!user }
  );

  return user ? (
    <UserHomeTemplate header={} center={} />
  ) : (
    <GuestHomeTemplate />
  );
};

export const getServerSideProps: GetServerSideProps<InvitePageProps> = async ({
  params: { hash } = {},
}) => {
  const roomHash = Array.isArray(hash) ? undefined : hash;
  if (!roomHash) return { notFound: true };

  const [room] = await selectRoomByHash({
    queryKey: ['roomByHash', { hash: roomHash }],
  });

  console.log('room', room);

  if (!room) return { notFound: true };

  return { props: { room } };
};

export default InvitePage;
