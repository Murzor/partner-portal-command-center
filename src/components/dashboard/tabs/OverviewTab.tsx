
import React from 'react';
import PartnerCard from '../PartnerCard';
import { Partner } from '@/types/partners';

interface OverviewTabProps {
  partners: Partner[];
}

const OverviewTab: React.FC<OverviewTabProps> = ({ partners }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-dashboard-blue-dark">Vue d'ensemble des partenaires</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </div>
    </div>
  );
};

export default OverviewTab;
