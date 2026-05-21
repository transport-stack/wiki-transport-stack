---
title: Technology Stack
sidebar_label: Technology Stack
---

# Technology Stack

Every tool and framework used across the Transport Stack ecosystem, organized by domain. This table helps city IT teams and developers assess what skills, infrastructure, and licenses are needed to deploy and operate the platform.

> **Legend:** ✅ Production &nbsp;|&nbsp; 🔬 Evaluation &nbsp;|&nbsp; 📝 Planned
>
> **License Note:** The licenses below are for the **third-party tools** Transport Stack depends on (Django, React, Redis, etc.). The Transport Stack project code itself is licensed under **Apache 2.0** — see the `LICENSE` file in each repository.

---

## Backend — Languages & Runtimes

| Language | Version | Used By |
|----------|---------|---------|
| Python | 3.7+ | ETA Calculator, Schedule Adherence, Bus Bunching, Auto Outshedding |
| Python | 3.10+ | Journey Planner, Open Transit Data APIs, ONDC Seller/Buyer, Urban Transit Facilities |
| Java | 17+ | Web Portal Backend |
| Java | — | Data Collection App (Android) |
| Node.js | 20 LTS | Web Portal Frontend, Wiki |

## Backend — Frameworks

| Framework | Version | Language | Repositories | License | Status |
|-----------|---------|----------|-------------|---------|--------|
| Django | 5.0.2 | Python | Journey Planner (via Poetry) | BSD-3 | ✅ |
| Django | 3.x–4.x | Python | Open Transit Data APIs, ONDC Seller/Buyer, Urban Transit Facilities | BSD-3 | ✅ |
| Flask | 2.3.2 | Python | ETA Calculator | BSD-3 | ✅ |
| Flask | 2.2.2 | Python | Park-n-Ride Trip Planner | BSD-3 | ✅ |
| FastAPI | — | Python | Auto Outshedding | Apache 2.0 | ✅ |
| Spring Boot | 3.3.1 | Java | Web Portal Backend | Apache 2.0 | ✅ |
| Django REST Framework | 3.14.0–3.15.2 | Python | Open Transit Data APIs, Urban Transit Facilities | BSD-3 | ✅ |
| Celery | 5.3.1–5.3.4 | Python | ONDC Buyer, Urban Transit Facilities, ONDC Buses Seller | BSD-3 | ✅ |
| Uvicorn | — | Python | Auto Outshedding | BSD-3 | ✅ |
| Gunicorn | 20.1.0–23.0.0 | Python | All Python web services | MIT | ✅ |

## Frontend

| Technology | Version | Repository | License | Status |
|-----------|---------|------------|---------|--------|
| React | 18.3.1 | Web Portal Frontend | MIT | ✅ |
| Docusaurus | 3.7.0 | Documentation Wiki | MIT | ✅ |
| Bootstrap / Crispy Forms | 2.10.4 | Web Portal, Urban Transit Facilities | MIT | ✅ |

## Mobile

| Platform | Language | Build Tool | Repository | Status |
|----------|----------|-----------|-----------|--------|
| Android | Java | Gradle | Shared Transit Data Collection App | ✅ |

## Databases & Storage

| Database | Version | Used By | Purpose | Status |
|----------|---------|---------|---------|--------|
| PostgreSQL | 15+ | Open Transit Data APIs, Journey Planner, Web Portal, ONDC services, Urban Transit Facilities | Primary RDBMS | ✅ |
| SQLite | 3 | ETA Calculator, Bus Bunching, Auto Outshedding, Schedule Adherence, Data Collection App | Lightweight local storage | ✅ |
| Redis | 5.0.1–5.0.7 | Open Transit Data APIs, ONDC services, Urban Transit Facilities | Caching, message broker | ✅ |
| AWS S3 (or compatible) | — | Open Transit Data APIs | GTFS data files, static assets | ✅ |

## CI/CD & DevOps

| Tool | Version | Purpose | License | Status |
|------|---------|---------|---------|--------|
| GitHub Actions | — | CI/CD pipelines | Free for OSS | ✅ |
| Docker | 24+ | Containerization | Apache 2.0 | ✅ |
| Docker Compose | — | Local development | Apache 2.0 | ✅ |
| nginx | 1.25 | Reverse proxy, static serving | BSD-2 | ✅ |
| Gunicorn | 20.1.0–23.0.0 | Python WSGI server | MIT | ✅ |

## API & Documentation

