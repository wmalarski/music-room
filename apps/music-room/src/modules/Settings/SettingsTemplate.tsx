import React from 'react';
import Layout from '../../modules/Layout/Layout';
import RoomHeader from '../../modules/RoomHeader/RoomHeader';
import RoomSettings from './RoomSettings/RoomSettings';

export type SettingsTemplateProps = {
  appTitle: string;
  header: React.ReactNode;
  center: React.ReactNode;
};

const SettingsTemplate = ({
  appTitle,
  header,
  center,
}: SettingsTemplateProps): JSX.Element => (
  <Layout appTitle={member.room_name} header={<RoomHeader />}>
    <RoomSettings />
  </Layout>
);

export default SettingsTemplate;
