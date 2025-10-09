import React, { useState } from 'react';
import { 
  Layout,
  PieChart, 
  BarChart as BarChartIcon, 
  Plus, 
  Download, 
  Settings, 
  Bell, 
  User,
  Search,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  DollarSign,
  Users as UsersIcon,
  Clock,
  Zap
} from 'lucide-react';
import { mockModels } from '../data/mockModels';

const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <div className="pt-24 pb-16 bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-24">
              <div className="p-6 border-b border-neutral-200">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                    <User className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold">Alex Johnson</h3>
                    <p className="text-sm text-neutral-500">Developer Plan</p>
                  </div>
                </div>
              </div>
              
              <nav className="p-4">
                <ul className="space-y-1">
                  <li>
                    <button
                      className={`w-full flex items-center py-2 px-3 rounded-lg transition-colors ${
                        activeTab === 'overview'
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-neutral-700 hover:bg-neutral-100'
                      }`}
                      onClick={() => setActiveTab('overview')}
                    >
                      <Layout size={18} className="mr-3" />
                      Overview
                    </button>
                  </li>
                  <li>
                    <button
                      className={`w-full flex items-center py-2 px-3 rounded-lg transition-colors ${
                        activeTab === 'models'
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-neutral-700 hover:bg-neutral-100'
                      }`}
                      onClick={() => setActiveTab('models')}
                    >
                      <Zap size={18} className="mr-3" />
                      My Models
                    </button>
                  </li>
                  <li>
                    <button
                      className={`w-full flex items-center py-2 px-3 rounded-lg transition-colors ${
                        activeTab === 'analytics'
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-neutral-700 hover:bg-neutral-100'
                      }`}
                      onClick={() => setActiveTab('analytics')}
                    >
                      <BarChartIcon size={18} className="mr-3" />
                      Analytics
                    </button>
                  </li>
                  <li>
                    <button
                      className={`w-full flex items-center py-2 px-3 rounded-lg transition-colors ${
                        activeTab === 'monetization'
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-neutral-700 hover:bg-neutral-100'
                      }`}
                      onClick={() => setActiveTab('monetization')}
                    >
                      <DollarSign size={18} className="mr-3" />
                      Monetization
                    </button>
                  </li>
                  <li>
                    <button
                      className={`w-full flex items-center py-2 px-3 rounded-lg transition-colors ${
                        activeTab === 'settings'
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-neutral-700 hover:bg-neutral-100'
                      }`}
                      onClick={() => setActiveTab('settings')}
                    >
                      <Settings size={18} className="mr-3" />
                      Settings
                    </button>
                  </li>
                </ul>
              </nav>
              
              <div className="p-4 mt-2">
                <button className="w-full py-2 px-4 bg-primary-600 text-white rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                  <Plus size={18} className="mr-2" />
                  New Project
                </button>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-grow">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
                    <p className="text-neutral-500">Welcome back, Alex! Here's an overview of your activity.</p>
                  </div>
                  <div className="flex space-x-3 mt-4 md:mt-0">
                    <button className="p-2 bg-white rounded-lg border border-neutral-200 text-neutral-600 hover:bg-neutral-100 transition-colors">
                      <Bell size={20} />
                    </button>
                    <button className="p-2 bg-white rounded-lg border border-neutral-200 text-neutral-600 hover:bg-neutral-100 transition-colors">
                      <Download size={20} />
                    </button>
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center">
                      <Plus size={18} className="mr-2" />
                      New Model
                    </button>
                  </div>
                </div>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-neutral-500 text-sm">API Calls</p>
                        <h3 className="text-2xl font-bold">54,321</h3>
                      </div>
                      <div className="bg-primary-100 p-3 rounded-lg">
                        <Activity className="text-primary-600" size={20} />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="flex items-center text-success-600 text-sm mr-2">
                        <ArrowUpRight size={14} className="mr-1" />
                        12%
                      </span>
                      <span className="text-neutral-500 text-sm">vs last month</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-neutral-500 text-sm">Active Models</p>
                        <h3 className="text-2xl font-bold">12</h3>
                      </div>
                      <div className="bg-secondary-100 p-3 rounded-lg">
                        <Zap className="text-secondary-600" size={20} />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="flex items-center text-success-600 text-sm mr-2">
                        <ArrowUpRight size={14} className="mr-1" />
                        3
                      </span>
                      <span className="text-neutral-500 text-sm">new this month</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-neutral-500 text-sm">Team Members</p>
                        <h3 className="text-2xl font-bold">8</h3>
                      </div>
                      <div className="bg-accent-100 p-3 rounded-lg">
                        <UsersIcon className="text-accent-600" size={20} />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="flex items-center text-success-600 text-sm mr-2">
                        <ArrowUpRight size={14} className="mr-1" />
                        2
                      </span>
                      <span className="text-neutral-500 text-sm">new this month</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-neutral-500 text-sm">Avg. Response Time</p>
                        <h3 className="text-2xl font-bold">68ms</h3>
                      </div>
                      <div className="bg-neutral-100 p-3 rounded-lg">
                        <Clock className="text-neutral-600" size={20} />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="flex items-center text-error-600 text-sm mr-2">
                        <ArrowDownRight size={14} className="mr-1" />
                        5%
                      </span>
                      <span className="text-neutral-500 text-sm">slower than last month</span>
                    </div>
                  </div>
                </div>
                
                {/* Recent Activity & Performance */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                  <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-bold text-lg">API Usage</h3>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 text-sm bg-primary-50 text-primary-600 rounded-md">Day</button>
                        <button className="px-3 py-1 text-sm text-neutral-600 hover:bg-neutral-100 rounded-md">Week</button>
                        <button className="px-3 py-1 text-sm text-neutral-600 hover:bg-neutral-100 rounded-md">Month</button>
                      </div>
                    </div>
                    
                    <div className="h-60 bg-neutral-50 rounded-lg flex items-center justify-center">
                      {/* This would be a chart in a real implementation */}
                      <div className="text-center text-neutral-400">
                        <BarChartIcon size={48} className="mx-auto mb-2" />
                        <p>API Usage Chart</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="font-bold text-lg mb-6">Model Distribution</h3>
                    
                    <div className="h-40 bg-neutral-50 rounded-lg flex items-center justify-center mb-6">
                      {/* This would be a chart in a real implementation */}
                      <div className="text-center text-neutral-400">
                        <PieChart size={48} className="mx-auto mb-2" />
                        <p>Model Types Chart</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-primary-500 rounded-full mr-2"></div>
                          <span className="text-sm">Text Generation</span>
                        </div>
                        <span className="text-sm font-medium">42%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-secondary-500 rounded-full mr-2"></div>
                          <span className="text-sm">Image Recognition</span>
                        </div>
                        <span className="text-sm font-medium">28%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-accent-500 rounded-full mr-2"></div>
                          <span className="text-sm">Translation</span>
                        </div>
                        <span className="text-sm font-medium">18%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-neutral-500 rounded-full mr-2"></div>
                          <span className="text-sm">Other</span>
                        </div>
                        <span className="text-sm font-medium">12%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Recent Activity */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-lg">Recent Activity</h3>
                    <button className="text-sm text-primary-600 hover:text-primary-700">View All</button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-full divide-y divide-neutral-200">
                      <thead>
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Model</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Type</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Calls</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Last Used</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-neutral-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium">Text Generator Pro</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                              Text Generation
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-100 text-success-800">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">12,450</td>
                          <td className="px-6 py-4 whitespace-nowrap text-neutral-500">5 minutes ago</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium">Image Classifier</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800">
                              Image Recognition
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-100 text-success-800">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">8,372</td>
                          <td className="px-6 py-4 whitespace-nowrap text-neutral-500">2 hours ago</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium">Sentiment Analyzer</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-100 text-accent-800">
                              Data Analysis
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800">
                              Maintenance
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">4,219</td>
                          <td className="px-6 py-4 whitespace-nowrap text-neutral-500">1 day ago</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
            
            {/* Models Tab */}
            {activeTab === 'models' && (
              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h1 className="text-2xl font-bold mb-1">My Models</h1>
                    <p className="text-neutral-500">Manage your deployed and in-development AI models.</p>
                  </div>
                  <div className="flex space-x-3 mt-4 md:mt-0">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search models..."
                        className="pl-10 pr-4 py-2 bg-white rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
                    </div>
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center">
                      <Plus size={18} className="mr-2" />
                      New Model
                    </button>
                  </div>
                </div>
                
                {/* Models Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {mockModels.slice(0, 6).map((model) => (
                    <div key={model.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                      <div className={`h-2 ${
                        model.type === 'Text Generation' ? 'bg-primary-600' :
                        model.type === 'Image Recognition' ? 'bg-secondary-600' :
                        model.type === 'Translation' ? 'bg-accent-600' :
                        'bg-neutral-600'
                      }`}></div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-bold">{model.name}</h3>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-100 text-success-800">
                            Active
                          </span>
                        </div>
                        <p className="text-neutral-600 text-sm mb-4 line-clamp-2">{model.description}</p>
                        <div className="flex justify-between items-center text-sm text-neutral-500 mb-4">
                          <span>Calls: 24,350</span>
                          <span>Avg. Time: 78ms</span>
                        </div>
                        <div className="flex space-x-2">
                          <button className="flex-1 px-3 py-2 bg-primary-50 text-primary-600 rounded hover:bg-primary-100 transition-colors text-sm">
                            Edit
                          </button>
                          <button className="flex-1 px-3 py-2 bg-neutral-50 text-neutral-600 rounded hover:bg-neutral-100 transition-colors text-sm">
                            Analytics
                          </button>
                          <button className="w-10 h-10 flex items-center justify-center bg-neutral-50 text-neutral-600 rounded hover:bg-neutral-100 transition-colors">
                            <Settings size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Pagination */}
                <div className="flex justify-center">
                  <nav className="flex items-center space-x-2">
                    <button className="p-2 rounded-md border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button className="px-3 py-2 rounded-md bg-primary-600 text-white">1</button>
                    <button className="px-3 py-2 rounded-md border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50">2</button>
                    <button className="px-3 py-2 rounded-md border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50">3</button>
                    <span className="px-3 py-2 text-neutral-500">...</span>
                    <button className="px-3 py-2 rounded-md border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50">8</button>
                    <button className="p-2 rounded-md border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </nav>
                </div>
              </div>
            )}
            
            {/* Monetization Tab */}
            {activeTab === 'monetization' && (
              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h1 className="text-2xl font-bold mb-1">Monetization</h1>
                    <p className="text-neutral-500">Track your earnings from published models on the marketplace.</p>
                  </div>
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center mt-4 md:mt-0">
                    <Plus size={18} className="mr-2" />
                    Publish New Model
                  </button>
                </div>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-neutral-500 text-sm">Monthly Revenue</p>
                        <h3 className="text-2xl font-bold">$8,245</h3>
                      </div>
                      <div className="bg-primary-100 p-3 rounded-lg">
                        <DollarSign className="text-primary-600" size={20} />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="flex items-center text-success-600 text-sm mr-2">
                        <ArrowUpRight size={14} className="mr-1" />
                        18%
                      </span>
                      <span className="text-neutral-500 text-sm">vs last month</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-neutral-500 text-sm">Published Models</p>
                        <h3 className="text-2xl font-bold">5</h3>
                      </div>
                      <div className="bg-secondary-100 p-3 rounded-lg">
                        <Zap className="text-secondary-600" size={20} />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="flex items-center text-success-600 text-sm mr-2">
                        <ArrowUpRight size={14} className="mr-1" />
                        1
                      </span>
                      <span className="text-neutral-500 text-sm">new this month</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-neutral-500 text-sm">Total Subscribers</p>
                        <h3 className="text-2xl font-bold">342</h3>
                      </div>
                      <div className="bg-accent-100 p-3 rounded-lg">
                        <UsersIcon className="text-accent-600" size={20} />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="flex items-center text-success-600 text-sm mr-2">
                        <ArrowUpRight size={14} className="mr-1" />
                        24
                      </span>
                      <span className="text-neutral-500 text-sm">new this month</span>
                    </div>
                  </div>
                </div>
                
                {/* Revenue Chart */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-lg">Revenue History</h3>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 text-sm bg-primary-50 text-primary-600 rounded-md">30 Days</button>
                      <button className="px-3 py-1 text-sm text-neutral-600 hover:bg-neutral-100 rounded-md">90 Days</button>
                      <button className="px-3 py-1 text-sm text-neutral-600 hover:bg-neutral-100 rounded-md">1 Year</button>
                    </div>
                  </div>
                  
                  <div className="h-60 bg-neutral-50 rounded-lg flex items-center justify-center">
                    {/* This would be a chart in a real implementation */}
                    <div className="text-center text-neutral-400">
                      <BarChartIcon size={48} className="mx-auto mb-2" />
                      <p>Revenue Chart</p>
                    </div>
                  </div>
                </div>
                
                {/* Top Performing Models */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-lg">Top Performing Models</h3>
                    <button className="text-sm text-primary-600 hover:text-primary-700">View All</button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-full divide-y divide-neutral-200">
                      <thead>
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Model</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Type</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Subscribers</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Revenue</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Growth</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-neutral-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium">Advanced Text Generator</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                              Text Generation
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">156</td>
                          <td className="px-6 py-4 whitespace-nowrap font-medium">$3,840</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-success-600 flex items-center">
                              <ArrowUpRight size={14} className="mr-1" />
                              24%
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium">Enterprise Image Classifier</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800">
                              Image Recognition
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">98</td>
                          <td className="px-6 py-4 whitespace-nowrap font-medium">$2,450</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-success-600 flex items-center">
                              <ArrowUpRight size={14} className="mr-1" />
                              18%
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium">Multi-Language Translator</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-100 text-accent-800">
                              Translation
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">64</td>
                          <td className="px-6 py-4 whitespace-nowrap font-medium">$1,280</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-error-600 flex items-center">
                              <ArrowDownRight size={14} className="mr-1" />
                              5%
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
            
            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div>
                <div className="mb-6">
                  <h1 className="text-2xl font-bold mb-1">Account Settings</h1>
                  <p className="text-neutral-500">Manage your account preferences and settings.</p>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
                  <div className="p-6 border-b border-neutral-200">
                    <h2 className="text-xl font-bold">Profile Information</h2>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center mb-8">
                      <div className="md:w-32 md:flex-shrink-0 mb-4 md:mb-0">
                        <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center">
                          <User className="text-primary-600" size={36} />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-bold text-lg mb-1">Alex Johnson</h3>
                        <p className="text-neutral-500 mb-3">alex.johnson@example.com</p>
                        <div className="flex space-x-3">
                          <button className="px-3 py-1 bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors text-sm">
                            Change Avatar
                          </button>
                          <button className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded hover:bg-neutral-200 transition-colors text-sm">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                          defaultValue="Alex Johnson"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                          defaultValue="alex.johnson@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                          defaultValue="TechInnovate"
                        />
                      </div>
                      <div>
                        <label htmlFor="role" className="block text-sm font-medium text-neutral-700 mb-1">
                          Job Title
                        </label>
                        <input
                          type="text"
                          id="role"
                          className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                          defaultValue="Lead Developer"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200 flex justify-end">
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                      Save Changes
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-neutral-200">
                      <h2 className="text-xl font-bold">Password</h2>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="current-password" className="block text-sm font-medium text-neutral-700 mb-1">
                            Current Password
                          </label>
                          <input
                            type="password"
                            id="current-password"
                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                            placeholder="••••••••"
                          />
                        </div>
                        <div>
                          <label htmlFor="new-password" className="block text-sm font-medium text-neutral-700 mb-1">
                            New Password
                          </label>
                          <input
                            type="password"
                            id="new-password"
                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                            placeholder="••••••••"
                          />
                        </div>
                        <div>
                          <label htmlFor="confirm-password" className="block text-sm font-medium text-neutral-700 mb-1">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            id="confirm-password"
                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                            placeholder="••••••••"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200 flex justify-end">
                      <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                        Update Password
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-neutral-200">
                      <h2 className="text-xl font-bold">API Keys</h2>
                    </div>
                    <div className="p-6">
                      <p className="text-neutral-600 mb-4">
                        Your API keys grant access to your account. Keep them secure and never share them publicly.
                      </p>
                      <div className="space-y-4">
                        <div className="p-4 bg-neutral-50 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-medium">Production Key</h3>
                            <span className="px-2 py-1 bg-success-100 text-success-800 text-xs rounded-full">Active</span>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="text"
                              className="w-full px-4 py-2 bg-neutral-100 border border-neutral-200 rounded-lg mr-2"
                              value="sk_prod_•••••••••••••••••••••••••••••"
                              readOnly
                            />
                            <button className="p-2 bg-neutral-100 text-neutral-700 rounded hover:bg-neutral-200 transition-colors">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z" fill="currentColor"/>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="p-4 bg-neutral-50 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-medium">Test Key</h3>
                            <span className="px-2 py-1 bg-success-100 text-success-800 text-xs rounded-full">Active</span>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="text"
                              className="w-full px-4 py-2 bg-neutral-100 border border-neutral-200 rounded-lg mr-2"
                              value="sk_test_•••••••••••••••••••••••••••••"
                              readOnly
                            />
                            <button className="p-2 bg-neutral-100 text-neutral-700 rounded hover:bg-neutral-200 transition-colors">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z" fill="currentColor"/>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200 flex justify-end">
                      <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                        Generate New Key
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;