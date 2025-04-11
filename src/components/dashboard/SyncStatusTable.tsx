
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import { CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';
import { SyncStatus } from '@/types/partners';

interface SyncStatusTableProps {
  partnerName: string;
  syncData: SyncStatus[];
}

const SyncStatusTable: React.FC<SyncStatusTableProps> = ({ partnerName, syncData }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-dashboard-success" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-dashboard-error" />;
      case 'in_progress':
        return <RefreshCw className="h-5 w-5 text-dashboard-info animate-spin" />;
      default:
        return null;
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A';
    return formatDistanceToNow(new Date(dateString), { addSuffix: true, locale: fr });
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader className="bg-dashboard-blue-light">
        <CardTitle>{partnerName}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>API</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Dernière exécution</TableHead>
              <TableHead>Dernier succès</TableHead>
              <TableHead>Dernière erreur</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {syncData.map((sync) => (
              <TableRow key={sync.id}>
                <TableCell className="font-medium">{sync.api_name}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(sync.status)}
                    {sync.status === 'success' && 'Succès'}
                    {sync.status === 'error' && 'Erreur'}
                    {sync.status === 'in_progress' && 'En cours'}
                  </div>
                </TableCell>
                <TableCell>{formatDate(sync.last_run)}</TableCell>
                <TableCell>{formatDate(sync.last_success)}</TableCell>
                <TableCell>
                  {sync.last_error ? (
                    <div>
                      <div>{formatDate(sync.last_error)}</div>
                      {sync.error_message && (
                        <div className="text-sm text-dashboard-error">{sync.error_message}</div>
                      )}
                    </div>
                  ) : (
                    'N/A'
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default SyncStatusTable;
