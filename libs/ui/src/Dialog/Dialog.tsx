import * as DialogPrimitive from '@radix-ui/react-dialog';
import { styled } from '@stitches/react';
import { ReactElement } from 'react';

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: '$gray1A9',
  position: 'fixed',
  inset: 0,
});

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: '$gray2',
  borderRadius: '$md',
  boxShadow: '$dialog1',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '$dialogMd',
  padding: '$lg',
  '&:focus': { outline: 'none' },
});

const Content = (props: DialogPrimitive.DialogContentProps): ReactElement => {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props} />
    </DialogPrimitive.Portal>
  );
};

const StyledTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontWeight: '$bold',
  fontSize: '$lg',
});

const StyledDescription = styled(DialogPrimitive.Description, {
  margin: 0,
  fontSize: '$md',
});

// Exports
export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = Content;
export const DialogTitle = StyledTitle;
export const DialogDescription = StyledDescription;
export const DialogClose = DialogPrimitive.Close;
