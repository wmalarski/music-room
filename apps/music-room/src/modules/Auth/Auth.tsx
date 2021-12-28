import React from 'react';
import Layout from '../Layout/Layout';
import { SignIn } from './SignIn/SignIn';
import { SignUp } from './SignUp/SignUp';

export const Auth = (): JSX.Element => (
  <Layout>
    <SignIn />
    <SignUp />
  </Layout>
);
