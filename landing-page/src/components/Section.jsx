import { useEffect, useRef, useState } from 'react';
import styles from './Section.module.css';
import bg1 from '../assets/bg1.webp';
import bg2 from '../assets/bg2.webp';
import bg3 from '../assets/bg3.webp';

const contentMap = {
  '01': {
    heading : "What level of  hiker are you?",
    text: 'Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? ',
    image: bg1,
    reverse: false,
    text2: 'read more ---->'
  },
  '02': {
    heading : "Picking the right Hiking Gear!",
    text: "The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet." ,
    image: bg2,
    reverse: true,
    text2: 'read more ---->'
  },
  '03': {
    heading : "Understand Your Map & Timing",
    text: 'To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.',
    image: bg3,
    reverse: false,
    text2: 'read more ---->'
  },
};

export default function Section({ id, title }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  const sectionData = contentMap[id] || {};
  const { heading, text, image, reverse,text2} = sectionData;

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
      className={`${styles.section} ${visible ? styles.fadeIn : styles.fadeOut} ${reverse ? styles.reverse : ''}`}
    >
      <div className={styles.row}>
        <div className={styles.textBlock}>
          <p className={styles.title}>{`------- ${title}`}</p>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.text}>{text}</p>
          <p  className={styles.text2}>{text2}</p>
        </div>
        <img src={image} alt={title} className={styles.image} />
      </div>
    </section>
  );
}