import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="w-full py-24 bg-sand relative">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <span className="text-secondary font-bold uppercase tracking-widest text-xs">
            Our Expertise
          </span>
          <h2 className="text-text-main text-4xl sm:text-5xl font-bold">
            Cleaning tailored to you
          </h2>
          <p className="text-text-light max-w-2xl text-lg mt-2">
            Whether you need a weekly refresh or a deep seasonal scrub, we
            design our services around your life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group flex flex-col gap-6 rounded-[2rem] bg-white p-8 shadow-soft hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-primary/20">
            <div className="size-16 flex items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl">
                calendar_today
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-bold text-text-main">
                Regular Maintenance
              </h3>
              <p className="text-text-light text-base leading-relaxed">
                Reclaim your weekends with our weekly, bi-weekly, or monthly
                cleaning schedules designed for busy families.
              </p>
            </div>
            <a
              href="#"
              className="mt-auto pt-4 flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest group-hover:gap-3 transition-all"
            >
              Details{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </div>
          <div className="group flex flex-col gap-6 rounded-[2rem] bg-white p-8 shadow-soft hover:shadow-xl hover:shadow-secondary/10 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-secondary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
              Most Popular
            </div>
            <div className="size-16 flex items-center justify-center rounded-2xl bg-secondary/10 text-secondary group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl">
                cleaning_services
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-bold text-text-main">Deep Clean</h3>
              <p className="text-text-light text-base leading-relaxed">
                A comprehensive top-to-bottom clean that targets hidden dust and
                grime. Perfect for spring cleaning.
              </p>
            </div>
            <a
              href="#"
              className="mt-auto pt-4 flex items-center gap-2 text-secondary font-bold text-sm uppercase tracking-widest group-hover:gap-3 transition-all"
            >
              Details{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </div>
          <div className="group flex flex-col gap-6 rounded-[2rem] bg-white p-8 shadow-soft hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-accent">
            <div className="size-16 flex items-center justify-center rounded-2xl bg-accent/30 text-[#8a7a6a] group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl">box</span>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-bold text-text-main">
                Move In / Move Out
              </h3>
              <p className="text-text-light text-base leading-relaxed">
                Ensure your deposit return or walk into a fresh new home with
                our specialized moving service.
              </p>
            </div>
            <a
              href="#"
              className="mt-auto pt-4 flex items-center gap-2 text-[#8a7a6a] font-bold text-sm uppercase tracking-widest group-hover:gap-3 transition-all"
            >
              Details{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;