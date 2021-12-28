import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import { defaultMember } from '../../../../../services/utils/defaults';
import RoomsListItem from './RoomsListItem';

type ComponentProps = React.ComponentProps<typeof RoomsListItem>;

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    member: defaultMember,
  };
  return render(<RoomsListItem {...defaultProps} {...props} />);
}

describe('<RoomsListItem />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
