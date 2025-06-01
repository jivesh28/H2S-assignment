import { useEffect, useRef, useState } from "react";
import styles from "./Section.module.css";

export default function Section({ id, title, children, reverse = false }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`${styles.section} ${
        visible ? styles.fadeIn : styles.fadeOut
      } ${reverse ? styles.reverse : ""}`}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </div>
    </section>
  );
}
