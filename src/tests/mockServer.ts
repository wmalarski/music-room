import { setupServer } from "msw/node";
import { actionHandlers } from "../services/data/actions/actionHandlers";
import { membersHandlers } from "../services/data/members/membersHandlers";
import { messagesHandlers } from "../services/data/messages/messageHandlers";

const server = setupServer(
  ...actionHandlers,
  ...messagesHandlers,
  ...membersHandlers
);

export default server;
