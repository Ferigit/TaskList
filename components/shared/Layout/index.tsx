import React, { ReactNode } from "react";
import { Header, Footer } from "components/shared";

type Props = {
  children: ReactNode;
  title: string;
  className?: string;
};

const Layout = ({ children, title, className = "" }: Props) => (
  <section className={className}>
    <Header title={title} />
    {children}
    <Footer />
  </section>
);

export default Layout;
