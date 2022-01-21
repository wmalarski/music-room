import {
  createContext,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useContext,
} from 'react';
import { Role, RoomRole } from '../data/types';

const RoleContext = createContext<Role | null>(null);

export const useRole = (): Role => {
  const value = useContext(RoleContext);
  if (!value) throw new Error('Role context not defined');
  return value;
};

type Props = {
  children: ReactNode;
  role: Role;
};

export const RoleContextProvider = ({
  children,
  role,
}: Props): ReactElement => (
  <RoleContext.Provider value={role}>{children}</RoleContext.Provider>
);

type RoleGuardProps = {
  visibleFor: RoomRole[];
  fallback?: ReactNode;
  role?: RoomRole;
};

export const RoleGuard = ({
  visibleFor,
  children = null,
  fallback = null,
  role,
}: PropsWithChildren<RoleGuardProps>): ReactElement => {
  const { role: defaultRole } = useRole();

  return (
    <div>{visibleFor.includes(role ?? defaultRole) ? children : fallback}</div>
  );
};

export type RoleGuardValues<T> = Partial<Record<RoomRole, T>>;
export type RoleGuardArgs<T> = Partial<Record<RoomRole, T>> & { default?: T };

export function roleGuard<T>(
  role: RoomRole,
  args: RoleGuardArgs<T>
): T | undefined {
  return args[role] ?? args.default;
}

export function useRoleGuard<T>(args: RoleGuardArgs<T>): T | undefined {
  const { role } = useRole();

  return roleGuard(role, args);
}
