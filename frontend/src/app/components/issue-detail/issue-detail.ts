import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Issue } from '../issue/issue.model';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'app-issue-detail',
  imports: [CommonModule],
  templateUrl: './issue-detail.html',
  styleUrls: ['./issue-detail.css'],
  standalone: true,
})
export class IssueDetailComponent implements OnInit {
  issue: Issue = {} as Issue;

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

  back(): void {
    this.router.navigate(['/']);
  }
}