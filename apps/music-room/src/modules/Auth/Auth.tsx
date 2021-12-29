import { ReactElement } from 'react';
import { Layout } from '../Layout/Layout';
import { SignIn } from './SignIn/SignIn';
import { SignUp } from './SignUp/SignUp';

export const Auth = (): ReactElement => (
  <Layout>
    <SignIn />
    <SignUp />
  </Layout>
);
