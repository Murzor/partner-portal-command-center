
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Partner } from '@/types/partners';

interface QuotaChartProps {
  partners: Partner[];
  type: 'users' | 'devices';
}

const QuotaChart: React.FC<QuotaChartProps> = ({ partners, type }) => {
  const data = partners.map(partner => ({
    name: partner.name,
    used: type === 'users' ? partner.used_users : partner.used_devices,
    quota: type === 'users' ? partner.quota_users : partner.quota_devices,
  }));

  return (
    <Card className="animate-fade-in">
      <CardHeader className="bg-dashboard-blue-light">
        <CardTitle>{type === 'users' ? 'Quotas Utilisateurs' : 'Quotas Appareils'}</CardTitle>
      </CardHeader>
      <CardContent className="pt-6 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="name"
              angle={-45}
              textAnchor="end"
              height={70}
              interval={0}
            />
            <YAxis />
            <Tooltip />
            <Bar dataKey="used" fill="#1B3A61" name="Utilisé" />
            <Bar dataKey="quota" fill="#8E9196" name="Maximum" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default QuotaChart;
