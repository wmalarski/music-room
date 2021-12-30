import { queryClient, UserContextProvider } from '@music-room/data-access';
import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { QueryClientProvider } from 'react-query';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => (
  <UserContextProvider>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  </UserContextProvider>
);

export default MyApp;
