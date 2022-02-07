import { defaultMessage } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { ChatInputView } from './ChatInputView';

type Props = ComponentProps<typeof ChatInputView>;

const defaultProps: Props = {
  onSubmit: () => null,
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
