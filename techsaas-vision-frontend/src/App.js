import React, { useEffect, useState } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTheme } from './context/theme/ThemeContext/ThemeContext';
import FooterCTA from './components/FooterCTA/FooterCTA';
import Modal from './components/Modals/Modal';
import Navigation from './components/Navigation/Navigation';
import AboutPage from './pages/About/AboutPage/AboutPage';
import ContactPage from './pages/Contact/ContactPage/ContactPage';
import Home from './pages/Home/HomePage/Home';
import PortfolioPage from './pages/Portfolio/PortfolioPage/PortfolioPage';
import ServicesPage from './pages/Services/ServicesPage/ServicesPage';
import LandingPage from './pages/LandingPage/LandingPage';
import MysteryBoxSection from './components/MysteryBoxSection/MysteryBoxSection';
import TestComponent from './Playground/TestComponent';
import Login from './pages/Login/Login';

function App() {
  const { theme, showModal } = useTheme();
  const [userName, setUserName] = useState('');
  const [selectedTier, setSelectedTier] = useState('');
  const [showModalState, setShowModalState] = useState(true);

  const handleModalSubmit = (name, tier) => {
    setUserName(name);
    setSelectedTier(tier);
    setShowModalState(false);
    localStorage.setItem('userName', name);
    localStorage.setItem('selectedTier', tier);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const savedName = localStorage.getItem('userName');
    const savedTier = localStorage.getItem('selectedTier');
    if (savedName && savedTier) {
      setUserName(savedName);
      setSelectedTier(savedTier);
      setShowModalState(false);
    }
  }, []);

  return (
    <div className={`app ${theme}`}>
      <Router>
        <Navigation
          toggleModal={showModal}
          userName={userName}
          id="main-app-nav"
        />
        <div id="content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/services"
              element={<ServicesPage selectedTier={selectedTier} />}
            />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/mystery-box"
              element={
                <MysteryBoxSection
                  onReveal={() => setShowModalState(true)}
                />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/playground" element={<TestComponent />} />
          </Routes>
        </div>
        <FooterCTA
          // create id for footer-cta
          className="footer-cta"
        />
        {showModalState && <Modal onSubmit={handleModalSubmit} />}
      </Router>
    </div>
  );
}

export default App;
