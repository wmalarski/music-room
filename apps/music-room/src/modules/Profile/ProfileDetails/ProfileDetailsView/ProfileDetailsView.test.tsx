import { defaultPostgrestError, defaultProfile } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import { ProfileDetailsView } from './ProfileDetailsView';
import { ProfileDetailsViewData } from './ProfileDetailsView.utils';

type Props = ComponentProps<typeof ProfileDetailsView>;

const defaultProps: Props = {
  error: null,
  isLoading: false,
  onSubmit: () => null,
  profile: defaultProfile,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<ProfileDetailsView {...defaultProps} {...props} />);
};

const submitForm = async ({ name }: ProfileDetailsViewData) => {
  const nameInput = await screen.findByPlaceholderText(
    'profileNamePlaceholder'
  );
  userEvent.clear(nameInput);
  if (name.length > 0) {
    userEvent.type(nameInput, name);
  }
  userEvent.click(await screen.findByText('profileSaveButton'));
};

describe('<ProfileDetailsView />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    const data: ProfileDetailsViewData = {
      name: 'New Name',
    };
    const onSubmit = jest.fn((event) => {
      expect(event.name).toStrictEqual(data.name);
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

    const data: ProfileDetailsViewData = {
      name: '',
    };

    renderComponent({
      error: defaultPostgrestError,
    });

    await submitForm(data);

    expect(await screen.findByText('fieldIsRequired')).toBeInTheDocument();
    expect(
      await screen.findByText(defaultPostgrestError.message)
    ).toBeInTheDocument();
  });
});
