import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IssueComponent } from '../issue/issue';
import { Issue } from '../issue/issue.model';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'app-issue-list',
  imports: [CommonModule, FormsModule, IssueComponent],
  templateUrl: './issue-list.html',
  styleUrl: './issue-list.css',
  standalone: true,
})
export class IssueListComponent implements OnInit {
  issues: Issue[] = [];
  search = '';
  status = '';
  priority = '';
  assignee = '';
  page = 1;
  pageSize = 5;
  total = 0;

  constructor(private issueService: IssueService) {}

  ngOnInit(): void {
    this.loadIssues();
  }

  loadIssues(): void {
    const params = {
      search: this.search,
      status: this.status,
      priority: this.priority,
      assignee: this.assignee,
      page: this.page,
      page_size: this.pageSize,
    };
    this.issueService.getIssues(params).subscribe(response => {
      this.issues = response.issues;
      this.total = response.total;
    });
  }

  clearFilters(): void {
    this.search = '';
    this.status = '';
    this.priority = '';
    this.assignee = '';
    this.page = 1;
    this.loadIssues();
  }

  onPageSizeChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.pageSize = Number(selectElement.value);
    this.page = 1;
    this.loadIssues();
  }

  previousPage(): void {
    if (this.page > 1) {
      this.page--;
      this.loadIssues();
    }
  }

  nextPage(): void {
    if ((this.page * this.pageSize) < this.total) {
      this.page++;
      this.loadIssues();
    }
  }
}