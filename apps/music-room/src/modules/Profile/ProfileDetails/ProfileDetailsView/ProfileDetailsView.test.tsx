import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { defaultProfile } from '../../../../services/utils/defaults';
import { ProfileDetailsView } from './ProfileDetailsView';

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

describe('<ProfileDetailsView />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
