import { Component, Input } from '@angular/core';
import { Issue } from './issue.model';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.html',
  styleUrls: ['./issue.css']   // 👈 fixed plural
})
export class IssueComponent {
  @Input() data: Issue[] = [];   // 👈 clear naming
}