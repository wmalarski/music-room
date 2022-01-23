import { TestWrapper } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { InviteLink } from './InviteLink';

const renderComponent = () => {
  return render(
    <TestWrapper>
      <InviteLink />
    </TestWrapper>
  );
};

describe('<InviteLink />', () => {
  it('should render link', async () => {
    expect.hasAssertions();

    renderComponent();

    const input = await screen.findByTestId<HTMLInputElement>('invite-input');

    expect(input.value).toContain('qwertyuiop');
  });
});
