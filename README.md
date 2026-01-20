# Configuration Management System (Feature Flags & Remote Config)

This configuration management system is designed to control application behavior dynamically at runtime without requiring redeployment.  
The project focuses on understanding how modern systems use **feature flags and remote configuration** to enable safe rollouts, quick experimentation, and controlled releases.

---

## Motivation

Modern applications frequently need to:
- Enable or disable features instantly
- Roll out changes gradually
- Toggle behavior across environments (dev, staging, prod)

The project was built to explore how these problems are solved in real-world production systems using a simple, scalable architecture.

---

## Core Features

- Environment-based configuration management (dev / staging / prod)
- Boolean and key-value feature flags
- Runtime feature toggling without redeployment
- Low-latency configuration reads using Redis caching
- Audit-friendly configuration updates
- Demo application integration to showcase real usage

---

## System Architecture

- **Frontend**: Next.js dashboard for managing configurations
- **Backend**: Node.js REST API for config evaluation and management
- **Database**: PostgreSQL for persistent storage of flags and environments
- **Cache**: Redis for fast runtime reads
- **Demo App**: Sample application consuming configs at runtime

The backend follows a modular design separating configuration management, evaluation logic, and caching layers.

---

## Tech Stack

- **Frontend**: Next.js, React
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Caching**: Redis
- **Dev Tools**: Docker, Git, Postman

---

## Current Status

🚧 **Actively under development**


In Progress:
- Admin dashboard UI
- Role-based access control
- Extended audit logs

---

## Example Use Case

A client application fetches configuration data at runtime to determine whether a feature should be enabled:

- Feature flags are evaluated based on environment
- Cached values ensure minimal latency
- Changes take effect immediately without redeploying the application

---

## Future Improvements

- Percentage-based rollouts
- User targeting rules
- Versioned configuration history
- SDK support for multiple clients

---

## Why This Project?

This project was built to gain hands-on experience with:
- Backend system design
- Runtime configuration strategies
- Caching and performance trade-offs
- Concepts commonly used in production-grade systems

---

## Getting Started (Local)

```bash
# Clone the repository
git clone https://github.com/Aadish-Vikram-Chakravorty/configly.git

# Start services
docker-compose up
