import {
  Controls,
  defaultError,
  ResponseError,
  TABLES_ENDPOINTS,
  UpdateControlsArgs,
} from '@music-room/data-access';
import { DefaultRequestBody, rest } from 'msw';
import { convert, mockDb } from '../models';
import { getEqParam } from './utils';

export const controlsHandlers = [
  rest.get<DefaultRequestBody, never, Controls | ResponseError>(
    TABLES_ENDPOINTS.controls,
    (req, res, ctx) => {
      const roomId = getEqParam(req, 'room_id');

      if (!roomId)
        return res(ctx.json<ResponseError>(defaultError), ctx.status(400));

      const entity = mockDb.controls.findFirst({
        where: { room_id: { id: { equals: Number(roomId) } } },
      });

      const controls = convert.toControls(entity);

      if (!controls)
        return res(ctx.json<ResponseError>(defaultError), ctx.status(400));

      return res(ctx.json<Controls>(controls));
    }
  ),
  rest.patch<UpdateControlsArgs, never, Controls | ResponseError>(
    TABLES_ENDPOINTS.controls,
    (req, res, ctx) => {
      const changeBy = mockDb.profile.findFirst({
        where: { id: { equals: req.body.change_by } },
      });

      const speakerId =
        req.body.speaker_id || req.body.speaker_id === 0
          ? mockDb.profile.findFirst({
              where: { id: { equals: req.body.speaker_id } },
            })
          : undefined;

      if (!changeBy)
        return res(ctx.json<ResponseError>(defaultError), ctx.status(400));

      const entity = mockDb.controls.update({
        where: { id: { equals: req.body.id } },
        data: {
          change_by: changeBy,
          speaker_id: speakerId ?? undefined,
          muted: req.body.muted,
          pause: req.body.pause,
          volume: req.body.volume,
        },
      });

      const controls = convert.toControls(entity);

      if (!controls)
        return res(ctx.json<ResponseError>(defaultError), ctx.status(400));

      return res(ctx.json<Controls>(controls));
    }
  ),
];
