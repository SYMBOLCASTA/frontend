import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Logo className="h-10 w-auto text-white" />
              <span className="ml-2 text-xl font-bold">CASTA DESK</span>
            </div>
            {/* <p className="text-neutral-300 text-sm">
              Democratizing AI for businesses of all sizes. Our platform makes
              AI accessible, customizable, and scalable for your unique needs.
            </p> */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-neutral-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Agents
                </Link>
              </li>
              <li>
                <Link
                  to="/models"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Model Library
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Service Status
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={18} className="mt-1 mr-3 text-primary-400" />
                <span className="text-neutral-300">castadesk@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mt-1 mr-3 text-primary-400" />
                <span className="text-neutral-300">+91 81231 92696</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mt-1 mr-3 text-primary-400" />
                <span className="text-neutral-300">
                  ITPL Main Road, Brookefield, Bangalore - 560 037, Karnataka,
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className=" mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CASTA DESK AI. All rights
            reserved.
          </p> */}
          {/* <div className="flex flex-wrap justify-center space-x-4 text-sm text-neutral-400">
            <a
              href="#"
              className="hover:text-white transition-colors mb-2 md:mb-0"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors mb-2 md:mb-0"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors mb-2 md:mb-0"
            >
              Cookie Policy
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;