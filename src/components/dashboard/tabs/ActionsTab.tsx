
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ActionButton from '../ActionButton';
import CreatePartnerForm from '../CreatePartnerForm';
import { useToast } from '@/hooks/use-toast';
import { User, Database, Shield, RefreshCw, BarChart3 } from 'lucide-react';

const ActionsTab: React.FC = () => {
  const { toast } = useToast();

  const handleActionClick = (action: string) => {
    toast({
      title: "Action en cours de développement",
      description: `La fonctionnalité "${action}" sera disponible prochainement.`,
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-dashboard-blue-dark">Actions d'administration</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <CreatePartnerForm />
        </div>
        
        <div>
          <Card className="animate-fade-in">
            <CardHeader className="bg-dashboard-blue text-white">
              <CardTitle>Actions rapides</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <ActionButton 
                  icon={User} 
                  label="Gérer les utilisateurs" 
                  onClick={() => handleActionClick("Gérer les utilisateurs")} 
                />
                <ActionButton 
                  icon={Database} 
                  label="Voir toutes les bases" 
                  onClick={() => handleActionClick("Voir toutes les bases")} 
                />
                <ActionButton 
                  icon={Shield} 
                  label="Gérer les droits" 
                  onClick={() => handleActionClick("Gérer les droits")} 
                />
                <ActionButton 
                  icon={RefreshCw} 
                  label="Forcer une synchronisation" 
                  onClick={() => handleActionClick("Forcer une synchronisation")} 
                />
                <ActionButton 
                  icon={BarChart3} 
                  label="Voir les statistiques globales" 
                  onClick={() => handleActionClick("Voir les statistiques globales")} 
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ActionsTab;
