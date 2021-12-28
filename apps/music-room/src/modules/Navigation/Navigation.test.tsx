import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Navigation } from './Navigation';

type Props = ComponentProps<typeof Navigation>;

const View: Props['View'] = ({ right }) => (
  <>
    <div>{right}</div>
  </>
);

const defaultProps: Props = {
  View,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <Navigation {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe('<Navigation />', () => {
  it('should render right', async () => {
    expect.hasAssertions();

    renderComponent({ right: 'Hello world' });

    expect(await screen.findByText('Hello world')).toBeInTheDocument();
  });
});
