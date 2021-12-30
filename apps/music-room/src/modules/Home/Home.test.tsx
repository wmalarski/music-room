import { TestWrapper } from '@music-room/util-tests';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Home } from './Home';

const renderComponent = () => {
  return render(
    <TestWrapper>
      <Home />
    </TestWrapper>
  );
};

describe('<Home />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
