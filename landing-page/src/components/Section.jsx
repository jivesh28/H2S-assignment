import { useEffect, useRef, useState } from "react";
import styles from "./Section.module.css";
import contentMap from "../contentmap";

export default function Section({ id, title }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  const sectionData = contentMap[id] || {};
  const { number,heading, text, image, reverse, text2 } = sectionData;

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
      <div className={styles.row}>
        <div className={styles.textBlock}>
          <h1 className= {styles.number}> {number}</h1>
          <p className={styles.title}>{`------- ${title}`}</p>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.text}>{text}</p>
          <p className={styles.text2}>{text2}</p>
        </div>
        <img src={image} alt={title} className={styles.image} />
      </div>
    </section>
  );
}
