import { GetServerSideProps } from "next";
import React from "react";
import { RoomSettings, RoomUsers } from "../../../molecules";
import { RoomHeader } from "../../../organisms";
import { RoomProfile } from "../../../services/data/types";
import { supabase } from "../../../services/supabase";
import getServerSideRoom from "../../../services/utils/getServerSideRoom";
import SettingsTemplate from "../../../templates/SettingsTemplate/SettingsTemplate";
import { RoomContextProvider } from "../../../utils/room/RoomContext";

export type RoomSettingsProps = {
  room: RoomProfile;
};

const RoomSettingsPage = ({ room }: RoomSettingsProps): JSX.Element => (
  <RoomContextProvider room={room}>
    <SettingsTemplate
      appTitle={room.room_name}
      header={<RoomHeader />}
      center={[
        { key: "Settings", node: <RoomSettings /> },
        { key: "Users", node: <RoomUsers /> },
      ]}
    />
  </RoomContextProvider>
);

export const getServerSideProps: GetServerSideProps<RoomSettingsProps> =
  async ({ params: { slug } = {}, req }) => {
    const { user } = await supabase.auth.api.getUserByCookie(req);
    if (!user) return { notFound: true };

    const room = await getServerSideRoom({ user, slug });
    return room ? { props: { room } } : { notFound: true };
  };

export default RoomSettingsPage;
