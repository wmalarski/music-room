import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { defaultProfile, defaultUser } from '../../services/utils/defaults';
import { Profile } from './Profile';

type Props = ComponentProps<typeof Profile>;

const defaultProps: Props = {
  user: defaultUser,
  profile: defaultProfile,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<Profile {...defaultProps} {...props} />);
};

describe('<Profile />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
