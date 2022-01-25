import { PropsWithTestWrapper, TestWrapper } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import { convert } from '../../../tests/models';
import { roomWithUsersScenario } from '../../../tests/scenarios';
import { DeleteRoom } from './DeleteRoom';

type Props = ComponentProps<typeof DeleteRoom>;

const View: Props['View'] = ({ onClick: onClicked }) => {
  return <button onClick={() => onClicked()}>Delete</button>;
};

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {
    View,
  };
  return render(
    <TestWrapper {...wrapperProps}>
      <DeleteRoom {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe('<DeleteRoom />', () => {
  it('should delete room', async () => {
    expect.hasAssertions();

    const { room } = roomWithUsersScenario(3);

    renderComponent({
      wrapperProps: {
        room: convert.toRoom(room),
      },
    });

    userEvent.click(await screen.findByText('Delete'));

    const { push } = jest.requireMock('next/router').default;

    await waitFor(async () => expect(push).toHaveBeenCalledTimes(1));

    expect(push).toHaveBeenCalledWith(`/`);
  });

  it('should render default view', async () => {
    expect.hasAssertions();

    const { room } = roomWithUsersScenario(3);

    renderComponent({
      View: undefined,
      wrapperProps: {
        room: convert.toRoom(room),
      },
    });

    expect(await screen.findByRole('button')).toBeInTheDocument();
  });
});
