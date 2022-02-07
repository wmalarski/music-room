import { defaultPostgrestError, defaultProfile } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import { CreateRoomView } from './CreateRoomView';
import { CreateRoomFormData } from './CreateRoomView.utils';

type Props = ComponentProps<typeof CreateRoomView>;

const defaultProps: Props = {
  profile: defaultProfile,
  error: null,
  isLoading: false,
  onSubmit: () => null,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<CreateRoomView {...defaultProps} {...props} />);
};

const submitForm = async ({ name, slug }: CreateRoomFormData) => {
  if (name.length > 0) {
    userEvent.type(
      await screen.findByPlaceholderText('roomNamePlaceholder'),
      name
    );
  }

  if (slug.length > 0) {
    userEvent.type(
      await screen.findByPlaceholderText('roomSlugPlaceholder'),
      slug
    );
  }
  userEvent.click(await screen.findByText('addRoom'));
};

describe('<CreateRoomView />', () => {
  it('should render and not submit when no profile', async () => {
    expect.hasAssertions();

    const onSubmit = jest.fn();

    renderComponent({
      profile: null,
      onSubmit,
    });

    await submitForm({
      name: 'Name123',
      slug: 'Slug123',
    });

    expect(onSubmit).toHaveBeenCalledTimes(0);
    expect(
      await screen.findByPlaceholderText('roomSlugPlaceholder')
    ).toBeInTheDocument();
  });

  it('should render and submit form', async () => {
    expect.hasAssertions();

    const data: CreateRoomFormData = {
      name: 'Name123',
      slug: 'Slug123',
    };
    const onSubmit = jest.fn((event) => {
      expect(event.name).toStrictEqual(data.name);
      expect(event.slug).toStrictEqual(data.slug);
    });

    renderComponent({
      onSubmit,
    });

    await submitForm(data);

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('should show errors on submit incorrect form', async () => {
    expect.hasAssertions();

    const data: CreateRoomFormData = {
      name: '',
      slug: '@@@',
    };

    renderComponent({
      error: defaultPostgrestError,
    });

    await submitForm(data);

    expect(
      await screen.findByText('slugPatternIsRequired')
    ).toBeInTheDocument();
    expect(await screen.findByText('fieldIsRequired')).toBeInTheDocument();
    expect(
      await screen.findByText(defaultPostgrestError.message)
    ).toBeInTheDocument();
  });
});
