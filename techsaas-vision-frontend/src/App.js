import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import Home from './pages/Home/Home';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import ContactPage from './pages/ContactPage/ContactPage';
import TestimonialsPage from './pages/TestimonialsPage/TestimonialsPage';
import AboutPage from './pages/AboutPage/AboutPage';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const { theme, showModal } = useTheme();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={`app ${theme}`}>
      <Router>
        <Navigation toggleModal={showModal} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/testimonials"
            element={<TestimonialsPage />}
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
