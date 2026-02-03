import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="w-full bg-cream pt-10 pb-20 lg:pt-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 -z-10"></div>
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col gap-8 order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-sand shadow-sm rounded-full w-fit mx-auto lg:mx-0">
              <span className="flex gap-0.5 text-secondary">
                <span className="material-symbols-outlined text-sm font-fill text-[16px]">star</span>
                <span className="material-symbols-outlined text-sm font-fill text-[16px]">star</span>
                <span className="material-symbols-outlined text-sm font-fill text-[16px]">star</span>
                <span className="material-symbols-outlined text-sm font-fill text-[16px]">star</span>
                <span className="material-symbols-outlined text-sm font-fill text-[16px]">star</span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-text-main pl-1">
                #1 Rated in Sparkle City
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-text-main text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                Come home to <br />{" "}
                <span className="text-primary italic font-medium">
                  pure comfort.
                </span>
              </h1>
              <p className="text-text-light text-lg sm:text-xl font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                Experience the joy of a spotless home without lifting a finger.
                Our trusted professionals use eco-friendly products to create a
                safe, healthy sanctuary for you and your family.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button className="flex items-center justify-center rounded-full h-14 px-8 bg-primary hover:bg-[#7a9480] transition-all text-white text-base font-bold shadow-xl shadow-primary/25 hover:-translate-y-1 w-full sm:w-auto">
                Get Your Free Quote
              </button>
              <button className="flex items-center justify-center gap-2 rounded-full h-14 px-8 bg-white border border-sand hover:border-secondary/30 hover:bg-sand/30 text-text-main transition-all text-base font-semibold shadow-sm w-full sm:w-auto">
                <span className="material-symbols-outlined text-secondary">
                  play_circle
                </span>
                See How We Work
              </button>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-sm text-text-light font-medium">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_circle
                </span>
                Fully Insured
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_circle
                </span>
                Background Checked
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="absolute inset-0 bg-sand rounded-[3rem] rotate-6 scale-95 -z-10"></div>
              <div className="absolute inset-0 bg-secondary/10 rounded-[3rem] -rotate-3 scale-95 -z-10"></div>
              <div className="rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/10 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1581578731117-104f2a412727?q=80&w=1000&auto=format&fit=crop"
                  alt="Friendly professional cleaner smiling"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>
              <div className="absolute bottom-8 left-8 right-8 sm:right-auto bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="size-12 rounded-full bg-green-50 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">
                    sentiment_satisfied
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-text-main">
                    100% Happiness
                  </p>
                  <p className="text-xs text-text-light">Guaranteed service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;