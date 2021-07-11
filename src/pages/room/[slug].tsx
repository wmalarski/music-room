import { GetServerSideProps } from "next";
import React from "react";
import Layout from "../../atoms/Layout/Layout";
import ChatRoom from "../../molecules/chatRoom/ChatRoom/ChatRoom";
import Player from "../../molecules/player/Player/Player";
import Reactions from "../../molecules/reactions/Reactions/Reactions";
import { selectRoomRoles } from "../../services/data/roomRoles/selectRoomRoles";
import { supabase } from "../../services/supabase";

export type RoomPageProps = {
  roomId: number;
  roomName: string;
  profileId: number;
};

const RoomPage = ({
  profileId,
  roomId,
  roomName,
}: RoomPageProps): JSX.Element => {
  return (
    <Layout appTitle={roomName}>
      <ChatRoom profileId={profileId} roomId={roomId} />
      <Player roomId={roomId} profileId={profileId} />
      <Reactions profileId={profileId} roomId={roomId} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<RoomPageProps> = async ({
  params: { slug } = {},
  req,
}) => {
  const roomSlug = Array.isArray(slug) ? undefined : slug;
  console.log("roomSlug", roomSlug);
  if (!roomSlug) return { notFound: true };

  const { user } = await supabase.auth.api.getUserByCookie(req);
  console.log("user", user);
  if (!user) return { notFound: true };

  console.log("roles", {
    slug: roomSlug,
    user_id: user.id,
  });

  const roles = await selectRoomRoles({
    queryKey: [
      "roomRoles",
      {
        slug: roomSlug,
        user_id: user.id,
      },
    ],
  });

  console.log("roles", roles);

  const firstRoom = roles?.[0];
  if (!firstRoom) return { notFound: true };

  return {
    props: {
      roomId: firstRoom.room_id,
      roomName: firstRoom.room_name,
      profileId: firstRoom.profile_id,
    },
  };
};

export default RoomPage;
