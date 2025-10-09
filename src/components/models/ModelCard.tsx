import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ExternalLink, Zap, Tag, Clock } from 'lucide-react';
import { Model } from '../../types/model';
import ModelTestModal from './ModelTestModal';

interface ModelCardProps {
  model: Model;
}

const ModelCard: React.FC<ModelCardProps> = ({ model }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="model-card flex flex-col h-full">
        <div className="p-6 flex-grow">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold mb-1">{model.name}</h3>
              <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                {model.type}
              </span>
            </div>
            <div className="flex items-center">
              <Star className="text-yellow-400 fill-yellow-400 w-4 h-4 mr-1" />
              <span className="font-medium">{model.rating.toFixed(1)}</span>
            </div>
          </div>
          
          <p className="text-neutral-600 mb-4 line-clamp-3">{model.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {model.industries.slice(0, 3).map((industry, index) => (
              <span 
                key={index} 
                className="inline-block bg-neutral-100 text-neutral-700 text-xs px-2 py-1 rounded-full"
              >
                {industry}
              </span>
            ))}
            {model.industries.length > 3 && (
              <span className="inline-block bg-neutral-100 text-neutral-700 text-xs px-2 py-1 rounded-full">
                +{model.industries.length - 3} more
              </span>
            )}
          </div>
          
          <div className="flex flex-wrap items-center text-sm text-neutral-500 gap-x-4 gap-y-2 mb-4">
            <div className="flex items-center">
              <Tag size={14} className="mr-1" />
              <span>${model.pricePerCall.toFixed(2)}/1K calls</span>
            </div>
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>Updated {model.lastUpdated}</span>
            </div>
          </div>
        </div>
        
        <div className="p-4 border-t border-neutral-200 bg-neutral-50 flex justify-between items-center">
          <Link 
            to={`/models/${model.id}`}
            className="text-primary-600 font-medium flex items-center hover:text-primary-700"
          >
            View Details <ExternalLink size={14} className="ml-1" />
          </Link>
          <button 
            onClick={openModal}
            className="btn bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md flex items-center"
          >
            Test <Zap size={14} className="ml-1" />
          </button>
        </div>
      </div>
      
      <ModelTestModal
        isOpen={isModalOpen}
        onClose={closeModal}
        model={model}
      />
    </>
  );
};

export default ModelCard;