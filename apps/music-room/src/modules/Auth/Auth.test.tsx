import { TestWrapper } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Auth } from './Auth';

const renderComponent = () => {
  return render(
    <TestWrapper>
      <Auth />
    </TestWrapper>
  );
};

describe('<Auth />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
