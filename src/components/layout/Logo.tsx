import React from 'react';
import { Brain } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <Brain className="text-primary-600" size={32} />
        <div className="absolute -top-1 -right-1 bg-accent-500 w-3 h-3 rounded-full" />
      </div>
    </div>
  );
};

export default Logo;