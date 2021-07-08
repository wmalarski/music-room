import type { AppProps } from "next/app";
import React from "react";
import { QueryClientProvider } from "react-query";
import { UserContextProvider } from "../molecules/auth/UserContext";
import queryClient from "../services/queryClient";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <UserContextProvider>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  </UserContextProvider>
);

export default MyApp;
