---
title: Platform Architecture Overview
sidebar_label: Platform Overview
---

# Platform Architecture Overview

**Transport Stack** is a modular, API-first urban mobility platform designed as digital public infrastructure. Any city can fork, customize, and deploy the subset of modules it needs. This page describes the architecture at four levels: **design principles**, **system context**, **functional view**, and **deployment view**.

---

## Design Principles

| Principle | Rationale |
|-----------|-----------|
| **Modular & Composable** | Services deploy independently. A city can start with ETA and add Journey Planner later. |
| **City-Parameterized** | One codebase — each city's stops, routes, and schedules live in configuration, not code. Adding a city means adding data, not rewriting logic. |
| **Open Standards First** | GTFS, GBFS, and ONDC/Beckn protocols ensure interoperability with any third-party system. |
| **API-First** | Every module exposes a RESTful API. Frontends can be swapped or extended independently. |
| **Environment-Configured** | API keys, databases, caches, and monitoring are configured via environment variables. The same code runs in dev, staging, and production. |
| **Multi-Framework Backend** | Modules use the right framework for their complexity: Flask (ETA), Django (Data APIs), FastAPI (Outshedding), Spring Boot (Portal). No single framework mandate. |
| **Cloud-Native** | Containerized services deploy on any cloud (AWS, Azure, GCP) or on-premise. |

---

## System Context

The platform serves four primary actor groups. Transit operators feed data through Open Transit Data APIs to consumer modules and end-user applications.

```mermaid
graph TB
    subgraph Actors
        C[Commuter / End User]
        PTO[Transit Operator]
        ADMIN[City Admin]
        DEV[Developer / Partner]
    end

    subgraph "Transport Stack Platform"
        OTD[Open Transit Data APIs]
        ETA[ETA Calculator]
        JP[Journey Planner]
        SA[Schedule Adherence]
        BUN[Bunching Detection]
        AOS[Auto Outshedding]
        PR[Park & Ride]
        ONDC_S[ONDC Bus Seller]
        ONDC_M[ONDC Micro-Mobility]
        PORTAL[Web Portal]
        COLLECT[Data Collection App]
    end

    subgraph External
        ONDC_NET[ONDC Network]
    end

    PTO -->|GTFS / GTFS-RT| OTD
    OTD --> ETA
    OTD --> JP
    OTD --> SA
    OTD --> BUN
    OTD --> AOS
    ETA --> JP
    JP --> PR
    C --> PORTAL
    C --> JP
    C --> ETA
    DEV -->|builds on| OTD
    ADMIN -->|manages| PORTAL
    COLLECT -->|survey data| PORTAL
    ONDC_S --> ONDC_NET
    ONDC_M --> ONDC_NET
```

### Actor Roles

| Actor | Role |
|-------|------|
| **Commuter / End User** | Uses journey planners, ETA predictions, ticketing apps, and ONDC-enabled mobility services |
| **Transit Operator** | Publishes GTFS data and GPS feeds; uses analytics for performance monitoring |
| **City Admin** | Deploys and manages Transport Stack modules; configures city-specific settings |
| **Developer / Partner** | Builds applications on Open Transit Data APIs; creates ONDC buyer/seller apps |

---

## Functional Architecture

Modules are grouped by their primary function. Each layer is independently deployable.

```mermaid
graph TD
    subgraph "Data Layer"
        OTD[Open Transit Data APIs]
        GTFS[GTFS Ingestion]
    end

    subgraph "Analytics Layer"
        ETA[ETA Calculator]
        SA[Schedule Adherence]
        BB[Bunching Detection]
        AO[Auto Outshedding]
    end

    subgraph "Planning Layer"
        JP[Journey Planner]
        PNR[Park & Ride]
    end

    subgraph "Commerce Layer"
        ONDC_S[ONDC Bus Seller]
        ONDC_B[ONDC Micro-Mobility Buyer]
    end

    subgraph "Presentation"
        PORTAL_FE[Web Portal Frontend]
        PORTAL_BE[Web Portal Backend]
    end

    subgraph "Data Collection"
        DC[Data Collection App]
    end

    GTFS --> OTD
    OTD --> ETA
    OTD --> JP
    OTD --> SA
    OTD --> BB
    OTD --> AO
    ETA --> JP
    JP --> PORTAL_FE
    ONDC_S -->|Beckn| ONDC_NET[ONDC Network]
    ONDC_B --> ONDC_NET
    DC --> PORTAL_BE
    PORTAL_BE --> PORTAL_FE
```

### Module Descriptions

