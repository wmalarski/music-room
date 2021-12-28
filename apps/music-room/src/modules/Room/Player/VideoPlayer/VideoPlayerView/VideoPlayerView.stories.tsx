import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import {
  defaultControls,
  defaultMessage,
} from '../../../../../services/utils/defaults';
import VideoPlayerView from './VideoPlayerView';

export default {
  title: 'Molecules/VideoPlayer/VideoPlayerView',
  component: VideoPlayerView,
  argTypes: {
    onEnd: { action: 'onEnd' },
    onChange: { action: 'onChange' },
  },
} as ComponentMeta<typeof VideoPlayerView>;

const Template: ComponentStory<typeof VideoPlayerView> = (args) => {
  const [controls, setControls] = useState(args.controls);
  return (
    <VideoPlayerView
      {...args}
      controls={controls}
      onChange={(data) => setControls((current) => ({ ...current, ...data }))}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  profileId: 1,
  message: defaultMessage,
  controls: defaultControls,
};