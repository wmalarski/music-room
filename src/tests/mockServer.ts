import { setupServer } from "msw/node";
import { actionHandlers } from "../services/data/actions/actionHandlers";
import { messagesHandlers } from "../services/data/messages/messageHandlers";

const server = setupServer(...actionHandlers, ...messagesHandlers);

export default server;
