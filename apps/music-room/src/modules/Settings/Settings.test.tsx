import { defaultMember } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { Settings } from './Settings';

type Props = ComponentProps<typeof Settings>;

const defaultProps: Props = {
  member: defaultMember,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<Settings {...defaultProps} {...props} />);
};

describe('<Settings />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
