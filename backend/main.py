from fastapi import FastAPI
from pydantic import BaseModel
from datetime import datetime
from typing import List, Optional
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS configuration
origins = [
    "http://localhost:4200",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class IssueCreate(BaseModel):
    title: str
    status: str
    priority: str
    assignee: str

class Issue(IssueCreate):
    id: int
    created_at: datetime
    updated_at: datetime

issues: List[Issue] = []

@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.get("/issues")
def get_issues(
    status: Optional[str] = None,
    priority: Optional[str] = None,
    assignee: Optional[str] = None,
    search: Optional[str] = None,
    sort_by: Optional[str] = "updated_at",   # default sorting
    sort_order: Optional[str] = "desc",      # asc / desc
    page: int = 1,
    page_size: int = 10
):
    filtered_issues = issues

    if status:
        filtered_issues = [i for i in filtered_issues if i.status == status]
    if priority:
        filtered_issues = [i for i in filtered_issues if i.priority == priority]
    if assignee:
        filtered_issues = [i for i in filtered_issues if i.assignee == assignee]

    if search:
        filtered_issues = [i for i in filtered_issues if search.lower() in i.title.lower()]

    if sort_by in Issue.__fields__:
        reverse = sort_order == "desc"
        filtered_issues = sorted(filtered_issues, key=lambda i: getattr(i, sort_by), reverse=reverse)

    start = (page - 1) * page_size
    end = start + page_size
    paginated = filtered_issues[start:end]

    return {
        "total": len(filtered_issues),
        "page": page,
        "page_size": page_size,
        "issues": paginated
    }


@app.get("/issues/{issue_id}")
def get_issue(issue_id: int):
    for issue in issues:
        if issue.id == issue_id:
            return issue
    return {"error": "Issue not found"}

@app.post("/issues")
def create_issue(issue_data: IssueCreate):
    new_issue = Issue(
        id=len(issues) + 1,
        title=issue_data.title,
        status=issue_data.status,
        priority=issue_data.priority,
        assignee=issue_data.assignee,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    issues.append(new_issue)
    return new_issue

@app.put("/issues/{issue_id}")
def update_issue(issue_id: int, updated_data: IssueCreate):
    for index, issue in enumerate(issues):
        if issue.id == issue_id:
            updated_issue = Issue(
                id=issue_id,
                title=updated_data.title,
                status=updated_data.status,
                priority=updated_data.priority,
                assignee=updated_data.assignee,
                created_at=issue.created_at,
                updated_at=datetime.now()
            )
            issues[index] = updated_issue
            return updated_issue
    return {"error": "Issue not found"}