| Module | Layer | Purpose |
|--------|-------|---------|
| **Open Transit Data Service APIs** | Data | Central API gateway for transit data (GTFS static + real-time). Backbone for all downstream modules |
| **ETA Calculator** | Analytics | Real-time bus arrival predictions combining GTFS schedule + GPS positions |
| **Schedule Adherence** | Analytics | Compares actual vs scheduled times; generates on-time performance metrics |
| **Bus Bunching Detection** | Analytics | Detects when buses on the same route run too close together |
| **Auto Outshedding Detection** | Analytics | Tracks depot exit/entry times and distance traveled for fleet management |
| **Journey Planner** | Planning | Multi-modal trip planning (bus, metro, first/last mile) |
| **Park-n-Ride Trip Planner** | Planning | Trip planning integrating private vehicle + public transit |
| **ONDC Buses Seller** | Commerce | Bus ticketing seller backend integrated with the ONDC network |
| **ONDC Micro-Mobility Buyer** | Commerce | Buyer app for shared mobility services (bikes, autos, e-rickshaws) via ONDC |
| **Web Portal Frontend** | Presentation | React-based web interface for Transport Stack |
| **Web Portal Backend** | Presentation | Spring Boot backend providing portal APIs |
| **Data Collection App** | Data Collection | Android app for field data collection (stops, routes, station surveys) |
| **Urban Transit Facilities** | Management | Django web app for managing urban transit facilities and operational data |

---

## Data Flow Between Modules

```mermaid
sequenceDiagram
    participant PTO as Transit Operator
    participant OTD as Open Transit Data
    participant ETA as ETA Calculator
    participant JP as Journey Planner
    participant C as Commuter

    PTO->>OTD: Publishes GTFS + GTFS-RT
    OTD->>ETA: Routes, schedules, vehicle positions
    OTD->>JP: Routes, schedules, stops
    ETA->>JP: Real-time arrival estimates
    JP->>C: Optimal route options
    C->>JP: Origin → destination request
```

### Module Interconnection Summary

| Source Module | Consumes From | Protocol |
|--------------|---------------|----------|
| ETA Calculator | Open Transit Data APIs | REST / JSON |
| Journey Planner | Open Transit Data APIs | REST / JSON |
| Schedule Adherence | Open Transit Data APIs | REST / JSON |
| Park & Ride Planner | Open Transit Data APIs | REST / JSON |
| Web Portal Backend | All service modules | REST / JSON |
| ONDC Seller | PTO inventory + ONDC | Beckn protocol |
| ONDC Buyer | ONDC network | Beckn protocol |

---

## Deployment View

Each module is containerized and deployable independently. The platform follows a cloud-native architecture.

| Component | Technology | Scalability |
|-----------|-----------|-------------|
| API Gateway | nginx / cloud LB | Horizontally scalable |
| Open Transit Data APIs | Python (Django) + Gunicorn | Per-service |
| ETA Calculator | Python (Flask) | Per-service |
| Journey Planner | Python (Django) | Per-service |
| Web Portal Frontend | React, served via nginx | CDN + horizontal |
| Web Portal Backend | Java (Spring Boot) | Per-service |
| Databases | PostgreSQL, SQLite | Read replicas |
| Cache | Redis | In-memory cluster |
| Message Broker | Redis / Celery | Async workers |
| CI/CD | GitHub Actions | Free for OSS |
| Object Storage | AWS S3 (or compatible) | Unlimited |

```mermaid
graph TB
    subgraph "Cloud Infrastructure"
        LB[Load Balancer]
        subgraph "Application Services"
            OTD[Open Transit Data API]
            ETA[ETA Calculator]
            JP[Journey Planner]
            SA[Schedule Adherence]
        end
        subgraph "Data Layer"
            DB[(PostgreSQL)]
            CACHE[(Redis)]
            S3[Object Storage]
        end
        subgraph "Frontend"
            CDN[CDN]
            UI[React App]
        end
    end
    subgraph External
        DNS[DNS]
        ONDC[ONDC Network]
    end

    DNS --> LB
    LB --> OTD
    LB --> ETA
    LB --> JP
    OTD --> DB
    OTD --> CACHE
    OTD --> S3
    ETA --> CACHE
    CDN --> UI
    OTD --> ONDC
```

---

## Repository Map

| Repository | Module | Language | Framework |
|-----------|--------|----------|-----------|
| `open-transit-data-service-apis` | Open Transit Data APIs | Python | Django + DRF |
| `eta-calculator` | ETA Calculator | Python | Flask |
| `journey-planner` | Journey Planner | Python | Django |
| `schedule-adherence` | Schedule Adherence | Python | — |
| `bus-bunching-detection` | Bus Bunching Detection | Python | — |
| `buses-auto-outshedding` | Auto Outshedding | Python | FastAPI |
| `park-n-ride-trip-planner` | Park & Ride Trip Planner | Python | Django |
| `ondc-buses-seller` | ONDC Bus Ticketing Seller | Python | Django |
| `ondc-micro-mobility-buyer` | ONDC Micro-Mobility Buyer | Python | Django |
| `transport-stack-web-portal-backend` | Web Portal Backend | Java | Spring Boot |
| `transport-stack-web-portal-frontend` | Web Portal Frontend | JavaScript | React |
| `urban-transit-facilities` | Urban Transit Facilities | JavaScript | Node.js / Django |
| `shared-transit-data-collection-app` | Data Collection App | Java | Android |
| `wiki-transport-stack` | Documentation Wiki | JavaScript | Docusaurus |
