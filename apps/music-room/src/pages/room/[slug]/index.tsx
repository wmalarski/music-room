import {
  getServerSideMembers,
  Member,
  MemberContextProvider,
  supabase,
} from '@music-room/data-access';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ReactElement } from 'react';
import { Room } from '../../../modules/Room/Room';

type Props = {
  member: Member;
};

const RoomPage = ({ member }: Props): ReactElement => (
  <MemberContextProvider member={member}>
    <Room />
  </MemberContextProvider>
);

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params: { slug } = {},
  req,
  locale,
}) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (!user) return { notFound: true };

  const member = await getServerSideMembers({ user, slug });

  const translations = await serverSideTranslations(locale ?? 'en', [
    'common',
    'header',
    'room',
  ]);

  return member ? { props: { ...translations, member } } : { notFound: true };
};

export default RoomPage;
