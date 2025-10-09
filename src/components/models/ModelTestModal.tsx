import React, { useState } from 'react';
import { X, Upload, Zap, Terminal } from 'lucide-react';
import { Model } from '../../types/model';

interface ModelTestModalProps {
  isOpen: boolean;
  onClose: () => void;
  model: Model;
}

const ModelTestModal: React.FC<ModelTestModalProps> = ({ isOpen, onClose, model }) => {
  const [file, setFile] = useState<File | null>(null);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleTest = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      if (model.type === 'Text Generation') {
        setResult("CASTA DESK is an innovative AI marketplace platform that connects businesses with powerful AI models tailored to their specific needs. The platform offers a seamless experience for discovering, testing, and deploying AI solutions across various industries.");
      } else if (model.type === 'Image Recognition') {
        setResult("Detected objects: Person (92%), Car (87%), Building (78%)");
      } else if (model.type === 'Translation') {
        setResult("Translated text: 'CASTA DESK est une plateforme de marché d'IA innovante qui connecte les entreprises à des modèles d'IA puissants adaptés à leurs besoins spécifiques.'");
      } else {
        setResult("Analysis complete. Model accuracy: 94.2%. Sample output matches expected parameters.");
      }
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-neutral-900 bg-opacity-50 transition-opacity" aria-hidden="true" onClick={onClose}></div>
        
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-neutral-900" id="modal-title">
                Test {model.name}
              </h3>
              <button
                onClick={onClose}
                className="bg-white rounded-md text-neutral-400 hover:text-neutral-500 focus:outline-none"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="border-b border-neutral-200 pb-4 mb-4">
              <h4 className="font-medium mb-2">Model Information</h4>
              <p className="text-neutral-600 text-sm mb-2">{model.description}</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                  {model.type}
                </span>
                {model.industries.slice(0, 3).map((industry, index) => (
                  <span 
                    key={index} 
                    className="inline-block bg-neutral-100 text-neutral-700 text-xs px-2 py-1 rounded-full"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium mb-4">Input Data</h4>
              
              {/* Input based on model type */}
              {model.type === 'Text Generation' || model.type === 'Translation' ? (
                <div>
                  <label htmlFor="text-input" className="block text-sm font-medium text-neutral-700 mb-2">
                    Enter text prompt:
                  </label>
                  <textarea
                    id="text-input"
                    rows={4}
                    className="w-full border border-neutral-300 rounded-md p-3 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your text here..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  ></textarea>
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Upload a file:
                  </label>
                  <div className="border-2 border-dashed border-neutral-300 rounded-md p-6 text-center hover:bg-neutral-50 transition-colors">
                    <div className="flex flex-col items-center">
                      <Upload className="mx-auto h-10 w-10 text-neutral-400 mb-3" />
                      <p className="text-sm text-neutral-600 mb-1">
                        {file ? file.name : 'Drag and drop a file here, or click to browse'}
                      </p>
                      <p className="text-xs text-neutral-500">
                        {model.type === 'Image Recognition' ? 'Supports JPG, PNG, WebP (max 5MB)' : 
                         model.type === 'Data Analysis' ? 'Supports CSV, JSON, XLSX (max 10MB)' : 
                         'Supports TXT, PDF, DOC (max 5MB)'}
                      </p>
                      <input
                        type="file"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {result && (
              <div className="mb-6">
                <h4 className="font-medium mb-2">Results</h4>
                <div className="bg-neutral-800 text-neutral-200 p-4 rounded-md overflow-auto max-h-60">
                  <div className="flex items-start">
                    <Terminal size={18} className="mt-1 mr-2 text-primary-400 flex-shrink-0" />
                    <pre className="whitespace-pre-wrap text-sm font-mono">{result}</pre>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="bg-neutral-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="btn-primary sm:ml-3"
              onClick={handleTest}
              disabled={isLoading || (!input && !file)}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  Run Test <Zap size={16} className="ml-2" />
                </>
              )}
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-neutral-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-neutral-700 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:mt-0 sm:ml-3 sm:w-auto"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelTestModal;