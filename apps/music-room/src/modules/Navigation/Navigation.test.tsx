import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navigation from './Navigation';
import { NavigationViewProps } from './NavigationView/NavigationView';

type ComponentProps = React.ComponentProps<typeof Navigation>;

const View = ({ right }: NavigationViewProps) => (
  <>
    <div>{right}</div>
  </>
);

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
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
