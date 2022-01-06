import { ReactElement, ReactNode } from 'react';
import * as Styles from './Tooltip.styles';

type Props = {
  children: ReactNode;
  text: string;
  asChild?: boolean;
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
  alignOffset?: number;
};

export const TooltipText = ({
  children,
  text,
  asChild,
  side,
  sideOffset,
  alignOffset,
}: Props): ReactElement => (
  <Styles.Tooltip>
    <Styles.TooltipTrigger asChild={asChild}>{children}</Styles.TooltipTrigger>
    <Styles.TooltipContent
      side={side}
      sideOffset={sideOffset}
      alignOffset={alignOffset}
    >
      {text}
      <Styles.TooltipArrow />
    </Styles.TooltipContent>
  </Styles.Tooltip>
);

export { TooltipProvider } from './Tooltip.styles';
