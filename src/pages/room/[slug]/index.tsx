import { GetServerSideProps } from "next";
import React from "react";
import { Reactions } from "../../../molecules";
import { Chat, Player, RoomHeader } from "../../../organisms";
import { RoomProfile } from "../../../services/data/types";
import { supabase } from "../../../services/supabase";
import getServerSideRoom from "../../../services/utils/getServerSideRoom";
import RoomTemplate from "../../../templates/RoomTemplate/RoomTemplate";
import { RoomContextProvider } from "../../../utils/room/RoomContext";

export type RoomPageProps = {
  room: RoomProfile;
};

const RoomPage = ({ room }: RoomPageProps): JSX.Element => (
  <RoomContextProvider room={room}>
    <RoomTemplate
      appTitle={room.room_name}
      header={<RoomHeader />}
      left={<Player />}
      right={<Chat />}
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
