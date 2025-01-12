export interface Contact {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  job_role: string | null;
  status: 'lead' | 'customer' | 'archived';
  last_contacted: string | null;
  notes: string | null;
}