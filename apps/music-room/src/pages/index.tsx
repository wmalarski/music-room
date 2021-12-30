import { useUserContext } from '@music-room/data-access';
import { ReactElement } from 'react';
import { Auth } from '../modules/Auth/Auth';
import { Home } from '../modules/Home/Home';

const Index = (): ReactElement => {
  const user = useUserContext();

  return user ? <Home /> : <Auth />;
};

export default Index;
