import {
  Profile as ProfileType,
  ProfileContextProvider,
  selectProfile,
  supabase,
} from '@music-room/data-access';
import { GetServerSideProps } from 'next';
import { ReactElement } from 'react';
import { Profile } from '../modules/Profile/Profile';

type Props = {
  profile: ProfileType;
};

const ProfilePage = ({ profile }: Props): ReactElement => {
  return (
    <ProfileContextProvider profile={profile}>
      <Profile />
    </ProfileContextProvider>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
}) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (!user) return { notFound: true };

  const profile = await selectProfile({
    queryKey: ['profile', { userId: user.id }],
  });

  return profile ? { props: { profile } } : { notFound: true };
};

export default ProfilePage;
