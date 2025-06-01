import styles from './App.module.css'
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Section from './components/section';


function App() {
  return (
     <div className={styles.appContainer}>
    <Header></Header>
    <HeroSection></HeroSection>
    <Section id="01" title="Get Started" ></Section>
    <Section id="02" title="Gear Up" />
    <Section id="03" title="Be Safe" />
    <Footer></Footer>
    </div>
  );
}
export default App;