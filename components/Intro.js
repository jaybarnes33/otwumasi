import { Button, Row, Col, Container, Image } from "react-bootstrap";
import styles from "../styles/Home.module.css";
const Intro = () => {
  return (
    <section className={styles.main}>
      <Container>
        <div className={styles.introWrapper} style={{ minHeight: "60vh" }}>
          <div className={styles.introText}>
            I am
            <p>
              John Barnes Oduro Twumasi,
              <br /> Fullstack Developer
            </p>
          </div>

          <Button className={styles.button} variant="light">
            Hire Me
          </Button>
          <div>
            {/* <Image className={styles.polygon} src="/images/dash.svg" /> */}
            {/* <Image src="/images/coding_.svg" className={styles.polygon} /> */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Intro;
