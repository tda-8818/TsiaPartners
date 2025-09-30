import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/images/logo-white.png" 
              alt="TSIA Partners" 
              className="h-10 w-auto mb-4"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden text-white font-bold text-xl">TSIA PARTNERS</div>
            <p className="text-sm">
              Chartered Accountants & Tax Agents serving Sydney for over 50 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-brand-orange transition-colors">Home</a></li>
              <li><a href="/services" className="hover:text-brand-orange transition-colors">Services</a></li>
              <li><a href="/about" className="hover:text-brand-orange transition-colors">About Us</a></li>
              <li><a href="/industries" className="hover:text-brand-orange transition-colors">Industries</a></li>
              <li><a href="/contact" className="hover:text-brand-orange transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/services#tax" className="hover:text-brand-orange transition-colors">Tax Services</a></li>
              <li><a href="/services#business" className="hover:text-brand-orange transition-colors">Business Advisory</a></li>
              <li><a href="/services#smsf" className="hover:text-brand-orange transition-colors">SMSF Services</a></li>
              <li><a href="/services#trust" className="hover:text-brand-orange transition-colors">Trust Services</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Suite 201, Level 2<br />309 Pitt St<br />Sydney, NSW 2000</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:0292676533" className="hover:text-brand-orange transition-colors">
                  02 9267 6533
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:info@tsiapartners.com.au" className="hover:text-brand-orange transition-colors">
                  info@tsiapartners.com.au
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} TSIA Partners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;