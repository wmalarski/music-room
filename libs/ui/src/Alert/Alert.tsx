import { styled } from '@music-room/util-styles';

export const Alert = styled('span', {
  variants: {
    severity: {
      error: { backgroundColor: '$brand1' },
      warning: { backgroundColor: '$brand3' },
      info: { backgroundColor: '$brand5' },
      success: { backgroundColor: '$brand7' },
    },
  },
});
