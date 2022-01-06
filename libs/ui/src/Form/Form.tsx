import { styled } from '@music-room/util-styles';

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$md',
});

export const FormFieldset = styled('fieldset', {
  all: 'unset',
  display: 'flex',
  flexDirection: 'column',
  gap: '$sm',
});

export const FormLabel = styled('label', {
  fontSize: '$sm',
  fontWeight: '$regular',
  color: '$gray8',
});

export const FormError = styled('p', {
  fontSize: '$sm',
  fontWeight: '$regular',
  color: '$error1',
  margin: 0,
});
