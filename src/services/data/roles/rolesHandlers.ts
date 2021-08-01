import { rest } from "msw";
import { SUPABASE_ENDPOINT, TABLES } from "../../supabase";
import { Role } from "../types";
import { InsertRoleArgs } from "./insertRole";

export const mockRolesStorage = {
  get: (): Role[] => JSON.parse(sessionStorage.getItem("roles") ?? "[]"),
  set: (roles: Role[]): void =>
    sessionStorage.setItem("roles", JSON.stringify(roles)),
};

export const rolesHandlers = [
  rest.post<InsertRoleArgs, Role>(
    `${SUPABASE_ENDPOINT}/${TABLES.roles}`,
    ({ body }, res, ctx) => {
      const roles = mockRolesStorage.get();

      const id = Math.max(...roles.map((action) => action.id), 0) + 1;

      const role: Role = { id, ...body };

      mockRolesStorage.set([...roles, role]);

      return res(ctx.json(role));
    }
  ),
];
