import { GetServerSideProps } from "next";
import React from "react";
import Layout from "../../atoms/Layout/Layout";
import ChatRoom from "../../molecules/chatRoom/ChatRoom/ChatRoom";
import InviteLink from "../../molecules/inviteLink/InviteLink/InviteLink";
import Player from "../../molecules/player/Player/Player";
import Reactions from "../../molecules/reactions/Reactions/Reactions";
import { selectRoomProfiles } from "../../services/data/roomProfiles/selectRoomProfiles";
import { RoomProfile } from "../../services/data/types";
import { supabase } from "../../services/supabase";

export type RoomPageProps = {
  room: RoomProfile;
};

const RoomPage = ({ room }: RoomPageProps): JSX.Element => {
  return (
    <Layout appTitle={room.room_name}>
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
  const roomSlug = Array.isArray(slug) ? undefined : slug;
  if (!roomSlug) return { notFound: true };

  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (!user) return { notFound: true };

  const roles = await selectRoomProfiles({
    queryKey: [
      "roomProfiles",
      {
        slug: roomSlug,
        user_id: user.id,
      },
    ],
  });

  const firstRoom = roles?.[0];
  if (!firstRoom) return { notFound: true };

  return { props: { room: firstRoom } };
};

export default RoomPage;
