import {
  Room,
  RoomContextProvider,
  selectRoomByHash,
  useUserContext,
} from '@music-room/data-access';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ReactElement } from 'react';
import { Auth } from '../../modules/Auth/Auth';
import { Invite } from '../../modules/Invite/Invite';

type Props = {
  room: Room;
};

const InvitePage = ({ room }: Props): ReactElement => {
  const user = useUserContext();

  return user ? (
    <RoomContextProvider initialRoom={room}>
      <Invite />
    </RoomContextProvider>
  ) : (
    <Auth />
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params: { hash } = {},
  locale,
}) => {
  const roomHash = Array.isArray(hash) ? undefined : hash;
  if (!roomHash) return { notFound: true };

  const [room] = await selectRoomByHash({
    queryKey: ['roomByHash', { hash: roomHash }],
    meta: {},
  });

  if (!room) return { notFound: true };

  const translations = await serverSideTranslations(locale ?? 'en', [
    'common',
    'header',
    'auth',
    'invite',
  ]);

  return { props: { ...translations, room } };
};

export default InvitePage;
