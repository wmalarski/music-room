import { Children, isValidElement, ReactElement, ReactNode } from 'react';

export const getValidChildren = (children: ReactNode): ReactElement[] => {
  return Children.toArray(children).filter(isValidElement) as ReactElement[];
};
