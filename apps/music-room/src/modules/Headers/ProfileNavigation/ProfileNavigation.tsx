import { ReactElement } from 'react';
import { ProfileNavigationView } from './ProfileNavigationView/ProfileNavigationView';

type Props = {
  View?: typeof ProfileNavigationView;
};

export const ProfileNavigation = ({
  View = ProfileNavigationView,
}: Props): ReactElement => {
  return <View />;
};
