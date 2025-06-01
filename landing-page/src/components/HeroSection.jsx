import styles from "./HeroSection.module.css";
import heroImage from "../assets/background.jpg";
import { FaInstagram, FaTwitter } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <img
          src={heroImage}
          className={styles.heroImage}
          alt="Hero Background"
        />
        <div className={styles.fade}></div>
      </div>
      <div className={styles.overlay}>
        <div className={styles.meta}>
          <span className={styles.guide}> --------- A HIKING GUIDE</span>
          <h1 className={styles.title}>
            Be Prepared For The Mountains And Beyond!
          </h1>
          <div className={styles.author}>
            Scroll down <span className={styles.arrow}>↓</span>
          </div>
        </div>

        <div className={styles.followus}>Follow us</div>
        <div className={styles.icon}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={20} />
          </a>
        </div>
        <div className={styles.icon2}>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
