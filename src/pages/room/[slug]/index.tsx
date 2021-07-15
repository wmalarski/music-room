import { GetServerSideProps } from "next";
import React from "react";
import Player from "../../../molecules/player/Player/Player";
import Reactions from "../../../molecules/reactions/Reactions/Reactions";
import ChatView from "../../../organisms/ChatView/ChatView";
import RoomHeader from "../../../organisms/RoomHeader/RoomHeader";
import { RoomProfile } from "../../../services/data/types";
import { supabase } from "../../../services/supabase";
import getServerSideRoom from "../../../services/utils/getServerSideRoom";
import RoomLayout from "../../../templates/RoomLayout/RoomLayout";
import { RoomContextProvider } from "../../../utils/room/RoomContext";

export type RoomPageProps = {
  room: RoomProfile;
};

const RoomPage = ({ room }: RoomPageProps): JSX.Element => (
  <RoomContextProvider room={room}>
    <RoomLayout
      appTitle={room.room_name}
      header={<RoomHeader />}
      left={<Player />}
      right={<ChatView />}
      bottom={<Reactions />}
    />
  </RoomContextProvider>
);

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
