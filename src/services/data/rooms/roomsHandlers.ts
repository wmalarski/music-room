import { rest } from "msw";
import { SUPABASE_ENDPOINT } from "../../supabase";
import { Room } from "../types";
import { InsertRoomArgs } from "./insertRoom";

export const mockRoomsStorage = {
  get: (): Room[] => JSON.parse(sessionStorage.getItem("rooms") ?? "[]"),
  set: (actions: Room[]): void =>
    sessionStorage.setItem("rooms", JSON.stringify(actions)),
};

export const roomsHandlers = [
  rest.post<InsertRoomArgs, Room>(
    `${SUPABASE_ENDPOINT}/rooms`,
    (req, res, ctx) => {
      const rooms = mockRoomsStorage.get();

      const id = Math.max(...rooms.map((action) => action.id), 0) + 1;

      const room: Room = {
        id,
        hash: String(id),
        ...req.body,
      };

      mockRoomsStorage.set([...rooms, room]);

      return res(ctx.json(room));
    }
  ),
];
