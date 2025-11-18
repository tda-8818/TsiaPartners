import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Company Info */}
          <div className="space-y-5">
            <img
              src="/images/logo-white.png"
              alt="TSIA Partners"
              className="h-12 w-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden text-white font-bold text-2xl tracking-tight">
              TSIA PARTNERS
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Chartered Accountants & Tax Agents serving Sydney for over 50 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {['Home', 'Who We Serve', 'About Us', 'Industries', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-accent-500 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Who We Serve */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">Who We Serve</h3>
            <ul className="space-y-3 text-sm">
              {[
                'Tax Services',
                'Business Advisory',
                'SMSF Services',
                'Trust Services',
                'Accounting Services',
                'Not-for-Profit',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="/clients"
                    className="hover:text-accent-500 transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-accent-500 flex-shrink-0" />
                <span>
                  Suite 201, Level 2<br />
                  309 Pitt St<br />
                  Sydney, NSW 2000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent-500 flex-shrink-0" />
                <a href="tel:0292676533" className="hover:text-accent-500 transition-colors">
                  02 9267 6533
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent-500 flex-shrink-0" />
                <a href="mailto:info@tsiapartners.com.au" className="hover:text-accent-500 transition-colors">
                  general@tsiapartners.com.au
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} TSIA Partners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;