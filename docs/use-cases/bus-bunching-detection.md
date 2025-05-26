# Bus Bunching Detection

## Introduction

Bus bunching is a common problem in public transit systems where buses that are scheduled to be evenly spaced arrive close to each other at the same stop. This phenomenon results in irregular service intervals, longer wait times for passengers, and inefficient use of transit resources. The Bus Bunching Detection system provides transit agencies with a tool to identify, monitor, and analyze bus bunching incidents in real-time, enabling them to take corrective actions and improve service reliability.

**Key Benefits:**
- Improved transit service reliability and passenger experience
- Reduced passenger wait times by maintaining consistent headways
- Enhanced operational efficiency through better resource allocation
- Data-driven insights for transit planners to optimize schedules
- Real-time monitoring capabilities for transit operations centers

## Core Functional Capability

The Bus Bunching Detection system provides the following core functionalities:

1. **Real-time Detection**: Identifies instances where multiple buses on the same route are arriving at the same stop within a short time interval (e.g., 3 minutes).

2. **Spatial Filtering**: Excludes known locations where buses naturally bunch, such as terminals, depots, and layover points, to reduce false positives.

3. **Temporal Analysis**: Calculates time differences between buses and compares them against expected headways derived from schedule data.

4. **Persistent Storage**: Maintains a database of bunching incidents to track patterns over time and avoid duplicate reporting.

5. **Data Export**: Generates standardized CSV and JSON outputs for integration with dashboards, alerts, and other transit management systems.

6. **Configurable Parameters**: Allows adjustment of detection thresholds, time windows, and other parameters to suit different operational contexts.

## System Design / Architecture

The Bus Bunching Detection system follows a modular architecture with the following components:

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Data Sources   │────▶│  Data Processor │────▶│  Data Storage   │
└─────────────────┘     └─────────────────┘     └─────────────────┘
        │                       │                       │
        │                       │                       │
        ▼                       ▼                       ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│ Configuration   │     │ Bunching        │     │ Output          │
│ Management      │────▶│ Detection       │────▶│ Generation      │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

### Components:

1. **Data Sources**: Interfaces with external APIs to fetch:
   - Real-time bus positions and ETAs
   - Stop information
   - Route information
   - Schedule data
   - Fleet information

2. **Configuration Management**: Handles loading and validation of configuration from:
   - Environment variables (.env file)
   - Configuration file (config.ini)
   - Default fallback values

3. **Data Processor**: Performs data cleaning, transformation, and enrichment:
   - Filters out irrelevant data points
   - Merges data from different sources
   - Converts timestamps to standardized format
   - Calculates derived metrics

4. **Bunching Detection**: Implements the core algorithm to identify bunching incidents:
   - Groups buses by route and stop
   - Calculates time differences between buses
   - Applies spatial and temporal filters
   - Identifies bunching patterns

5. **Data Storage**: Manages persistent storage of bunching incidents:
   - SQLite database with appropriate schema
   - Deduplication logic
   - Historical data management

6. **Output Generation**: Creates standardized outputs for consumption:
   - CSV files for detailed analysis
   - JSON format for API integration
   - Structured data for visualization

## Algorithm

The bus bunching detection algorithm follows these key steps:

1. **Data Collection and Preparation**:
   - Fetch real-time bus positions with ETAs from transit data API
   - Filter out buses at the beginning or end of routes (first/last 5 stops)
   - Convert timestamps to a standardized format

2. **Spatial Filtering**:
   - Remove buses near known terminals, depots, and layover points
   - Apply a distance threshold (default: 300 meters) to exclude these locations

3. **Temporal Filtering**:
   - Group buses by route and upcoming stop
   - Filter to include only buses with ETAs less than 3 minutes
   - Ensure data is from within a 1-minute time window to maintain recency

4. **Bunching Identification**:
   - For each route and stop combination, identify groups of buses arriving within the threshold
   - Create a mapping of each vehicle to its "bunching vehicles" (other vehicles arriving at the same time)
   - Calculate the number of vehicles bunching at each location

