import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueService } from './issue.service';

describe('IssueService', () => {
  let component: IssueService;
  let fixture: ComponentFixture<IssueService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssueService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssueService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
