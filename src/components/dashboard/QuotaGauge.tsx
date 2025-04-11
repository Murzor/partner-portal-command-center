
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Partner } from '@/types/partners';

interface QuotaGaugeProps {
  partner: Partner;
}

const QuotaGauge: React.FC<QuotaGaugeProps> = ({ partner }) => {
  const userPercentage = Math.round((partner.used_users / partner.quota_users) * 100);
  const devicePercentage = Math.round((partner.used_devices / partner.quota_devices) * 100);

  const getProgressColor = (percentage: number) => {
    if (percentage < 70) return 'bg-dashboard-success';
    if (percentage < 90) return 'bg-dashboard-warning';
    return 'bg-dashboard-error';
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader className="bg-dashboard-blue-light">
        <CardTitle>{partner.name}</CardTitle>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Utilisateurs</span>
            <span className="font-medium">{partner.used_users} / {partner.quota_users}</span>
          </div>
          <Progress value={userPercentage} className={getProgressColor(userPercentage)} />
          <div className="text-right text-sm text-dashboard-gray">{userPercentage}%</div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Appareils</span>
            <span className="font-medium">{partner.used_devices} / {partner.quota_devices}</span>
          </div>
          <Progress value={devicePercentage} className={getProgressColor(devicePercentage)} />
          <div className="text-right text-sm text-dashboard-gray">{devicePercentage}%</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuotaGauge;
