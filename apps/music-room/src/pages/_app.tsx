import type { AppProps } from "next/app";
import React from "react";
import { QueryClientProvider } from "react-query";
import queryClient from "../services/queryClient";
import { UserContextProvider } from "../utils/auth/UserContext";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <UserContextProvider>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  </UserContextProvider>
);

export default MyApp;
