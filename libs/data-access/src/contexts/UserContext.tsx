import { User } from '@supabase/supabase-js';
import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { supabase } from '../supabase';

export type UserContextValue = User | null;

export const UserContext = createContext<UserContextValue>(null);

export const useUserContext = (): UserContextValue => useContext(UserContext);

export const useUser = (): User => {
  const user = useContext(UserContext);
  if (!user) throw new Error('User is not defined');
  return user;
};

type Props = {
  children: ReactNode;
};

export const UserContextProvider = ({ children }: Props): ReactElement => {
  const [user, setUser] = useState<User | null>(supabase.auth.user());

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      await fetch('/api/auth', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        credentials: 'same-origin',
        body: JSON.stringify({ event, session }),
      });

      setUser(session?.user ?? null);
    });
    return () => {
      data?.unsubscribe?.();
    };
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
