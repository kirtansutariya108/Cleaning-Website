import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-cream/90 backdrop-blur-md border-b border-primary/10 transition-all duration-300">
      <div className="flex items-center justify-between px-6 sm:px-10 py-4 max-w-[1280px] mx-auto w-full">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="size-11 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
            <span className="material-symbols-outlined text-2xl">eco</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-text-main group-hover:text-primary transition-colors">
            Sparkle<span className="text-primary font-normal">Clean</span>
          </h2>
        </div>
        <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <nav className="flex items-center gap-8">
            <a
              href="#"
              className="text-sm font-medium text-text-main hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-text-main hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-text-main hover:text-primary transition-colors"
            >
              About Us
            </a>
            <a
              href="#reviews"
              className="text-sm font-medium text-text-main hover:text-primary transition-colors"
            >
              Reviews
            </a>
          </nav>
          <button className="flex items-center justify-center rounded-full h-11 px-6 bg-primary hover:bg-[#7a9480] transition-all text-white text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95">
            Get a Quote
          </button>
        </div>
        <button
          className="md:hidden p-2 text-text-main hover:text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cream border-b border-primary/10 shadow-lg p-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
            <a href="#" className="text-lg font-medium text-text-main p-2 hover:bg-primary/5 rounded-lg">Home</a>
            <a href="#services" className="text-lg font-medium text-text-main p-2 hover:bg-primary/5 rounded-lg">Services</a>
            <a href="#about" className="text-lg font-medium text-text-main p-2 hover:bg-primary/5 rounded-lg">About Us</a>
            <a href="#reviews" className="text-lg font-medium text-text-main p-2 hover:bg-primary/5 rounded-lg">Reviews</a>
            <button className="w-full py-3 bg-primary text-white font-bold rounded-xl mt-2">Get a Quote</button>
        </div>
      )}
    </header>
  );
};

export default Header;