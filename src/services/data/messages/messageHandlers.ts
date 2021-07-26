import { DefaultRequestBody, rest } from "msw";
import { SUPABASE_ENDPOINT } from "../../supabase";
import { Message } from "../types";

export const mockMessagesStorage = {
  get: (): Message[] => JSON.parse(sessionStorage.getItem("messages") ?? "[]"),
  set: (actions: Message[]): void =>
    sessionStorage.setItem("messages", JSON.stringify(actions)),
};

export const messagesHandlers = [
  rest.get<DefaultRequestBody, Message[]>(
    `${SUPABASE_ENDPOINT}/messages`,
    (req, res, ctx) =>
      res(ctx.json(mockMessagesStorage.get().slice(0, req.params.limit)))
  ),
];
