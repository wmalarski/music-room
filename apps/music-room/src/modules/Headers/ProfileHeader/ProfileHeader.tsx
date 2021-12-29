import { ReactElement } from 'react';
import { HeaderView } from '../HeaderView/HeaderView';
import { ProfileNavigation } from '../ProfileNavigation/ProfileNavigation';
import { SignOut } from '../SignOut/SignOut';

export const ProfileHeader = (): ReactElement => (
  <HeaderView
    right={
      <>
        <ProfileNavigation />
        <SignOut />
      </>
    }
  />
);
