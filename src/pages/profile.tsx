import { GetServerSideProps } from "next";
import React from "react";
import Navigation from "../molecules/navigation/Navigation/Navigation";
import ProfileDetails from "../molecules/profileDetails/ProfileDetails/ProfileDetails";
import SignOut from "../molecules/signOut/SignOut/SignOut";
import { selectProfile } from "../services/data/profiles/selectProfile";
import { Profile } from "../services/data/types";
import { supabase } from "../services/supabase";
import Layout from "../templates/Layout/Layout";

export type ProfilePageProps = {
  profile: Profile;
};

const ProfilePage = ({ profile }: ProfilePageProps): JSX.Element => (
  <Layout header={<Navigation right={<SignOut />} />}>
    <ProfileDetails profile={profile} />
  </Layout>
);

export const getServerSideProps: GetServerSideProps<ProfilePageProps> = async ({
  req,
}) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (!user) return { notFound: true };

  const profile = await selectProfile({
    queryKey: ["profile", { userId: user.id }],
  });

  return profile ? { props: { profile } } : { notFound: true };
};

export default ProfilePage;
