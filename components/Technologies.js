import React from "react";
import { Container } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Tech from "./Tech";
import tech from "../data/tech.js";
export const Technologies = () => {
  return (
    <section className={styles.technologies} id="skills">
      <Container>
        <h1 className={styles.techTitle}>Technologies</h1>
        <Container>
          <div className={styles.techWrapper}>
            {tech.map((item) => (
              <Tech key={item.name} image={item.image} />
            ))}
          </div>
        </Container>
      </Container>
    </section>
  );
};
