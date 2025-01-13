# Data Exchange

## Data Collection Process

The process of gathering data for public transit involves the integration of multiple data sources to ensure accuracy and comprehensiveness. This section outlines the key data sources and mechanisms for data collection.

### 1. Identify Data Sources for Public Transit
- **GPS Systems:**
  - GPS devices installed in buses or trains continuously transmit real-time location data.
  - Transit agencies may provide API endpoints or data feeds for accessing this information.
- **Management Systems:**
  - Depot management systems track vehicle assignments, maintenance schedules, and operational data.
  - Operations management systems record daily revenue, operational statistics, and route adherence.
- **Manual Inputs:**
  - Data on revenue, ridership, or one-off operational changes may be collected through spreadsheets or forms manually filled by transit personnel.

### 2. Develop Data Collection Templates
To standardize input data across multiple sources, create templates tailored to specific categories of data.

#### Schedule Data Template:
| route_id | stop_id | arrival_time | departure_time |
|----------|---------|--------------|----------------|
| 101      | 1001    | 08:00:00     | 08:05:00       |
| 102      | 1002    | 08:10:00     | 08:15:00       |

#### Vehicle Data Template:
| vehicle_id | fuel_type | capacity | depot          | agency |
|------------|-----------|----------|----------------|--------|
| V001       | Diesel    | 50       | Central Depot  | DMRC   |
| V002       | Electric  | 40       | West Depot     | DTC    |

---

## Data Cleaning and Processing

Once data is collected, cleaning and preprocessing are crucial to ensure that the datasets are accurate, complete, and ready for transformation.

### 1. Remove Invalid or Redundant Data
- Eliminate duplicate entries in critical fields such as `stop_id` or `route_id`.
- Identify and flag missing or erroneous data:
  - `stop_lat` and `stop_lon` values outside valid geographic bounds.
  - Overlapping or conflicting schedules.

### 2. Data Validation Rules
- **Location Data:** Ensure `stop_lat` and `stop_lon` values are within the service area and adhere to precision requirements (e.g., up to 4 decimal places).
- **Schedule Data:** Validate that `arrival_time` is earlier than `departure_time` for each stop.
- **Relationships:** Cross-check dependencies between datasets (e.g., `stop_id` in schedules matches entries in the stops list).

---

## Data Transformation Utility

A robust utility for transforming raw data into structured formats ensures compatibility with downstream systems. Using Python and libraries like Pandas, NumPy, or GeoPandas, you can automate and standardize data transformation.

### 1. Standardizing Location Data
- Clean `stop_lat`/`stop_lon` to conform with:
  - Defined bounds of the transit area (latitude: ±90°, longitude: ±180°).
- Remove invalid or outlier coordinates.

### 2. Eliminating Duplicate Data
- Remove duplicate values across datasets such as `route_id` or `stop_id`.

### 3. Transforming GPS Data
- Convert raw GPS feeds into structured formats like GTFS-RT.

---

## Testing and Validation

Testing ensures the pipeline delivers clean and actionable data for all use cases.

### 1. Validation Checks
- Verify that:
  - GPS coordinates match expected routes and stops.
  - All stop and route relationships are preserved post-transformation.


### 2. End-to-End Pipeline Validation
- Test if data feeds into the pipeline correctly and outputs match the expected structure.
- Cross-check the transformed data with the original input:
  - Do stop locations align with city maps?
  - Are schedules and trips correctly generated?

### 3. Testing Tools
- Use automated scripts for data quality assurance.
- Perform manual checks for geographical alignment and schedule accuracy.

