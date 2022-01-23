import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from 'react';
import { Room } from '../data/types';

type RoomContextValue =
  | {
      room: null;
    }
  | {
      room: Room;
      setRoom: (room: Room) => void;
    };

const RoomContext = createContext<RoomContextValue>({ room: null });

export const useRoom = (): Room => {
  const { room } = useContext(RoomContext);
  if (!room) throw new Error('Room context not defined');
  return room;
};

export const useSetRoom = (): ((room: Room) => void) => {
  const context = useContext(RoomContext);
  if (!context.room) throw new Error('Room context not defined');
  return context.setRoom;
};

type Props = {
  children: ReactNode;
  initialRoom: Room;
};

export const RoomContextProvider = ({
  children,
  initialRoom,
}: Props): ReactElement => {
  const [room, setRoom] = useState(initialRoom);
  return (
    <RoomContext.Provider value={{ room, setRoom }}>
      {children}
    </RoomContext.Provider>
  );
};
