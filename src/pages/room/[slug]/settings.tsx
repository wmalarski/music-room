import { GetServerSideProps } from "next";
import React from "react";
import Layout from "../../../atoms/Layout/Layout";
import Navigation from "../../../molecules/navigation/Navigation/Navigation";
import RoomNavigation from "../../../molecules/roomNavigation/RoomNavigation/RoomNavigation";
import SignOut from "../../../molecules/signOut/SignOut/SignOut";
import { RoomProfile } from "../../../services/data/types";
import { supabase } from "../../../services/supabase";
import getServerSideRoom from "../../../services/utils/getServerSideRoom";
import { RoomContextProvider } from "../../../utils/room/RoomContext";

export type RoomSettingsProps = {
  room: RoomProfile;
};

const RoomSettingsPage = ({ room }: RoomSettingsProps): JSX.Element => (
  <RoomContextProvider room={room}>
    <Layout
      appTitle={room.room_name}
      header={
        <Navigation
          right={
            <>
              <RoomNavigation />
              <SignOut />
            </>
          }
        />
      }
    >
      <pre>{JSON.stringify(room, null, 2)}</pre>
    </Layout>
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
