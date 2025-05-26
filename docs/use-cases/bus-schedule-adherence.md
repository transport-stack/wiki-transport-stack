# Schedule Adherence

## Introduction
Schedule adherence monitoring is a critical component of transit operations that measures how well vehicles adhere to their published schedules. This use case enables transit agencies to track and analyze schedule deviations in real-time, identify patterns of early or late arrivals/departures, and make data-driven decisions to improve service reliability. Benefits include improved passenger satisfaction through more predictable service, optimized resource allocation, and enhanced operational efficiency.

## Core Functional Capability
- Real-time monitoring of vehicle positions relative to scheduled timetables
- Calculation of schedule adherence metrics (early, on-time, late) at trip start and end points
- Comparison of actual vs. scheduled route assignments to detect off-route operations
- Trip completion tracking to measure service delivery
- Generation of detailed adherence reports for operational analysis
- Support for multiple transit agencies and vehicle types

## System Design / Architecture
The Schedule Adherence module follows a data processing pipeline architecture:
1. **Data Collection Layer**: Ingests real-time GTFS vehicle positions and scheduled timetables
2. **Processing Layer**: Matches vehicles to schedules, calculates adherence metrics
3. **Storage Layer**: Persists processed data in SQLite database for historical analysis
4. **Output Layer**: Generates JSON output for integration with other systems

Key components include:
- **app.py**: Main application entry point that handles data fetching and initial processing
- **trip.py**: Core processing engine that calculates adherence metrics
- **SQLite Database**: Stores processed GPS vs. schedule data
- **Configuration Management**: Environment variables for API endpoints and settings

![Schedule Adherence Architecture](https://example.com/placeholder-for-architecture-diagram.png)

## Algorithm
The schedule adherence algorithm works as follows:

1. **Data Collection**:
   - Fetch real-time vehicle positions from GTFS-RT feed
   - Load scheduled timetables from depot data

2. **Vehicle-Schedule Matching**:
   - For each vehicle, identify its assigned route and scheduled trip
   - Match actual timestamps with scheduled timestamps based on minimum time difference

3. **Adherence Calculation**:
   - Calculate time difference between actual and scheduled timestamps
   - Determine adherence status (early, on-time, late) based on configurable thresholds
   - Track trip completion percentage based on vehicle progression through route

4. **Trip Processing**:
   - Group vehicle position updates into trips using temporal and spatial clustering
   - Identify trip start and end points
   - Calculate adherence at both endpoints

5. **Data Aggregation**:
   - Combine actual and scheduled data
   - Generate comprehensive adherence metrics for each trip
   - Format output as structured JSON for downstream consumption
<!-- 
```
function calculateAdherence(actualTime, scheduledTime):
    timeDifference = actualTime - scheduledTime
    if timeDifference < -THRESHOLD:
        return "EARLY", abs(timeDifference)
    else if timeDifference > THRESHOLD:
        return "LATE", timeDifference
    else:
        return "ON_TIME", 0
``` -->

<!-- ## API Events
The module interacts with several external APIs:

1. **GTFS Realtime Feed** (GET):
   - Purpose: Fetch real-time vehicle positions
   - Data: Vehicle IDs, coordinates, timestamps, route IDs
   - Example Response:
     ```json
     {
       "entity": [
         {
           "id": "vehicle_1234",
           "vehicle": {
             "trip": { "route_id": "5476" },
             "position": { "latitude": 28.6139, "longitude": 77.2090 },
             "timestamp": 1621234567
           }
         }
       ]
     }
     ```

2. **Depot Tool API** (GET):
   - Purpose: Retrieve scheduled timetables
   - Data: Vehicle assignments, scheduled trip times, route information

3. **Vehicle Agency API** (GET):
   - Purpose: Get vehicle metadata
   - Data: Vehicle IDs, agency information, depot assignments, vehicle features -->

## Performance & Security Considerations
**Performance**:
- Optimized database queries with proper indexing
- Efficient data processing with pandas for large datasets
- Configurable time windows to limit data volume
- Progress tracking with tqdm for long-running operations
- Typical processing time: ~2-3 minutes for 1000 vehicles

**Security**:
- All API endpoints stored in environment variables, not in code
- Sensitive data excluded from version control via .gitignore
- Timeout parameters on API requests to prevent hanging
- Comprehensive error handling to prevent crashes
- No personally identifiable information (PII) stored or processed

## Open-Source Repo
The Schedule Adherence module is available as an open-source repository.

Repository URL: [gitlab.com/transport-stack/schedule-adherence](https://gitlab.com/transport-stack/schedule-adherence)

## References
- GTFS Realtime Specification: https://developers.google.com/transit/gtfs-realtime
- Transit Schedule Adherence Best Practices (TCRP Report)
- Python pandas documentation for data processing
- SQLite documentation for database operations
- Python-dotenv for environment variable management
