import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('SUBMITTING');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mjgodpzj", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('SUCCESS');
        form.reset();
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

  if (status === 'SUCCESS') {
    return (
      <section className="w-full py-20 bg-sand/50">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-secondary/10 border border-white/50 p-12 sm:p-20 text-center animate-in fade-in duration-700">
            <div className="size-24 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-8">
              <span className="material-symbols-outlined text-5xl">mark_email_read</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-text-main mb-6">Message Received!</h3>
            <p className="text-text-light text-lg max-w-xl mx-auto leading-relaxed mb-10">
              Thank you for reaching out to SparkleClean. We've received your details and a member of our team will be in touch with your custom plan within 24 hours.
            </p>
            <button 
                onClick={() => setStatus('IDLE')}
                className="px-10 py-4 bg-primary text-white rounded-full font-bold hover:bg-[#7a9480] transition-all hover:-translate-y-1 shadow-lg shadow-primary/20"
            >
                Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-20 bg-sand/50">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-secondary/10 grid lg:grid-cols-5 border border-white/50">
          <div className="lg:col-span-2 bg-secondary p-10 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-bl-[4rem] -mr-8 -mt-8"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-tr-[3rem] -ml-6 -mb-6"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 font-display">
                Let's make your home sparkle
              </h3>
              <p className="text-white/80 leading-relaxed mb-8">
                Tell us a bit about your space and needs. We'll get back to you
                with a custom plan within 24 hours.
              </p>
            </div>
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm">
                    phone_in_talk
                  </span>
                </div>
                <span className="font-medium text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm">
                    mail
                  </span>
                </div>
                <span className="font-medium text-sm">
                  hello@sparkleclean.com
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 p-8 sm:p-12 bg-white">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-sm font-semibold text-text-main ml-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-5 py-3.5 rounded-xl border border-sand bg-cream/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-text-main placeholder-text-light/50"
                    placeholder="Jane Cooper"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-semibold text-text-main ml-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-5 py-3.5 rounded-xl border border-sand bg-cream/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-text-main placeholder-text-light/50"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-sm font-semibold text-text-main ml-1">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full px-5 py-3.5 rounded-xl border border-sand bg-cream/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-text-main placeholder-text-light/50"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="service" className="text-sm font-semibold text-text-main ml-1">
                    Service Type
                  </label>
                  <div className="relative">
                    <select 
                      id="service"
                      name="service"
                      className="w-full px-5 py-3.5 rounded-xl border border-sand bg-cream/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-text-main appearance-none cursor-pointer"
                    >
                      <option value="Standard Home Clean">Standard Home Clean</option>
                      <option value="Deep Refresh">Deep Refresh</option>
                      <option value="Move-In/Out Clean">Move-In/Out Clean</option>
                      <option value="Commercial Space">Commercial Space</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-light pointer-events-none">
                      expand_more
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-semibold text-text-main ml-1">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full px-5 py-3.5 rounded-xl border border-sand bg-cream/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-text-main placeholder-text-light/50 resize-none min-h-[100px]"
                  placeholder="Number of bedrooms, pets, or specific focus areas..."
                ></textarea>
              </div>
              <div className="pt-2">
                <button 
                  type="submit"
                  disabled={status === 'SUBMITTING'}
                  className="w-full bg-primary hover:bg-[#7a9480] text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'SUBMITTING' ? (
                    <>
                      Sending...
                      <span className="animate-spin material-symbols-outlined text-xl">progress_activity</span>
                    </>
                  ) : (
                    <>
                      Submit Your Information
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </>
                  )}
                </button>
                {status === 'ERROR' && (
                  <p className="text-center text-red-500 mt-4 text-sm font-medium animate-pulse">
                    Something went wrong. Please check your connection and try again.
                  </p>
                )}
                {status !== 'ERROR' && (
                  <p className="text-center text-xs text-text-light mt-4">
                    No spam. Just a friendly conversation about your needs.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;