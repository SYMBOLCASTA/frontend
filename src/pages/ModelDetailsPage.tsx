import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Star, 
  Download, 
  Code, 
  Share2, 
  Activity, 
  Shield, 
  Tag, 
  Clock, 
  Globe, 
  BookOpen,
  Zap,
  Check
} from 'lucide-react';
import { mockModels } from '../data/mockModels';
import ModelTestModal from '../components/models/ModelTestModal';

const ModelDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Find the model by id
  const model = mockModels.find((m) => m.id === id);
  
  if (!model) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Model Not Found</h1>
        <p className="text-neutral-600 mb-8">The model you're looking for doesn't exist or has been removed.</p>
        <Link to="/models" className="btn-primary">
          Back to Model Library
        </Link>
      </div>
    );
  }

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="bg-primary-900 text-white py-12">
        <div className="container mx-auto px-4">
          <Link to="/models" className="inline-flex items-center text-primary-100 hover:text-white mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Back to Model Library
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <div className="flex items-center mb-2">
                <span className="inline-block bg-primary-700 text-primary-100 text-xs px-2 py-1 rounded-full mr-3">
                  {model.type}
                </span>
                <div className="flex items-center">
                  <Star className="text-yellow-400 fill-yellow-400 w-4 h-4 mr-1" />
                  <span className="font-medium text-primary-100">{model.rating.toFixed(1)}</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-4">{model.name}</h1>
              <p className="text-primary-100 max-w-3xl mb-4">{model.description}</p>
              <div className="flex flex-wrap items-center text-sm text-primary-200 gap-x-4 gap-y-2">
                <div className="flex items-center">
                  <Tag size={14} className="mr-1" />
                  <span>${model.pricePerCall.toFixed(2)}/1K calls</span>
                </div>
                <div className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  <span>Updated {model.lastUpdated}</span>
                </div>
                <div className="flex items-center">
                  <Globe size={14} className="mr-1" />
                  <span>By {model.provider}</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3 mt-6 md:mt-0">
              <button
                onClick={openModal}
                className="btn-primary"
              >
                Test Model <Zap size={16} className="ml-2" />
              </button>
              <button className="btn btn-outline bg-transparent border-white text-white hover:bg-primary-800">
                Deploy
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="border-b border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            <button
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'overview'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-neutral-600 hover:text-neutral-900'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'documentation'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-neutral-600 hover:text-neutral-900'
              }`}
              onClick={() => setActiveTab('documentation')}
            >
              Documentation
            </button>
            <button
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'performance'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-neutral-600 hover:text-neutral-900'
              }`}
              onClick={() => setActiveTab('performance')}
            >
              Performance
            </button>
            <button
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'versions'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-neutral-600 hover:text-neutral-900'
              }`}
              onClick={() => setActiveTab('versions')}
            >
              Versions
            </button>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">About {model.name}</h2>
                <p className="text-neutral-700 mb-6">
                  {model.description} This state-of-the-art model has been trained on diverse datasets to ensure 
                  high performance across various scenarios and use cases. With its advanced architecture, it delivers 
                  exceptional results while maintaining efficiency.
                </p>
                
                <h3 className="text-xl font-bold mb-3">Key Features</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check size={20} className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      <strong>High accuracy:</strong> Achieves 96% accuracy on benchmark tests
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      <strong>Fast inference:</strong> Optimized for speed with 50ms average response time
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      <strong>Custom fine-tuning:</strong> Easily adaptable to your specific data
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      <strong>Multilingual support:</strong> Works across 20+ languages
                    </span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-bold mb-3">Use Cases</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check size={20} className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      Customer service automation and chatbots
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      Content generation and summarization
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      Data analysis and insights extraction
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      Personalized recommendation systems
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Integration</h2>
                <p className="text-neutral-700 mb-6">
                  Integrate {model.name} into your application with just a few lines of code. 
                  Our comprehensive SDKs make it simple to get started.
                </p>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold">API Example</h3>
                    <button className="text-primary-600 text-sm hover:text-primary-700">
                      Copy Code
                    </button>
                  </div>
                  <div className="bg-neutral-800 text-neutral-200 p-4 rounded-md overflow-auto">
                    <pre className="text-sm font-mono">
{`const response = await fetch('https://api.castadesk.ai/v1/models/${model.id}', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    input: "Your input text or data here",
    parameters: {
      temperature: 0.7,
      max_tokens: 100
    }
  })
});

