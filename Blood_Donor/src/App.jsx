import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import HeroSection from './components/HeroSection';
import WhyDonateSection from './components/WhyDonateSection';
import EligibilitySection from './components/EligibilitySection';
import ProcessSection from './components/ProcessSection';
import Footer from './components/Footer';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Events from './pages/Events';
import News from './pages/News';
import Donate from './pages/Donate';
import DonorRegistration from './pages/auth/DonorRegister';
import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgotPassword';

function App() {
  return (
    <Router>
      <div className="min-h-screen mt-[32px]">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <WhyDonateSection />
              <EligibilitySection />
              <ProcessSection />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/news" element={<News />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/auth/register-donor" element={<DonorRegistration />} />
          <Route path="/signup" element={<DonorRegistration />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
