import { ReactElement } from 'react';
import { Member } from '../../services/data/types';
import { useRoleGuard } from '../../utils/contexts/RoleContext';
import { RoomHeader } from '../Headers/RoomHeader/RoomHeader';
import { Layout } from '../Layout/Layout';
import { DeleteRoom } from './DeleteRoom/DeleteRoom';
import { RoomDetails } from './RoomDetails/RoomDetails';
import { RoomForm } from './RoomForm/RoomForm';
import { RoomUsers } from './RoomUsers/RoomUsers';

type Props = {
  member: Member;
};

export const Settings = ({ member }: Props): ReactElement => (
  <Layout appTitle={member.room_name} header={<RoomHeader />}>
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
  </Layout>
);
