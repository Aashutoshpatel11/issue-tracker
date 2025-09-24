import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Issue } from '../issue/issue.model';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'app-issue-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './issue-form.html',
  styleUrls: ['./issue-form.css'],
  standalone: true,
})
export class IssueFormComponent implements OnInit {
  issue: Issue = {
    id: 0,
    title: '',
    status: 'Pending',
    priority: 'Medium',
    assignee: ''
  };

  constructor(
    private issueService: IssueService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.issueService.getIssue(Number(id)).subscribe(issue => {
        this.issue = issue;
      });
    }
  }

  saveIssue(): void {
    if (this.issue.id) {
      this.issueService.updateIssue(this.issue.id, this.issue).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      const newIssue = {
        title: this.issue.title,
        status: this.issue.status,
        priority: this.issue.priority,
        assignee: this.issue.assignee
      };
      this.issueService.createIssue(newIssue as Issue).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}