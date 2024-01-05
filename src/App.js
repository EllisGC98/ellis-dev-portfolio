import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experience from './pages/Experience';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Transition from './components/Transition';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ padding: '40px' }}>
        <Routes>
          <Route path='/' element={<Transition><Home /></Transition>} />
          <Route path='/about' element={<Transition><About /></Transition>} />
          <Route path='/experience' element={<Transition><Experience /></Transition>} />
          <Route path='/projects' element={<Transition><Projects /></Transition>} />
          <Route path='/contact' element={<Transition><Contact /></Transition>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
