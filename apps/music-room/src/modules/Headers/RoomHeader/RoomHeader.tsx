import { ReactElement } from 'react';
import { HeaderView } from '../HeaderView/HeaderView';
import { ProfileNavigation } from '../ProfileNavigation/ProfileNavigation';
import { RoomNavigation } from '../RoomNavigation/RoomNavigation';
import { SignOut } from '../SignOut/SignOut';

export const RoomHeader = (): ReactElement => (
  <HeaderView
    right={
      <>
        <RoomNavigation />
        <ProfileNavigation />
        <SignOut />
      </>
    }
  />
);
