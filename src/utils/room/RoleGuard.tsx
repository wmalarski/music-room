import { PropsWithChildren } from "react";
import { RoomRole } from "../../services/data/types";
import { useMemberContext } from "./RoomContext";

export type RoleGuardProps = {
  visibleFor: RoomRole[];
  fallback?: React.ReactNode;
};

const RoleGuard = ({
  visibleFor,
  children,
  fallback = null,
}: PropsWithChildren<RoleGuardProps>): JSX.Element | null => {
  const { role } = useMemberContext();

  return <>{visibleFor.includes(role) ? children : fallback}</>;
};

export default RoleGuard;
