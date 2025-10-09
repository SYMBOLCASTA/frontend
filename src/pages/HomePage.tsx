import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Search, 
  Settings, 
  LineChart, 
  Shield, 
  Zap, 
  Sliders, 
  LockKeyhole, 
  Plug,
  Users
} from 'lucide-react';

import TestimonialCarousel from '../components/home/TestimonialCarousel';
import MarketDataChart from '../components/home/MarketDataChart';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Democratizing AI for Everyone
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                CASTA DESK is the all-in-one AI marketplace platform that lets you discover, 
                test, customize, and deploy AI models with unmatched ease and flexibility.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/models" className="btn bg-white text-primary-700 hover:bg-primary-50 focus:ring-white">
                  Get Started
                </Link>
                <Link to="/about" className="btn border-2 border-white text-white hover:bg-primary-600 focus:ring-white">
                  Book a Demo
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary-500 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-accent-500 rounded-full opacity-20 blur-3xl"></div>
                <div className="relative z-10 bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm p-8 rounded-2xl border border-primary-500/30 shadow-xl">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">AI Model Marketplace</h3>
                    <div className="flex space-x-2">
                      <span className="h-3 w-3 bg-error-500 rounded-full"></span>
                      <span className="h-3 w-3 bg-warning-500 rounded-full"></span>
                      <span className="h-3 w-3 bg-success-500 rounded-full"></span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-neutral-700/50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                          <Search size={20} />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium">Discover</h4>
                          <p className="text-xs text-neutral-300">Find the perfect AI model</p>
                        </div>
                      </div>
                      <div className="bg-neutral-800 p-2 rounded text-sm font-mono text-neutral-300">
                        {'> searching models...'}
                      </div>
                    </div>
                    <div className="bg-neutral-700/50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 bg-secondary-600 rounded-lg flex items-center justify-center">
                          <Settings size={20} />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium">Customize</h4>
                          <p className="text-xs text-neutral-300">Adjust to your needs</p>
                        </div>
                      </div>
                      <div className="bg-neutral-800 p-2 rounded text-sm font-mono text-neutral-300">
                        {'> parameters optimized'}
                      </div>
                    </div>
                    <div className="bg-neutral-700/50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 bg-accent-600 rounded-lg flex items-center justify-center">
                          <Zap size={20} />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium">Deploy</h4>
                          <p className="text-xs text-neutral-300">Go live in minutes</p>
                        </div>
                      </div>
                      <div className="bg-neutral-800 p-2 rounded text-sm font-mono text-green-400">
                        {'> deployment successful!'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Complete AI Marketplace Platform
            </h2>
            <p className="text-neutral-600 text-lg">
              CASTA DESK offers everything you need to harness the power of AI
              for your business, without the technical complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="card p-8 hover:border-primary-500 hover:border transition-all">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Sliders className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Customization</h3>
              <p className="text-neutral-600 mb-4">
                Tailor AI models to your specific needs with our no-code pipeline builder and parameter adjustment tools.
              </p>
              <Link to="/features" className="text-primary-600 font-medium flex items-center hover:text-primary-700">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="card p-8 hover:border-primary-500 hover:border transition-all">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <LineChart className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Scalability</h3>
              <p className="text-neutral-600 mb-4">
                Scale your AI infrastructure from startup to enterprise with automatic resource allocation and load balancing.
              </p>
              <Link to="/features" className="text-primary-600 font-medium flex items-center hover:text-primary-700">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="card p-8 hover:border-primary-500 hover:border transition-all">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Security</h3>
              <p className="text-neutral-600 mb-4">
                Enterprise-grade security with data encryption, compliance certifications, and privacy controls.
              </p>
              <Link to="/features" className="text-primary-600 font-medium flex items-center hover:text-primary-700">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Card 4 */}
            <div className="card p-8 hover:border-primary-500 hover:border transition-all">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Plug className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Integration</h3>
              <p className="text-neutral-600 mb-4">
                Seamlessly integrate with your existing tools and workflows using our comprehensive APIs and SDKs.
              </p>
              <Link to="/features" className="text-primary-600 font-medium flex items-center hover:text-primary-700">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How CASTA DESK Works
            </h2>
            <p className="text-neutral-600 text-lg">
              Our simple four-step process gets you from discovery to deployment with minimal effort.
            </p>
          </div>

          <div className="relative">
            {/* Progress Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary-200 -translate-y-1/2 z-0">
              <div className="absolute top-0 left-0 h-full w-full bg-primary-500 transform-gpu"></div>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-primary-500 text-white rounded-full flex items-center justify-center mb-6">
                  <Search size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Discover</h3>
                <p className="text-neutral-600">
                  Browse our marketplace to find the perfect AI models for your use case.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-primary-500 text-white rounded-full flex items-center justify-center mb-6">
                  <Search size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Test</h3>
                <p className="text-neutral-600">
                  Try models with your own data before committing to see real results.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-primary-500 text-white rounded-full flex items-center justify-center mb-6">
                  <Settings size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Customize</h3>
                <p className="text-neutral-600">
                  Adjust parameters and fine-tune models to match your specific requirements.
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-primary-500 text-white rounded-full flex items-center justify-center mb-6">
                  <Zap size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Deploy</h3>
                <p className="text-neutral-600">
                  Seamlessly deploy to production with just a few clicks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Data */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                AI Market Growth at Your Fingertips
              </h2>
              <p className="text-neutral-600 text-lg mb-8">
                The AI market is growing exponentially, and CASTA DESK puts you at the forefront
                of this revolution. Our platform makes it easy to tap into this growth without
                the need for specialized expertise.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-success-500 rounded-full flex items-center justify-center mt-1 mr-4">
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">42% YoY Growth</h4>
                    <p className="text-neutral-600">The AI software market is growing at an unprecedented rate</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-success-500 rounded-full flex items-center justify-center mt-1 mr-4">
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">$15.7 Trillion</h4>
                    <p className="text-neutral-600">Projected global economic impact of AI by 2030</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-success-500 rounded-full flex items-center justify-center mt-1 mr-4">
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">80% of Enterprises</h4>
                    <p className="text-neutral-600">Are investing in AI as part of their digital transformation</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Growth Metrics</h3>
              <MarketDataChart />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Innovative Companies
            </h2>
            <p className="text-neutral-600 text-lg">
              See what our customers have to say about CASTA DESK.
            </p>
          </div>

          <TestimonialCarousel />
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
            <img src="https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Company logo" className="h-8 object-contain" />
            <img src="https://images.pexels.com/photos/5926390/pexels-photo-5926390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Company logo" className="h-8 object-contain" />
            <img src="https://images.pexels.com/photos/5926391/pexels-photo-5926391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Company logo" className="h-8 object-contain" />
            <img src="https://images.pexels.com/photos/5926392/pexels-photo-5926392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Company logo" className="h-8 object-contain" />
            <img src="https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Company logo" className="h-8 object-contain" />
            <img src="https://images.pexels.com/photos/5926394/pexels-photo-5926394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Company logo" className="h-8 object-contain" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-3xl mx-auto">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using CASTA DESK to build their AI future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/models" className="btn bg-white text-primary-700 hover:bg-primary-50 focus:ring-white">
              Explore Models
            </Link>
            <Link to="/about" className="btn border-2 border-white text-white hover:bg-primary-800 focus:ring-white">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;