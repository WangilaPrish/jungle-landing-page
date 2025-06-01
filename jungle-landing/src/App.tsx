import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="font-sans">
            <Hero />
            <Features />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default App;
