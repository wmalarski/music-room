import { rest } from "msw";
import { SUPABASE_ENDPOINT, TABLES } from "../../supabase";
import { Room } from "../types";
import { DeleteRoomArgs } from "./deleteRoom";
import { InsertRoomArgs } from "./insertRoom";
import { UpdateRoomArgs } from "./updateRoom";

export const mockRoomsStorage = {
  get: (): Room[] => JSON.parse(sessionStorage.getItem("rooms") ?? "[]"),
  set: (actions: Room[]): void =>
    sessionStorage.setItem("rooms", JSON.stringify(actions)),
};

export const roomsHandlers = [
  rest.post<InsertRoomArgs, Room>(
    `${SUPABASE_ENDPOINT}/${TABLES.rooms}`,
    ({ body }, res, ctx) => {
      const rooms = mockRoomsStorage.get();

      const id = Math.max(...rooms.map((action) => action.id), 0) + 1;

      const room: Room = { id, hash: String(id), ...body };

      mockRoomsStorage.set([...rooms, room]);

      return res(ctx.json(room));
    }
  ),
  rest.patch<UpdateRoomArgs, Room>(
    `${SUPABASE_ENDPOINT}/${TABLES.rooms}`,
    ({ body }, res, ctx) => {
      const rooms = [...mockRoomsStorage.get()];
      const index = rooms.findIndex((room) => room.id === body.id);

      const room = { ...rooms[index], ...body };
      rooms.splice(index, 1, room);

      mockRoomsStorage.set(rooms);

      return res(ctx.json(room));
    }
  ),
  rest.delete<DeleteRoomArgs, Room>(
    `${SUPABASE_ENDPOINT}/${TABLES.rooms}`,
    ({ body }, res, ctx) => {
      const rooms = [...mockRoomsStorage.get()];
      const index = rooms.findIndex((room) => room.id === body.id);

      const [room] = rooms.splice(index, 1);

      mockRoomsStorage.set(rooms);

      return res(ctx.json(room));
    }
  ),
];
