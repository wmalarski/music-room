import { DefaultRequestBody, rest } from "msw";
import { SUPABASE_ENDPOINT, TABLES } from "../../supabase";
import { Member } from "../types";

export const mockMembersStorage = {
  get: (): Member[] => JSON.parse(sessionStorage.getItem("members") ?? "[]"),
  set: (actions: Member[]): void =>
    sessionStorage.setItem("members", JSON.stringify(actions)),
};

export const membersHandlers = [
  rest.get<DefaultRequestBody, Member[]>(
    `${SUPABASE_ENDPOINT}/${TABLES.members}`,
    (req, res, ctx) =>
      res(ctx.json(mockMembersStorage.get().slice(0, req.params.limit)))
  ),
];
