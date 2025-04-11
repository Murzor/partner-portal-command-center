
import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("flex items-center p-4 border-b bg-white", className)}>
      <div className="flex items-center gap-4">
        <img 
          src="/lovable-uploads/6301d715-25d9-45ed-bc94-7f6cae56e9a0.png" 
          alt="Company Logo" 
          className="h-10"
        />
        <h1 className="text-xl font-semibold text-dashboard-blue">Portail Partenaires</h1>
      </div>
      <div className="ml-auto">
        <span className="text-dashboard-gray-dark font-medium">Dashboard Super Admin</span>
      </div>
    </header>
  );
};

export default Header;
