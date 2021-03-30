import styles from "../styles/Home.module.css";
const Tech = ({ image, name }) => {
  return (
    <>
      <div className={styles.tech}>
        <img className={styles.techImage} src={image} />

        <p>{name}</p>
      </div>
    </>
  );
};

export default Tech;
