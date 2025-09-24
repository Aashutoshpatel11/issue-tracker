# Issue Tracker

This project is a simple Issue Tracker application built as part of a hiring assignment. It includes a Python backend with a REST API and an Angular frontend with a functional UI.

## Features

* **View Issues:** See a list of all issues with pagination.
* **Search and Filter:** Easily search for issues by title and filter them by status and priority.
* **Sort Issues:** Sort the issue list by different columns.
* **Create and Update Issues:** Add new issues and edit existing ones through a simple form.
* **View Issue Details:** Click on an issue to see its full details.

## Tech Stack

* **Backend:** Python, FastAPI
* **Frontend:** Angular, TypeScript, Tailwind CSS

## Getting Started

To get this project up and running on your local machine, follow these simple steps.

### Prerequisites

Make sure you have the following installed:

* Python 3.6+
* Node.js and npm

### Backend Setup

1.  **Navigate to the `backend` directory:**
    ```bash
    cd backend
    ```
2.  **Install the dependencies:**
    ```bash
    pip install fastapi "uvicorn[standard]"
    ```
3.  **Run the backend server:**
    ```bash
    uvicorn main:app --reload
    ```
    The backend will be running on `http://localhost:8000`.

### Frontend Setup

1.  **Navigate to the `frontend` directory:**
    ```bash
    cd frontend
    ```
2.  **Install the dependencies:**
    ```bash
    npm install
    ```
3.  **Run the frontend server:**
    ```bash
    ng serve
    ```
    The frontend will be running on `http://localhost:4200`.

## API Endpoints

The backend provides the following REST API endpoints:

* `GET /health`: Health check endpoint.
* `GET /issues`: Get a list of issues with support for searching, filtering, sorting, and pagination.
* `GET /issues/:id`: Get a single issue by its ID.
* `POST /issues`: Create a new issue.
* `PUT /issues/:id`: Update an existing issue.

---

I really enjoyed working on this assignment