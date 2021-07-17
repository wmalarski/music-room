import { User } from "@supabase/supabase-js";
import React from "react";
import Navigation from "../../molecules/navigation/Navigation/Navigation";
import ProfileNavigation from "../../molecules/profileNavigation/ProfileNavigation/ProfileNavigation";
import SignOut from "../../molecules/signOut/SignOut/SignOut";

export type UserHeaderProps = {
  user?: User | null;
};

const UserHeader = ({ user }: UserHeaderProps): JSX.Element => (
  <Navigation
    right={
      user && (
        <>
          <ProfileNavigation />
          <SignOut />
        </>
      )
    }
  />
);

export default UserHeader;
