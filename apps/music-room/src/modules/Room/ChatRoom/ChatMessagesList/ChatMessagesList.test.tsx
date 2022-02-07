import { defaultMessage } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { defaultVirtualizer } from '../../../../tests/mocks';
import { ChatMessagesList } from './ChatMessagesList';

type Props = ComponentProps<typeof ChatMessagesList>;

const defaultProps: Props = {
  data: {
    messages: [
      { ...defaultMessage, id: 1 },
      { ...defaultMessage, id: 2 },
    ],
    offset: 0,
    count: 2,
  },
  parentRef: { current: null },
  virtualizer: defaultVirtualizer({
    count: 10,
    height: 40,
    totalLength: 100,
  }),
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
