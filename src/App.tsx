import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import PersonalTraining from './components/PersonalTraining';
import Equipment from './components/Equipment';
import MembershipPlans from './components/MembershipPlans';
import QuoteSection from './components/QuoteSection';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import MachinesPage from './pages/MachinesPage';
import DumbbellsPage from './pages/DumbbellsPage';
import OtherEquipmentPage from './pages/OtherEquipmentPage';
import ContactPage from './pages/ContactPage';

function HomePage() {
  return (
    <>
      <Hero />
      <PersonalTraining />
      <Equipment />
      <MembershipPlans />
      <QuoteSection />
      <Testimonials />
      <ContactForm />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/machines" element={<MachinesPage />} />
          <Route path="/dumbbells" element={<DumbbellsPage />} />
          <Route path="/other-equipment" element={<OtherEquipmentPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;