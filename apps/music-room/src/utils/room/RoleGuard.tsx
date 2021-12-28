import { PropsWithChildren } from "react";
import { RoomRole } from "../../services/data/types";
import { useMemberContext } from "./MemberContext";

export type RoleGuardProps = {
  visibleFor: RoomRole[];
  fallback?: React.ReactNode;
  role?: RoomRole;
};

const RoleGuard = ({
  visibleFor,
  children,
  fallback = null,
  role,
}: PropsWithChildren<RoleGuardProps>): JSX.Element | null => {
  const { role: defaultRole } = useMemberContext();

  return <>{visibleFor.includes(role ?? defaultRole) ? children : fallback}</>;
};

export default RoleGuard;
