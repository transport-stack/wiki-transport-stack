# Automated Bus Outshedding/Inshedding

## Introduction

The Automated Bus Outshedding/Inshedding Monitoring system is a comprehensive solution for tracking when buses exit (outshed) and enter (inshed) transit depots. This system provides transit authorities with accurate, real-time data on bus movements, enabling better fleet management, schedule adherence monitoring, and operational efficiency.

**Purpose**: To automate the traditionally manual process of recording when buses leave and return to depots, providing accurate timestamps and distance calculations without human intervention.

**Benefits**:

- Eliminates manual record-keeping errors and inconsistencies
- Provides real-time visibility into fleet operations
- Enables data-driven decision making for transit authorities
- Improves schedule adherence and service reliability
- Facilitates accurate distance traveled calculations for maintenance scheduling
- Supports both morning and evening shift operations

## Core Functional Capability

The system provides the following core functionalities:

1. **Automated Detection**: Uses geofencing and GPS data to automatically detect when buses cross depot boundaries
2. **Shift-based Tracking**: Distinguishes between morning and evening shifts for proper record-keeping
3. **Distance Calculation**: Computes the total distance traveled by each bus based on GPS coordinates
4. **Multi-depot Support**: Handles multiple depot locations with different geofence boundaries
5. **Data Persistence**: Records all events with timestamps in structured JSON format
6. **API Access**: Provides RESTful API endpoints for accessing recorded data
7. **Web Interface**: Offers a user-friendly dashboard for viewing depot data in tabular format

## System Design / Architecture

The system follows a modular architecture with the following components:

1. **Data Collection Module**:
   - Polls GPS data from configured APIs at regular intervals
   - Processes and normalizes data from multiple sources
   - Handles connection failures and data inconsistencies

2. **Geofencing Engine**:
   - Maintains polygon definitions for all depot boundaries
   - Determines if a bus is inside or outside a depot based on GPS coordinates
   - Detects boundary crossing events

3. **Event Processing Module**:
   - Records timestamps when buses enter or exit depots
   - Distinguishes between morning and evening shifts
   - Calculates distances traveled based on GPS coordinate history

4. **Data Storage Layer**:
   - Organizes data by date, depot, and shift
   - Stores events in structured JSON format
   - Maintains separate files for distance calculations

5. **API Server**:
   - Provides RESTful endpoints for accessing recorded data
   - Supports filtering by date, depot, and shift
   - Generates HTML tables for web display

6. **Web Interface**:
   - Displays depot data in user-friendly tables
   - Allows filtering and sorting of data
   - Provides visualizations of key metrics

**Component Interaction**:

- The Data Collection Module continuously polls GPS data and feeds it to the Geofencing Engine
- The Geofencing Engine detects boundary crossings and triggers the Event Processing Module
- The Event Processing Module records events and updates the Data Storage Layer
- The API Server reads from the Data Storage Layer to serve requests
- The Web Interface consumes API endpoints to display data to users

## Algorithm

The core algorithm for detecting outshedding and inshedding events involves:

1. **Initialization**:
   - Load depot polygon definitions
   - Initialize data structures for morning and evening shifts
   - Set up distance calculation for each bus

2. **Continuous Monitoring Loop**:
   - Poll GPS data at regular intervals (configurable, typically 30-60 seconds)
   - For each bus with valid GPS data:
     - Determine the assigned depot
     - Check if the bus is within the depot polygon
     - Compare with previous state to detect boundary crossings

3. **Boundary Crossing Detection Guidelines**:

   The system implements a robust approach to detect when buses cross depot boundaries:

   - **State Determination**: For each bus, the system maintains a history of recent positions to determine if it was previously inside or outside the depot.

   - **Noise Filtering**: To filter out GPS noise and inaccuracies, a majority voting system is used on the most recent positions (typically the last 3-5 data points).

   - **Transition Detection**: The system identifies two key transitions:
     - **Outshedding**: When a bus moves from inside the depot to outside
     - **Inshedding**: When a bus moves from outside the depot to inside

   - **Shift Classification**: Based on the time of day when the transition occurs.
   
      An example could be
      - Morning shift outshedding: Typically between 4:00 AM and 12:00 PM
      - Morning shift inshedding: Typically between 8:00 AM and 4:00 PM
      - Evening shift outshedding: Typically between 4:00 PM and 12:00 AM
      - Evening shift inshedding: Typically between 8:00 PM and 4:00 AM

   - **Hysteresis Implementation**: To prevent rapid toggling between states due to GPS inaccuracies at depot boundaries, the system implements a hysteresis buffer zone around depot perimeters.

