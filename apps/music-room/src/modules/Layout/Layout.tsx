import Head from 'next/head';
import Image from 'next/image';
import { PropsWithChildren, ReactElement, ReactNode } from 'react';

type Props = {
  appTitle?: string;
  header?: ReactNode;
};

export const Layout = ({
  children,
  header,
  appTitle = 'Create Next App',
}: PropsWithChildren<Props>): ReactElement => (
  <div>
    <Head>
      <title>{appTitle}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header>{header}</header>

    <main>{children}</main>

    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  </div>
);
