import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { defaultMember } from '../../services/utils/defaults';
import { Room } from './RoomTemplate';

type Props = ComponentProps<typeof Room>;

const defaultProps: Props = {
  member: defaultMember,
};

function renderComponent(props: Partial<Props> = {}) {
  return render(<Room {...defaultProps} {...props} />);
}

describe('<Room />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
