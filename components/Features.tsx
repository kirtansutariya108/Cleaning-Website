import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="about" className="w-full py-24 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h2 className="text-text-main text-4xl lg:text-5xl font-bold">
                We treat your home like{" "}
                <span className="text-primary italic">our own.</span>
              </h2>
              <p className="text-text-light text-lg leading-relaxed">
                We understand that inviting someone into your home requires
                trust. That's why every member of our team is vetted, trained,
                and committed to the highest standards of care and integrity.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              <div className="flex gap-4">
                <div className="shrink-0 size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined">pets</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-text-main mb-1">
                    Pet Friendly
                  </h4>
                  <p className="text-text-light text-sm">
                    We love your furry friends and use safe, non-toxic products.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 size-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined">shield</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-text-main mb-1">
                    Fully Bonded
                  </h4>
                  <p className="text-text-light text-sm">
                    Comprehensive insurance coverage for your total peace of
                    mind.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 size-12 rounded-full bg-accent/30 text-[#8a7a6a] flex items-center justify-center">
                  <span className="material-symbols-outlined">eco</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-text-main mb-1">
                    Eco-Conscious
                  </h4>
                  <p className="text-text-light text-sm">
                    Sustainable cleaning practices that protect our planet.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-text-main mb-1">
                    Flexible Scheduling
                  </h4>
                  <p className="text-text-light text-sm">
                    Bookings that work around your life, not the other way
                    around.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="absolute -right-10 -top-10 w-64 h-64 bg-sand rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700 max-w-lg w-full">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcI48MHqtczX7xi8wj8yIm7aDV0husmLth10O7xJnSk76yghaWiZKVbC-1rYJIxQ02JKB2SC5_PpHxFpuBUb5Hej37J4LLZvrKJDW8iz-VsumMUVLAFe4jsBIl71ikjLMQZ_28a6876KmSo_-GHIUGJoCnA9XxmcGv4Ewy2-FHVwUkijI0pM7BxOwUKrm3tD1SKjMFBDcG_brnccftD0vwlm2_rktBmGkmAPRufjJpWR4swEWubaiU2X69JQaRiTn43w0rPog0OJwB"
                alt="Clean modern living room"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-8 pt-20">
                <p className="text-white font-display font-bold text-2xl">
                  "The best investment for my family's peace of mind."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;