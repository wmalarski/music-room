import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { mockMembersStorage } from '../../../../services/data/members/membersHandlers';
import { mockProfilesStorage } from '../../../../services/data/profiles/profileHandlers';
import {
  defaultMember,
  defaultProfile,
} from '../../../../services/utils/defaults';
import DeleteRoom from './DeleteRoom';
import { DeleteRoomViewProps } from './DeleteRoomView/DeleteRoomView';

type ComponentProps = React.ComponentProps<typeof DeleteRoom>;

const View = ({ onClicked }: DeleteRoomViewProps) => (
  <button onClick={() => onClicked()}>Delete</button>
);

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <DeleteRoom {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe('<DeleteRoom />', () => {
  it('should delete room', async () => {
    expect.hasAssertions();

    mockMembersStorage.setContext(defaultMember);
    mockProfilesStorage.set([defaultProfile]);

    renderComponent();

    userEvent.click(await screen.findByText('Delete'));

    const { push } = jest.requireMock('next/router').default;

    await waitFor(async () => expect(push).toHaveBeenCalledTimes(1));

    expect(push).toHaveBeenCalledWith(`/`);
  });
});