import { Tabs, TabsContent, TabsList, TabsTrigger } from '@music-room/ui';
import { ReactElement } from 'react';
import { Layout } from '../Layout/Layout';
import * as Styles from './Auth.styles';
import { SignIn } from './SignIn/SignIn';
import { SignUp } from './SignUp/SignUp';

export const Auth = (): ReactElement => {
  return (
    <Layout>
      <Styles.Container justifyContent="center" alignItems="center">
        <Tabs defaultValue="signIn">
          <TabsList aria-label="Sign In or Sign Up">
            <TabsTrigger value="signIn">Sign In</TabsTrigger>
            <TabsTrigger value="signUp">Sign Up</TabsTrigger>
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
