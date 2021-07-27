import { setupServer } from "msw/node";
import { actionHandlers } from "../services/data/actions/actionHandlers";
import { membersHandlers } from "../services/data/members/membersHandlers";
import { messagesHandlers } from "../services/data/messages/messageHandlers";
import { profilesHandlers } from "../services/data/profiles/profileHandlers";
import { roomsHandlers } from "../services/data/rooms/roomsHandlers";

const server = setupServer(
  ...actionHandlers,
  ...messagesHandlers,
  ...membersHandlers,
  ...profilesHandlers,
  ...roomsHandlers
);

export default server;
