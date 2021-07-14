import { PropsWithChildren } from "react";
import { RoomRole } from "../../services/data/types";
import { useRoomContext } from "./RoomContext";

export type RoleGuardProps = {
  visibleFor: RoomRole[];
  fallback?: React.ReactNode;
};

const RoleGuard = ({
  visibleFor,
  children,
  fallback = null,
}: PropsWithChildren<RoleGuardProps>): JSX.Element | null => {
  const { role } = useRoomContext();

  return <>{visibleFor.includes(role) ? children : fallback}</>;
};

export default RoleGuard;
