import { GetServerSideProps } from "next";
import React from "react";
import Layout from "../../../atoms/Layout/Layout";
import ChatRoom from "../../../molecules/chatRoom/ChatRoom/ChatRoom";
import InviteLink from "../../../molecules/inviteLink/InviteLink/InviteLink";
import Navigation from "../../../molecules/navigation/Navigation/Navigation";
import Player from "../../../molecules/player/Player/Player";
import Reactions from "../../../molecules/reactions/Reactions/Reactions";
import RoomNavigation from "../../../molecules/roomNavigation/RoomNavigation/RoomNavigation";
import SignOut from "../../../molecules/signOut/SignOut/SignOut";
import { RoomProfile } from "../../../services/data/types";
import { supabase } from "../../../services/supabase";
import getServerSideRoom from "../../../services/utils/getServerSideRoom";

export type RoomPageProps = {
  room: RoomProfile;
};

const RoomPage = ({ room }: RoomPageProps): JSX.Element => {
  return (
    <Layout
      appTitle={room.room_name}
      header={
        <Navigation
          right={
            <>
              <RoomNavigation room={room} />
              <SignOut />
            </>
          }
        />
      }
    >
      <ChatRoom room={room} />
      <Player room={room} />
      <Reactions room={room} />
      <InviteLink room={room} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<RoomPageProps> = async ({
  params: { slug } = {},
  req,
}) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (!user) return { notFound: true };

  const room = await getServerSideRoom({ user, slug });
  return room ? { props: { room } } : { notFound: true };
};

export default RoomPage;
