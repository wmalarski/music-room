import { mockDb, MockEntity } from '../models';

type CreateMockControlsArgs = {
  room: MockEntity<'room'>;
};

export const createMockControls = ({
  room,
}: CreateMockControlsArgs): MockEntity<'controls'> => {
  return mockDb.controls.create({
    change_by: room.author_id,
    muted: false,
    pause: false,
    room_id: room,
    speaker_id: room.author_id,
    volume: 0,
  });
};

type CreateMockControlsForRoomsArgs = {
  rooms: MockEntity<'room'>[];
};

export const createMockControlsForRooms = ({
  rooms,
}: CreateMockControlsForRoomsArgs): MockEntity<'controls'>[] => {
  return rooms.flatMap((room) => {
    const controls = createMockControls({ room });
    return controls ? [controls] : [];
  });
};
