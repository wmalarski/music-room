import type { AppProps } from "next/app";
import React from "react";
import { QueryClientProvider } from "react-query";
import queryClient from "../services/queryClient";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
  </QueryClientProvider>
);

export default MyApp;
