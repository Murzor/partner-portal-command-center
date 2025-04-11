
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from './Header';
import OverviewTab from './tabs/OverviewTab';
import QuotasTab from './tabs/QuotasTab';
import SyncTab from './tabs/SyncTab';
import ActionsTab from './tabs/ActionsTab';
import { mockPartners, mockSyncStatus } from '@/data/mockData';
import { TabId } from '@/types/partners';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  return (
    <div className="min-h-screen flex flex-col bg-dashboard-gray-light">
      <Header />
      
      <main className="flex-1 container mx-auto py-6">
        <Tabs 
          defaultValue="overview" 
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as TabId)}
          className="w-full"
        >
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="overview" className="text-base py-3">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="quotas" className="text-base py-3">Quotas</TabsTrigger>
            <TabsTrigger value="sync" className="text-base py-3">Synchronisation</TabsTrigger>
            <TabsTrigger value="actions" className="text-base py-3">Actions</TabsTrigger>
          </TabsList>
          
          <div className="bg-white rounded-md shadow">
            <TabsContent value="overview">
              <OverviewTab partners={mockPartners} />
            </TabsContent>
            
            <TabsContent value="quotas">
              <QuotasTab partners={mockPartners} />
            </TabsContent>
            
            <TabsContent value="sync">
              <SyncTab partners={mockPartners} syncData={mockSyncStatus} />
            </TabsContent>
            
            <TabsContent value="actions">
              <ActionsTab />
            </TabsContent>
          </div>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
