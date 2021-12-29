import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { defaultMember } from '../../../../services/utils/defaults';
import { MemberContextProvider } from '../../../../utils/contexts/MemberContext';
import { InviteLink } from './InviteLink';

type Props = ComponentProps<typeof InviteLink>;

const View: Props['View'] = ({ link }) => <p>{link}</p>;

const renderComponent = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    View,
  };
  return render(
    <MemberContextProvider member={defaultMember}>
      <QueryClientProvider client={new QueryClient()}>
        <InviteLink {...defaultProps} {...props} />
      </QueryClientProvider>
    </MemberContextProvider>
  );
};

describe('<InviteLink />', () => {
  it('should render link', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(await screen.findByText(/.*qwertyuiop/)).toBeInTheDocument();
  });
});
