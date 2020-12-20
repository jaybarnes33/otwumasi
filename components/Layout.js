import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="app">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
