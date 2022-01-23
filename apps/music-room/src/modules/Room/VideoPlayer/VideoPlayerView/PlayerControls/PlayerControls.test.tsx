import { defaultControls } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { PlayerControls } from './PlayerControls';

type Props = ComponentProps<typeof PlayerControls>;

const defaultProps: Props = {
  controls: defaultControls,
  onAssignClick: () => null,
  onPauseChange: () => null,
  onVolumeChange: () => null,
  onMuteChange: () => null,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<PlayerControls {...defaultProps} {...props} />);
};

describe('<PlayerControls />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
