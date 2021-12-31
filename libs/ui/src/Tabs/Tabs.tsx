import * as TabsPrimitive from '@radix-ui/react-tabs';
import { styled } from '@stitches/react';

const StyledTabs = styled(TabsPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  boxShadow: `$small`,
});

const StyledList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: 'flex',
  borderBottom: '$border1Brand8',
});

const StyledTrigger = styled(TabsPrimitive.Trigger, {
  all: 'unset',
  padding: '$sm $md',
  height: '$lg',
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$sm',
  userSelect: 'none',
  backgroundColor: '$gray2',
  '&:first-child': { borderTopLeftRadius: '$md' },
  '&:last-child': { borderTopRightRadius: '$md' },
  '&:hover': { color: '$brand9' },
  '&[data-state="active"]': {
    color: '$brand8',
    backgroundColor: '$gray1',
    boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
  },
});

const StyledContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  padding: '$lg',
  backgroundColor: '$gray1',
  borderBottomLeftRadius: '$md',
  borderBottomRightRadius: '$md',
  outline: 'none',
});

// Exports
export const Tabs = StyledTabs;
export const TabsList = StyledList;
export const TabsTrigger = StyledTrigger;
export const TabsContent = StyledContent;
