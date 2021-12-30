import { TestWrapper } from '@music-room/util-tests';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Settings } from './Settings';

const renderComponent = () => {
  return render(
    <TestWrapper>
      <Settings />
    </TestWrapper>
  );
};

describe('<Settings />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
