# ETA Calculator



<p align="center">
  <img src="/img/eta-calculator-design.png" alt="ETA Calculator Design" width="700" />
</p>

## Why Provide ETA as a Service?

In large and complex bus networks, passengers and operators need reliable, real-time information on bus arrival times. Static schedules quickly become outdated due to traffic, operational changes, and disruptions. An ETA (Estimated Time of Arrival) service addresses these challenges by:

- **Improving Passenger Experience:** Reduces waiting time and uncertainty at stops, enabling better trip planning.
- **Increasing Trust:** Builds confidence in public transport by providing accurate, up-to-date arrival information.
- **Supporting Operations:** Helps agencies monitor performance and manage resources dynamically.
- **Enabling Ecosystem Integration:** Powers journey planners, mobile apps, and physical displays at stops or stations.

## How the ETA Service Works

The ETA service combines static (scheduled) and real-time data to provide accurate arrival predictions for buses at any stop. The approach is adaptable for any city or region, and can be integrated with open data platforms, GTFS-RT feeds, and other sources.

### Data Inputs
- **Static Data:** Schedules, routes, and historical travel times (ideally a year or more). Recent months are weighted more heavily to capture current patterns.
- **Real-Time Data:** Live bus positions (via GTFS-RT or similar feeds), and optionally, real-time traffic conditions.

### Core Process
1. **Data Collection:** Aggregate static and real-time data from open data portals or agency feeds.
2. **Preprocessing:** Clean, validate, and organize data for downstream use.
3. **Prediction Engine:** Use a plug-and-play algorithm or model to estimate arrival times at stops, for both individual vehicles and stops.
4. **API Layer:** Expose ETAs via robust, scalable APIs for integration in apps, displays, and other systems.


<p align="center">
  <img src="/img/eta-calculator-sys-arch.png" alt="ETA Calculator System Architecture" width="700" />
</p>


## API Endpoints

### 1. ETA at Stop
**Endpoint:** `/api/<version>/eta_at_stop?<args>`  
**Method:** GET

**Arguments:**
- `stop_id`: Valid GTFS stop_id

**Output:**
Returns stop info and a list of upcoming buses/routes with ETAs and vehicle IDs.

```json
{
  "message": "success",
  "description": "",
  "stop": {
    "name": "Example Bus Stop",
    "next_stop": "Next Major Stop",
    "updated_at": "04:40 PM",
    "refresh_time": 30000,
    "update_time": "04:40 PM"
  },
  "buses": [
    {
      "etas": [
        { "ac": "nac", "agency": "agency1", "color": "orange", "eta": 1, "vehicle_id": "BUS123", "timestamp": "1 mins ago" },
        { "ac": "ac", "agency": "agency2", "color": "blue", "eta": 11, "vehicle_id": "BUS456", "timestamp": "1 mins ago" }
      ],
      "route_id": 1001,
      "route_desc": "Route 1",
      "route_long_name": "Route 1 Up",
      "terminal_stop": "Main Terminal"
    }
  ]
}
```

**Example Calls:**
- `/api/v1/eta_at_stop/?stop_id=100`
- `/api/v1/eta_at_stop/?stop_id=457`

---

### 2. ETA for a Bus on Upcoming Stops
**Endpoint:** `/api/<version>/bus_eta/<args>`  
**Method:** GET

**Arguments:**
- `vehicle_id`: Valid vehicle_id from GTFS

**Output:**
Returns ETA for the bus at upcoming stops.

```json
{
  "data": [
    { "id": 27284, "vehicle_id": "BUS123", "route_id": 1001, "upcoming_stop_id": 469, "upcoming_stop_idx": 44, "stops_in_btw": 0, "eta": 1, "route_long_name": "Route 1 Up" }
  ],
  "message": "success",
  "description": ""
}
```

**Example Calls:**
- `/api/v1/bus_eta/?vehicle_id=BUS123`
- `/api/v1/bus_eta/?vehicle_id=BUS456`

---

## Continuous Improvement
- **Periodic Retraining:** The prediction engine should be periodically updated with new data to reflect evolving traffic and operational patterns.
- **Testing:** Regular unit, integration, and field testing are recommended to ensure accuracy and reliability.

## Integration & Open Source
- This ETA service can be integrated into journey planners, mobile apps, and public information systems.

## Open Source Repository

The source code and API documentation for the ETA Calculator are available on GitLab:

[ETA Calculator GitLab Repository](https://gitlab.com/transport-stack/eta-calculator)
