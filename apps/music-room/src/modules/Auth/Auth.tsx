import { Tabs, TabsContent, TabsList, TabsTrigger } from '@music-room/ui';
import { useTranslation } from 'next-i18next';
import { ReactElement } from 'react';
import { Layout } from '../Layout/Layout';
import * as Styles from './Auth.styles';
import { SignIn } from './SignIn/SignIn';
import { SignUp } from './SignUp/SignUp';

export const Auth = (): ReactElement => {
  const { t } = useTranslation('auth');

  return (
    <Layout>
      <Styles.Container justifyContent="center" alignItems="center">
        <Tabs defaultValue="signIn">
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
