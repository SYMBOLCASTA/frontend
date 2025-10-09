import React, { useState } from 'react';
import { Search, Filter, Star, Zap } from 'lucide-react';
import ModelCard from '../components/models/ModelCard';
import { Model } from '../types/model';
import { mockModels } from '../data/mockModels';

const ModelsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    modelType: '',
    industry: '',
    priceRange: '',
  });
  
  const filteredModels = mockModels.filter((model) => {
    // Search query filter
    if (
      searchQuery &&
      !model.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !model.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    
    // Model type filter
    if (filters.modelType && model.type !== filters.modelType) {
      return false;
    }
    
    // Industry filter
    if (filters.industry && !model.industries.includes(filters.industry)) {
      return false;
    }
    
    // Price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (model.pricePerCall < min || model.pricePerCall > max) {
        return false;
      }
    }
    
    return true;
  });

  const handleFilterChange = (filterName: string, value: string) => {
    setFilters({
      ...filters,
      [filterName]: value,
    });
  };

  const clearFilters = () => {
    setFilters({
      modelType: '',
      industry: '',
      priceRange: '',
    });
    setSearchQuery('');
  };

  // Get unique model types, industries for filter options
  const modelTypes = Array.from(new Set(mockModels.map((model) => model.type)));
  const industries = Array.from(
    new Set(mockModels.flatMap((model) => model.industries))
  );

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="bg-primary-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Model Library</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
            Discover and test thousands of AI models to power your next project. 
            From text generation to image recognition, find the perfect model for your needs.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-neutral-400" />
            </div>
            <input
              type="text"
              placeholder="Search for models, capabilities, or use cases..."
              className="w-full pl-10 pr-4 py-4 rounded-lg bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-neutral-800"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Panel */}
          <div className="lg:w-1/4 bg-white rounded-xl shadow-md p-6 h-fit">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <Filter size={20} className="mr-2" /> Filters
              </h2>
              <button 
                onClick={clearFilters}
                className="text-sm text-primary-600 hover:text-primary-700"
              >
                Clear All
              </button>
            </div>
            
            {/* Model Type Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Model Type</h3>
              <select
                className="w-full p-2 border border-neutral-300 rounded-md"
                value={filters.modelType}
                onChange={(e) => handleFilterChange('modelType', e.target.value)}
              >
                <option value="">All Types</option>
                {modelTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Industry Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Industry</h3>
              <select
                className="w-full p-2 border border-neutral-300 rounded-md"
                value={filters.industry}
                onChange={(e) => handleFilterChange('industry', e.target.value)}
              >
                <option value="">All Industries</option>
                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Price Range Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Price Range (per 1000 calls)</h3>
              <select
                className="w-full p-2 border border-neutral-300 rounded-md"
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              >
                <option value="">Any Price</option>
                <option value="0-0.50">Free - $0.50</option>
                <option value="0.51-2">$0.51 - $2</option>
                <option value="2.01-5">$2.01 - $5</option>
                <option value="5.01-10">$5.01 - $10</option>
                <option value="10.01-100">$10+</option>
              </select>
            </div>
            
            {/* Additional Filters - Collapsed */}
            <div className="border-t border-neutral-200 pt-4">
              <button className="text-primary-600 font-medium flex items-center hover:text-primary-700">
                More Filters <Zap size={16} className="ml-2" />
              </button>
            </div>
          </div>
          
          {/* Model Cards Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-neutral-600">
                Showing <span className="font-medium">{filteredModels.length}</span> of{' '}
                <span className="font-medium">{mockModels.length}</span> models
              </p>
              <select className="p-2 border border-neutral-300 rounded-md">
                <option>Sort by Relevance</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>
            
            {filteredModels.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredModels.map((model) => (
                  <ModelCard key={model.id} model={model} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-neutral-50 rounded-lg">
                <p className="text-neutral-600 mb-4">No models match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelsPage;