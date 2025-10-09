import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-600">404</h1>
          <div className="h-2 w-20 bg-primary-600 mx-auto mb-6"></div>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-neutral-600 max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/" className="btn-primary flex items-center justify-center">
              <Home size={18} className="mr-2" />
              Back to Home
            </Link>
            <Link to="/models" className="btn-outline flex items-center justify-center">
              <Search size={18} className="mr-2" />
              Explore Models
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;