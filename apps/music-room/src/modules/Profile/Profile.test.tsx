import {
  defaultProfile,
  defaultUser,
  TestWrapper,
} from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { Profile } from './Profile';

type Props = ComponentProps<typeof Profile>;

const defaultProps: Props = {
  user: defaultUser,
  profile: defaultProfile,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(
    <TestWrapper>
      <Profile {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe('<Profile />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