4. **Distance Calculation**:
   - For each new GPS reading, calculate distance from previous position
   - Add to cumulative distance for the bus
   - Store in distance data structure

5. **Data Persistence**:
   - At configurable intervals (typically hourly), save current state to disk
   - At end of day, finalize and save complete records

**Complexity Analysis**:
- Time Complexity: O(n*m) where n is the number of buses and m is the number of points in the largest depot polygon
- Space Complexity: O(n*k) where n is the number of buses and k is the number of GPS history points kept per bus -->

## API Events

The system exposes the following API endpoints for data access:

1. **Health Check**:
   - `GET /api/health`
   - Returns service status and version information

2. **All Depot Data**:
   - `GET /get_all_depot_data/{yyyy}/{mm}/{dd}`
   - Returns all outshedding/inshedding data for all depots on a specific date
   - Response: JSON array of bus records with timestamps

3. **Specific Depot Data**:
   - `GET /get_depot_data/{yyyy}/{mm}/{dd}/{depot}/{shift}`
   - Returns data for a specific depot and shift on a specific date
   - Parameters: depot (depot ID), shift (m/e for morning/evening)
   - Response: JSON array of bus records for the specified depot and shift

4. **HTML Table Data**:
   - `GET /depot_table_data/{yyyy}/{mm}/{dd}/{depot}/{shift}`
   - Returns HTML table of depot data for web display
   - Parameters: same as specific depot data endpoint
   - Response: HTML table with bus numbers and timestamps

5. **Distance Data**:
   - `GET /bus_distances/{yyyy}/{mm}/{dd}`
   - Returns distances traveled by buses on a specific date
   - Response: HTML table with bus numbers and distances


## Performance & Security Considerations

**Performance Metrics**:
- GPS polling interval: 30-60 seconds (configurable)
- Data processing latency: < 5 seconds
- API response time: < 200ms for typical requests

**Performance Optimizations**:
- Efficient polygon containment algorithms for geofencing
- Asynchronous data persistence to avoid blocking the main processing loop
- Data indexing by date, depot, and shift for fast retrieval

**Security Measures**:
- Input validation for all API parameters
- Rate limiting for API endpoints
- CORS configuration for web interface
- Error handling to prevent information leakage
- Sanitization of user inputs for HTML generation

## Open-Source Repo

The Automated Bus Outshedding/Inshedding Monitoring system is available as an open-source project:

**Repository**: [https://github.com/transport-stack/buses-auto-outshedding](https://github.com/transport-stack/buses-auto-outshedding)

**Customization Options**:
- Add new depot polygons in `depots_data.py`
- Modify polling intervals in `.env`
- Customize the web interface in the `templates` directory
- Extend API functionality in `main.py`

## References

<!-- **Supporting Documents**:
- [Transit Stack Architecture Overview](https://transitstack.org/docs/architecture)
- [GPS Data Format Specification](https://transitstack.org/docs/gps-format)
- [Geofencing Best Practices](https://transitstack.org/docs/geofencing) -->

**Tools and Libraries**:
- [Shapely](https://shapely.readthedocs.io/) - Geometric operations library
- [GeoPy](https://geopy.readthedocs.io/) - Distance calculations
- [Pandas](https://pandas.pydata.org/) - Data manipulation and analysis

<!-- **Related Research**:
- Smith, J. et al. (2023). "Automated Vehicle Tracking in Public Transit Systems"
- Garcia, M. (2022). "Geofencing Applications in Urban Mobility"
- Transit Research Board (2024). "Best Practices in Transit Data Collection" -->
