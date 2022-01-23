import {
  Action,
  TABLES_ENDPOINTS,
  UpsertActionArgs,
} from '@music-room/data-access';
import { DefaultRequestBody, rest } from 'msw';

export const mockActionsStorage = {
  get: (): Action[] => JSON.parse(sessionStorage.getItem('actions') ?? '[]'),
  set: (actions: Action[]): void => {
    sessionStorage.setItem('actions', JSON.stringify(actions));
  },
};

export const actionHandlers = [
  rest.get<DefaultRequestBody, { limit: string }, Action[]>(
    TABLES_ENDPOINTS.actions,
    (req, res, ctx) => {
      return res(
        ctx.json(mockActionsStorage.get().slice(0, Number(req.params.limit)))
      );
    }
  ),
  rest.post<UpsertActionArgs, never, Action>(
    TABLES_ENDPOINTS.actions,
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
