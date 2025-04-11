
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Partner } from '@/types/partners';

interface PartnerCardProps {
  partner: Partner;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
  return (
    <Card className="animate-fade-in hover:shadow-md transition-shadow duration-300">
      <CardHeader className="bg-dashboard-blue text-white">
        <CardTitle>{partner.name}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-dashboard-gray">Base de données:</span>
            <span className="font-medium">{partner.db_name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-dashboard-gray">Utilisateurs:</span>
            <span className="font-medium">{partner.used_users} / {partner.quota_users}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-dashboard-gray">Appareils:</span>
            <span className="font-medium">{partner.used_devices} / {partner.quota_devices}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PartnerCard;
