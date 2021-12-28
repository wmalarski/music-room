import React from 'react';
import Layout from '../../modules/Layout/Layout';
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
  <Layout
    appTitle={member.room_name}
    header={
      <Navigation
        right={
          <>
            <RoomNavigation />
            <ProfileNavigation />
            <SignOut />
          </>
        }
      />
    }
  >
    <RoomSettings />
  </Layout>
);

export default SettingsTemplate;
