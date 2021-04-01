import { Button, Row, Col, Container, Image } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import styles from "../styles/Home.module.css";
const Intro = () => {
  return (
    <Container as="section" className={styles.intro} id="home">
      <div className={styles.introWrapper} style={{ minHeight: "60vh" }}>
        <Zoom left>
          <div className={styles.introText}>
            I am
            <p>
              John Barnes Oduro Twumasi,
              <br /> <span>&lt;Fullstack Developer/&gt;</span>
            </p>
          </div>
        </Zoom>

        <Fade>
          <a href="tel:+233543288549">
            <Button className={styles.button} variant="warning">
              Hire Me
            </Button>
          </a>
        </Fade>
      </div>
    </Container>
  );
};

export default Intro;
