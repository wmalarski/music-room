import { TestWrapper } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import { RoomUsersHeader } from './RoomUsersHeader';

type Props = ComponentProps<typeof RoomUsersHeader>;

const defaultProps: Props = {
  onQueryChange: () => void 0,
  query: '',
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(
    <TestWrapper>
      <RoomUsersHeader {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe('<RoomUsersHeader />', () => {
  it('should render and change query', async () => {
    expect.hasAssertions();

    const onQueryChange = jest.fn();

    renderComponent({
      onQueryChange,
    });

    userEvent.click(await screen.findByRole('button'));

    userEvent.paste(await screen.findByPlaceholderText('listSearch'), 'search');

    expect(onQueryChange).toHaveBeenLastCalledWith('search');
  });
});
