import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import {
  defaultControls,
  defaultMessage,
} from '../../../../../services/utils/defaults';
import { VideoPlayerView } from './VideoPlayerView';

type Props = ComponentProps<typeof VideoPlayerView>;

const defaultProps: Props = {
  profileId: 1,
  message: defaultMessage,
  controls: defaultControls,
  onChange: () => null,
  onEnd: () => null,
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
