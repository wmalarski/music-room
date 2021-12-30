import {
  defaultMember,
  defaultRoom,
  mockMembersStorage,
  mockRoomsStorage,
} from '@music-room/data-access';
import { TestWrapper } from '@music-room/util-tests';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
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
    <TestWrapper>
      <RoomForm {...defaultProps} {...props} />
    </TestWrapper>
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
