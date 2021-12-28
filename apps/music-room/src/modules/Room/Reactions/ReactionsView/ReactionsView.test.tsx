import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import {
  defaultAction,
  defaultMessage,
} from '../../../../services/utils/defaults';
import { ReactionsView } from './ReactionsView';

type Props = ComponentProps<typeof ReactionsView>;

const defaultProps: Props = {
  action: defaultAction,
  message: defaultMessage,
  onChange: () => null,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<ReactionsView {...defaultProps} {...props} />);
};

describe('<ReactionsView />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
