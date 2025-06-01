import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>MNTN</div>

      <nav className={styles.navLinks}>
        <a href="#equipment">Equipment</a>
        <a href="#about">About Us</a>
        <a href="#blog">Blog</a>
      </nav>

      <div className={styles.account}>Account</div>
    </header>
  );
};

export default Header;