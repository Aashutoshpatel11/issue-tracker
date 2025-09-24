export interface Issue {
  id: number;
  title: string;
  status: 'Pending' | 'Resolved';
  priority: 'High' | 'Medium' | 'Low';
  assignee: string;
}