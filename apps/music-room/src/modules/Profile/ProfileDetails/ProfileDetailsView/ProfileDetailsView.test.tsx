import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import { defaultProfile } from '../../../../services/utils/defaults';
import ProfileDetailsView from './ProfileDetailsView';

type ComponentProps = React.ComponentProps<typeof ProfileDetailsView>;

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    error: null,
    isLoading: false,
    onSubmit: () => null,
    profile: defaultProfile,
  };
  return render(<ProfileDetailsView {...defaultProps} {...props} />);
}

describe('<ProfileDetailsView />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
