
import React from 'react';
import SyncStatusTable from '../SyncStatusTable';
import { Partner, SyncStatus } from '@/types/partners';

interface SyncTabProps {
  partners: Partner[];
  syncData: Record<string, SyncStatus[]>;
}

const SyncTab: React.FC<SyncTabProps> = ({ partners, syncData }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-dashboard-blue-dark">Statuts de synchronisation API</h2>
      
      <div className="space-y-8">
        {partners.map((partner) => (
          <div key={partner.id} className="mb-6">
            {syncData[partner.id] ? (
              <SyncStatusTable 
                partnerName={partner.name} 
                syncData={syncData[partner.id]} 
              />
            ) : (
              <div className="text-dashboard-gray">Aucune donnée de synchronisation disponible</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SyncTab;
