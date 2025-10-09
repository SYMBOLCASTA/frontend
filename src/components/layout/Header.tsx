import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import Modal from "../../auth/Modal";
import Login from "../../auth/login";
import Signup from "../../auth/signup";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Model Library", path: "/models" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo className="h-10 w-auto" />
          <span className="ml-2 text-xl font-bold text-primary-900">
            CASTA DESK
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-primary-600"
                  : isScrolled
                  ? "text-neutral-900 hover:text-primary-600"
                  : "text-neutral-800 hover:text-primary-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div>
          <button
            onClick={() => setIsLoginOpen(true)}
            className="px-4 py-2 bg-blue-500 rounded-md mr-3 hover:bg-blue-600"
          >
            Login
          </button>
          <button
            onClick={() => setIsSignupOpen(true)}
            className="px-4 py-2 bg-green-500 rounded-md hover:bg-green-600"
          >
            Signup
          </button>
        </div>
        <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
          <Login />
        </Modal>

        {/* Signup Modal */}
        <Modal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)}>
          <Signup />
        </Modal>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-2 px-4 font-medium ${
                  location.pathname === link.path
                    ? "text-primary-600 bg-primary-50 rounded"
                    : "text-neutral-800 hover:text-primary-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-neutral-200 flex flex-col space-y-3">
              <button
                onClick={() => setIsLoginOpen(true)}
                className="py-2 px-4 font-medium text-neutral-800 text-left"
              >
                Login
              </button>
              <button
                onClick={() => setIsSignupOpen(true)}
                className="btn-primary mx-4 text-left"
              >
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
