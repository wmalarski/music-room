import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { defaultMessage } from '../../../../../services/utils/defaults';
import { ChatInputView } from './ChatInputView';

type Props = ComponentProps<typeof ChatInputView>;

const defaultProps: Props = {
  onQueryChange: () => null,
  onSubmit: () => null,
  query: '',
  error: null,
  isLoading: false,
  message: defaultMessage,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<ChatInputView {...defaultProps} {...props} />);
};

describe('<ChatInputView />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
