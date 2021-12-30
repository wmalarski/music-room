import { defaultMember, MemberContextProvider } from '@music-room/data-access';
import { TestWrapper } from '@music-room/util-tests';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { InviteLink } from './InviteLink';

const renderComponent = () => {
  return render(
    <MemberContextProvider member={defaultMember}>
      <TestWrapper>
        <InviteLink />
      </TestWrapper>
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
