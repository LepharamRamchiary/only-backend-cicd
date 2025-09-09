# CI/CD Pipeline with AWS EC2

This repository demonstrates a **CI/CD pipeline** for deploying a Node.js (or any backend/frontend) application to an **AWS EC2 instance** using **GitHub Actions**.

---

## Features
- **Continuous Integration (CI):**
  - Linting, testing, and building the application on every push.
- **Continuous Deployment (CD):**
  - Automatically deploys the latest code to an EC2 instance.
  - Uses **PM2** for process management.
  - Environment variables managed via `.env`.

---

## Tech Stack
- **GitHub Actions** – CI/CD automation
- **AWS EC2 (Ubuntu)** – Hosting environment
- **PM2** – Node.js process manager
- **NGINX (optional)** – Reverse proxy for production

---

