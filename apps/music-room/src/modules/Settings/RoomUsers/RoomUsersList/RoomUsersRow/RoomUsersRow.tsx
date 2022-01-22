import { styled } from '@music-room/util-styles';

export const RoomUsersRow = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 3fr 2fr 1fr',
  width: '100%',
  columnGap: '$sm',
});
