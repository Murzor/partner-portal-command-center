
import React from 'react';
import QuotaChart from '../QuotaChart';
import QuotaGauge from '../QuotaGauge';
import { Partner } from '@/types/partners';

interface QuotasTabProps {
  partners: Partner[];
}

const QuotasTab: React.FC<QuotasTabProps> = ({ partners }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-dashboard-blue-dark">Monitoring des quotas</h2>
      
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <QuotaChart partners={partners} type="users" />
          <QuotaChart partners={partners} type="devices" />
        </div>
        
        <h3 className="text-xl font-bold mt-8 mb-4 text-dashboard-blue-dark">Détails par partenaire</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <QuotaGauge key={partner.id} partner={partner} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuotasTab;
