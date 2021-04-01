import { Button, Row, Col, Container, Image } from "react-bootstrap";
import styles from "../styles/Home.module.css";
const Intro = () => {
  return (
    <Container as="section" className={styles.main}>
      <div className={styles.introWrapper} style={{ minHeight: "60vh" }}>
        <div className={styles.introText}>
          I am
          <p>
            John Barnes Oduro Twumasi,
            <br /> <span>&lt;Fullstack Developer/&gt;</span>
          </p>
        </div>

        <a href="tel:+233543288549">
          <Button className={styles.button} variant="warning">
            Hire Me
          </Button>
        </a>
      </div>
    </Container>
  );
};

export default Intro;
