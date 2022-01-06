import { Flex } from '@music-room/ui';
import { styled } from '@music-room/util-styles';

export const Container = styled(Flex, {
  width: '100%',
  height: '100%',
});

export const Content = styled(Flex, {
  padding: '$lg',
  backgroundColor: '$gray1',
});
