
# Bus Bunching Detection

## Introduction

Bus bunching is a common issue in public transit systems where buses scheduled to run at regular intervals arrive at the same stop in close succession. This results in irregular service, increased passenger wait times, and inefficient fleet utilization. The Bus Bunching Detection system equips transit agencies with a tool to detect, monitor, and analyze bunching incidents in real-time, enabling data-driven interventions to improve service reliability.

**Key Benefits:**
- Improved transit service reliability and passenger experience
- Reduced wait times through consistent headway maintenance
- Efficient resource utilization via proactive incident detection
- Insightful data for schedule optimization by planners
- Real-time monitoring for operations control centers

## Core Functional Capability

The system offers the following core features:

1. **Real-time Detection**  
   Identifies cases where multiple buses on the same route arrive at the same stop within a configured short time interval (e.g., **3 minutes between any pair of buses**).

2. **Spatial Filtering**  
   Excludes locations like terminals, depots, or layover points using geofencing and a **300-meter default radius** to reduce false positives due to naturally slow movements.

3. **Temporal Analysis**  
   Computes headway deviations between buses and compares them with expected intervals derived from GTFS schedule data.

4. **Persistent Storage**  
   Maintains a SQLite-backed historical log of incidents with deduplication logic to avoid repeated alerts for the same group of vehicles.

5. **Data Export**  
   Generates CSV and JSON reports for integration with dashboards, maps, alerting systems, and internal analytics.

6. **Configurable Parameters**  
   Key detection thresholds and logic settings are user-configurable:
   - Time threshold between buses (default: 3 minutes)
   - ETA cutoff for evaluation (default: &lt;3 minutes)
   - Time window for bunching group identification (default: 1 minute)
   - Terminal margin (number of stops to skip from beginning and end; default: 5)

## System Design / Architecture

The system follows a modular, pipeline-based design:

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Data Sources   │────▶│  Data Processor │────▶│  Data Storage   │
└─────────────────┘     └─────────────────┘     └─────────────────┘
        │                       │                       │
        ▼                       ▼                       ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│ Configuration   │     │ Bunching        │     │ Output          │
│ Management      │────▶│ Detection       │────▶│ Generation      │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

### Components

1. **Data Sources**
   - Real-time bus positions and ETAs (GTFS-Realtime feeds or equivalent APIs)
   - Stop and route information
   - Schedule data (GTFS static or CSV)
   - Fleet data (bus identifiers, agency details)

2. **Configuration Management**
   - Uses `.env` and `config.ini` files with environment fallback
   - Supports agency-specific configurations

3. **Data Processor**
   - Filters out:
     - Buses near terminals or in first/last 5 stops
     - Data older than 1-minute window
   - Computes derived metrics (e.g., headway gaps, bunching count per route)
   - Converts timestamps into standardized UTC format

4. **Bunching Detection**
   - Groups buses by `route_id` and `upcoming_stop_id`
   - Identifies groups with ETA gaps &lt; 3 minutes between **any two buses**
   - Applies spatial and temporal filters to rule out false bunching

5. **Data Storage**
   - Small sized SQLite database with schema optimized for route/vehicle lookups for input.
   - Deduplicates based on vehicle and timestamp

6. **Output Generation**
   - CSVs for offline analysis
   - JSON files for frontend or API use

## Algorithm

1. **Data Collection and Preparation**
   - Fetch ETA and location data via APIs or GTFS-RT
   - Remove buses within first/last 5 stops (to avoid skewed headway patterns)
   - Convert and align timestamps

2. **Spatial Filtering**
   - Exclude locations within 300m of terminals and layovers

3. **Temporal Filtering**
   - Group buses by stop and route
   - Filter for buses with ETA &lt; 3 minutes
   - Apply 1-minute window to ensure data recency

4. **Bunching Identification**
   - Detect groups where **each pair of buses** is within time threshold
   - Count number of vehicles per bunch
   - Maintain mapping of all vehicles in a bunched group

5. **Deduplication**
   - Use unique keys: `vehicle_id + stop_id + timestamp`
   - Avoid duplicate logs unless a significant interval has passed (3-4 hours)

6. **Output Generation**
   - JSON records with structured details (vehicle IDs, ETA gaps, stop info)
   - CSV reports for bulk analysis
   - Update internal database

## Visualization

While this module does not include native map rendering, the output JSON and CSV files can be:
- Integrated with existing operations dashboards
- Mapped using external tools like **Leaflet**, **Mapbox**, or **Kepler.gl**
- Overlaid on route maps to track frequent bunching hotspots

## Output

- Output is saved as structured JSON and CSV files
- Designed for use in offline dashboards, analysis tools, or custom visualizations

## Open-Source Repo

The system is available on GitLab:  
🔗 [gitlab.com/transport-stack/bus-bunching-detection](https://gitlab.com/transport-stack/bus-bunching-detection)

## References

1. **Transit Data Standards**
   - [GTFS](https://gtfs.org/)
   - [GTFS Realtime](https://gtfs.org/realtime/)

2. **Libraries & Tools**
   - [Pandas](https://pandas.pydata.org/)
   - [GeoPy](https://geopy.readthedocs.io/)
   - [SQLite](https://www.sqlite.org/)
