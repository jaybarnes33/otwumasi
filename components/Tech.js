import styles from "../styles/Home.module.css";
import Zoom from "react-reveal";
const Tech = ({ image, name }) => {
  return (
    <Zoom right delay={1}>
      <div className={styles.tech}>
        <img className={styles.techImage} src={image} />

        <p>{name}</p>
      </div>
    </Zoom>
  );
};

export default Tech;
