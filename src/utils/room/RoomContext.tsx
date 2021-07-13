import { createContext, ReactNode, useContext } from "react";
import { RoomProfile } from "../../services/data/types";

const RoomContext = createContext<RoomProfile>({
  author_id: 0,
  data: { kind: "room#0.0.1" },
  hash: "",
  name: "",
  profile_id: 0,
  role: "guest",
  room_id: 0,
  room_name: "",
  slug: "",
  user_id: "",
});

export const useRoomContext = (): RoomProfile => useContext(RoomContext);

export type RoomContextProviderProps = {
  children: ReactNode;
  room: RoomProfile;
};

export const RoomContextProvider = ({
  children,
  room,
}: RoomContextProviderProps): JSX.Element => (
  <RoomContext.Provider value={room}>{children}</RoomContext.Provider>
);

export default RoomContext;
