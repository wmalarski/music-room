import { Tabs, TabsContent, TabsList, TabsTrigger } from '@music-room/ui';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { Layout } from '../Layout/Layout';
import * as Styles from './Auth.styles';
import { SignIn } from './SignIn/SignIn';
import { SignUp } from './SignUp/SignUp';

export const Auth = (): ReactElement => {
  const { t } = useTranslation('auth');

  const router = useRouter();
  const value =
    (Array.isArray(router.query.tab)
      ? router.query.tab[0]
      : router.query.tab) ?? 'signIn';

  const handleValueChange = (next: string) => {
    router.push({ query: { tab: next } });
  };

  return (
    <Layout>
      <Styles.Container justifyContent="center" alignItems="center">
        <Tabs value={value} onValueChange={handleValueChange}>
          <TabsList aria-label={`${t('signInHeader')}, ${t('signUpHeader')}`}>
            <TabsTrigger value="signIn">{t('signInHeader')}</TabsTrigger>
            <TabsTrigger value="signUp">{t('signUpHeader')}</TabsTrigger>
          </TabsList>
          <TabsContent value="signIn">
            <SignIn />
          </TabsContent>
          <TabsContent value="signUp">
            <SignUp />
          </TabsContent>
        </Tabs>
      </Styles.Container>
    </Layout>
  );
};
