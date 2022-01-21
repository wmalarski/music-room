import { styled } from '@music-room/util-styles';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

export const TooltipContent = styled(TooltipPrimitive.Content, {
  borderRadius: '$md',
  padding: '$sm $md',
  fontSize: '$md',
  lineHeight: 1,
  color: '$gray9',
  backgroundColor: '$gray1',
  boxShadow: '$bottom2',
});

export const TooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$gray1',
});

export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;
