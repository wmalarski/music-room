import { createContext, ReactElement, ReactNode, useContext } from 'react';
import { Profile } from '../data/types';

const ProfileContext = createContext<Profile | null>(null);

export const useProfile = (): Profile => {
  const value = useContext(ProfileContext);
  if (!value) throw new Error('Profile context not defined');
  return value;
};

type Props = {
  children: ReactNode;
  profile: Profile;
};

export const ProfileContextProvider = ({
  children,
  profile,
}: Props): ReactElement => (
  <ProfileContext.Provider value={profile}>{children}</ProfileContext.Provider>
);
