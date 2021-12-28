import React from 'react';
import NavigationView, {
  NavigationViewProps,
} from './NavigationView/NavigationView';

export type NavigationProps = {
  right?: React.ReactNode;
  View?: React.ComponentType<NavigationViewProps>;
};

const Navigation = ({
  right,
  View = NavigationView,
}: NavigationProps): JSX.Element => {
  return <View right={right} />;
};

export default Navigation;
