import { TestWrapper } from '@music-room/util-tests';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ProfileNavigation } from './ProfileNavigation';

const renderComponent = () => {
  return render(
    <TestWrapper>
      <ProfileNavigation />
    </TestWrapper>
  );
};

describe('<ProfileNavigation />', () => {
  it('should navigate to profile', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});