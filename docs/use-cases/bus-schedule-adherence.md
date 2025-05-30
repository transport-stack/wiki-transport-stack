
# Schedule Adherence

## Introduction

Schedule adherence monitoring is a critical function for public transit operations. It measures how well buses follow their published timetables, identifying delays, early departures, and missed trips. The Schedule Adherence system provides real-time analysis and historical reporting to help agencies enhance reliability, passenger satisfaction, and service delivery.

**Key Benefits:**
- Improved punctuality through real-time tracking and alerts
- Better planning with adherence analytics across routes and trips
- Enhanced service delivery monitoring
- Configurable thresholds per agency requirements

## Core Functional Capability

The Schedule Adherence module provides the following features:

1. **Real-time Monitoring**
   - Tracks vehicle positions against scheduled trip times using GTFS-Realtime and static GTFS feeds.

2. **Adherence Metrics Calculation**
   - Computes deviation from scheduled times at the start and end of trips.
   - Classifies trips as **Early**, **On-Time**, or **Late** based on a configurable window (default: ±10 minutes).

3. **Trip Completion Tracking**
   - Monitors each vehicle's progression and calculates completion percentage for every scheduled trip.

4. **Historical Logging**
   - Stores schedule adherence data in a local database for later analysis.

5. **Report Generation**
   - Outputs structured JSON files for each evaluation cycle, suitable for integration into dashboards or analytics tools.

6. **Multi-Agency and Multi-Route Support**
   - Handles multiple transit agencies, routes, and vehicle types with dynamic configurations.


## System Design / Architecture

The system is structured around a data processing pipeline that:
- Fetches real-time position data
- Matches it with schedule data
- Applies time deviation logic
- Outputs structured results to disk

import Mermaid from '@site/src/components/Mermaid';

<Mermaid chart={`
flowchart TD
    A[GTFS-Realtime] --> B[Data Collection]
    A2[GTFS Static Schedule] --> B
    B --> C[Vehicle-Schedule Matching]
    C --> D[Adherence Calculation]
    D --> E[Output]
`} />

## Algorithm

The Schedule Adherence algorithm includes the following steps:

1. **Data Collection**
   - Real-time data is fetched from GTFS-Realtime feeds (vehicle positions, timestamps, route IDs).
   - Schedule data is loaded from GTFS static files (trip start/end times, route mappings).

2. **Vehicle-Schedule Matching**
   - Vehicles are matched to scheduled trips based on route IDs and closest timestamp alignment.
   - Only active trips are considered based on service calendar and time of day.

3. **Trip Start/End Interpolation**
   - Since GTFS-RT does not provide explicit trip start or end markers, the system **interpolates** these using ETA data.
   - For terminals, we estimate the start and end time based on when a bus would have reached the first or last stop using its ETA.

4. **Adherence Calculation**
   - Time deviations are calculated for:
     - Scheduled vs. actual trip start
     - Scheduled vs. actual trip end
   - Trips are labeled as:
     - **Early**: >10 minutes before scheduled
     - **Late**: >10 minutes after scheduled
     - **On-Time**: Within ±10 minutes window
   - These thresholds are **configurable** to suit each agency.

5. **Trip Completion Evaluation**
   - Vehicle progress is calculated based on how many scheduled stops were reached.
   - Completion percentage is derived and logged.

6. **Output Generation**
   - Adherence summaries are saved as structured JSON.
   - Each file contains trip-level metadata, timestamps, vehicle info, route ID, and adherence classification.

## Input Data Requirements

To ensure proper functioning of the logic, the following data inputs are expected:

- **GTFS-Realtime Feed**:
  - `vehicle_id`
  - `route_id`
  - `trip_id`
  - `timestamp`
  - `position` (latitude, longitude)

- **GTFS Static Schedule**:
  - `trip_id`
  - `start_time`, `end_time`
  - `stop_sequence`
  - `route_id`

- **Recommended Data Granularity**:
  - GPS updates every 30 seconds or faster
  - Timestamps in UTC or timezone-aligned
  - ETA data accurate within 1-minute error margin

## Output

- Output is written to a JSON file at each evaluation cycle.
- Each file contains:
  - `trip_id`, `vehicle_id`, `route_id`
  - `actual_start_time`, `scheduled_start_time`
  - `actual_end_time`, `scheduled_end_time`
  - `adherence_status` ("early", "on-time", "late")
  - `completion_percent`

## Open-Source Repo

The system is available on GitLab:  
🔗 [gitlab.com/transport-stack/schedule-adherence](https://gitlab.com/transport-stack/schedule-adherence)

## References

**Transit Standards**
   - [GTFS-Realtime](https://developers.google.com/transit/gtfs-realtime)

