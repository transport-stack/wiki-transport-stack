# Technology Stack

This page lists all the technologies used across Transport Stack modules. Most choices are free and open-source software with clear long-term support. For production deployments, some components can be replaced with commercial alternatives.

| Domain | Tool/Technology | Repository / Module | License Type | Production |
|--------|---------------|-------------------|-------------|------------|
| **Backend — Language Runtime** | Python 3.7+ | ETA Calculator, Schedule Adherence, Bus Bunching, Auto Outshedding, Journey Planner | PSF License | Yes |
| **Backend — Language Runtime** | Python 3.10+ | Journey Planner | PSF License | Yes |
| **Backend — Language Runtime** | Java 17+ (Spring Boot) | Web Portal Backend | Apache 2.0 | Yes |
| | | | | |
| **Backend — Frameworks** | Flask | ETA Calculator | BSD 3-Clause | Yes |
| **Backend — Frameworks** | Django | Open Transit Data APIs, Urban Transit Facilities | BSD 3-Clause | Yes |
| **Backend — Frameworks** | Django REST Framework | Open Transit Data APIs, Urban Transit Facilities | BSD 3-Clause | Yes |
| **Backend — Frameworks** | FastAPI | Auto Outshedding Detection | Apache 2.0 | Yes |
| | | | | |
| **Frontend — Framework** | React | Web Portal Frontend | MIT | Yes |
| **Frontend — Language** | JavaScript / JSX | Web Portal Frontend | MIT | Yes |
| | | | | |
| **Mobile** | Android (Java) | Shared Transit Data Collection App | Apache 2.0 | Yes |
| **Mobile** | Gradle | Shared Transit Data Collection App | Apache 2.0 | Yes |
| | | | | |
| **Documentation** | Docusaurus | Wiki (wiki.transportstack.in) | MIT | Yes |
| | | | | |
| **Databases** | PostgreSQL | Open Transit Data APIs, ETA Calculator, Web Portal | PostgreSQL License | Yes |
| **Databases** | SQLite | Bus Bunching Detection | Public Domain | Development |
| | | | | |
| **Caching** | Redis / Valkey | Open Transit Data APIs | BSD 3-Clause | Yes |
| | | | | |
| **Storage** | AWS S3 (or compatible) | Open Transit Data APIs (transit data files) | Commercial | Yes |
| | | | | |
| **CI / CD** | GitHub Actions | All repositories | Free for OSS | Yes |
| | | | | |
| **API Documentation** | Swagger / OpenAPI | Open Transit Data APIs, Journey Planner | Apache 2.0 | Yes |
| | | | | |
| **Geospatial** | GTFS standard | All transit data modules | Open standard | Yes |
| **Geospatial** | OpenStreetMap | Journey Planner, Park-n-Ride | ODbL | Yes |
| | | | | |
| **Version Control** | Git / GitHub | All repositories | — | Yes |
| **Code Hosting** | GitHub (transport-stack org) | All repositories | — | Yes |
| | | | | |
| **Messaging / Protocols** | Beckn Protocol | ONDC Buses Seller, ONDC Micro-Mobility Buyer | Open standard | Yes |
| | | | | |
| **Containerization** | Docker | Deployment | Apache 2.0 | Yes |
