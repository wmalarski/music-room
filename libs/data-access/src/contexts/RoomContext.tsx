import { createContext, ReactElement, ReactNode, useContext } from 'react';
import { Room } from '../data/types';

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
