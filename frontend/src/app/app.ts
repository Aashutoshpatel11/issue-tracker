// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { Header } from './components/header/header';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet, Header],
//   template: `
//     <app-header></app-header>
//     <router-outlet></router-outlet>
//   `,
//   styleUrl: './app.css'
// })
// export class App {}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { SubHeader } from './components/sub-header/sub-header';
import { IssueList } from './components/issue-list/issue-list';
import { Issue } from './components/issue/issue.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: [RouterOutlet, Header, SubHeader, IssueList]  // <-- import components here
})
export class App {
  issues: Issue[] = [
    { id: 1, title: 'Fix login bug', status: 'Pending', priority: 'High', assignee: 'Aashutosh' },
    { id: 2, title: 'Improve dashboard UI', status: 'Resolved', priority: 'Medium', assignee: 'Priya' },
    { id: 3, title: 'Update API docs', status: 'Pending', priority: 'Low', assignee: 'Rahul' }
  ];
}