5. **Deduplication**:
   - Compare new bunching incidents against the database
   - For existing vehicle/route combinations, check if the time difference exceeds the route's average trip time
   - Only record new incidents or those that occur after a significant time interval

6. **Output Generation**:
   - Create structured JSON with bunching details
   - Generate CSV files for analysis
   - Update the SQLite database for persistence

<!-- ## API Events

The system interacts with the following external APIs:

### 1. Bus Positions API
- **Purpose**: Retrieve real-time bus positions with ETA information
- **Request Method**: GET
- **URL Format**: `https://[domain]/api/get_buses_next_stop_eta`
- **Response Format**: JSON array of bus position objects
- **Key Fields**:
  - `vehicle_id`: Unique identifier for the vehicle
  - `route_id`: Route identifier
  - `upcoming_stop_id`: Next stop identifier
  - `upcoming_stop_idx`: Index of next stop in route
  - `route_len`: Total number of stops in route
  - `timestamp`: Unix timestamp
  - `eta`: Estimated time of arrival in minutes
  - `bus_lat`, `bus_lon`: Geographic coordinates

### 2. Stops API
- **Purpose**: Retrieve information about all stops in the system
- **Request Method**: GET
- **URL Format**: `https://[domain]/api/get_stops`
- **Response Format**: JSON object with stops array
- **Key Fields**:
  - `stops`: Array of stop objects with id, name, lat, lng, next_stop

### 3. Routes API
- **Purpose**: Retrieve information about all routes in the system
- **Request Method**: GET
- **URL Format**: `https://[domain]/api/get_routes`
- **Response Format**: JSON object with routes array
- **Key Fields**:
  - `routes`: Array of route objects with id, agency, long_name, etc.

### 4. Schedule API
- **Purpose**: Retrieve schedule information for trips
- **Request Method**: GET
- **URL Format**: `https://[domain]/api/duty_master.txt`
- **Response Format**: CSV file
- **Key Fields**: Plate No., Route No., Trip Start Time, Trip End Time, etc.

### 5. Fleet API
- **Purpose**: Retrieve information about the vehicle fleet
- **Request Method**: GET
- **URL Format**: `https://[domain]/api/all_fleet`
- **Response Format**: JSON array of vehicle objects
- **Key Fields**: vehicle_id, agency, etc.

## Performance & Security Considerations

### Performance Considerations:

1. **Data Volume Management**:
   - Filtering early in the pipeline to reduce processing load
   - Using efficient data structures (pandas DataFrames) for large datasets
   - Implementing pagination or time-window filtering for historical data

2. **Processing Efficiency**:
   - Optimized grouping operations to reduce computational complexity
   - Vectorized operations where possible instead of iterative processing
   - Progress tracking with tqdm for long-running operations

3. **Database Performance**:
   - SQLite indexes on frequently queried fields
   - Batch processing for database operations
   - Deduplication logic to prevent database bloat

4. **Network Resilience**:
   - Retry mechanism with exponential backoff for API requests
   - Timeout settings to prevent hanging on slow responses
   - Error handling for API failures

### Security Considerations:

1. **Credential Management**:
   - Environment variables for API endpoints and credentials
   - .env file excluded from version control
   - Configuration separation from code

2. **Data Protection**:
   - Sanitization of inputs to prevent SQL injection
   - Minimal data retention policy
   - No storage of sensitive passenger information

3. **Deployment Security**:
   - Containerization support for isolated execution
   - Principle of least privilege for API access
   - Logging of access and operations for audit -->

## Open-Source Repo

The Bus Bunching Detection system is available as an open-source project on GitLab:

**Repository**: [gitlab.com/transport-stack/bus-bunching-detection](https://gitlab.com/transport-stack/bus-bunching-detection)


## References

1. **Transit Data Standards**:
   - General Transit Feed Specification (GTFS): https://gtfs.org/
   - GTFS Realtime: https://gtfs.org/realtime/

2. **Tools and Libraries**:
   - Pandas: https://pandas.pydata.org/
   - GeoPy: https://geopy.readthedocs.io/
   - SQLite: https://www.sqlite.org/
