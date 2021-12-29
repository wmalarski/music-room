import { Auth } from '../modules/Auth/Auth';
import { Home } from '../modules/Home/Home';
import { useUserContext } from '../utils/auth/UserContext';

const Index = (): JSX.Element => {
  const { user } = useUserContext();

  return user ? <Home user={user} /> : <Auth />;
};

export default Index;
