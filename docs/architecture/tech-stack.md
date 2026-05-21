---
title: Technology Stack
sidebar_label: Technology Stack
---

# Technology Stack

Every tool and framework used across the Transport Stack ecosystem, organized by domain. This table helps city IT teams and developers assess what skills, infrastructure, and licenses are needed to deploy and operate the platform.

> **Legend:** ✅ Production &nbsp;|&nbsp; 🔬 Evaluation &nbsp;|&nbsp; 📝 Planned

---

## Backend — Languages & Runtimes

| Language | Version | Used By |
|----------|---------|---------|
| Python | 3.7+ | ETA Calculator, Adherence, Bunching, Outshedding |
| Python | 3.10+ | Journey Planner, Open Transit Data APIs, ONDC services |
| Java | 17+ | Web Portal Backend, Data Collection App |
| Node.js | 20 LTS | Urban Transit Facilities |

## Backend — Frameworks

| Framework | Language | Repository | License | Status |
|-----------|----------|------------|---------|--------|
| Django | Python | Open Transit Data APIs, Journey Planner, ONDC Seller/Buyer, Urban Transit Facilities | BSD-3 | ✅ |
| Flask | Python | ETA Calculator | BSD-3 | ✅ |
| FastAPI | Python | Auto Outshedding | Apache 2.0 | ✅ |
| Spring Boot | Java | Web Portal Backend | Apache 2.0 | ✅ |
| Django REST Framework | Python | Open Transit Data APIs, Urban Transit Facilities | BSD-3 | ✅ |
| Celery | Python | ONDC services, Urban Transit Facilities | BSD-3 | ✅ |

## Frontend

| Technology | Version | Repository | License | Status |
|-----------|---------|------------|---------|--------|
| React | 18 | Web Portal Frontend | MIT | ✅ |
| Docusaurus | 3 | Documentation Wiki | MIT | ✅ |
| Bootstrap / Crispy Forms | — | ONDC services, Urban Transit Facilities | MIT | ✅ |

## Mobile

| Platform | Language | Build Tool | Repository | Status |
|----------|----------|-----------|-----------|--------|
| Android | Java | Gradle | Shared Transit Data Collection App | ✅ |

## Databases & Storage

| Database | Used By | Purpose | Status |
|----------|---------|---------|--------|
| PostgreSQL | Open Transit Data APIs, Journey Planner, Web Portal, ONDC services | Primary RDBMS | ✅ |
| SQLite | ETA Calculator, Bunching, Outshedding | Lightweight local storage | ✅ |
| Redis | Open Transit Data APIs, ONDC services | Caching, message broker | ✅ |
| AWS S3 (or compatible) | Open Transit Data APIs | GTFS data files, static assets | ✅ |

## CI/CD & DevOps

| Tool | Purpose | License | Status |
|------|---------|---------|--------|
| GitHub Actions | CI/CD pipelines | Free for OSS | ✅ |
| Docker | Containerization | Apache 2.0 | ✅ |
| Docker Compose | Local development | Apache 2.0 | ✅ |
| nginx | Reverse proxy, static serving | BSD-2 | ✅ |
| Gunicorn | Python WSGI server | MIT | ✅ |

## API & Documentation

| Tool | Purpose | License | Status |
|------|---------|---------|--------|
| Swagger / OpenAPI | API documentation (DRF Spectacular, drf-yasg) | Apache 2.0 | ✅ |
| Swagger UI | Interactive API explorer | Apache 2.0 | ✅ |
| Mermaid | Diagrams in wiki documentation | MIT | ✅ |

## Monitoring & Observability

| Tool | Purpose | Used By | Status |
|------|---------|---------|--------|
| Elastic APM | Application performance monitoring | ETA Calculator, Urban Transit Facilities | ✅ |
| ELK Stack | Centralized logging (Elasticsearch, Logstash, Kibana) | Urban Transit Facilities | ✅ |

## GIS & Mapping

| Library | Purpose | Used By | License | Status |
|---------|---------|---------|---------|--------|
| GeoPy | Geocoding, distance calculation | Journey Planner, Park & Ride | MIT | ✅ |
| Shapely | Geometric operations | Journey Planner | BSD-3 | ✅ |
| GeoPandas | Spatial data handling | Journey Planner | BSD-3 | ✅ |
| NetworkX | Graph algorithms | Journey Planner | BSD-3 | ✅ |
| OpenStreetMap | Map data | Journey Planner, Park & Ride | ODbL | ✅ |

## Networking & Protocols

| Protocol | Used By | Purpose |
|----------|---------|---------|
| GTFS (static + realtime) | Open Transit Data APIs, all consuming modules | Transit data standard |
| Beckn / ONDC | ONDC Buses Seller, ONDC Micro-Mobility Buyer | Commerce network protocol |

## Package Management

| Tool | Ecosystem | Used By |
|------|-----------|---------|
| pip | Python | All Python repos |
| Poetry | Python | Journey Planner |
| npm | JavaScript | Web Portal Frontend, Wiki |
| Gradle | Java / Android | Web Portal Backend, Data Collection App |

---

## Repository Quick-Reference

| Repository | Language | Framework | Database |
|-----------|----------|-----------|----------|
| `open-transit-data-service-apis` | Python 3.10 | Django + DRF | PostgreSQL, Redis, S3 |
| `eta-calculator` | Python 3.7+ | Flask | SQLite |
| `journey-planner` | Python 3.10 | Django + Poetry | PostgreSQL |
| `park-n-ride-trip-planner` | Python | Django | — |
| `schedule-adherence` | Python | — | SQLite |
| `bus-bunching-detection` | Python | — | SQLite |
| `buses-auto-outshedding` | Python | FastAPI | SQLite |
| `ondc-buses-seller` | Python | Django | PostgreSQL, Redis |
| `ondc-micro-mobility-buyer` | Python | Django | PostgreSQL, Redis |
| `transport-stack-web-portal-backend` | Java 17+ | Spring Boot | PostgreSQL |
| `transport-stack-web-portal-frontend` | JavaScript | React | — |
| `urban-transit-facilities` | JavaScript | Node.js / Django | PostgreSQL, Redis |
| `shared-transit-data-collection-app` | Java | Android / Gradle | SQLite |
| `wiki-transport-stack` | JavaScript | Docusaurus | — |
