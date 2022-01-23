import {
  createContext,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from 'react';
import { Role, RoomRole } from '../data/types';

type RoleContextValue =
  | {
      role: null;
    }
  | {
      role: Role;
      setRole: (role: Role) => void;
    };

const RoleContext = createContext<RoleContextValue>({ role: null });

export const useRole = (): Role => {
  const { role } = useContext(RoleContext);
  if (!role) throw new Error('Role context not defined');
  return role;
};

export const useSetRole = (): ((role: Role) => void) => {
  const context = useContext(RoleContext);
  if (!context.role) throw new Error('Role context not defined');
  return context.setRole;
};

type Props = {
  children: ReactNode;
  initialRole: Role;
};

export const RoleContextProvider = ({
  children,
  initialRole,
}: Props): ReactElement => {
  const [role, setRole] = useState(initialRole);
  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};

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
