import React from 'react';
import { SignIn, SignUp } from '../../molecules';
import Layout from '../Layout/Layout';

const GuestHomeTemplate = (): JSX.Element => (
  <Layout>
    <SignIn />
    <SignUp />
  </Layout>
);

export default GuestHomeTemplate;
