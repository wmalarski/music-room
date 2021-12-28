import { GetServerSideProps } from 'next';
import React from 'react';
import { Member } from '../../../services/data/types';
import { supabase } from '../../../services/supabase';
import getServerSideMembers from '../../../services/utils/getServerSideMembers';
import SettingsTemplate from '../../../templates/SettingsTemplate/SettingsTemplate';
import { MemberContextProvider } from '../../../utils/room/MemberContext';

export type RoomSettingsProps = {
  member: Member;
};

const RoomSettingsPage = ({ member }: RoomSettingsProps): JSX.Element => (
  <MemberContextProvider member={member}>
    <SettingsTemplate appTitle={} header={} center={} />
  </MemberContextProvider>
);

export const getServerSideProps: GetServerSideProps<
  RoomSettingsProps
> = async ({ params: { slug } = {}, req }) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (!user) return { notFound: true };

  const member = await getServerSideMembers({ user, slug });
  return member ? { props: { member } } : { notFound: true };
};

export default RoomSettingsPage;
