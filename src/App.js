import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FadeInOnScroll from './components/FadeInOnScroll';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FadeInOnScroll>
      <Hero />
      <About />
      <Projects />
      <Contact />
      </FadeInOnScroll>
      <Footer />
    </div>
  );
}

export default App;
