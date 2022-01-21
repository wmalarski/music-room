import { useRoleGuard, useRoom } from '@music-room/data-access';
import { Flex } from '@music-room/ui';
import { ReactElement } from 'react';
import { RoomHeader } from '../Headers/RoomHeader/RoomHeader';
import { Layout } from '../Layout/Layout';
import { DeleteRoom } from './DeleteRoom/DeleteRoom';
import { RoomDetails } from './RoomDetails/RoomDetails';
import { RoomForm } from './RoomForm/RoomForm';
import { RoomUsers } from './RoomUsers/RoomUsers';

export const Settings = (): ReactElement => {
  const { name } = useRoom();
  return (
    <Layout appTitle={name} header={<RoomHeader />}>
      <Flex direction="column" gap="md" space="lg">
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
      </Flex>
    </Layout>
  );
};
