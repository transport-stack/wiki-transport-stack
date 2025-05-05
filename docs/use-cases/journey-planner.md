# Journey Planner

<p align="center">
  <img src="/img/jp-design-arch.png" alt="Journey Planner Design" width="800" />
</p>

## Why Build a Journey Planner Service?

Modern urban regions offer multiple public transport modes (buses, metro, first/last mile options), making trip planning complex. A journey planner enhances the commuting experience by:

- **Empowering Users:** Provides optimal, real-time route options across all available modes.
- **Personalization:** Considers user preferences for time, cost, accessibility, and convenience.
- **Reliability:** Utilizes open standards like GTFS and live vehicle tracking for accurate results.
- **Scalability:** Designed to serve large metropolitan areas with high user concurrency.
- **Ecosystem Integration:** Enables apps, web platforms, kiosks, and physical displays to offer consistent trip planning services.

## System Overview

The service integrates multiple datasets, computes optimal journeys, and exposes results through scalable APIs.

### Data Layer

- **Static Data:** Includes stops, routes, schedules, stop sequences, and fare information. Grouping of nearby stops (via "walk edges") is used to enable better multimodal connectivity.
- **Real-Time Data:** Live vehicle positions and ETAs, allowing dynamic updates for delay, disruption, and vehicle arrival information.
- **Dynamic Data:** Covers first/last mile mode availability (e.g., bike, auto, rideshare) and estimated pickup times.

### Data Processing Layer

- **Data Cleaning:** Removes duplicate stops, clusters nearby stops, and generates logical walk edges.
- **Graph Conversion:** Transforms transit data into a graph model for algorithmic routing.
- **Real-Time Integration:** Merges live feeds with static schedules to compute timely and accurate trip suggestions.
- **Filtering & Ranking:** Applies business logic to prioritize routes by real-time reliability, convenience, and user preferences.

### Pre-Computation Layer

- Precomputes popular origin-destination pairs, journey times, transfer metadata, and fare details.
- Periodically refreshed when static data updates occur.
- Ensures lower latency and higher system throughput during peak hours.

### Storage Layer

- Uses a relational database with tightly coupled schema aligned with the routing engine.
- Precomputed results are indexed for fast lookup and API delivery.

<p align="center">
  <img src="/img/jp-data-flow.png" alt="Journey Planner Data Flow" width="400" />
</p>

### API Layer

- **API Gateway:** Handles request management, security, rate limiting, and analytics.
- **Public APIs:**
  - `/api/get_stops?mode=<bus|metro|multi-modal>`
  - `/api/<version>/get_multi_modal/?<args>`

<p align="center">
  <img src="/img/jp-sys-arch.png" alt="Journey Planner System Architecture" width="700" />
</p>

---

## Core Algorithms

### Route Planning

- Computes optimal paths using both static and real-time data.
- Supports multimodal routing across various transport types.
- Penalizes excessive transfers and long walks.
- Prefers direct, fast, and real-time routes.

### Filtering and Ranking

- Filters routes based on:
  - Schedule availability
  - Transfer limits
  - Fare constraints
  - User-selected modes
- Ranks options by:
  - Real-time availability
  - Travel time
  - Frequency
  - Comfort and accessibility

### Error Handling

| Scenario                          | Status   | Message                          |
|----------------------------------|----------|----------------------------------|
| Missing input                    | Failed   | "parameter missing"              |
| Invalid stop ID or mode type     | Failed   | "invalid parameter"              |
| Coordinates outside service area | Failed   | "no result found"                |
| Incorrect time format            | Failed   | "invalid parameter"              |

---

## Optimization Model

The journey planner employs an optimization model to deliver efficient, practical, and reliable travel options using a weighted cost function.

### Cost Function Components

- **Travel Time:** Sum of segment times between stops.
- **Waiting Time:** Real-time vehicle arrival delays at origin points.
- **Transfer Penalty:**
  - Higher penalty for walking to another stop.
  - Lower penalty for same-stop transfers.
- **Walk Edge Constraints:** Routes with two consecutive walk segments are discarded.

### Optimization Pipeline

1. **Input Mapping:** Maps user's source and destination to nearest valid stops.
2. **Shortest Path Computation:** Runs routing algorithm for each valid pair.
3. **Result Scoring:** Applies filtering and ranking logic.
4. **User Presentation:** Curated journey options are returned to the interface or API client.

---

## API Endpoints

### 1. Get Stops
**Endpoint:** `/api/get_stops?<args>`  
**Method:** GET

**Arguments:**
- `mode`: `bus`, `metro`, or `multi-modal`

**Example:**
- `/api/get_stops?mode=bus`

### 2. Get Multi-Modal Journey
**Endpoint:** `/api/<version>/get_multi_modal/?<args>`  
**Method:** GET

**Required Arguments:**
- `src_type`, `src`, `dst_type`, `dest`, `mode`

**Optional Arguments:**
- `time`, `src_name`, `dst_name`

**Example:**
- `/api/v2/get_multi_modal/?src=[28.7041,77.1025]&src_type=place&dst=28.7041,77.1025&dst_type=place&mode=bus`


---

## Features

### Multimodal Trip Planning

| Feature                 | Bus | Metro | Multi-modal |
|------------------------|-----|-------|-------------|
| Real-time direct trips | ✔   | ✔     | ✔           |
| Real-time with transfer| ✔   | ✖     | ✔           |
| Scheduled trips        | ✔   | ✔     | ✔           |
| ETAs shown             | ✔   | ✔     | ✔           |
| Multiple suggestions   | ✔   | ✔     | ✔           |

- **Walkability & Accessibility:** Stops ranked based on walking distance (default: 300m) and step-free access.
- **Amenities Metadata:** Info on lifts, washrooms, and parking at key stations (if available).
- **Personalization:** Filters based on comfort, cost, and route complexity.

---

## Performance, Security & Monitoring

### Scalability
- Designed for cloud-native deployment.
- Auto-scaling and low-latency caching strategies support high usage.

### Security
- API access via token-based authentication.
- All communication is encrypted (SSL/TLS).
- Firewalled backend services in private network zones.

### Monitoring
- Integrated dashboards for response time, errors, and system health.
- Uses tools like ELK stack and CloudWatch for real-time visibility and alerting.

---

## Testing

### Automated
- Unit and integration testing for algorithms and APIs.
- Load testing using tools like **Locust** for stress scenarios.

### Manual
- Field testing with sample source/destination pairs.
- Validation of real-time vs scheduled results.

---

## User Documentation & Support

- **User Guides:** Step-by-step for end users and non-technical stakeholders.
- **API Reference:** OpenAPI-standard docs with examples, parameter details, and common issues.
- **FAQs:** Support for first-time users and developers.

---

## Open Source Repository

The source code and API documentation for the Journey Planner are available on GitLab:

[Journey Planner GitLab Repository](https://gitlab.com/transport-stack/journey-planner)

---

## References

- [GTFS Specification](https://gtfs.org/)
- [Dijkstra’s Algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)
- [Opti-Mile: Last Mile Research](https://ieeexplore.ieee.org/abstract/document/10422101)
