import React from 'react';
import { 
  Users, 
  Rocket, 
  Lightbulb, 
  Zap, 
  Heart, 
  GitBranch, 
  Calendar,
  MapPin,
  Mail
} from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="bg-primary-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About CASTA DESK</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            We're on a mission to democratize AI and make it accessible to businesses of all sizes.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-neutral-600 text-lg mb-6">
              At CASTA DESK, we believe that artificial intelligence should be accessible to everyone, 
              not just tech giants with unlimited resources. Our mission is to democratize AI by providing 
              a platform that makes it easy for businesses of all sizes to discover, test, customize, and 
              deploy AI models without requiring specialized expertise.
            </p>
            <p className="text-neutral-600 text-lg mb-6">
              We're building the future where AI is as accessible as electricity - a fundamental utility 
              that powers innovation across industries. By removing the technical barriers and reducing 
              the costs associated with AI adoption, we're enabling a new wave of innovation that will 
              transform businesses and create value for everyone.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Users className="text-primary-600" size={24} />
                </div>
                <span className="ml-3 font-medium">150+ Team Members</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Rocket className="text-primary-600" size={24} />
                </div>
                <span className="ml-3 font-medium">Founded in 2021</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <GitBranch className="text-primary-600" size={24} />
                </div>
                <span className="ml-3 font-medium">12 Global Offices</span>
              </div>
            </div>
          </div>
          <div className="bg-neutral-100 rounded-xl p-8 relative">
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-primary-500 rounded-lg rotate-12 opacity-20"></div>
            <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-primary-500 rounded-full opacity-20"></div>
            <div className="relative">
              <div className="mb-6">
                <Lightbulb className="text-primary-600 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-neutral-600">
                  We're constantly pushing the boundaries of what's possible with AI, developing new tools and features 
                  that make it more accessible and powerful.
                </p>
              </div>
              <div className="mb-6">
                <Zap className="text-primary-600 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Empowerment</h3>
                <p className="text-neutral-600">
                  We believe in empowering businesses with the tools they need to harness AI's potential, 
                  regardless of their technical expertise.
                </p>
              </div>
              <div>
                <Heart className="text-primary-600 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-neutral-600">
                  We're building a vibrant community of developers, businesses, and AI enthusiasts who share 
                  our vision of democratizing AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Leadership Team</h2>
          <p className="text-neutral-600 text-lg mb-12 text-center max-w-3xl mx-auto">
            We've brought together a diverse team of experts in AI, product development, and business 
            to create the most accessible AI platform on the market.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Alex Chen, CEO" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Alex Chen</h3>
                <p className="text-primary-600 font-medium mb-3">CEO & Co-Founder</p>
                <p className="text-neutral-600 text-sm mb-4">
                  Former AI research lead at Google with over 15 years of experience in machine learning and artificial intelligence.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-neutral-400 hover:text-primary-600 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="#" className="text-neutral-400 hover:text-primary-600 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23 3.00029C22.0424 3.67577 20.9821 4.1924 19.86 4.53029C19.2577 3.8378 18.4573 3.34698 17.567 3.12422C16.6767 2.90145 15.7395 2.95749 14.8821 3.28474C14.0247 3.612 13.2884 4.19469 12.773 4.95401C12.2575 5.71332 11.9877 6.61263 12 7.53029V8.53029C10.2426 8.57586 8.50127 8.1861 6.93101 7.39574C5.36074 6.60537 4.01032 5.43893 3 4.00029C3 4.00029 -1 13.0003 8 17.0003C5.94053 18.3983 3.48716 19.0992 1 19.0003C10 24.0003 21 19.0003 21 7.50029C20.9991 7.22174 20.9723 6.94388 20.92 6.67029C21.9406 5.66378 22.6608 4.39322 23 3.00029Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Sarah Johnson, CTO" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                <p className="text-primary-600 font-medium mb-3">CTO & Co-Founder</p>
                <p className="text-neutral-600 text-sm mb-4">
                  Pioneered several breakthrough ML algorithms and led engineering teams at Microsoft and OpenAI.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-neutral-400 hover:text-primary-600 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="#" className="text-neutral-400 hover:text-primary-600 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23 3.00029C22.0424 3.67577 20.9821 4.1924 19.86 4.53029C19.2577 3.8378 18.4573 3.34698 17.567 3.12422C16.6767 2.90145 15.7395 2.95749 14.8821 3.28474C14.0247 3.612 13.2884 4.19469 12.773 4.95401C12.2575 5.71332 11.9877 6.61263 12 7.53029V8.53029C10.2426 8.57586 8.50127 8.1861 6.93101 7.39574C5.36074 6.60537 4.01032 5.43893 3 4.00029C3 4.00029 -1 13.0003 8 17.0003C5.94053 18.3983 3.48716 19.0992 1 19.0003C10 24.0003 21 19.0003 21 7.50029C20.9991 7.22174 20.9723 6.94388 20.92 6.67029C21.9406 5.66378 22.6608 4.39322 23 3.00029Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Michael Rodriguez, CPO" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Michael Rodriguez</h3>
                <p className="text-primary-600 font-medium mb-3">Chief Product Officer</p>
                <p className="text-neutral-600 text-sm mb-4">
                  Product visionary with experience at Stripe and Airbnb, focused on creating intuitive user experiences.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-neutral-400 hover:text-primary-600 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="#" className="text-neutral-400 hover:text-primary-600 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23 3.00029C22.0424 3.67577 20.9821 4.1924 19.86 4.53029C19.2577 3.8378 18.4573 3.34698 17.567 3.12422C16.6767 2.90145 15.7395 2.95749 14.8821 3.28474C14.0247 3.612 13.2884 4.19469 12.773 4.95401C12.2575 5.71332 11.9877 6.61263 12 7.53029V8.53029C10.2426 8.57586 8.50127 8.1861 6.93101 7.39574C5.36074 6.60537 4.01032 5.43893 3 4.00029C3 4.00029 -1 13.0003 8 17.0003C5.94053 18.3983 3.48716 19.0992 1 19.0003C10 24.0003 21 19.0003 21 7.50029C20.9991 7.22174 20.9723 6.94388 20.92 6.67029C21.9406 5.66378 22.6608 4.39322 23 3.00029Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src="https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Emily Zhang, CBO" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Emily Zhang</h3>
                <p className="text-primary-600 font-medium mb-3">Chief Business Officer</p>
                <p className="text-neutral-600 text-sm mb-4">
                  Former VP of Business Development at Salesforce with expertise in scaling SaaS companies globally.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-neutral-400 hover:text-primary-600 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="#" className="text-neutral-400 hover:text-primary-600 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23 3.00029C22.0424 3.67577 20.9821 4.1924 19.86 4.53029C19.2577 3.8378 18.4573 3.34698 17.567 3.12422C16.6767 2.90145 15.7395 2.95749 14.8821 3.28474C14.0247 3.612 13.2884 4.19469 12.773 4.95401C12.2575 5.71332 11.9877 6.61263 12 7.53029V8.53029C10.2426 8.57586 8.50127 8.1861 6.93101 7.39574C5.36074 6.60537 4.01032 5.43893 3 4.00029C3 4.00029 -1 13.0003 8 17.0003C5.94053 18.3983 3.48716 19.0992 1 19.0003C10 24.0003 21 19.0003 21 7.50029C20.9991 7.22174 20.9723 6.94388 20.92 6.67029C21.9406 5.66378 22.6608 4.39322 23 3.00029Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="#" className="btn-primary">
              View Full Team
            </a>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Journey</h2>
        <p className="text-neutral-600 text-lg mb-12 text-center max-w-3xl mx-auto">
          From a small startup to a leading AI platform, our journey has been driven by our mission to democratize AI.
        </p>

        <div className="relative border-l-2 border-primary-200 ml-4 md:ml-0 md:mx-auto md:max-w-3xl">
          {/* Timeline Item 1 */}
          <div className="mb-12 md:flex items-center">
            <div className="absolute left-[-10px] md:static md:mr-10 flex flex-col items-center">
              <div className="bg-primary-600 w-5 h-5 rounded-full"></div>
              <div className="hidden md:block mt-2 text-center">
                <div className="font-bold text-primary-600">2021</div>
                <div className="text-sm text-neutral-500">March</div>
              </div>
            </div>
            <div className="ml-6 md:ml-0 bg-white rounded-lg shadow-md p-6">
              <div className="md:hidden mb-2">
                <div className="font-bold text-primary-600">2021</div>
                <div className="text-sm text-neutral-500">March</div>
              </div>
              <h3 className="text-xl font-bold mb-2">Company Founded</h3>
              <p className="text-neutral-600">
                Alex Chen and Sarah Johnson founded CASTA DESK with a vision to make AI accessible to everyone. 
                The company secured $5M in seed funding from leading investors.
              </p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="mb-12 md:flex items-center md:flex-row-reverse">
            <div className="absolute left-[-10px] md:static md:ml-10 flex flex-col items-center">
              <div className="bg-primary-600 w-5 h-5 rounded-full"></div>
              <div className="hidden md:block mt-2 text-center">
                <div className="font-bold text-primary-600">2022</div>
                <div className="text-sm text-neutral-500">January</div>
              </div>
            </div>
            <div className="ml-6 md:ml-0 bg-white rounded-lg shadow-md p-6">
              <div className="md:hidden mb-2">
                <div className="font-bold text-primary-600">2022</div>
                <div className="text-sm text-neutral-500">January</div>
              </div>
              <h3 className="text-xl font-bold mb-2">Platform Launch</h3>
              <p className="text-neutral-600">
                The first version of the CASTA DESK platform was launched, featuring a curated selection of 
                AI models and a simple interface for testing and deployment.
              </p>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="mb-12 md:flex items-center">
            <div className="absolute left-[-10px] md:static md:mr-10 flex flex-col items-center">
              <div className="bg-primary-600 w-5 h-5 rounded-full"></div>
              <div className="hidden md:block mt-2 text-center">
                <div className="font-bold text-primary-600">2022</div>
                <div className="text-sm text-neutral-500">September</div>
              </div>
            </div>
            <div className="ml-6 md:ml-0 bg-white rounded-lg shadow-md p-6">
              <div className="md:hidden mb-2">
                <div className="font-bold text-primary-600">2022</div>
                <div className="text-sm text-neutral-500">September</div>
              </div>
              <h3 className="text-xl font-bold mb-2">Series A Funding</h3>
              <p className="text-neutral-600">
                Raised $25M in Series A funding to expand the platform's capabilities and grow the team. 
                The company reached 10,000 users milestone.
              </p>
            </div>
          </div>

          {/* Timeline Item 4 */}
          <div className="mb-12 md:flex items-center md:flex-row-reverse">
            <div className="absolute left-[-10px] md:static md:ml-10 flex flex-col items-center">
              <div className="bg-primary-600 w-5 h-5 rounded-full"></div>
              <div className="hidden md:block mt-2 text-center">
                <div className="font-bold text-primary-600">2023</div>
                <div className="text-sm text-neutral-500">April</div>
              </div>
            </div>
            <div className="ml-6 md:ml-0 bg-white rounded-lg shadow-md p-6">
              <div className="md:hidden mb-2">
                <div className="font-bold text-primary-600">2023</div>
                <div className="text-sm text-neutral-500">April</div>
              </div>
              <h3 className="text-xl font-bold mb-2">Global Expansion</h3>
              <p className="text-neutral-600">
                Expanded operations to Europe and Asia, opening offices in London, Berlin, and Singapore. 
                The platform now supports multiple languages and regional compliance requirements.
              </p>
            </div>
          </div>

          {/* Timeline Item 5 */}
          <div className="md:flex items-center">
            <div className="absolute left-[-10px] md:static md:mr-10 flex flex-col items-center">
              <div className="bg-primary-600 w-5 h-5 rounded-full"></div>
              <div className="hidden md:block mt-2 text-center">
                <div className="font-bold text-primary-600">2024</div>
                <div className="text-sm text-neutral-500">January</div>
              </div>
            </div>
            <div className="ml-6 md:ml-0 bg-white rounded-lg shadow-md p-6">
              <div className="md:hidden mb-2">
                <div className="font-bold text-primary-600">2024</div>
                <div className="text-sm text-neutral-500">January</div>
              </div>
              <h3 className="text-xl font-bold mb-2">Platform 2.0 Launch</h3>
              <p className="text-neutral-600">
                Released a major platform update featuring no-code customization tools, advanced analytics, 
                and a marketplace for developers to monetize their AI models.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Roadmap</h2>
          <p className="text-neutral-600 text-lg mb-12 text-center max-w-3xl mx-auto">
            We're constantly innovating and improving our platform. Here's a glimpse of what's coming next.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Roadmap Item 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-1 bg-primary-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="text-primary-600 mr-3" size={24} />
                  <div>
                    <h3 className="font-bold">Q2 2025</h3>
                    <p className="text-sm text-neutral-500">Coming Soon</p>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3">Advanced Fine-Tuning</h4>
                <p className="text-neutral-600 mb-4">
                  Next-generation fine-tuning capabilities that allow for more precise model customization with smaller datasets.
                </p>
                <div className="bg-primary-50 p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm text-primary-600">65%</span>
                  </div>
                  <div className="w-full h-2 bg-neutral-200 rounded-full mt-2">
                    <div className="h-full bg-primary-600 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Roadmap Item 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-1 bg-primary-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="text-primary-600 mr-3" size={24} />
                  <div>
                    <h3 className="font-bold">Q3 2025</h3>
                    <p className="text-sm text-neutral-500">Planning</p>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3">Multi-Modal Models</h4>
                <p className="text-neutral-600 mb-4">
                  Support for models that can process multiple types of input (text, images, audio) simultaneously.
                </p>
                <div className="bg-primary-50 p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm text-primary-600">40%</span>
                  </div>
                  <div className="w-full h-2 bg-neutral-200 rounded-full mt-2">
                    <div className="h-full bg-primary-600 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Roadmap Item 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-1 bg-primary-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="text-primary-600 mr-3" size={24} />
                  <div>
                    <h3 className="font-bold">Q4 2025</h3>
                    <p className="text-sm text-neutral-500">Research</p>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3">Federated Learning</h4>
                <p className="text-neutral-600 mb-4">
                  Enabling model training across multiple devices or servers while keeping data localized for enhanced privacy.
                </p>
                <div className="bg-primary-50 p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm text-primary-600">25%</span>
                  </div>
                  <div className="w-full h-2 bg-neutral-200 rounded-full mt-2">
                    <div className="h-full bg-primary-600 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Investor Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Join Us on Our Journey</h2>
            <p className="text-neutral-600 text-lg mb-6">
              We're building the future of AI and looking for strategic partners to join us on this journey. 
              If you're interested in investing in CASTA DESK, we'd love to hear from you.
            </p>
            <p className="text-neutral-600 text-lg mb-6">
              Our current investors include top-tier venture capital firms and strategic partners who share 
              our vision of democratizing AI. We're proud to have the backing of Sequoia Capital, Andreessen Horowitz, 
              and GV, among others.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="p-4 bg-neutral-50 rounded-lg flex items-center justify-center">
                <img src="https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Investor logo" className="h-8" />
              </div>
              <div className="p-4 bg-neutral-50 rounded-lg flex items-center justify-center">
                <img src="https://images.pexels.com/photos/5926390/pexels-photo-5926390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Investor logo" className="h-8" />
              </div>
              <div className="p-4 bg-neutral-50 rounded-lg flex items-center justify-center">
                <img src="https://images.pexels.com/photos/5926391/pexels-photo-5926391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Investor logo" className="h-8" />
              </div>
            </div>
            <button className="btn-primary">
              Contact Investor Relations
            </button>
          </div>
          <div className="bg-neutral-100 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your company"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="bg-neutral-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Global Presence</h2>
          <p className="text-neutral-300 text-lg mb-12 text-center max-w-3xl mx-auto">
            With offices around the world, we're building a global platform to serve customers everywhere.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Office 1 */}
            <div className="bg-neutral-800 rounded-xl p-6 hover:bg-neutral-700 transition-colors">
              <div className="flex items-start mb-4">
                <MapPin className="text-primary-400 mr-3 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-xl mb-1">San Francisco</h3>
                  <p className="text-neutral-300 text-sm">Headquarters</p>
                </div>
              </div>
              <p className="text-neutral-400 mb-4">
                123 AI Avenue, San Francisco, CA 94103, USA
              </p>
              <div className="flex items-center text-primary-400 hover:text-primary-300">
                <Mail size={16} className="mr-2" />
                <a href="mailto:sf@castadesk.ai">sf@castadesk.ai</a>
              </div>
            </div>

            {/* Office 2 */}
            <div className="bg-neutral-800 rounded-xl p-6 hover:bg-neutral-700 transition-colors">
              <div className="flex items-start mb-4">
                <MapPin className="text-primary-400 mr-3 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-xl mb-1">London</h3>
                  <p className="text-neutral-300 text-sm">European HQ</p>
                </div>
              </div>
              <p className="text-neutral-400 mb-4">
                45 Tech Square, London, EC2A 4PX, UK
              </p>
              <div className="flex items-center text-primary-400 hover:text-primary-300">
                <Mail size={16} className="mr-2" />
                <a href="mailto:london@castadesk.ai">london@castadesk.ai</a>
              </div>
            </div>

            {/* Office 3 */}
            <div className="bg-neutral-800 rounded-xl p-6 hover:bg-neutral-700 transition-colors">
              <div className="flex items-start mb-4">
                <MapPin className="text-primary-400 mr-3 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-xl mb-1">Singapore</h3>
                  <p className="text-neutral-300 text-sm">Asia Pacific HQ</p>
                </div>
              </div>
              <p className="text-neutral-400 mb-4">
                8 Marina View, Singapore 018960
              </p>
              <div className="flex items-center text-primary-400 hover:text-primary-300">
                <Mail size={16} className="mr-2" />
                <a href="mailto:singapore@castadesk.ai">singapore@castadesk.ai</a>
              </div>
            </div>

            {/* Office 4 */}
            <div className="bg-neutral-800 rounded-xl p-6 hover:bg-neutral-700 transition-colors">
              <div className="flex items-start mb-4">
                <MapPin className="text-primary-400 mr-3 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-xl mb-1">Berlin</h3>
                  <p className="text-neutral-300 text-sm">European Office</p>
                </div>
              </div>
              <p className="text-neutral-400 mb-4">
                Friedrichstraße 123, 10117 Berlin, Germany
              </p>
              <div className="flex items-center text-primary-400 hover:text-primary-300">
                <Mail size={16} className="mr-2" />
                <a href="mailto:berlin@castadesk.ai">berlin@castadesk.ai</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Shaping the Future of AI
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Whether you're looking to use our platform, join our team, or invest in our vision, we'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/models" className="btn bg-white text-primary-700 hover:bg-primary-50 focus:ring-white">
              Explore Platform
            </a>
            <a href="/careers" className="btn border-2 border-white text-white hover:bg-primary-800 focus:ring-white">
              Join Our Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;