import { Routes } from '@angular/router';
import { IssueListComponent } from './components/issue-list/issue-list';
import { IssueFormComponent } from './components/issue-form/issue-form';
import { IssueDetailComponent } from './components/issue-detail/issue-detail';
import { MainLayout } from './components/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: IssueListComponent },
      { path: 'issues/new', component: IssueFormComponent },
      { path: 'issues/:id/edit', component: IssueFormComponent },
      { path: 'issues/:id', component: IssueDetailComponent },
    ],
  },
];