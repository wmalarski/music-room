import {
  InsertMessageArgs,
  Message,
  TABLES_ENDPOINTS,
} from '@music-room/data-access';
import { DefaultRequestBody, rest } from 'msw';

export const mockMessagesStorage = {
  get: (): Message[] => JSON.parse(sessionStorage.getItem('messages') ?? '[]'),
  set: (actions: Message[]): void =>
    sessionStorage.setItem('messages', JSON.stringify(actions)),
};

export const messagesHandlers = [
  rest.get<DefaultRequestBody, { limit: string }, Message[]>(
    TABLES_ENDPOINTS.messages,
    (req, res, ctx) =>
      res(
        ctx.json(mockMessagesStorage.get().slice(0, Number(req.params.limit)))
      )
  ),
  rest.post<InsertMessageArgs, never, Message>(
    TABLES_ENDPOINTS.messages,
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
