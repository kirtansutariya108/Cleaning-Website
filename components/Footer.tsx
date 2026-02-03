import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#374151] text-gray-300 py-16 rounded-t-[3rem]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 text-white">
              <div className="size-10 flex items-center justify-center rounded-full bg-primary text-white">
                <span className="material-symbols-outlined text-xl">eco</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">
                SparkleClean
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Cultivating clean, healthy, and warm environments for families to
              thrive in. Your home is our passion.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-bold text-lg font-display">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Standard Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Deep Refresh
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Move-In Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Commercial
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-bold text-lg font-display">
              Contact
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">
                  phone
                </span>
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">
                  mail
                </span>
                <span>hello@sparkleclean.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">
                  location_on
                </span>
                <span>Sparkle City & Surrounding Areas</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-bold text-lg font-display">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all text-white"
              >
                <svg className="size-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all text-white"
              >
                <svg className="size-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.063-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500">
          <p>© 2024 SparkleClean. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;