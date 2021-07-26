import { DefaultRequestBody, rest } from "msw";
import { SUPABASE_ENDPOINT } from "../../supabase";
import { Action } from "../types";
import { UpsertActionArgs } from "./upsertAction";

export const mockActionsStorage = {
  get: (): Action[] =>
    JSON.parse(window.sessionStorage.getItem("actions") ?? "[]"),
  set: (actions: Action[]): void =>
    window.sessionStorage.setItem("actions", JSON.stringify(actions)),
};

export const actionHandlers = [
  rest.get<DefaultRequestBody, Action[]>(
    `${SUPABASE_ENDPOINT}/actions`,
    (req, res, ctx) =>
      res(ctx.json(mockActionsStorage.get().slice(0, req.params.limit)))
  ),
  rest.post<UpsertActionArgs, Action>(
    `${SUPABASE_ENDPOINT}/actions`,
    (req, res, ctx) => {
      const actions = mockActionsStorage.get();

      const action: Action = {
        id: Math.max(...actions.map((action) => action.id), 0) + 1,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        dislike_at: req.body.dislike_at ?? null,
        like_at: req.body.like_at ?? null,
        ...req.body,
      };

      mockActionsStorage.set([...actions, action]);

      return res(ctx.json(action));
    }
  ),
];