const result = await response.json();
console.log(result.output);`}
                    </pre>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <button className="btn-outline flex items-center">
                    <Download size={16} className="mr-2" />
                    Python SDK
                  </button>
                  <button className="btn-outline flex items-center">
                    <Download size={16} className="mr-2" />
                    JavaScript SDK
                  </button>
                  <button className="btn-outline flex items-center">
                    <Code size={16} className="mr-2" />
                    View API Docs
                  </button>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Model Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-neutral-500 mb-1">Provider</h4>
                    <p className="font-medium">{model.provider}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-500 mb-1">License</h4>
                    <p className="font-medium">Commercial</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-500 mb-1">Version</h4>
                    <p className="font-medium">2.1.0 (Latest)</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-500 mb-1">Released</h4>
                    <p className="font-medium">May 15, 2023</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-500 mb-1">Last Updated</h4>
                    <p className="font-medium">{model.lastUpdated}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Pricing</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-neutral-500 mb-1">Per 1,000 API Calls</h4>
                    <p className="text-2xl font-bold text-primary-600">${model.pricePerCall.toFixed(2)}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-500 mb-1">Monthly Plan</h4>
                    <p className="font-medium">Starting at $99/month for 100K calls</p>
                  </div>
                  <div className="pt-4">
                    <Link to="/pricing" className="btn-primary w-full text-center">
                      View All Pricing Options
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Industries</h3>
                <div className="flex flex-wrap gap-2">
                  {model.industries.map((industry, index) => (
                    <span 
                      key={index} 
                      className="inline-block bg-neutral-100 text-neutral-700 text-sm px-3 py-1 rounded-full"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Share</h3>
                <div className="flex gap-3">
                  <button className="btn-outline flex items-center justify-center p-2 w-12 h-12">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="btn-outline flex items-center justify-center p-2 w-12 h-12">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23 3.00029C22.0424 3.67577 20.9821 4.1924 19.86 4.53029C19.2577 3.8378 18.4573 3.34698 17.567 3.12422C16.6767 2.90145 15.7395 2.95749 14.8821 3.28474C14.0247 3.612 13.2884 4.19469 12.773 4.95401C12.2575 5.71332 11.9877 6.61263 12 7.53029V8.53029C10.2426 8.57586 8.50127 8.1861 6.93101 7.39574C5.36074 6.60537 4.01032 5.43893 3 4.00029C3 4.00029 -1 13.0003 8 17.0003C5.94053 18.3983 3.48716 19.0992 1 19.0003C10 24.0003 21 19.0003 21 7.50029C20.9991 7.22174 20.9723 6.94388 20.92 6.67029C21.9406 5.66378 22.6608 4.39322 23 3.00029Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="btn-outline flex items-center justify-center p-2 w-12 h-12">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 9H2V21H6V9Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="btn-outline flex items-center justify-center p-2 flex-grow">
                    <Share2 size={18} className="mr-2 text-primary-600" />
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'documentation' && (
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center mb-6">
              <BookOpen size={24} className="text-primary-600 mr-3" />
              <h2 className="text-2xl font-bold">Documentation</h2>
            </div>
            <p className="text-neutral-700 mb-6">
              Comprehensive documentation for {model.name} including setup guides, API reference, and examples.
            </p>
            <div className="prose max-w-none">
              <h3>Getting Started</h3>
              <p>
                Before you begin using {model.name}, make sure you have an API key. You can obtain one by signing up for a CASTA DESK account and subscribing to this model.
              </p>
              
              <h3>Installation</h3>
              <pre className="bg-neutral-800 text-neutral-200 p-4 rounded-md overflow-auto">
                <code className="text-sm font-mono">
                  npm install @castadesk/client
                </code>
              </pre>
              
              <h3>Basic Usage</h3>
              <p>
                Here's a simple example of how to use {model.name} in your application:
              </p>
              <pre className="bg-neutral-800 text-neutral-200 p-4 rounded-md overflow-auto">
                <code className="text-sm font-mono">
{`import { CastaDeskClient } from '@castadesk/client';

// Initialize the client with your API key
const client = new CastaDeskClient('YOUR_API_KEY');

// Use the model
async function generateText() {
  const response = await client.models.generate({
    model: '${model.id}',
    prompt: 'Write a short paragraph about artificial intelligence.',
    maxTokens: 100,
    temperature: 0.7
  });
  
  console.log(response.text);
}

