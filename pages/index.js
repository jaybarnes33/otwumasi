import Head from "next/head";
import { Container } from "react-bootstrap";
import Intro from "../components/Intro";
import About from "../components/About";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Services from "../components/Services";
import { Portfolio } from "../components/Portfolio";
import { Technologies } from "../components/Technologies";
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Otwumasi</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
          crossOrigin="anonymous"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          name="description"
          content="I am a full-stack javascript developer with a passion for building useful and life changing products for the community. I am a fervent believer in acquiring and honing skills.

My strength lies in a firm understanding of the Javascript language and Javascript frameworks and libraries like React, Node and express and using these and other tools in building full-stack applications.

I believe in giving back to communities and hence, I have avid interest in opensource and also helping out other new developers. "
        />
        <meta property="og:image" content="./images/barnes.png" />
      </Head>

      <div className={styles.main}>
        <Intro />
        <About />
        <Services />
        <Technologies />
        <Portfolio />
      </div>
    </Layout>
  );
}
