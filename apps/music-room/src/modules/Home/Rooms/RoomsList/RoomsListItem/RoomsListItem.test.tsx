import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { defaultMember } from '../../../../../services/utils/defaults';
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

    expect(true).toBeTruthy();
  });
});
