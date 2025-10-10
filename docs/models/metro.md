# Metro Data Ecosystem

## 1. Introduction

### Scope
The datasets encompass:
- Station and gate details.
- Parking facilities.
- Passenger flows and hourly station usage.
- GTFS components (stops, routes, trips, schedules).

### Use Cases
- Developing integrated transit systems and passenger applications.
- Generating route maps and schedules.
- Planning transit operations and optimizing resource allocation.
- Analyzing passenger flow and peak-hour trends.
- Supporting integration with third-party transit platforms like Google Maps.

---

## 2. Unified Data Model

### 2.1. Stations
- **Description:** Represents metro stations in the DMRC network.
- **Fields:**
  - `station_id`: Unique identifier for the station (e.g., "AHNR").
  - `station_name`: Descriptive name of the station (e.g., "Adarsh Nagar").
  - `latitude`: Latitude of the station.
  - `longitude`: Longitude of the station.
  - `type_of_station`: Elevated or underground.
  - `interchange`: Interchange station (Y/N).

**Example:**
```
station_id,station_name,latitude,longitude,type_of_station,interchange
AHNR,Adarsh Nagar,28.7169,77.1703,Elevated,N
```

### 2.2. Gates
- **Description:** Entry and exit gates for stations.
- **Fields:**
  - `gate_id`: Unique identifier for the gate.
  - `station_id`: Parent station reference.
  - `gate_name`: Name or number of the gate.
  - `latitude`: Latitude of the gate.
  - `longitude`: Longitude of the gate.
  - `location`: Placement description.

**Example:**
```
gate_id,station_id,gate_name,latitude,longitude,location
GATE_1,AHNR,Gate No. 1,28.7446,77.1379,Near Badli Railway Station
```

### 2.3. Parking
- **Description:** Parking facilities associated with metro stations.
- **Fields:**
  - `parking_id`: Unique identifier.
  - `station_id`: Reference to the parent station.
  - `parking_available`: Indicates parking availability (Y/N).
  - `parking_cycle`: Spaces for cycles.
  - `parking_motorcycle`: Spaces for motorcycles.
  - `parking_car`: Spaces for cars.
  - `latitude`: Latitude of parking.
  - `longitude`: Longitude of parking.

**Example:**
```
parking_id,station_id,parking_available,parking_cycle,parking_motorcycle,parking_car,latitude,longitude
PARK_1,AHNR,Y,50,100,30,28.4933,77.1491
```

### 2.4. Origin-Destination Flow
- **Description:** Passenger flow between stations.
- **Fields:**
  - `origin_station_id`: Origin station.
  - `destination_station_id`: Destination station.
  - `passenger_flow`: Passenger count.

**Example:**
```
origin_station_id,destination_station_id,passenger_flow
AHNR,MNGM,2259
```

### 2.5. Hourly Entry-Exit Data
- **Description:** Hourly station usage statistics.
- **Fields:**
  - `date_time`: Timestamp of the record.
  - `station_id`: Station reference.
  - `transaction_type`: Type (ENTRY/EXIT).
  - `hourly_counts`: Hourly passenger counts.

**Example:**
```
date_time,station_id,transaction_type,HR4,HR5,HR6,...,HR24
2024-02-01 00:00,AHNR,ENTRY,0,151,397,...,0
```

### 2.6. GTFS Data Components
#### Agency
- **Fields:**
  - `agency_id`: Unique identifier for the agency.
  - `agency_name`: Name of the agency providing transit services.
  - `agency_url`: URL of the agency's website.
  - `agency_timezone`: Timezone of the agency's operations.

**Example:**
```
agency_id,agency_name,agency_url,agency_timezone
DMRC,Delhi Metro Rail Corporation,http://www.delhimetrorail.com/,Asia/Kolkata
```

#### Stops
- **Fields:**
  - `stop_id`: Unique identifier for each stop.
  - `stop_name`: Name of the stop/station.
  - `stop_lat`: Latitude coordinate of the stop.
  - `stop_lon`: Longitude coordinate of the stop.

**Example:**
```
stop_id,stop_name,stop_lat,stop_lon
1,Dilshad Garden,28.675991,77.321495
```

#### Routes
- **Fields:**
  - `route_id`: Unique identifier for the route.
  - `route_short_name`: Short name or code for the route.
  - `route_long_name`: Full descriptive name of the route.
  - `route_type`: Type of transit service (e.g., 1 for Metro).

**Example:**
```
route_id,route_short_name,route_long_name,route_type
33,R_SP_R,RAPID_Phase 3 to Sector 55-56,1
```

#### Trips
- **Fields:**
  - `trip_id`: Unique identifier for the trip.
  - `route_id`: Reference to the associated route.
  - `direction_id`: Direction of the trip (0 or 1).
  - `shape_id`: Identifier for the spatial geometry of the trip.

**Example:**
```
trip_id,route_id,direction_id,shape_id
0,33,0,shp_1_30
```

---

## 3. Integration Framework

### 3.1. Cross-Dataset Relationships
- Stations and Stops: Match GTFS stops with stations using `stop_id` and coordinates.
- Gates and Parking: Link gates and parking to their parent stations.
- OD Flow and Shapes: Validate OD paths using GTFS shapes.

### 3.2. Example Workflows
- Passenger Flow Analysis: Combine OD flow data with hourly entry-exit statistics for peak-hour analysis.
- Route Mapping: Use GTFS shapes and stops to visualize routes.

---

## 4. Validation Standards
- **Coordinate Precision:** Validate all latitude/longitude fields to 6 decimal places.
- **Uniqueness:** Ensure unique identifiers for all entities (e.g., `station_id`, `route_id`).
- **Cross-Dataset Validation:** Confirm relationships between stations, stops, gates, and parking.

---

## 5. Example Data Templates

### Stations Template
```
station_id,station_name,latitude,longitude,type_of_station,interchange
AHNR,Adarsh Nagar,28.7169,77.1703,Elevated,N
```

### Gates Template
```
gate_id,station_id,gate_name,latitude,longitude,location
GATE_1,AHNR,Gate No. 1,28.7446,77.1379,Near Badli Railway Station
```

### GTFS Stops Template
```
stop_id,stop_name,stop_lat,stop_lon
1,Dilshad Garden,28.675991,77.321495
```
