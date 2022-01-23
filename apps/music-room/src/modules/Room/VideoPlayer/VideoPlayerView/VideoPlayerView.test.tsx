import { defaultControls, defaultMessage } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { VideoPlayerView } from './VideoPlayerView';

type Props = ComponentProps<typeof VideoPlayerView>;

const defaultProps: Props = {
  profileId: 1,
  message: defaultMessage,
  controls: defaultControls,
  onEnd: () => null,
  onChange: () => null,
  ytRef: { current: null },
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<VideoPlayerView {...defaultProps} {...props} />);
};

describe('<VideoPlayerView />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
