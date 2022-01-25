import { defaultPostgrestError } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import { RoomFormView } from './RoomFormView';
import { RoomFormViewData } from './RoomFormView.utils';

type Props = ComponentProps<typeof RoomFormView>;

const defaultProps: Props = {
  error: null,
  isLoading: false,
  onSubmit: () => null,
  roomName: 'roomName',
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<RoomFormView {...defaultProps} {...props} />);
};

const submitForm = async ({ name }: RoomFormViewData) => {
  const nameInput = await screen.findByPlaceholderText('roomNamePlaceholder');
  userEvent.clear(nameInput);
  if (name.length > 0) {
    userEvent.type(nameInput, name);
  }

  userEvent.click(await screen.findByRole('button'));
};

describe('<RoomFormView />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    const data: RoomFormViewData = {
      name: 'New name',
    };

    const onSubmit = jest.fn((event) => {
      expect(event.name).toStrictEqual(data.name);
    });

    renderComponent({ onSubmit });

    await submitForm(data);

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('should show error on submit incorrect form', async () => {
    expect.hasAssertions();

    const data: RoomFormViewData = {
      name: '33',
    };

    renderComponent();

    await submitForm(data);

    expect(await screen.findByText('errorMinLength: 3')).toBeInTheDocument();
  });

  it('should show loading state and error', async () => {
    expect.hasAssertions();

    renderComponent({
      isLoading: true,
      error: defaultPostgrestError,
    });

    expect(
      await screen.findByText(defaultPostgrestError.message)
    ).toBeInTheDocument();
  });
});
