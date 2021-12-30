import { Room } from '@music-room/data-access';
import { createContext, ReactElement, ReactNode, useContext } from 'react';

const RoomContext = createContext<Room | null>(null);

export const useRoom = (): Room => {
  const value = useContext(RoomContext);
  if (!value) throw new Error('Room context not defined');
  return value;
};

type Props = {
  children: ReactNode;
  room: Room;
};

export const RoomContextProvider = ({
  children,
  room,
}: Props): ReactElement => (
  <RoomContext.Provider value={room}>{children}</RoomContext.Provider>
);
