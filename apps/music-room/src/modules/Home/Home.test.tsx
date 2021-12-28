import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import { defaultUser } from '../../services/utils/defaults';
import { Home } from './Home';

const renderComponent = () => {
  return render(<Home user={defaultUser} />);
};

describe('<Home />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