| Tool | Version | Purpose | License | Status |
|------|---------|---------|---------|--------|
| Django REST Framework | 3.14.0–3.15.2 | REST API framework | BSD-3 | ✅ |
| drf-spectacular / drf-yasg | — | OpenAPI schema generation | Apache 2.0 | ✅ |
| Swagger UI | — | Interactive API explorer | Apache 2.0 | ✅ |
| Mermaid | 10+ | Diagrams in wiki documentation | MIT | ✅ |

## Monitoring & Observability

| Tool | Version | Purpose | Used By | Status |
|------|---------|---------|---------|--------|
| Elastic APM | — | Application performance monitoring | ETA Calculator, Urban Transit Facilities | ✅ |
| ELK Stack | — | Centralized logging (Elasticsearch, Logstash, Kibana) | Urban Transit Facilities | ✅ |

## GIS & Mapping

| Library | Version | Purpose | Used By | License | Status |
|---------|---------|---------|---------|---------|--------|
| GeoPy | 2.2.0–2.4.1 | Geocoding, distance calculation | Journey Planner, Park & Ride, Auto Outshedding | MIT | ✅ |
| Shapely | 2.0.3+ | Geometric operations | Journey Planner, Auto Outshedding | BSD-3 | ✅ |
| GeoPandas | 0.14.3 | Spatial data handling | Journey Planner | BSD-3 | ✅ |
| NetworkX | 3.3 | Graph algorithms (route optimization) | Journey Planner | BSD-3 | ✅ |
| OpenStreetMap | — | Map data | Journey Planner, Park & Ride | ODbL | ✅ |

## Data Processing & Analytics

| Library | Version | Purpose | Used By | License | Status |
|---------|---------|---------|---------|---------|--------|
| pandas | 1.3.0+ / 2.2.0 | Data manipulation, GTFS processing | Journey Planner, Auto Outshedding, Bus Bunching | BSD-3 | ✅ |
| NumPy | 1.26.4 | Numerical computing | Journey Planner, Auto Outshedding | BSD-3 | ✅ |
| scikit-learn | 1.4.1 | Machine learning | Journey Planner | BSD-3 | ✅ |

## Networking & Protocols

| Protocol | Used By | Purpose |
|----------|---------|---------|
| GTFS (static + realtime) | Open Transit Data APIs, all consuming modules | Transit data standard |
| Beckn / ONDC | ONDC Buses Seller, ONDC Micro-Mobility Buyer | Commerce network protocol |
| HTTP/REST | All modules | Internal service communication |
| WebSocket | Auto Outshedding | Real-time communication |

## Package Management

| Tool | Ecosystem | Used By |
|------|-----------|---------|
| pip | Python | All Python repos (requirements.txt) |
| Poetry | Python | Journey Planner |
| npm | JavaScript | Web Portal Frontend, Wiki |
| Gradle | Java / Android | Web Portal Backend, Data Collection App |

---

## Repository Quick-Reference

| Repository | Language | Framework | Database | Cache | WSGI |
|-----------|----------|-----------|----------|-------|------|
| `open-transit-data-service-apis` | Python 3.10 | Django 3.x + DRF 3.15.2 | PostgreSQL | Redis 5.0.7 | Gunicorn 23.0.0 |
| `eta-calculator` | Python 3.7+ | Flask 2.3.2 | SQLite | — | Gunicorn 20.1.0 |
| `journey-planner` | Python 3.10 | Django 5.0.2 + Poetry | PostgreSQL | — | — |
| `schedule-adherence` | Python 3.7+ | — (standalone scripts) | SQLite | — | — |
| `bus-bunching-detection` | Python 3.7+ | pandas + requests | SQLite | — | — |
| `buses-auto-outshedding` | Python 3.7+ | FastAPI + Uvicorn | SQLite | — | Uvicorn |
| `park-n-ride-trip-planner` | Python 3.7+ | Flask 2.2.2 | — | — | — |
| `ondc-buses-seller` | Python 3.10 | Django 3.x | PostgreSQL | Redis 5.0.1 | Gunicorn 23.0.0 |
| `ondc-micro-mobility-buyer` | Python 3.10 | Django 3.x | PostgreSQL | Redis | Gunicorn 22.0.0 |
| `transport-stack-web-portal-backend` | Java 17+ | Spring Boot 3.3.1 | PostgreSQL | — | — |
| `transport-stack-web-portal-frontend` | JavaScript | React 18.3.1 | — | — | — |
| `urban-transit-facilities` | Python 3.10 + JS | Django + Celery 5.3.4 | PostgreSQL | Redis | Gunicorn 20.1.0 |
| `shared-transit-data-collection-app` | Java | Android / Gradle | SQLite | — | — |
| `wiki-transport-stack` | JavaScript | Docusaurus 3.7.0 | — | — | — |
