import { GetServerSideProps } from "next";
import React from "react";
import Layout from "../../atoms/Layout/Layout";
import ChatRoom from "../../molecules/chatRoom/ChatRoom/ChatRoom";
import Player from "../../molecules/player/Player/Player";
import { selectRoles } from "../../services/data/roles/selectRoles";
import { RoomRole } from "../../services/data/types";
import { supabase } from "../../services/supabase";

export type RoomPageProps = {
  roomRoles: RoomRole[];
  roomId: number;
  roomName: string;
  profileId: number;
};

const RoomPage = ({
  profileId,
  roomId,
  roomName,
  roomRoles,
}: RoomPageProps): JSX.Element => {
  return (
    <Layout appTitle={roomName}>
      <ChatRoom profileId={profileId} roles={roomRoles} roomId={roomId} />
      <Player roomId={roomId} profileId={profileId} />
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

  const roles = await selectRoles({
    queryKey: [
      "roles",
      {
        roomSlug,
        userId: user.id,
      },
    ],
  });

  const firstRoom = roles?.[0].room_id;

  return {
    props: {
      roomRoles: roles.map(({ role }) => role),
      roomId: firstRoom.id,
      roomName: firstRoom.name,
      profileId: roles[0].profile_id.id,
    },
  };
};

export default RoomPage;
