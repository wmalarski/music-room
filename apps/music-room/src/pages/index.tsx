import { useUserContext } from '@music-room/data-access';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ReactElement } from 'react';
import { Auth } from '../modules/Auth/Auth';
import { Home } from '../modules/Home/Home';

const Index = (): ReactElement => {
  const user = useUserContext();

  return user ? <Home /> : <Auth />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale ?? 'en', [
    'common',
    'headers',
    'home',
    'auth',
  ]);

  return { props: { ...translations } };
};

export default Index;
