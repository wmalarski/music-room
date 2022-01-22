import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from 'react';
import { Profile } from '../data/types';

type ProfileContextValue =
  | {
      profile: null;
    }
  | {
      profile: Profile;
      setProfile: (profile: Profile) => void;
    };

const ProfileContext = createContext<ProfileContextValue>({ profile: null });

export const useProfile = (): Profile => {
  const { profile } = useContext(ProfileContext);
  if (!profile) throw new Error('Profile context not defined');
  return profile;
};

export const useSetProfile = (): ((profile: Profile) => void) => {
  const context = useContext(ProfileContext);
  if (!context.profile) throw new Error('Profile context not defined');
  return context.setProfile;
};

type Props = {
  children: ReactNode;
  initialProfile: Profile;
};

export const ProfileContextProvider = ({
  children,
  initialProfile,
}: Props): ReactElement => {
  const [profile, setProfile] = useState(initialProfile);
  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
