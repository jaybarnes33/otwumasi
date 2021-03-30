import styles from "../styles/Home.module.css";
const Project = ({ image, desc, demo }) => {
  return (
    <>
      <div className={styles.project}>
        <img className={styles.projectImage} src={image} />

        <div className={styles.projectText}>
          <p>{desc}</p>
          <a className={styles.projectButton} href={demo}>
            Demo
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
