import styles from "../styles/Home.module.css";
import { Image, Container, Row, Col } from "react-bootstrap";
import Service from "./Service";
const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.servicesWrapper}>
        <h1 className={styles.serviceTitle}>services</h1>
        <Container>
          <div className={styles.servicesList}>
            <Service
              icon={
                <Image className={styles.serviceImage} src="/images/html.png" />
              }
              title="Web Development"
              desc="         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit temporibus "
            />
            <Service
              title="Mobile Development"
              icon={
                <Image
                  className={styles.serviceImage}
                  src="/images/mobile_testing.png"
                />
              }
              desc="         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit temporibus "
            />
            <Service
              title="Desktop Development"
              icon={
                <Image
                  className={styles.serviceImage}
                  src="/images/code_development_.png"
                />
              }
              desc="         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit temporibus "
            />
            {/* <Service
              title="Coaching"
              desc="         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit temporibus "
            /> */}
            <Service
              icon={
                <Image
                  className={styles.serviceImage}
                  src="/images/designer_.png"
                />
              }
              title="UI/UX Design"
              desc="         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit temporibus "
            />
          </div>
        </Container>
      </div>
      <Image className={styles.serviceEllipse1} src="/images/circles2.svg" />
      {/* <Image className={styles.serviceEllipse2} src="/images/circles.svg" /> */}

      <Image
        src="/image/service.svg"
        className={styles.serviceSVG}
        width="232"
      />
    </section>
  );
};

export default Services;
