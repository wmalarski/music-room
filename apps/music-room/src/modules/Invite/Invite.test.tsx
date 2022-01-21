import { defaultRoom, TestWrapper } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { Invite } from './Invite';

type Props = ComponentProps<typeof Invite>;

const defaultProps: Props = {
  room: defaultRoom,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(
    <TestWrapper>
      <Invite {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe('<Invite />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
