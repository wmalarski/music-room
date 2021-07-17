import { GetServerSideProps } from "next";
import React from "react";
import InviteAccept from "../../molecules/inviteAccept/InviteAccept/InviteAccept";
import SignIn from "../../molecules/signIn/SignIn/SignIn";
import SignOut from "../../molecules/signOut/SignOut/SignOut";
import SignUp from "../../molecules/signUp/SignUp/SignUp";
import UserHeader from "../../organisms/UserHeader/UserHeader";
import { useSelectProfile } from "../../services/data/profiles/selectProfile";
import { selectRooms } from "../../services/data/rooms/selectRooms";
import { Room } from "../../services/data/types";
import Layout from "../../templates/Layout/Layout";
import { useUserContext } from "../../utils/auth/UserContext";

export type InvitePageProps = {
  room: Room;
};

const InvitePage = ({ room }: InvitePageProps): JSX.Element => {
  const { user } = useUserContext();

  const { data: profile } = useSelectProfile(
    { userId: user?.id ?? "" },
    { enabled: !!user }
  );

  return (
    <Layout header={<UserHeader user={user} />}>
      {user ? (
        <div>
          <SignOut />
          {profile && <InviteAccept room={room} profile={profile} />}
        </div>
      ) : (
        <div>
          <SignIn />
          <SignUp />
        </div>
      )}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<InvitePageProps> = async ({
  params: { hash } = {},
}) => {
  const roomHash = Array.isArray(hash) ? undefined : hash;
  if (!roomHash) return { notFound: true };

  // TODO replace with psql function
  const [room] = await selectRooms({ queryKey: ["rooms", { hash: roomHash }] });
  if (!room) return { notFound: true };

  return { props: { room } };
};

export default InvitePage;
