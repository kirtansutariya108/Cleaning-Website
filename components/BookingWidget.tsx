import React, { useState, useEffect } from 'react';

type ServiceType = 'standard' | 'deep' | 'movein';
type TimeSlot = '09:00' | '11:30' | '13:00' | '15:30';

const BookingWidget: React.FC = () => {
  const [service, setService] = useState<ServiceType>('standard');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<TimeSlot>('09:00');
  const [dates, setDates] = useState<Date[]>([]);
  
  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'ERROR'>('IDLE');
  const [bookingComplete, setBookingComplete] = useState(false);

  useEffect(() => {
    const today = new Date();
    const nextDays = Array.from({ length: 14 }, (_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      return d;
    });
    setDates(nextDays);
    setSelectedDate(nextDays[0]);
  }, []);

  const handleBooking = async () => {
    if (!name || !phone) {
        alert("Please enter your name and phone number to complete the booking.");
        return;
    }

    setStatus('SUBMITTING');

    const formattedDate = selectedDate.toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' });
    
    const formData = new FormData();
    formData.append('service', service);
    formData.append('date', formattedDate);
    formData.append('time', selectedTime);
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('_subject', 'New Cleaning Booking Request');

    try {
        const response = await fetch("https://formspree.io/f/mjgodpzj", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            setBookingComplete(true);
            setStatus('IDLE');
        } else {
            setStatus('ERROR');
        }
    } catch (error) {
        setStatus('ERROR');
    }
  };

  const resetBooking = () => {
      setBookingComplete(false);
      setName('');
      setPhone('');
      setStatus('IDLE');
      const today = new Date();
      setSelectedDate(today);
  };

  const isSameDay = (d1: Date, d2: Date) => {
    return d1.getDate() === d2.getDate() && 
           d1.getMonth() === d2.getMonth() && 
           d1.getFullYear() === d2.getFullYear();
  };

  const isToday = (d: Date) => {
    const today = new Date();
    return d.getDate() === today.getDate() && 
           d.getMonth() === today.getMonth() && 
           d.getFullYear() === today.getFullYear();
  };

  if (bookingComplete) {
      return (
        <section className="w-full py-20 bg-cream">
            <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
                <div className="bg-white p-12 rounded-[2.5rem] shadow-card border border-sand text-center flex flex-col items-center justify-center gap-6 animate-in zoom-in-95 duration-500">
                    <div className="size-20 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-4xl">check_circle</span>
                    </div>
                    <h3 className="text-3xl font-bold text-text-main">Booking Confirmed!</h3>
                    <p className="text-text-light max-w-md">
                      We've received your request for a {service === 'standard' ? 'Standard Clean' : service === 'deep' ? 'Deep Clean' : 'Move-in Clean'} on {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} at {selectedTime}. You will receive a confirmation email shortly.
                    </p>
                    <button 
                        onClick={resetBooking}
                        className="mt-4 px-8 py-3 bg-secondary text-white rounded-xl font-bold hover:bg-secondary/90 transition-colors"
                    >
                        Book Another
                    </button>
                </div>
            </div>
        </section>
      )
  }

  return (
    <section className="w-full py-20 bg-cream">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <div className="flex flex-col gap-10">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-main mb-4">
              Book Your Cleaning
            </h2>
            <p className="text-text-light">
              Select your preferences below to secure your spot in seconds.
            </p>
          </div>
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 bg-white p-8 rounded-[2.5rem] shadow-card border border-sand">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Service Selection */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="size-7 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                    <span className="font-bold text-text-main uppercase tracking-wider text-xs">
                      Service Type
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    <button
                      onClick={() => setService('standard')}
                      className={`flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all text-left ${
                        service === 'standard'
                          ? 'border-2 border-primary bg-primary/5 text-primary font-semibold'
                          : 'border-sand hover:border-primary/50 text-text-main font-medium'
                      }`}
                    >
                      <span className="material-symbols-outlined text-xl">
                        colors_spark
                      </span>
                      <span>Standard</span>
                    </button>
                    <button
                      onClick={() => setService('deep')}
                      className={`flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all text-left ${
                        service === 'deep'
                          ? 'border-2 border-primary bg-primary/5 text-primary font-semibold'
                          : 'border-sand hover:border-primary/50 text-text-main font-medium'
                      }`}
                    >
                      <span className="material-symbols-outlined text-xl">
                        cleaning_services
                      </span>
                      <span>Deep Clean</span>
                    </button>
                    <button
                      onClick={() => setService('movein')}
                      className={`flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all text-left ${
                        service === 'movein'
                          ? 'border-2 border-primary bg-primary/5 text-primary font-semibold'
                          : 'border-sand hover:border-primary/50 text-text-main font-medium'
                      }`}
                    >
                      <span className="material-symbols-outlined text-xl">
                        inventory_2
                      </span>
                      <span>Move-in</span>
                    </button>
                  </div>
                </div>

                {/* Date Selection */}
                <div className="flex-1 space-y-4 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="size-7 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                      2
                    </span>
                    <span className="font-bold text-text-main uppercase tracking-wider text-xs">
                      Select Date
                    </span>
                  </div>
                  
                  {/* Horizontal Date Picker */}
                  <div className="relative">
                    <div className="flex gap-3 overflow-x-auto pb-4 pt-1 snap-x scrollbar-hide">
                        {dates.map(d => {
                            const selected = isSameDay(selectedDate, d);
                            return (
                                <button
                                    key={d.toISOString()}
                                    onClick={() => setSelectedDate(d)}
                                    className={`flex-shrink-0 snap-start flex flex-col items-center justify-center w-16 h-20 rounded-2xl border transition-all duration-200 ${
                                        selected 
                                        ? 'bg-primary border-primary text-white shadow-lg shadow-primary/25 scale-105'
                                        : 'bg-white border-sand hover:border-primary/50 text-text-main hover:bg-sand/30'
                                    }`}
                                >
                                    <span className={`text-xs font-bold uppercase tracking-wide mb-1 ${selected ? 'text-white/90' : 'text-text-light'}`}>
                                        {isToday(d) ? 'Tdy' : d.toLocaleDateString('en-US', { weekday: 'short' })}
                                    </span>
                                    <span className={`text-xl font-bold ${selected ? 'text-white' : 'text-text-main'}`}>
                                        {d.getDate()}
                                    </span>
                                </button>
                            )
                        })}
                    </div>
                    {/* Fade overlay to indicate scroll */}
                    <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm font-medium text-text-main">
                        Selected: <span className="font-bold text-primary">{selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
                    </p>
                  </div>
                </div>

                {/* Time Selection */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="size-7 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                      3
                    </span>
                    <span className="font-bold text-text-main uppercase tracking-wider text-xs">
                      Preferred Time
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    <button
                        onClick={() => setSelectedTime('09:00')}
                        className={`flex items-center justify-center py-3.5 rounded-2xl border transition-all ${
                            selectedTime === '09:00'
                            ? 'border-2 border-primary bg-primary/5 text-primary font-bold shadow-sm'
                            : 'border-sand hover:border-primary/50 text-text-main font-medium'
                        }`}
                    >
                      09:00 AM
                    </button>
                    <button
                        onClick={() => setSelectedTime('11:30')}
                        className={`flex items-center justify-center py-3.5 rounded-2xl border transition-all ${
                            selectedTime === '11:30'
                            ? 'border-2 border-primary bg-primary/5 text-primary font-bold shadow-sm'
                            : 'border-sand hover:border-primary/50 text-text-main font-medium'
                        }`}
                    >
                      11:30 AM
                    </button>
                    <button
                        onClick={() => setSelectedTime('13:00')}
                        className={`flex items-center justify-center py-3.5 rounded-2xl border transition-all ${
                            selectedTime === '13:00'
                            ? 'border-2 border-primary bg-primary/5 text-primary font-bold shadow-sm'
                            : 'border-sand hover:border-primary/50 text-text-main font-medium'
                        }`}
                    >
                      01:00 PM
                    </button>
                    <button
                        onClick={() => setSelectedTime('15:30')}
                        className={`flex items-center justify-center py-3.5 rounded-2xl border transition-all ${
                            selectedTime === '15:30'
                            ? 'border-2 border-primary bg-primary/5 text-primary font-bold shadow-sm'
                            : 'border-sand hover:border-primary/50 text-text-main font-medium'
                        }`}
                    >
                      03:30 PM
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info & Submit */}
            <div className="bg-secondary p-8 rounded-[2.5rem] shadow-xl text-white flex flex-col justify-between">
              <div className="space-y-6">
                <h4 className="font-display font-bold text-xl">Quick Info</h4>
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/70 ml-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/10 border-white/20 rounded-xl px-4 py-3 text-sm focus:ring-primary focus:border-primary placeholder-white/40 text-white"
                      placeholder="Jane Cooper"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/70 ml-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white/10 border-white/20 rounded-xl px-4 py-3 text-sm focus:ring-primary focus:border-primary placeholder-white/40 text-white"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <button 
                    onClick={handleBooking}
                    disabled={status === 'SUBMITTING'}
                    className="w-full bg-primary hover:bg-[#7a9480] text-white font-bold py-4 rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                  {status === 'SUBMITTING' ? (
                     <>
                     Booking...
                     <span className="animate-spin material-symbols-outlined text-lg">progress_activity</span>
                     </>
                  ) : (
                    <>
                    Complete Booking
                    <span className="material-symbols-outlined text-lg">
                        check_circle
                    </span>
                    </>
                  )}
                </button>
                {status === 'ERROR' && (
                    <p className="text-red-200 text-xs text-center mt-3 font-medium">
                        Unable to book at this moment. Please try again.
                    </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingWidget;