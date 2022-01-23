import { globalStyles, styled } from '@music-room/util-styles';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { I18nextProvider } from 'react-i18next';
import { loadScenarios } from '../src/tests/scenarios';
import i18n from './i18n';

// Initialize MSW
loadScenarios();
initialize();

const Wrapper = styled('div', {
  width: '100%',
  height: '100%',
  backgroundColor: '$background',
});

const styleDecorator = (Story) => {
  globalStyles();
  return (
    <I18nextProvider i18n={i18n}>
      <Wrapper>
        <Story />
      </Wrapper>
    </I18nextProvider>
  );
};

export const decorators = [mswDecorator, styleDecorator];
