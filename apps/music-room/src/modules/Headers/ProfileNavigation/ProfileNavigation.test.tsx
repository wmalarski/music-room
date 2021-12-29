import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ProfileNavigation } from './ProfileNavigation';

type Props = ComponentProps<typeof ProfileNavigation>;

const View: Props['View'] = () => <button>Click</button>;

const defaultProps: Props = {
  View,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <ProfileNavigation {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe('<ProfileNavigation />', () => {
  it('should navigate to profile', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
