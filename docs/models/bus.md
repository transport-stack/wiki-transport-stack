# Bus Data Ecosystem

## 1. Introduction

### Scope
The dataset encompasses:
- Standard GTFS components (Stops, Routes, Trips, Stop Times, Shapes, Fare Rules, Fare Attributes).
- Additional datasets such as OD (Origin-Destination) flow for buses, operational schedules, and passenger boarding/alighting patterns.

### Stakeholders
Transit agencies, GIS teams, developers, urban planners, and researchers.

### Use Cases
- Enhancing transit planning and operations management.
- Supporting multi-modal transport integration and route optimization.
- Developing real-time passenger information systems and analytics tools.

---

## 2. Categories and Data Fields

### Standard GTFS Categories

#### 1. Stops (`stops.txt`)
- **Fields:**
  - `stop_id`: Unique identifier (mandatory).
  - `stop_name`: Name of the stop (mandatory).
  - `stop_lat`, `stop_lon`: Geographic coordinates (mandatory).
  - `location_type`: Type of stop (e.g., 0 for stop, 1 for station).
  - `parent_station`: Reference to the parent station, if applicable.

**Example:**
```
stop_id,stop_name,stop_lat,stop_lon,location_type,parent_station
1001,Adarsh Nagar,28.7169,77.1703,0,
```

#### 2. Routes (`routes.txt`)
- **Fields:**
  - `route_id`: Unique identifier (mandatory).
  - `agency_id`: Operator identifier (mandatory).
  - `route_short_name`: Short name or number (mandatory).
  - `route_long_name`: Full route description (mandatory).
  - `route_type`: Transport type (e.g., 3 for bus).

**Example:**
```
route_id,agency_id,route_short_name,route_long_name,route_type
2001,DTC,620,New Delhi to Dwarka,3
```

#### 3. Trips (`trips.txt`)
- **Fields:**
  - `trip_id`: Unique identifier (mandatory).
  - `route_id`: Associated route (mandatory).
  - `service_id`: Service schedule identifier (mandatory).
  - `trip_headsign`: Destination or key stops.

**Example:**
```
trip_id,route_id,service_id,trip_headsign
3001,2001,1,Dwarka Sector 21
```

#### 4. Stop Times (`stop_times.txt`)
- **Fields:**
  - `trip_id`: Associated trip identifier (mandatory).
  - `arrival_time`, `departure_time`: Timings (mandatory).
  - `stop_id`: Stop identifier (mandatory).
  - `stop_sequence`: Stop order in the trip (mandatory).

**Example:**
```
trip_id,arrival_time,departure_time,stop_id,stop_sequence
3001,08:00:00,08:00:00,1001,1
```

#### 5. Shapes (`shapes.txt`)
- **Fields:**
  - `shape_id`: Identifier for the shape (mandatory).
  - `shape_pt_lat`, `shape_pt_lon`: Coordinates of shape points (mandatory).
  - `shape_pt_sequence`: Order of points (mandatory).

**Example:**
```
shape_id,shape_pt_lat,shape_pt_lon,shape_pt_sequence
4001,28.7169,77.1703,1
```

#### 6. Fare Attributes (`fare_attributes.txt`)
- **Fields:**
  - `fare_id`: Unique identifier for the fare (mandatory).
  - `price`: Fare amount (mandatory).
  - `currency_type`: Currency code (e.g., INR).
  - `payment_method`: 0 (pay onboard) or 1 (prepaid).

**Example:**
```
fare_id,price,currency_type,payment_method
5001,10.00,INR,0
```

#### 7. Fare Rules (`fare_rules.txt`)
- **Fields:**
  - `fare_id`: Fare identifier (mandatory).
  - `route_id`: Associated route.

**Example:**
```
fare_id,route_id
5001,2001
```

---

### Additional Suggested Datasets

#### 1. OD Flow for Buses (`od_flow.csv`)
- **Fields:**
  - `origin_stop_id`: Origin stop identifier.
  - `destination_stop_id`: Destination stop identifier.
  - `passenger_count`: Number of passengers traveling.

**Example:**
```
origin_stop_id,destination_stop_id,passenger_count
1001,2001,350
```

#### 2. Operational Schedules (`schedules.txt`)
- **Fields:**
  - `route_id`: Route identifier.
  - `service_start_time`, `service_end_time`: Operation hours.
  - `frequency`: Frequency of service in minutes.

**Example:**
```
route_id,service_start_time,service_end_time,frequency
2001,06:00:00,23:00:00,10
```

#### 3. Boarding/Alighting Patterns (`boarding_alighting.csv`)
- **Fields:**
  - `stop_id`: Stop identifier.
  - `boarding_count`: Number of passengers boarding.
  - `alighting_count`: Number of passengers alighting.

**Example:**
```
stop_id,boarding_count,alighting_count
1001,120,90
```

---

## 3. Validation Standards

### Field-Specific Validation Rules
- **Coordinates:** Must be valid geographical values.
- **Identifiers:** Must be unique and alphanumeric.
- **Times:** Must adhere to HH:MM:SS format.

### Cross-Category Validation
- Ensure `route_id` in `trips.txt` exists in `routes.txt`.
- Validate `stop_id` in `stop_times.txt` against `stops.txt`.
- Ensure `trip_id` in `stop_times.txt` exists in `trips.txt`.

---

## 4. Default Values and Tolerances

- Default missing `location_type` in `stops.txt` to `0`.
- Allow ±0.0001 for coordinate discrepancies.
- For scheduled times, tolerate ±1 minute.

---

## 5. Example Data Templates

### Stops Template
```
stop_id,stop_name,stop_lat,stop_lon,location_type,parent_station
1001,Adarsh Nagar,28.7169,77.1703,0,
```

### OD Flow Template
```
origin_stop_id,destination_stop_id,passenger_count
1001,2001,350
```