
export interface Partner {
  id: string;
  name: string;
  db_name: string;
  created_at: string;
  updated_at: string;
  quota_users: number;
  used_users: number;
  quota_devices: number;
  used_devices: number;
}

export interface SyncStatus {
  id: string;
  partner_id: string;
  api_name: string;
  last_run: string;
  status: 'success' | 'error' | 'in_progress';
  last_success: string | null;
  last_error: string | null;
  error_message: string | null;
}

export type TabId = 'overview' | 'quotas' | 'sync' | 'actions';
