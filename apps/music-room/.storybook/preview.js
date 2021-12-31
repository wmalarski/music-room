import { globalStyles, styled } from '@music-room/util-styles';
import { initialize, mswDecorator } from 'msw-storybook-addon';

// Initialize MSW
initialize();

const Wrapper = styled('div', {
  width: '100%',
  height: '100%',
  backgroundColor: '$background',
});

const styleDecorator = (Story) => {
  globalStyles();
  return (
    <Wrapper>
      <Story />
    </Wrapper>
  );
};

export const decorators = [mswDecorator, styleDecorator];
