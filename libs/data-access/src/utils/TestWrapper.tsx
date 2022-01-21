import {
  defaultMember,
  defaultUser,
  Member,
  MemberContextProvider,
  UserContext,
} from '@music-room/data-access';
import { User } from '@supabase/supabase-js';
import { ReactElement, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export type TestWrapperProps = {
  children?: ReactNode;
  member?: Member;
  user?: User | null;
};

export type PropsWithTestWrapper<T = unknown> = T & {
  wrapperProps?: Omit<TestWrapperProps, 'children'>;
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
