import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import {
  defaultControls,
  defaultMessage,
} from '../../../../../services/utils/defaults';
import VideoPlayerView from './VideoPlayerView';

type ComponentProps = React.ComponentProps<typeof VideoPlayerView>;

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    profileId: 1,
    message: defaultMessage,
    controls: defaultControls,
    onChange: () => null,
    onEnd: () => null,
  };
  return render(<VideoPlayerView {...defaultProps} {...props} />);
}

describe('<VideoPlayerView />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
