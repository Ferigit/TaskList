import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  title?: string;
};

const Header = ({ title = "This is the default title" }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav></nav>
    </header>
  </>
);

export default Header;
