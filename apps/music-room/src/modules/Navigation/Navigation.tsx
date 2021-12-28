import { ReactElement, ReactNode } from 'react';
import { NavigationView } from './NavigationView/NavigationView';

type Props = {
  right?: ReactNode;
  View?: typeof NavigationView;
};

export const Navigation = ({
  right,
  View = NavigationView,
}: Props): ReactElement => {
  return <View right={right} />;
};
