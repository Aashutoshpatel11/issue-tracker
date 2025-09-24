import { Component } from '@angular/core';
import { IssueComponent } from '../issue/issue';

@Component({
  selector: 'app-issue-list',
  imports: [IssueComponent],
  templateUrl: './issue-list.html',
  styleUrl: './issue-list.css'
})
export class IssueList {
  issues = [
    { id: 1, title: 'Issue 1', description: 'Description for Issue 1', status: 'Open', priority: 'High' },
    { id: 2, title: 'Issue 2', description: 'Description for Issue 2', status: 'In Progress', priority: 'Medium' },
    { id: 3, title: 'Issue 3', description: 'Description for Issue 3', status: 'Closed', priority: 'Low' }
  ];
}
