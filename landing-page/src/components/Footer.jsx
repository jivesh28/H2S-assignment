import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <div className={styles.logo}>MNTN</div>
        <p className={styles.tagline}>
          Get out there & discover your next<br />
          slope, mountain & destination!
        </p>
        <p className={styles.copyright}>
          Copyright 2023 MNTN, Inc. Terms & Privacy
        </p>
      </div>

      <div className={styles.right}>
        <div className={styles.linkGroup}>
          <h4>More on The Blog</h4>
          <a href="#">About MNTN</a>
          <a href="#">Contributors & Writers</a>
          <a href="#">Write For Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
        </div>

        <div className={styles.linkGroup}>
          <h4>More on MNTN</h4>
          <a href="#">The Team</a>
          <a href="#">Jobs</a>
          <a href="#">Press</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;