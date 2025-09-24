export interface Issue {
  id: number;
  title: string;
  status: 'Pending' | 'Resolved' | 'In Progress' | 'Open' | 'Closed';
  priority: 'High' | 'Medium' | 'Low';
  assignee: string;
  created_at?: string;
  updated_at?: string;
  description?: string;
}