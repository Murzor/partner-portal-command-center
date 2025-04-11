
import React from 'react';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ActionButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon: Icon, label, onClick, className }) => {
  return (
    <Button 
      variant="outline" 
      className={cn(
        "flex flex-col items-center justify-center h-32 w-full gap-3 p-6 hover:bg-dashboard-blue-light transition-colors",
        className
      )}
      onClick={onClick}
    >
      <Icon className="h-8 w-8 text-dashboard-blue" />
      <span className="text-sm text-center">{label}</span>
    </Button>
  );
};

export default ActionButton;
