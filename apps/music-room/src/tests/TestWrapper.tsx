import { defaultMember, defaultUser, Member } from '@music-room/data-access';
import { User } from '@supabase/supabase-js';
import { ReactElement, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemberContextProvider } from '../utils/contexts/MemberContext';
import { UserContext } from '../utils/contexts/UserContext';

export type TestWrapperProps = {
  children?: ReactNode;
  member?: Member;
  user?: User | null;
};

export const TestWrapper = ({
  children,
  member,
  user,
}: TestWrapperProps): ReactElement => {
  return (
    <UserContext.Provider value={user ?? defaultUser}>
      <QueryClientProvider client={new QueryClient()}>
        <MemberContextProvider member={member ?? defaultMember}>
          {children}
        </MemberContextProvider>
      </QueryClientProvider>
    </UserContext.Provider>
  );
};
