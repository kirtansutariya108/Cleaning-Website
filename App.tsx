import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Features from "./components/Features";
import BookingWidget from "./components/BookingWidget";
import ContactForm from "./components/ContactForm";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <Features />
        <BookingWidget />
        <ContactForm />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;