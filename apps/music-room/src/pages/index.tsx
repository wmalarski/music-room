import { ReactElement } from 'react';
import { Auth } from '../modules/Auth/Auth';
import { Home } from '../modules/Home/Home';
import { useUserContext } from '../utils/contexts/UserContext';

const Index = (): ReactElement => {
  const user = useUserContext();

  return user ? <Home /> : <Auth />;
};

export default Index;
