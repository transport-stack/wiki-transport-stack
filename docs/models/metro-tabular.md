# Metro Data Ecosystem

## 1. Introduction

### Scope
The datasets encompass:
- Station and gate details.
- Parking facilities.
- Passenger flows and hourly station usage.
- GTFS components (stops, routes, trips, schedules).

### Stakeholders
Transit agencies, GIS teams, developers, urban planners, and researchers.

### Use Cases
- Developing integrated transit systems and passenger applications.
- Generating route maps and schedules.
- Planning transit operations and optimizing resource allocation.
- Analyzing passenger flow and peak-hour trends.
- Supporting integration with third-party transit platforms like Google Maps.

---

## 2. Data Models

### 2.1 Stations
- **Description:** Represents metro stations in the DMRC network.
- **Fields:**

| Field                  | Type     | Mandatory | Description                                      | Example            |
|------------------------|----------|-----------|--------------------------------------------------|--------------------|
| line                  | Integer  | Yes       | Numeric identifier of the metro line.           | 2                  |
| station_id            | String   | Yes       | Unique code for the station.                    | "AHNR"             |
| station_name          | String   | Yes       | Name of the station.                            | "Adarsh Nagar"     |
| station_type          | String   | Yes       | Indicates if the station is "Elevated" or "Underground". | "Elevated"         |
| interchange           | Boolean  | Yes       | Specifies if the station serves as an interchange. | "N"                |
| latitude              | Float    | Yes       | Latitude coordinate of the station (up to 4 decimal places). | 28.7169            |
| longitude             | Float    | Yes       | Longitude coordinate of the station (up to 4 decimal places). | 77.1703            |
| station_commercial_name | String | No        | Commercial or alternate name for the station.   | "Wave City Center" |

---

### 2.2 Gates
- **Description:** Entry and exit gates for stations.
- **Fields:**

| Field      | Type     | Mandatory | Description                          | Example                 |
|------------|----------|-----------|--------------------------------------|-------------------------|
| station_id | String   | Yes       | Links to the corresponding station.  | "SPBI"                 |
| gate_name  | String   | Yes       | Unique identifier for the gate.      | "Gate No. 1"           |
| location   | String   | No        | Description of the gate’s location.  | "Badli Railway Station"|
| latitude   | Float    | Yes       | Latitude coordinate of the gate.     | 28.7446                |
| longitude  | Float    | Yes       | Longitude coordinate of the gate.    | 77.1379                |

---

### 2.3 Parking
- **Description:** Parking facilities associated with metro stations.
- **Fields:**

| Field               | Type    | Mandatory | Description                         | Example                 |
|---------------------|---------|-----------|-------------------------------------|-------------------------|
| parking_id          | String  | Yes       | Unique identifier for the parking.  | "PARK_1"               |
| station_id          | String  | Yes       | Reference to the parent station.    | "AHNR"                 |
| parking_available   | Boolean | Yes       | Indicates parking availability (Y/N). | "Y"                  |
| parking_cycle       | Integer | No        | Spaces available for cycles.        | 50                     |
| parking_motorcycle  | Integer | No        | Spaces available for motorcycles.   | 100                    |
| parking_car         | Integer | No        | Spaces available for cars.          | 30                     |
| latitude            | Float   | Yes       | Latitude of the parking facility.   | 28.4933                |
| longitude           | Float   | Yes       | Longitude of the parking facility.  | 77.1491                |
| parking_contact     | String  | No        | Contact details for the contractor. | "9999999999"           |
| parking_contractor  | String  | No        | Name of the contractor.             | "M/s ABC Consortium"   |

---

### 2.4 Origin-Destination Flow
- **Description:** Passenger flow between stations.
- **Fields:**

| Field                  | Type     | Mandatory | Description                       | Example  |
|------------------------|----------|-----------|-----------------------------------|----------|
| origin_station_id      | String   | Yes       | Origin station identifier.        | "AHNR"   |
| destination_station_id | String   | Yes       | Destination station identifier.   | "MNGM"   |
| passenger_flow         | Integer  | Yes       | Passenger count between stations. | 2259     |

---

### 2.5 Hourly Entry-Exit Data
- **Description:** Hourly station usage statistics.
- **Fields:**

| Field           | Description                              |
|-----------------|------------------------------------------|
| date_time       | Timestamp of the record.                |
| station_id      | Station reference.                      |
| transaction_type| Type (ENTRY/EXIT).                      |
| hourly_counts   | Hourly passenger counts.                |

**Example:**
```
date_time,station_id,transaction_type,HR4,HR5,HR6,...,HR24
2024-02-01 00:00,AHNR,ENTRY,0,151,397,...,0
```

---

## 3. Integration Framework

### 3.1 Cross-Dataset Relationships
- Match GTFS stops with stations using `stop_id` and coordinates.
- Link gates and parking to their parent stations.
- Validate OD paths using GTFS shapes.

### 3.2 Example Workflows
- **Passenger Flow Analysis:** Combine OD flow data with hourly entry-exit statistics for peak-hour analysis.
- **Route Mapping:** Use GTFS shapes and stops to visualize routes.

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
