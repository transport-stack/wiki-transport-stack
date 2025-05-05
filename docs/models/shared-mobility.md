# Shared Mobility Data Model (GTFS-flex)

## Overview
This data model standardizes how shared mobility options—such as e-rickshaws, bike-sharing, and shuttles—are mapped and integrated around metro stations or other public transit features. The model leverages the GTFS-flex specification to support flexible and demand-responsive transit services.

## Core GTFS-flex Files and Fields

### 1. routes.txt
Defines shared mobility routes.
- `route_id`: Unique route identifier
- `agency_id`: Operator reference
- `route_short_name`, `route_long_name`: Route names
- `route_type`: Mode (e.g., 3 for bus, 11 for flexible service)
- `flex_via_stops`: List of stops served flexibly (if used)

### 2. trips.txt
Defines trips for each route.
- `trip_id`: Unique trip identifier
- `route_id`, `service_id`: References
- `trip_headsign`: Destination or route direction
- `flex_route_type`: Type of flexible service (e.g., "on-demand", "deviated fixed")

### 3. stops.txt
Pick-up and drop-off locations for shared mobility.
- `stop_id`: Unique stop identifier
- `stop_name`, `stop_lat`, `stop_lon`: Name and coordinates
- `location_type`: 0 (stop), 1 (station), 2 (entrance/gate), etc.
- `parent_station`: Reference to the metro station or hub

### 4. stop_times.txt
Defines timing and sequence for stops.
- `trip_id`, `arrival_time`, `departure_time`, `stop_id`, `stop_sequence`, `pickup_type`, `drop_off_type`

### 5. shapes.txt
Route geometries for flexible/shared mobility services.
- `shape_id`, `shape_pt_lat`, `shape_pt_lon`, `shape_pt_sequence`

### 6. agency.txt
Operator details.
- `agency_id`, `agency_name`, `agency_url`, `agency_timezone`

### 7. calendar.txt
Service calendar for flexible services.
- `service_id`, `monday`, `tuesday`, ..., `start_date`, `end_date`

### 8. frequencies.txt
For frequency-based shared mobility services.
- `trip_id`, `start_time`, `end_time`, `headway_secs`

### 9. flex-specific files (optional)
- `areas.txt`, `routes_flex.txt`, etc., for advanced flexible definitions

## Example Use Case
A metro station publishes a GTFS-flex feed with:
- Shared mobility routes (e.g., e-rickshaw loops, bike-share docks)
- Stops mapped to station gates or entrances
- Schedules, frequencies, and operator info

## Data Sharing
- GTFS-flex feeds are distributed as ZIP files containing all relevant text files.
- Enables integration with journey planners, MaaS platforms, and real-time transit apps.

---

For more on GTFS-flex, see: https://github.com/MobilityData/gtfs-flex
