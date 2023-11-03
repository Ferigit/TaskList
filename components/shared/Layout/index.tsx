import React, { ReactNode } from "react";
import { Header, Footer } from "components/shared";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export { Layout };
