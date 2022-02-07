import { defaultMember } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { RoomsListItem } from './RoomsListItem';

type Props = ComponentProps<typeof RoomsListItem>;

const defaultProps: Props = {
  member: defaultMember,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<RoomsListItem {...defaultProps} {...props} />);
};

describe('<RoomsListItem />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(await screen.findByRole('link')).toBeInTheDocument();
  });

  it('should render skelton', async () => {
    expect.hasAssertions();

    renderComponent({
      member: undefined,
    });

    expect(screen.queryByRole('link')).toBeNull();
  });
});
