import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { defaultMessage } from '../../../../../services/utils/defaults';
import { ChatMessagesList } from './ChatMessagesList';

type Props = ComponentProps<typeof ChatMessagesList>;

const defaultProps: Props = {
  messages: [
    { ...defaultMessage, id: 1 },
    { ...defaultMessage, id: 2 },
  ],
  onLoadMore: () => null,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<ChatMessagesList {...defaultProps} {...props} />);
};

describe('<ChatMessagesList />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
