import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Issue } from './issue.model';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.html',
  styleUrls: ['./issue.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class IssueComponent {
  @Input() data: Issue[] = [];

  constructor(private router: Router) {}

  viewDetails(id: number): void {
    this.router.navigate(['/issues', id]);
  }
}