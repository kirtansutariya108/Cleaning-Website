import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="w-full py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
            Community Love
          </span>
          <h2 className="text-text-main text-4xl sm:text-5xl font-bold">
            Trusted by Neighbors
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col p-8 rounded-[2rem] bg-cream border border-sand hover:border-primary/20 transition-colors duration-300">
            <div className="flex gap-1 text-yellow-400 mb-6">
              <span className="material-symbols-outlined fill-current text-[20px]">
                star
              </span>
              <span className="material-symbols-outlined fill-current text-[20px]">
                star
              </span>
              <span className="material-symbols-outlined fill-current text-[20px]">
                star
              </span>
              <span className="material-symbols-outlined fill-current text-[20px]">
                star
              </span>
              <span className="material-symbols-outlined fill-current text-[20px]">
                star
              </span>
            </div>
            <p className="text-text-main text-lg leading-relaxed mb-8 flex-1">
              "The team at SparkleClean doesn't just clean; they restore order
              to my chaotic life. Walking in after they've visited is like
              taking a deep breath of fresh air."
            </p>
            <div className="flex items-center gap-4 border-t border-sand pt-6">
              <div className="size-12 rounded-full overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi32XDSAdteAq9l5UFP6ztqPltvX9U3bmAv7wKFPScvTy0fR6iHhfuu1EtIh8uCaYbl-AEQe2DKmg0OMkd3AMMZlBij9Enn0TLk8ApLht6mXxoP_imt7hJOFTWu9-5SoPR-taAeyxkACsuzOT-rGGP5xlE4qTeMePffGpUwbRD23dHwDBV--WjDBuLyUYRmF-89p9-gv_J4J2n3vjlRvp2_HjyX2rOuWeKKa1ID7if3hJbJHsNEOP8EzVaIZc2wGQfTM8JZzBP4o-p"
                  alt="Sarah J."
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-text-main">Sarah Jenkins</p>
                <p className="text-xs text-text-light">Sparkle City Resident</p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col p-8 rounded-[2rem] bg-primary/5 border border-primary/10 hover:border-primary/30 transition-colors duration-300 relative top-0 md:-top-4">
            <div className="flex gap-1 text-yellow-400 mb-6">
              <span className="material-symbols-outlined fill-current text-[20px]">
                star
              </span>
              <span className="material-symbols-outlined fill-current text-[20px]">
                star
              </span>
              <span className="material-symbols-outlined fill-current text-[20px]">
                star
              </span>
              <span className="material-symbols-outlined fill-current text-[20px]">
                star
              </span>
              <span className="material-symbols-outlined fill-current text-[20px]">
                star
              </span>
            </div>
            <p className="text-text-main text-lg leading-relaxed mb-8 flex-1">
              "Eco-friendly products were my main priority. I'm so glad I found
              a service that cares about my pets' health as much as I do.
              Outstanding work."
            </p>
            <div className="flex items-center gap-4 border-t border-primary/10 pt-6">
              <div className="size-12 rounded-full overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAutD63ObZsgZgwJLAWlkv6_ikVn7YY72xSUiIiQDzKth0CKAbAVMOvpsiHKTiCEuGMYNDIh7Na3pMtMtx-e0hNBA9zCM4KD82pg6DIvoPyVJOkD5eNRT8abAVGz7iORAwsHTevQtpldODXKd_PuBXiovBI9M-NXqREHbDrWHhzZJvQk1L7aiqIrq1v6cHDIC3dTTHW0jWJbRkGDUodR3uMVlbExgTqYQ-Jm2d1XiMG1RGtzRKQqi2dTCsWEeo_sqTpGu8Sri1099vq"
                  alt="Michael T."
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-text-main">Michael Torres</p>
                <p className="text-xs text-text-light">Pet Parent</p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col p-8 rounded-[2rem] bg-secondary/5 border border-secondary/10 hover:border-secondary/30 transition-colors duration-300">
            <div className="flex gap-1 text-yellow-400 mb-6">
              <span className="material-symbols-outlined fill-current text-[20px]">
                star
              </span>
              <span className="material-symbols-outlined fill-current text-[20px]">
                star
              </span>
              <span className="material-symbols-outlined fill-current text-[20px]">
                star
              </span>
              <span className="material-symbols-outlined fill-current text-[20px]">
                star
              </span>
              <span className="material-symbols-outlined fill-current text-[20px]">
                star
              </span>
            </div>
            <p className="text-text-main text-lg leading-relaxed mb-8 flex-1">
              "Absolute professionals. They are punctual, communicative, and the
              level of detail in the kitchen was mind-blowing. Highly recommend
              their deep clean."
            </p>
            <div className="flex items-center gap-4 border-t border-secondary/10 pt-6">
              <div className="size-12 rounded-full overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuClZK0ht2OOPHkpI_Z6uNo_5so5sM8oF0SKdpE3vSPK0dUHxe3L-IzMtjWPcfsS2R3HnTR4t5EWo0g5GOrW6llZYpERfjKl9uPAZX_V8vgUjfBotIR7ZlRWbDygT-37AzK_UTndMHH_yrEfFHQRoWzDQOMZmDXdEFhL6LthS0xRIS9nqkHtMYqMvVLbx9YfkKFwCEpheZGAm27_-3yTSBdirwMiH1m_8s8S8_GFscPkTYaweewpMbvcTgq637R1vmmbg275-IvE3DVn"
                  alt="Emily R."
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-text-main">Emily Roberts</p>
                <p className="text-xs text-text-light">Homeowner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;