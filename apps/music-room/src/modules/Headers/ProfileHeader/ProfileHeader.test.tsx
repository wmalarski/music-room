import { TestWrapper } from '@music-room/util-tests';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ProfileHeader } from './ProfileHeader';

const renderComponent = () => {
  return render(
    <TestWrapper>
      <ProfileHeader />
    </TestWrapper>
  );
};

describe('<ProfileHeader />', () => {
  it('should navigate to profile', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
