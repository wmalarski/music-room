import { User } from "@supabase/supabase-js";
import React from "react";
import { Navigation, ProfileNavigation, SignOut } from "../../molecules";

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
