import { RoomRole } from "../../services/data/types";
import { useMemberContext } from "./RoomContext";

export type RoleGuardArgs<T> = Partial<Record<RoomRole, T>> & { default?: T };

export const roleGuard = <T>(
  role: RoomRole,
  args: RoleGuardArgs<T>
): T | undefined => args[role] ?? args.default;

const useRoleGuard = <T>(args: RoleGuardArgs<T>): T | undefined => {
  const { role } = useMemberContext();

  return roleGuard(role, args);
};

export default useRoleGuard;