generateText();`}
                </code>
              </pre>
              
              <h3>Parameters</h3>
              <p>
                {model.name} accepts the following parameters:
              </p>
              <table className="min-w-full divide-y divide-neutral-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Parameter</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">prompt</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">string</td>
                    <td className="px-6 py-4 text-sm text-neutral-500">The input text to process</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">maxTokens</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">integer</td>
                    <td className="px-6 py-4 text-sm text-neutral-500">Maximum number of tokens to generate</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">temperature</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">float</td>
                    <td className="px-6 py-4 text-sm text-neutral-500">Controls randomness (0-1)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {activeTab === 'performance' && (
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center mb-6">
              <Activity size={24} className="text-primary-600 mr-3" />
              <h2 className="text-2xl font-bold">Performance Metrics</h2>
            </div>
            <p className="text-neutral-700 mb-8">
              Detailed performance metrics for {model.name} across various benchmarks and test scenarios.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Benchmark Results</h3>
                <table className="min-w-full divide-y divide-neutral-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Benchmark</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Score</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Percentile</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">GLUE</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">87.2</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">93rd</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">SQuAD v2</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">91.4</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">95th</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">CoNLL-2003</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">93.8</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">97th</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">WMT-14</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">84.7</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">91st</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Latency & Throughput</h3>
                <table className="min-w-full divide-y divide-neutral-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Metric</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Value</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">Avg. Response Time</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">52ms</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">p95 Response Time</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">78ms</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">p99 Response Time</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">112ms</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">Max Throughput</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">500 req/s</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Model Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <h4 className="font-medium text-neutral-700 mb-2">Parameters</h4>
                  <p className="text-2xl font-bold">1.2B</p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <h4 className="font-medium text-neutral-700 mb-2">Model Size</h4>
                  <p className="text-2xl font-bold">4.8 GB</p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <h4 className="font-medium text-neutral-700 mb-2">Training Data</h4>
                  <p className="text-2xl font-bold">180B tokens</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'versions' && (
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center mb-6">
              <Clock size={24} className="text-primary-600 mr-3" />
              <h2 className="text-2xl font-bold">Version History</h2>
            </div>
            <p className="text-neutral-700 mb-8">
              Track the evolution of {model.name} through its version history and release notes.
            </p>
            
            <div className="relative border-l-2 border-primary-200 pl-6 ml-6">
              {/* Current Version */}
              <div className="mb-10 relative">
                <div className="absolute -left-8 top-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2.1</span>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-bold mr-3">Version 2.1.0</h3>
                    <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">Current</span>
                  </div>
                  <p className="text-sm text-neutral-500 mb-3">Released on August 15, 2023</p>
                  <div className="bg-neutral-50 p-4 rounded-lg mb-4">
                    <h4 className="font-medium mb-2">Improvements</h4>
                    <ul className="space-y-2 text-neutral-700">
                      <li className="flex items-start">
                        <Check size={16} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                        <span>Improved accuracy on edge cases by 7%</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                        <span>Reduced latency by 15% for complex queries</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                        <span>Added support for 5 new languages</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Bug Fixes</h4>
                    <ul className="space-y-2 text-neutral-700">
                      <li className="flex items-start">
                        <Check size={16} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                        <span>Fixed issue with UTF-8 character encoding</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                        <span>Resolved memory leak in batch processing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Previous Version */}
              <div className="mb-10 relative">
                <div className="absolute -left-8 top-0 w-10 h-10 bg-neutral-300 rounded-full flex items-center justify-center">
                  <span className="text-neutral-700 font-bold">2.0</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Version 2.0.0</h3>
                  <p className="text-sm text-neutral-500 mb-3">Released on May 15, 2023</p>
                  <div className="bg-neutral-50 p-4 rounded-lg mb-4">
                    <h4 className="font-medium mb-2">Major Changes</h4>
                    <ul className="space-y-2 text-neutral-700">
                      <li className="flex items-start">
                        <Check size={16} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                        <span>Complete model architecture redesign</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                        <span>Training on expanded dataset (180B tokens)</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                        <span>30% accuracy improvement across all benchmarks</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                        <span>New API endpoints and parameter options</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Older Version */}
              <div className="relative">
                <div className="absolute -left-8 top-0 w-10 h-10 bg-neutral-300 rounded-full flex items-center justify-center">
                  <span className="text-neutral-700 font-bold">1.0</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Version 1.0.0</h3>
                  <p className="text-sm text-neutral-500 mb-3">Released on November 10, 2022</p>
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Initial Release</h4>
                    <ul className="space-y-2 text-neutral-700">
                      <li className="flex items-start">
                        <Check size={16} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                        <span>First public release of {model.name}</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                        <span>Support for basic use cases</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                        <span>Core functionality and API</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Modal */}
      <ModelTestModal
        isOpen={isModalOpen}
        onClose={closeModal}
        model={model}
      />
    </div>
  );
};

export default ModelDetailsPage;