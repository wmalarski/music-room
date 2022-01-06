import { queryClient, UserContextProvider } from '@music-room/data-access';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { QueryClientProvider } from 'react-query';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <UserContextProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </UserContextProvider>
  );
};

export default appWithTranslation(MyApp);
