import {
  Profile as ProfileType,
  ProfileContextProvider,
  selectProfile,
  supabase,
} from '@music-room/data-access';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ReactElement } from 'react';
import { Profile } from '../modules/Profile/Profile';

type Props = {
  profile: ProfileType;
};

const ProfilePage = ({ profile }: Props): ReactElement => {
  return (
    <ProfileContextProvider initialProfile={profile}>
      <Profile />
    </ProfileContextProvider>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
  locale,
}) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (!user) return { notFound: true };

  const profile = await selectProfile({
    queryKey: ['profile', { userId: user.id }],
    meta: {},
  });

  const translations = await serverSideTranslations(locale ?? 'en', [
    'common',
    'headers',
    'profile',
  ]);

  return profile ? { props: { ...translations, profile } } : { notFound: true };
};

export default ProfilePage;
