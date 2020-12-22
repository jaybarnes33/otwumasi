import styles from "../styles/Home.module.css";
import { Image, Container, Row, Col } from "react-bootstrap";
import Service from "./Service";
const Services = () => {
  return (
    <section className={styles.services}>
      <Image src="/images/service.svg" className={styles.serviceSVG} />
      <div className={styles.servicesWrapper}>
        <Container>
          <h1 className={styles.serviceTitle}>services</h1>
          <div className={styles.servicesList}>
            <Service
              icon={
                <Image
                  className={styles.serviceImage}
                  src="/images/webdev.svg"
                />
              }
              title="Web Development"
              desc="I make cool and modern looking websites and web apps to promote businesses and also to link people."
            />
            <Service
              title="Mobile Development"
              icon={
                <Image
                  className={styles.serviceImage}
                  src="/images/mobile.svg"
                />
              }
              desc="I make trendy mobile apps to make technology and other stuff more accessible."
            />
            <Service
              title="Desktop Development"
              icon={
                <Image
                  className={styles.serviceImage}
                  src="/images/desktop.svg"
                />
              }
              desc="I build Desktop apps that increases productivity in your company which also make life easier for everyone."
            />
            {/* <Service
              title="Coaching"
              desc="         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit temporibus "
            /> */}
            <Service
              icon={
                <Image
                  className={styles.serviceImage}
                  src="/images/design.svg"
                />
              }
              title="UI/UX Design"
              desc="I design great interfaces with the aim of increasing user conversion and also improving user experience."
            />
          </div>
        </Container>

        <Image className={styles.serviceEllipse1} src="/images/circles2.svg" />
      </div>

      {/* <Image className={styles.serviceEllipse2} src="/images/circles.svg" /> */}
    </section>
  );
};

export default Services;
