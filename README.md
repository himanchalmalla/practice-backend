# Backend Practice

A hands-on practice repository for exploring and understanding different **backend engineering concepts, tools, and infrastructure components**.

The projects in this repository focus on learning how backend systems are built, connected, scaled, and managed in real-world applications.

---

## 📚 Topics Practiced

### 1. Docker

Practiced containerizing backend applications and running multiple services using Docker.

Topics explored:

* Docker images and containers
* Dockerfiles
* Docker Compose
* Container networking
* Port mapping
* Environment variables
* Service-to-service communication
* Running Node.js applications in containers

---

### 2. Redis

Practiced using **Redis** as an in-memory data store and backend infrastructure component.

Topics explored:

* Redis containers
* Redis connections from Node.js
* Caching concepts
* In-memory data storage
* Service-to-Redis communication
* Redis in a Docker environment

---

### 3. Load Balancing with Nginx

Practiced using **Nginx** as a load balancer in front of multiple backend instances.

Example architecture:

```text
                 Client
                   │
                   ↓
                Nginx
                   │
        ┌──────────┼──────────┐
        ↓          ↓          ↓
     Server 1   Server 2   Server 3
```

Topics explored:

* Nginx configuration
* Reverse proxy
* Load balancing
* Multiple Node.js instances
* Request distribution
* Docker-based load-balanced architecture

---

### 4. Microservices

Practiced breaking backend functionality into multiple independent services.

Topics explored:

* Microservice architecture
* Service separation
* Inter-service communication
* Independent service processes
* Docker-based microservices
* Service networking
* Understanding the trade-offs between monolithic and microservice architectures

---

### 5. BullMQ

Practiced **BullMQ** for background job processing using Redis.

Example workflow:

```text
              API Request
                   │
                   ↓
              Add Job
                   │
                   ↓
                Redis
                   │
                   ↓
              BullMQ Queue
                   │
                   ↓
                Worker
                   │
                   ↓
            Background Task
```

Topics explored:

* Queues
* Jobs
* Workers
* Background processing
* Redis + BullMQ integration
* Asynchronous task processing
* Separating long-running tasks from API requests

---

## 🏗️ Technologies Practiced

| Technology         | Purpose                                |
| ------------------ | -------------------------------------- |
| **Docker**         | Containerization                       |
| **Docker Compose** | Multi-container application setup      |
| **Redis**          | In-memory data store and queue backend |
| **Nginx**          | Reverse proxy and load balancer        |
| **Node.js**        | Backend application development        |
| **BullMQ**         | Background job and queue processing    |

---

## 🎯 Purpose of This Repository

This repository is primarily for **hands-on backend engineering practice**.

The goal is to understand not only how individual technologies work, but also how they can be combined to build backend systems.

For example:

```text
Node.js
   ↓
Docker
   ↓
Multiple Backend Instances
   ↓
Nginx Load Balancer
   ↓
Redis
   ↓
BullMQ
   ↓
Background Workers
```

The projects are experimental and learning-focused rather than production-ready implementations.
