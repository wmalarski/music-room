import {
  getServerSideMembers,
  Member,
  MemberContextProvider,
  supabase,
} from '@music-room/data-access';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ReactElement } from 'react';
import { Settings } from '../../../modules/Settings/Settings';

type Props = {
  member: Member;
};

const RoomSettingsPage = ({ member }: Props): ReactElement => {
  return (
    <MemberContextProvider member={member}>
      <Settings />
    </MemberContextProvider>
  );
};

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
    'headers',
    'settings',
  ]);

  return member ? { props: { ...translations, member } } : { notFound: true };
};

export default RoomSettingsPage;
