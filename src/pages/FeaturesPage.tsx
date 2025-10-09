import React, { useState } from 'react';
import { 
  Sliders, 
  LineChart, 
  Shield, 
  Plug, 
  Wallet,
  Check,
  X
} from 'lucide-react';

const FeaturesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('customization');

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="bg-primary-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Platform Features</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            CASTA DESK offers a comprehensive suite of features designed to make AI accessible,
            customizable, and scalable for businesses of all sizes.
          </p>
        </div>
      </div>

      {/* Feature Tabs */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex overflow-x-auto pb-2 mb-8 border-b border-neutral-200">
          <button
            className={`py-3 px-6 font-medium text-sm whitespace-nowrap flex items-center ${
              activeTab === 'customization'
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
            onClick={() => setActiveTab('customization')}
          >
            <Sliders size={18} className="mr-2" />
            Customization
          </button>
          <button
            className={`py-3 px-6 font-medium text-sm whitespace-nowrap flex items-center ${
              activeTab === 'scalability'
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
            onClick={() => setActiveTab('scalability')}
          >
            <LineChart size={18} className="mr-2" />
            Scalability
          </button>
          <button
            className={`py-3 px-6 font-medium text-sm whitespace-nowrap flex items-center ${
              activeTab === 'security'
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
            onClick={() => setActiveTab('security')}
          >
            <Shield size={18} className="mr-2" />
            Security
          </button>
          <button
            className={`py-3 px-6 font-medium text-sm whitespace-nowrap flex items-center ${
              activeTab === 'integration'
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
            onClick={() => setActiveTab('integration')}
          >
            <Plug size={18} className="mr-2" />
            Integration
          </button>
          <button
            className={`py-3 px-6 font-medium text-sm whitespace-nowrap flex items-center ${
              activeTab === 'monetization'
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
            onClick={() => setActiveTab('monetization')}
          >
            <Wallet size={18} className="mr-2" />
            Developer Monetization
          </button>
        </div>

        {/* Customization Content */}
        {activeTab === 'customization' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                No-Code Model Customization
              </h2>
              <p className="text-neutral-600 text-lg mb-6">
                Easily customize AI models to your specific needs without writing a single line of code. Our intuitive interface makes it simple to adjust parameters, fine-tune models, and create custom pipelines.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                    <Check size={16} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Drag-and-Drop Pipeline Builder</h3>
                    <p className="text-neutral-600">Create complex AI workflows by simply dragging and connecting components.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                    <Check size={16} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Visual Parameter Tuning</h3>
                    <p className="text-neutral-600">Adjust model parameters with interactive sliders and see results in real-time.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                    <Check size={16} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">One-Click Fine-Tuning</h3>
                    <p className="text-neutral-600">Upload your data and fine-tune models with a single click.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                    <Check size={16} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Custom Model Templates</h3>
                    <p className="text-neutral-600">Save your customizations as templates for future use.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-800 rounded-xl overflow-hidden shadow-xl">
              <div className="p-4 bg-neutral-900 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-error-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-warning-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-success-500 rounded-full"></div>
                </div>
                <span className="text-sm text-neutral-400">Model Customization Interface</span>
              </div>
              <div className="p-6">
                <div className="bg-neutral-700 rounded-lg p-4 mb-4">
                  <h4 className="text-white text-sm font-medium mb-2">Model Pipeline</h4>
                  <div className="flex items-center justify-between text-neutral-200 text-xs">
                    <div className="bg-primary-600 px-3 py-2 rounded">Data Input</div>
                    <div className="border-t-2 border-dashed border-neutral-500 w-8"></div>
                    <div className="bg-primary-700 px-3 py-2 rounded">Preprocessing</div>
                    <div className="border-t-2 border-dashed border-neutral-500 w-8"></div>
                    <div className="bg-primary-800 px-3 py-2 rounded">Model</div>
                    <div className="border-t-2 border-dashed border-neutral-500 w-8"></div>
                    <div className="bg-primary-900 px-3 py-2 rounded">Output</div>
                  </div>
                </div>
                <div className="bg-neutral-700 rounded-lg p-4 mb-4">
                  <h4 className="text-white text-sm font-medium mb-3">Parameter Tuning</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs text-neutral-300 mb-1">
                        <span>Temperature</span>
                        <span>0.7</span>
                      </div>
                      <div className="h-2 bg-neutral-600 rounded-full">
                        <div className="h-full bg-primary-500 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-neutral-300 mb-1">
                        <span>Max Tokens</span>
                        <span>512</span>
                      </div>
                      <div className="h-2 bg-neutral-600 rounded-full">
                        <div className="h-full bg-primary-500 rounded-full" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-neutral-300 mb-1">
                        <span>Top P</span>
                        <span>0.9</span>
                      </div>
                      <div className="h-2 bg-neutral-600 rounded-full">
                        <div className="h-full bg-primary-500 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-700 rounded-lg p-4">
                  <h4 className="text-white text-sm font-medium mb-2">Results Preview</h4>
                  <div className="bg-neutral-800 p-3 rounded text-neutral-300 text-xs font-mono">
                    {'> Model output preview...\n> Parameter adjustments applied\n> Accuracy: 94.2%\n> Response time: 52ms'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Scalability Content */}
        {activeTab === 'scalability' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Effortless Scalability
              </h2>
              <p className="text-neutral-600 text-lg mb-6">
                Scale your AI infrastructure from startup to enterprise with zero effort. Our platform automatically adjusts resources based on your usage patterns, ensuring optimal performance at all times.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                    <Check size={16} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Auto-Scaling Infrastructure</h3>
                    <p className="text-neutral-600">Resources automatically scale up or down based on your usage patterns.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                    <Check size={16} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Multi-Region Deployment</h3>
                    <p className="text-neutral-600">Deploy models closer to your users for lower latency and better performance.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                    <Check size={16} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Batch Processing</h3>
                    <p className="text-neutral-600">Efficiently process large volumes of data with our optimized batch processing system.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                    <Check size={16} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Predictive Scaling</h3>
                    <p className="text-neutral-600">Our AI analyzes your usage patterns to predict and prepare for traffic spikes.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-neutral-200">
              <div className="p-4 border-b border-neutral-200 flex items-center justify-between">
                <span className="font-medium">Scaling Visualization</span>
                <div className="flex items-center text-sm text-neutral-500">
                  <button className="px-3 py-1 bg-primary-50 text-primary-600 rounded-l">Day</button>
                  <button className="px-3 py-1">Week</button>
                  <button className="px-3 py-1 rounded-r">Month</button>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-neutral-500 mb-3">Resource Utilization</h4>
                  <div className="h-40 bg-neutral-50 rounded-lg relative">
                    {/* This would be a chart in a real implementation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary-600">94%</div>
                        <div className="text-sm text-neutral-500">Efficiency</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-neutral-50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary-700">12</div>
                    <div className="text-xs text-neutral-500">Active Regions</div>
                  </div>
                  <div className="bg-neutral-50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary-700">24TB</div>
                    <div className="text-xs text-neutral-500">Data Processed</div>
                  </div>
                  <div className="bg-neutral-50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary-700">99.9%</div>
                    <div className="text-xs text-neutral-500">Uptime</div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-neutral-500 mb-3">Current Status</h4>
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">API Gateway</span>
                      <span className="px-2 py-1 bg-success-500 text-white text-xs rounded-full">Healthy</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Model Servers</span>
                      <span className="px-2 py-1 bg-success-500 text-white text-xs rounded-full">Healthy</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Database Cluster</span>
                      <span className="px-2 py-1 bg-success-500 text-white text-xs rounded-full">Healthy</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Load Balancers</span>
                      <span className="px-2 py-1 bg-success-500 text-white text-xs rounded-full">Healthy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Security Content */}
        {activeTab === 'security' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Enterprise-Grade Security
              </h2>
              <p className="text-neutral-600 text-lg mb-6">
                CASTA DESK provides top-tier security measures to protect your data and ensure compliance with industry regulations. Your data is safe with us.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                    <Check size={16} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">End-to-End Encryption</h3>
                    <p className="text-neutral-600">All data is encrypted in transit and at rest using AES-256.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                    <Check size={16} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">SOC 2 Type II Compliance</h3>
                    <p className="text-neutral-600">Our platform meets the highest standards for security, availability, and confidentiality.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                    <Check size={16} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">GDPR & CCPA Compliant</h3>
                    <p className="text-neutral-600">We adhere to global privacy regulations to protect user data.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                    <Check size={16} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Regular Security Audits</h3>
                    <p className="text-neutral-600">Independent third-party security audits ensure our platform remains secure.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-neutral-200 p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4 text-center">Security Certifications</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border border-neutral-200 rounded-lg p-4 flex flex-col items-center">
                    <Shield className="text-primary-600 mb-2" size={32} />
                    <span className="text-sm font-medium text-center">SOC 2 Type II</span>
                  </div>
                  <div className="border border-neutral-200 rounded-lg p-4 flex flex-col items-center">
                    <Shield className="text-primary-600 mb-2" size={32} />
                    <span className="text-sm font-medium text-center">GDPR</span>
                  </div>
                  <div className="border border-neutral-200 rounded-lg p-4 flex flex-col items-center">
                    <Shield className="text-primary-600 mb-2" size={32} />
                    <span className="text-sm font-medium text-center">CCPA</span>
                  </div>
                  <div className="border border-neutral-200 rounded-lg p-4 flex flex-col items-center">
                    <Shield className="text-primary-600 mb-2" size={32} />
                    <span className="text-sm font-medium text-center">HIPAA</span>
                  </div>
                  <div className="border border-neutral-200 rounded-lg p-4 flex flex-col items-center">
                    <Shield className="text-primary-600 mb-2" size={32} />
                    <span className="text-sm font-medium text-center">ISO 27001</span>
                  </div>
                  <div className="border border-neutral-200 rounded-lg p-4 flex flex-col items-center">
                    <Shield className="text-primary-600 mb-2" size={32} />
                    <span className="text-sm font-medium text-center">PCI DSS</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-center">Security Features</h3>
                <div className="bg-neutral-50 rounded-lg p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-2 border-b border-neutral-200">
                      <span className="font-medium">Multi-Factor Authentication</span>
                      <div className="bg-success-100 text-success-600 px-2 py-1 rounded-full text-xs">Enabled</div>
                    </div>
                    <div className="flex justify-between items-center p-2 border-b border-neutral-200">
                      <span className="font-medium">Role-Based Access Control</span>
                      <div className="bg-success-100 text-success-600 px-2 py-1 rounded-full text-xs">Enabled</div>
                    </div>
                    <div className="flex justify-between items-center p-2 border-b border-neutral-200">
                      <span className="font-medium">Data Encryption</span>
                      <div className="bg-success-100 text-success-600 px-2 py-1 rounded-full text-xs">AES-256</div>
                    </div>
                    <div className="flex justify-between items-center p-2 border-b border-neutral-200">
                      <span className="font-medium">VPC Isolation</span>
                      <div className="bg-success-100 text-success-600 px-2 py-1 rounded-full text-xs">Enabled</div>
                    </div>
                    <div className="flex justify-between items-center p-2">
                      <span className="font-medium">DDoS Protection</span>
                      <div className="bg-success-100 text-success-600 px-2 py-1 rounded-full text-xs">Active</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Integration Content */}
        {activeTab === 'integration' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Seamless Integration
              </h2>
              <p className="text-neutral-600 text-lg mb-6">
                Easily integrate CASTA DESK with your existing tools and workflows. Our comprehensive APIs and SDKs make it simple to embed AI capabilities into your applications.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                    <Check size={16} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">RESTful APIs</h3>
                    <p className="text-neutral-600">Simple, well-documented APIs for easy integration with any system.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                    <Check size={16} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Multiple SDKs</h3>
                    <p className="text-neutral-600">Official SDKs for JavaScript, Python, Java, Go, and more.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                    <Check size={16} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Webhooks</h3>
                    <p className="text-neutral-600">Real-time notifications for events and model updates.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                    <Check size={16} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Pre-built Connectors</h3>
                    <p className="text-neutral-600">One-click integration with popular tools like Slack, Salesforce, and Zapier.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-800 rounded-xl overflow-hidden shadow-xl">
              <div className="p-4 bg-neutral-900 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-error-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-warning-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-success-500 rounded-full"></div>
                </div>
                <span className="text-sm text-neutral-400">API Reference</span>
              </div>
              <div className="p-6">
                <div className="bg-neutral-700 rounded-lg p-4 mb-4">
                  <h4 className="text-white text-sm font-medium mb-2">Example API Request</h4>
                  <div className="bg-neutral-800 p-3 rounded text-neutral-300 text-xs font-mono overflow-x-auto">
{`curl -X POST https://api.castadesk.ai/v1/models/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model_id": "text-gen-v2",
    "prompt": "Write a product description for a new AI platform",
    "max_tokens": 100,
    "temperature": 0.7
  }'`}
                  </div>
                </div>
                <div className="bg-neutral-700 rounded-lg p-4 mb-4">
                  <h4 className="text-white text-sm font-medium mb-2">JavaScript SDK Example</h4>
                  <div className="bg-neutral-800 p-3 rounded text-neutral-300 text-xs font-mono overflow-x-auto">
{`import { CastaDeskClient } from '@castadesk/client';

// Initialize client with your API key
const client = new CastaDeskClient('YOUR_API_KEY');

// Generate text
async function generateText() {
  const response = await client.models.generate({
    modelId: 'text-gen-v2',
    prompt: 'Write a product description for a new AI platform',
    maxTokens: 100,
    temperature: 0.7
  });
  
  console.log(response.text);
}`}
                  </div>
                </div>
                <div className="bg-neutral-700 rounded-lg p-4">
                  <h4 className="text-white text-sm font-medium mb-2">Available SDKs</h4>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-neutral-800 py-2 px-3 rounded text-neutral-300 text-xs">JavaScript</div>
                    <div className="bg-neutral-800 py-2 px-3 rounded text-neutral-300 text-xs">Python</div>
                    <div className="bg-neutral-800 py-2 px-3 rounded text-neutral-300 text-xs">Java</div>
                    <div className="bg-neutral-800 py-2 px-3 rounded text-neutral-300 text-xs">Go</div>
                    <div className="bg-neutral-800 py-2 px-3 rounded text-neutral-300 text-xs">Ruby</div>
                    <div className="bg-neutral-800 py-2 px-3 rounded text-neutral-300 text-xs">PHP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Monetization Content */}
        {activeTab === 'monetization' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Developer Monetization
              </h2>
              <p className="text-neutral-600 text-lg mb-6">
                List and monetize your AI models on the CASTA DESK marketplace. Our platform makes it easy to reach customers and generate revenue from your AI creations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                    <Check size={16} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Flexible Pricing Models</h3>
                    <p className="text-neutral-600">Choose from pay-per-call, subscription, or custom pricing models for your AI models.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                    <Check size={16} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Transparent Revenue Sharing</h3>
                    <p className="text-neutral-600">Earn up to 80% of the revenue generated by your models.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                    <Check size={16} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Built-in Analytics</h3>
                    <p className="text-neutral-600">Track usage, revenue, and performance metrics for your models.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                    <Check size={16} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Developer Support</h3>
                    <p className="text-neutral-600">Get technical support and marketing assistance for your AI models.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-neutral-200">
              <div className="p-4 border-b border-neutral-200">
                <h3 className="font-medium">Developer Dashboard</h3>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-neutral-500 mb-3">Revenue Overview</h4>
                  <div className="h-40 bg-neutral-50 rounded-lg flex items-center justify-center">
                    {/* This would be a chart in a real implementation */}
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600">$12,450</div>
                      <div className="text-sm text-neutral-500">This Month</div>
                      <div className="text-xs text-success-600 flex items-center justify-center mt-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                          <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        +24% from last month
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-neutral-50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary-700">15</div>
                    <div className="text-xs text-neutral-500">Published Models</div>
                  </div>
                  <div className="bg-neutral-50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary-700">2.4M</div>
                    <div className="text-xs text-neutral-500">API Calls</div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-neutral-500 mb-3">Top Performing Models</h4>
                  <div className="bg-neutral-50 rounded-lg p-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-2 border-b border-neutral-200">
                        <span className="font-medium">Text Generation Pro</span>
                        <div className="text-primary-600 font-bold">$5,240</div>
                      </div>
                      <div className="flex justify-between items-center p-2 border-b border-neutral-200">
                        <span className="font-medium">Image Classifier</span>
                        <div className="text-primary-600 font-bold">$3,180</div>
                      </div>
                      <div className="flex justify-between items-center p-2 border-b border-neutral-200">
                        <span className="font-medium">Sentiment Analyzer</span>
                        <div className="text-primary-600 font-bold">$2,450</div>
                      </div>
                      <div className="flex justify-between items-center p-2">
                        <span className="font-medium">Translation Engine</span>
                        <div className="text-primary-600 font-bold">$1,580</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Comparison Table */}
      <div className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">
            How CASTA DESK Compares
          </h2>
          <p className="text-neutral-600 text-lg mb-12 text-center max-w-3xl mx-auto">
            See how CASTA DESK stacks up against other AI platforms in the market.
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl shadow-md">
              <thead>
                <tr className="bg-neutral-50">
                  <th className="py-4 px-6 text-left text-neutral-700 font-bold">Features</th>
                  <th className="py-4 px-6 text-center text-primary-700 font-bold">CASTA DESK</th>
                  <th className="py-4 px-6 text-center text-neutral-700 font-bold">Competitor A</th>
                  <th className="py-4 px-6 text-center text-neutral-700 font-bold">Competitor B</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="py-4 px-6 font-medium">No-Code Customization</td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center">
                      <div className="bg-success-100 p-1 rounded-full">
                        <Check size={20} className="text-success-600" />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center">
                      <div className="bg-success-100 p-1 rounded-full">
                        <Check size={20} className="text-success-600" />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center">
                      <div className="bg-error-100 p-1 rounded-full">
                        <X size={20} className="text-error-600" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Auto-Scaling Infrastructure</td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center">
                      <div className="bg-success-100 p-1 rounded-full">
                        <Check size={20} className="text-success-600" />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center">
                      <div className="bg-error-100 p-1 rounded-full">
                        <X size={20} className="text-error-600" />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center">
                      <div className="bg-success-100 p-1 rounded-full">
                        <Check size={20} className="text-success-600" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Enterprise-Grade Security</td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center">
                      <div className="bg-success-100 p-1 rounded-full">
                        <Check size={20} className="text-success-600" />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center">
                      <div className="bg-success-100 p-1 rounded-full">
                        <Check size={20} className="text-success-600" />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center">
                      <div className="bg-success-100 p-1 rounded-full">
                        <Check size={20} className="text-success-600" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Developer Monetization</td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center">
                      <div className="bg-success-100 p-1 rounded-full">
                        <Check size={20} className="text-success-600" />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center">
                      <div className="bg-error-100 p-1 rounded-full">
                        <X size={20} className="text-error-600" />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center">
                      <div className="bg-error-100 p-1 rounded-full">
                        <X size={20} className="text-error-600" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">One-Click Deployment</td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center">
                      <div className="bg-success-100 p-1 rounded-full">
                        <Check size={20} className="text-success-600" />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center">
                      <div className="bg-success-100 p-1 rounded-full">
                        <Check size={20} className="text-success-600" />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center">
                      <div className="bg-error-100 p-1 rounded-full">
                        <X size={20} className="text-error-600" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Multi-Region Support</td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center">
                      <div className="bg-success-100 p-1 rounded-full">
                        <Check size={20} className="text-success-600" />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center">
                      <div className="bg-error-100 p-1 rounded-full">
                        <X size={20} className="text-error-600" />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center">
                      <div className="bg-success-100 p-1 rounded-full">
                        <Check size={20} className="text-success-600" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Transparent Pricing</td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center">
                      <div className="bg-success-100 p-1 rounded-full">
                        <Check size={20} className="text-success-600" />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center">
                      <div className="bg-error-100 p-1 rounded-full">
                        <X size={20} className="text-error-600" />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center">
                      <div className="bg-success-100 p-1 rounded-full">
                        <Check size={20} className="text-success-600" />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience CASTA DESK?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our platform to power their AI solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/models" className="btn bg-white text-primary-700 hover:bg-primary-50 focus:ring-white">
              Explore Models
            </a>
            <a href="/about" className="btn border-2 border-white text-white hover:bg-primary-800 focus:ring-white">
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;