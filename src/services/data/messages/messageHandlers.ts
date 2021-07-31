import { DefaultRequestBody, rest } from "msw";
import { SUPABASE_ENDPOINT, TABLES } from "../../supabase";
import { Message } from "../types";
import { InsertMessageArgs } from "./insertMessage";

export const mockMessagesStorage = {
  get: (): Message[] => JSON.parse(sessionStorage.getItem("messages") ?? "[]"),
  set: (actions: Message[]): void =>
    sessionStorage.setItem("messages", JSON.stringify(actions)),
};

export const messagesHandlers = [
  rest.get<DefaultRequestBody, Message[]>(
    `${SUPABASE_ENDPOINT}/${TABLES.messages}`,
    (req, res, ctx) =>
      res(ctx.json(mockMessagesStorage.get().slice(0, req.params.limit)))
  ),
  rest.post<InsertMessageArgs, Message>(
    `${SUPABASE_ENDPOINT}/${TABLES.messages}`,
    ({ body }, res, ctx) => {
      const messages = mockMessagesStorage.get();

      const id = Math.max(...messages.map((action) => action.id), 0) + 1;

      const message: Message = {
        id,
        created_at: new Date().toISOString(),
        ...body,
      };

      mockMessagesStorage.set([...messages, message]);

      return res(ctx.json(message));
    }
  ),
];
