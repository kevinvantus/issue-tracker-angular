import { Component } from '@angular/core';
import { Issue } from '../interfaces/issue';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
})
export class IssueListComponent {
  showReportIssue = false;
  issues: Issue[] = [];

  constructor(private issueService: IssuesService) {}

  ngOnInit() {
    this.getIssues();
  }

  private getIssues() {
    this.issues = this.issueService.getPendingIssues();
  }

  onCloseReport() {
    this.showReportIssue = false;
    this.getIssues();
  }
}
