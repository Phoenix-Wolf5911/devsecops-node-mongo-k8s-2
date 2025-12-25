# DevSecOps Assessment Project

## Overview
This project demonstrates a secure deployment of a Node.js/Express application with a MongoDB backend in a Kubernetes environment. It covers secure containerization, CI/CD pipeline security, Infrastructure as Code using Terraform (EKS simulation), Kubernetes hardening, and optional observability/monitoring setup.

## Folder Structure
- `Dockerfile` — Container image for the Node.js app
- `trivy.txt` — Docker image vulnerability scan results
- `.github/workflows/` — CI/CD pipeline configuration
- `terraform/` — Terraform code for EKS simulation
- `k8s/` — Kubernetes manifests (Deployment, Service, NetworkPolicy, PodDisruptionBudget)
- `Report.md` — Security & compliance summary
- `README.md` — Project instructions and setup details

## Setup Steps

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd devsecops-assessment
