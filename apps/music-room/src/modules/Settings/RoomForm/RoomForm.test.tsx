import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { mockMembersStorage } from '../../../services/data/members/membersHandlers';
import { mockRoomsStorage } from '../../../services/data/rooms/roomsHandlers';
import { defaultMember, defaultRoom } from '../../../services/utils/defaults';
import { RoomForm } from './RoomForm';

type Props = ComponentProps<typeof RoomForm>;

const View: Props['View'] = ({ roomName, onSubmit }) => (
  <>
    <button onClick={() => onSubmit({ name: 'RoomName' })}>Change</button>
    <p>{roomName}</p>
  </>
);

const defaultProps: Props = { View };

const renderComponent = (props: Partial<Props> = {}) => {
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <RoomForm {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe('<RoomForm />', () => {
  it('should add room', async () => {
    expect.hasAssertions();

    mockMembersStorage.setContext(defaultMember);
    mockRoomsStorage.set([defaultRoom]);

    renderComponent();

    userEvent.click(await screen.findByText('Change'));

    await waitFor(async () =>
      expect(await screen.findByText('RoomName')).toBeInTheDocument()
    );

    expect(await screen.findByText('RoomName')).toBeInTheDocument();
  });
});
