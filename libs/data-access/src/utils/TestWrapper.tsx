import { User } from '@supabase/supabase-js';
import { ReactElement, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { defaultProfile, defaultRole, defaultRoom } from '..';
import { ProfileContextProvider } from '../contexts/ProfileContext';
import { RoleContextProvider } from '../contexts/RoleContext';
import { RoomContextProvider } from '../contexts/RoomContext';
import { UserContext } from '../contexts/UserContext';
import { Profile, Role, Room } from '../data/types';
import { defaultUser } from './defaults';

export type TestWrapperProps = {
  children?: ReactNode;
  role?: Role;
  profile?: Profile;
  room?: Room;
  user?: User | null;
};

export type PropsWithTestWrapper<T = unknown> = T & {
  wrapperProps?: Omit<TestWrapperProps, 'children'>;
};

export const TestWrapper = ({
  children,
  profile,
  room,
  role,
  user,
}: TestWrapperProps): ReactElement => {
  return (
    <UserContext.Provider value={user ?? defaultUser}>
      <QueryClientProvider client={new QueryClient()}>
        <ProfileContextProvider initialProfile={profile ?? defaultProfile}>
          <RoomContextProvider initialRoom={room ?? defaultRoom}>
            <RoleContextProvider initialRole={role ?? defaultRole}>
              {children}
            </RoleContextProvider>
          </RoomContextProvider>
        </ProfileContextProvider>
      </QueryClientProvider>
    </UserContext.Provider>
  );
};
