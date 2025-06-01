import styles from './HeroSection.module.css';
import heroImage from '../assets/background.png'; 

const HeroSection = () => {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
      <div className={styles.overlay}>
        <div className={styles.meta}>
          <span className={styles.guide}> --------- A HIKING GUIDE</span>
          <h1 className={styles.title}>Be Prepared For The Mountains And Beyond!</h1>
          <div className={styles.author}>By John Appleseed</div>
        </div>
        <div className={styles.followus}>Follow us </div>
      </div>
    </section>
  );
};

export default HeroSection;