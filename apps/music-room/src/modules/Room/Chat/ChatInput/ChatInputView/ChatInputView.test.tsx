import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import { defaultMessage } from '../../../../../services/utils/defaults';
import ChatInputView from './ChatInputView';

type ComponentProps = React.ComponentProps<typeof ChatInputView>;

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    onQueryChange: () => null,
    onSubmit: () => null,
    query: '',
    error: null,
    isLoading: false,
    message: defaultMessage,
  };
  return render(<ChatInputView {...defaultProps} {...props} />);
}

describe('<ChatInputView />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
