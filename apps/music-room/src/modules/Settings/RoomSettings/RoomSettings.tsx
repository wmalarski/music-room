import { ReactElement } from 'react';
import { useRoleGuard } from '../../../utils/contexts/RoleContext';
import { DeleteRoom } from './DeleteRoom/DeleteRoom';
import { RoomDetails } from './RoomDetails/RoomDetails';
import { RoomForm } from './RoomForm/RoomForm';
import { RoomUsers } from './RoomUsers/RoomUsers';

export const RoomSettings = (): ReactElement => (
  <>
    {useRoleGuard({
      owner: (
        <>
          <RoomForm />
          <DeleteRoom />
        </>
      ),
      mod: <RoomForm />,
      default: <RoomDetails />,
    })}
    <RoomUsers />
  </>
);
