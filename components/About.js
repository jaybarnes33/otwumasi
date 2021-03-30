import { Image, Container, Row, Col, Button } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Address from "./Address";
const About = () => {
  return (
    <section>
      <div className={styles.aboutWrapper}>
        <Container>
          <Image className={styles.ellipse} src="/images/circles.svg" />

          <div className={styles.aboutText}>
            <Row>
              <Col>
                <Image className={styles.me} src="/images/jay.JPG" />
              </Col>
              <Col>
                Writer, Developer
                <p className={styles.aboutMe}>
                  <h2 className={styles.intro}>hi, I am Barnes </h2>I am 19yrs
                  old, from Obuasi - Ghana, and currently pursuing a BSc.
                  Computer Science and Engineering degree at the University of
                  Mines and Technology, Tarkwa - Ghana.
                </p>
                <a href="tel:+233543288549">
                  <Button className={styles.button} variant="warning">
                    Hire Me
                  </Button>
                </a>
                <Address />
              </Col>
            </Row>
          </div>
        </Container>

        <svg
          className={styles.aboutTitle}
          width="363"
          height="110"
          viewBox="0 0 363 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.8906 108C46.9531 106.172 46.2734 103.898 45.8516 101.18C40.9297 106.664 34.5312 109.406 26.6562 109.406C19.2031 109.406 13.0156 107.25 8.09375 102.938C3.21875 98.625 0.78125 93.1875 0.78125 86.625C0.78125 78.5625 3.75781 72.375 9.71094 68.0625C15.7109 63.75 24.3594 61.5703 35.6562 61.5234H45.0078V57.1641C45.0078 53.6484 44.0938 50.8359 42.2656 48.7266C40.4844 46.6172 37.6484 45.5625 33.7578 45.5625C30.3359 45.5625 27.6406 46.3828 25.6719 48.0234C23.75 49.6641 22.7891 51.9141 22.7891 54.7734H2.46875C2.46875 50.3672 3.82812 46.2891 6.54688 42.5391C9.26562 38.7891 13.1094 35.8594 18.0781 33.75C23.0469 31.5937 28.625 30.5156 34.8125 30.5156C44.1875 30.5156 51.6172 32.8828 57.1016 37.6172C62.6328 42.3047 65.3984 48.9141 65.3984 57.4453V90.4219C65.4453 97.6406 66.4531 103.102 68.4219 106.805V108H47.8906ZM31.0859 93.8672C34.0859 93.8672 36.8516 93.2109 39.3828 91.8984C41.9141 90.5391 43.7891 88.7344 45.0078 86.4844V73.4062H37.4141C27.2422 73.4062 21.8281 76.9219 21.1719 83.9531L21.1016 85.1484C21.1016 87.6797 21.9922 89.7656 23.7734 91.4062C25.5547 93.0469 27.9922 93.8672 31.0859 93.8672ZM149.562 70.6641C149.562 82.8516 146.961 92.3672 141.758 99.2109C136.555 106.008 129.289 109.406 119.961 109.406C111.711 109.406 105.125 106.242 100.203 99.9141L99.2891 108H81.0078V0H101.328V38.7422C106.016 33.2578 112.18 30.5156 119.82 30.5156C129.102 30.5156 136.367 33.9375 141.617 40.7812C146.914 47.5781 149.562 57.1641 149.562 69.5391V70.6641ZM129.242 69.1875C129.242 61.5 128.023 55.8984 125.586 52.3828C123.148 48.8203 119.516 47.0391 114.688 47.0391C108.219 47.0391 103.766 49.6875 101.328 54.9844V85.0078C103.812 90.3516 108.312 93.0234 114.828 93.0234C121.391 93.0234 125.703 89.7891 127.766 83.3203C128.75 80.2266 129.242 75.5156 129.242 69.1875ZM158.984 69.2578C158.984 61.7109 160.438 54.9844 163.344 49.0781C166.25 43.1719 170.422 38.6016 175.859 35.3672C181.344 32.1328 187.695 30.5156 194.914 30.5156C205.18 30.5156 213.547 33.6563 220.016 39.9375C226.531 46.2188 230.164 54.75 230.914 65.5312L231.055 70.7344C231.055 82.4062 227.797 91.7812 221.281 98.8594C214.766 105.891 206.023 109.406 195.055 109.406C184.086 109.406 175.32 105.891 168.758 98.8594C162.242 91.8281 158.984 82.2656 158.984 70.1719V69.2578ZM179.305 70.7344C179.305 77.9531 180.664 83.4844 183.383 87.3281C186.102 91.125 189.992 93.0234 195.055 93.0234C199.977 93.0234 203.82 91.1484 206.586 87.3984C209.352 83.6016 210.734 77.5547 210.734 69.2578C210.734 62.1797 209.352 56.6953 206.586 52.8047C203.82 48.9141 199.93 46.9688 194.914 46.9688C189.945 46.9688 186.102 48.9141 183.383 52.8047C180.664 56.6484 179.305 62.625 179.305 70.7344ZM289.133 100.266C284.117 106.359 277.18 109.406 268.32 109.406C260.164 109.406 253.93 107.062 249.617 102.375C245.352 97.6875 243.172 90.8203 243.078 81.7734V31.9219H263.398V81.0703C263.398 88.9922 267.008 92.9531 274.227 92.9531C281.117 92.9531 285.852 90.5625 288.43 85.7812V31.9219H308.82V108H289.695L289.133 100.266ZM348.477 13.2188V31.9219H361.484V46.8281H348.477V84.7969C348.477 87.6094 349.016 89.625 350.094 90.8438C351.172 92.0625 353.234 92.6719 356.281 92.6719C358.531 92.6719 360.523 92.5078 362.258 92.1797V107.578C358.273 108.797 354.172 109.406 349.953 109.406C335.703 109.406 328.438 102.211 328.156 87.8203V46.8281H317.047V31.9219H328.156V13.2188H348.477Z"
            fill="white"
            fill-opacity="0.3"
          />
        </svg>
      </div>
    </section>
  );
};

export default About;
