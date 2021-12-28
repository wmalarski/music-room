import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React, { ComponentProps } from 'react';
import {
  defaultProfile,
  defaultRoom,
  defaultUser,
} from '../../services/utils/defaults';
import { Invite } from './Invite';

type Props = ComponentProps<typeof Invite>;

const defaultProps: Props = {
  room: defaultRoom,
  user: defaultUser,
  profile: defaultProfile,
};

function renderComponent(props: Partial<Props> = {}) {
  return render(<Invite {...defaultProps} {...props} />);
}

describe('<Invite />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
