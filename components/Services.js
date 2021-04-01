import styles from "../styles/Home.module.css";
import { Image, Container, Row, Col } from "react-bootstrap";
import Service from "./Service";
import Fade from "react-reveal/Fade";
const Services = () => {
  return (
    <section className={styles.services} id="services">
      <Image src="/images/service.svg" className={styles.serviceSVG} />
      <div className={styles.servicesWrapper}>
        <Container>
          <h1 className={styles.serviceTitle}>services</h1>
          <div className={styles.servicesList}>
            <Fade>
              <Service
                icon={
                  <Image
                    className={styles.serviceImage}
                    src="/images/webdev.svg"
                  />
                }
                title="Web Development"
                desc="I make cool and modern looking websites and web apps to promote your business."
              />
              <Service
                title="Mobile Development"
                icon={
                  <Image
                    className={styles.serviceImage}
                    src="/images/mobile.svg"
                  />
                }
                desc="I make mobile apps that help your business reach a wider audience."
              />
              <Service
                title="Desktop Development"
                icon={
                  <Image
                    className={styles.serviceImage}
                    src="/images/desktop.svg"
                  />
                }
                desc="I build Desktop apps that digitize activities in your workplace"
              />
            </Fade>

            {/* <Service
              title="Coaching"
              desc="         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit temporibus "
            /> */}
          </div>
        </Container>

        <Image className={styles.serviceEllipse1} src="/images/circles2.svg" />
      </div>

      {/* <Image className={styles.serviceEllipse2} src="/images/circles.svg" /> */}
    </section>
  );
};

export default Services;
