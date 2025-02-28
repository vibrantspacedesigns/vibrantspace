import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
                <img src="./images/logo4.png" alt="VibrantSpaceDesigns Logo"  className="h-20  w-auto ml-5 mr-5"  />
            </div>
            <p className="text-gray-400 mb-4">
              Creating innovative architectural solutions that transform spaces and enhance lives.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-500">Home</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-amber-500">Projects</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-amber-500">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-amber-500">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-500">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Residential Design</li>
              <li className="text-gray-400">Commercial Architecture</li>
              <li className="text-gray-400">Interior Design</li>
              <li className="text-gray-400">Urban Planning</li>
              <li className="text-gray-400">Renovation & Restoration</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-500">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-2 text-amber-500" />
                123 Design Street, Architecture City
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2 text-amber-500" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2 text-amber-500" />
                info@vibrantspacedesigns.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} VibrantSpaceDesigns. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
