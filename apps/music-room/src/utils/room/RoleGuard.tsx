import { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { RoomRole } from '../../services/data/types';
import { useMemberContext } from './MemberContext';

type Props = {
  visibleFor: RoomRole[];
  fallback?: ReactNode;
  role?: RoomRole;
};

export const RoleGuard = ({
  visibleFor,
  children,
  fallback = null,
  role,
}: PropsWithChildren<Props>): ReactElement => {
  const { role: defaultRole } = useMemberContext();

  return <>{visibleFor.includes(role ?? defaultRole) ? children : fallback}</>;
};
