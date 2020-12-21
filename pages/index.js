import Head from "next/head";
import { Container } from "react-bootstrap";
import Intro from "../components/Intro";
import About from "../components/About";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Services from "../components/Services";
import { Portfolio } from "../components/Portfolio";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Otwumasi</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
          crossorigin="anonymous"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <div className={styles.main}>
        <Intro />
        <About />
        <Services />
        <Portfolio />
      </div>
    </Layout>
  );
}
