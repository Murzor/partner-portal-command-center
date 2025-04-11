
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const CreatePartnerForm: React.FC = () => {
  const [partnerName, setPartnerName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!partnerName.trim()) {
      toast({
        title: "Erreur",
        description: "Le nom du partenaire est requis",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Succès",
        description: `Le partenaire "${partnerName}" a été créé avec succès`,
      });
      setPartnerName('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader className="bg-dashboard-blue text-white">
        <CardTitle>Créer un nouveau partenaire</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="partnerName" className="text-sm font-medium">
              Nom du partenaire
            </label>
            <Input
              id="partnerName"
              value={partnerName}
              onChange={(e) => setPartnerName(e.target.value)}
              placeholder="Entrez le nom du partenaire"
              disabled={isSubmitting}
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-dashboard-blue hover:bg-dashboard-blue-dark"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Création en cours...' : 'Créer le partenaire'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreatePartnerForm;
