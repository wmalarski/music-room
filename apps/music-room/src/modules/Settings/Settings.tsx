import { ReactElement } from 'react';
import { Member } from '../../services/data/types';
import { RoomHeader } from '../Headers/RoomHeader/RoomHeader';
import { Layout } from '../Layout/Layout';
import { RoomSettings } from './RoomSettings/RoomSettings';

type Props = {
  member: Member;
};

export const Settings = ({ member }: Props): ReactElement => (
  <Layout appTitle={member.room_name} header={<RoomHeader />}>
    <RoomSettings />
  </Layout>
);
