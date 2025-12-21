🚀 SarkarFlow

Automated Government Service Request Routing Backend

An event-driven backend system built using Motia to automate citizen service request routing, SLA tracking, escalation, and audit logging for government services in India.

📌 Problem Statement

In India, government service requests such as electricity issues, water complaints, or municipal problems are often handled manually.
This leads to:

Delayed responses

Missed SLAs

Lack of transparency

Poor accountability

SarkarFlow solves this by introducing an automated, event-driven backend system that routes complaints, tracks SLAs, escalates delays, and maintains a full audit trail — without manual intervention.

💡 Solution Overview

SarkarFlow uses Motia’s event-driven workflow engine to manage the entire lifecycle of a government service request.

Instead of hardcoding business logic inside controllers:

Events trigger workflows

Workflows manage routing, timing, and escalation

Policies drive decisions

Logs ensure traceability

This architecture is scalable, transparent, and production-ready.

🧠 Key Features

📥 Complaint Intake API

🔀 Automated Department Routing

⏱️ SLA Tracking with Time-Based Workflows

🚨 Automatic Escalation on SLA Breach

🧾 Full Audit Logging

🔐 API Key Authentication

🐳 Dockerized Deployment

🏗️ Architecture Highlights

Event-driven backend using Motia

Workflow-based business logic instead of controller-heavy design

Policy-driven routing and SLA decisions

Decoupled services for maintainability

Production-grade logging and authentication

🔄 Workflow Diagram
flowchart TD
    A[Citizen / Client App] -->|POST /complaints| B[API Layer]
    
    B -->|Authenticate Request| C[Complaint Controller]
    C -->|Emit Event| D[ComplaintCreated Event]

    D --> E[Motia Workflow Engine]

    E -->|Routing Logic| F[Department Mapper Service]
    F -->|Department + SLA| G[Complaint Routed]

    G -->|Start Timer| H[SLA Timer Workflow]

    H -->|SLA Met| I[Status: Resolved]
    H -->|SLA Expired| J[SlaExpired Event]

    J --> K[Escalation Workflow]
    K --> L[Higher Authority Assigned]
    L --> M[Status: Escalated]

    G --> N[Audit Log Workflow]
    I --> N
    M --> N

    N --> O[Audit Logs Stored]

🛠️ Tech Stack

Backend Framework: Motia

Runtime: Node.js (JavaScript)

API Framework: Express.js

Workflow Engine: Motia Workflows

Authentication: API Key

Logging: Custom Logger

Containerization: Docker


🔐 Authentication

SarkarFlow uses API Key authentication to secure endpoints.

Request Header
x-api-key: SARKARFLOW_SECURE_KEY


Unauthorized requests are automatically rejected.

🚀 Getting Started
1️⃣ Clone Repository
git clone https://github.com/your-username/sarkarflow.git
cd sarkarflow

2️⃣ Install Dependencies
npm install

3️⃣ Environment Variables

Create a .env file:

PORT=3000
SARKARFLOW_API_KEY=SARKARFLOW_SECURE_KEY

4️⃣ Run Locally
npm start

🐳 Docker Setup
Build Image
docker build -t sarkarflow .

Run Container
docker run -p 3000:3000 --env-file .env sarkarflow

📊 Logging & Audit Trail

All workflows write structured logs

Escalations are logged separately

Audit workflow maintains a complete event trail

Logs help with debugging, monitoring, and compliance

🧪 API Example
Create Complaint
POST /api/complaints
Headers:
x-api-key: SARKARFLOW_SECURE_KEY
Content-Type: application/json

{
  "issueType": "Electricity",
  "location": "Jaipur",
  "priority": "High"
}