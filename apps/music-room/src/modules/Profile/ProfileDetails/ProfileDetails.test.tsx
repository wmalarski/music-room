import { PropsWithTestWrapper, TestWrapper } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import { convert } from '../../../tests/models';
import { userWithRoomsScenario } from '../../../tests/scenarios';
import { ProfileDetails } from './ProfileDetails';

type Props = ComponentProps<typeof ProfileDetails>;

const View: Props['View'] = ({ profile, onSubmit }) => {
  return (
    <>
      <button onClick={() => onSubmit({ name: 'Username' })}>Update</button>
      <p>{profile.name}</p>
    </>
  );
};

const defaultProps: Props = {
  View,
};

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  return render(
    <TestWrapper {...wrapperProps}>
      <ProfileDetails {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe('<ProfileDetails />', () => {
  it('should update profile', async () => {
    expect.hasAssertions();

    const { author } = userWithRoomsScenario(1);

    renderComponent({
      wrapperProps: {
        profile: convert.toProfile(author),
      },
    });

    userEvent.click(await screen.findByText('Update'));

    await waitFor(async () => {
      expect(await screen.findByText('Username')).toBeInTheDocument();
    });

    expect(await screen.findByText('Username')).toBeInTheDocument();
  });
});
