import { GetServerSideProps } from "next";
import React from "react";
import { Reactions } from "../../../molecules";
import { Chat, Player, RoomHeader } from "../../../organisms";
import { Member } from "../../../services/data/types";
import { supabase } from "../../../services/supabase";
import getServerSideMembers from "../../../services/utils/getServerSideMembers";
import RoomTemplate from "../../../templates/RoomTemplate/RoomTemplate";
import { MemberContextProvider } from "../../../utils/room/MemberContext";

export type RoomPageProps = {
  member: Member;
};

const RoomPage = ({ member }: RoomPageProps): JSX.Element => (
  <MemberContextProvider member={member}>
    <RoomTemplate
      appTitle={member.room_name}
      header={<RoomHeader />}
      left={<Player />}
      right={<Chat />}
      bottom={<Reactions />}
    />
  </MemberContextProvider>
);

export const getServerSideProps: GetServerSideProps<RoomPageProps> = async ({
  params: { slug } = {},
  req,
}) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (!user) return { notFound: true };

  const member = await getServerSideMembers({ user, slug });
  return member ? { props: { member } } : { notFound: true };
};

export default RoomPage;
