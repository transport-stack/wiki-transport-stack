# Accessibility Data Model

## Overview
This data model captures accessibility features at metro and bus stations, focusing on lifts/elevators and their mapping to gates, platforms, concourses, and other station elements. The goal is to standardise how accessibility information is collected, stored, and shared for inclusive transit planning and real-time passenger information.

## Key Entities & Fields

### 1. Gate to Lifts Mapping
- `station_id`: Unique identifier for the station
- `station_code`: Short code for the station
- `station_name`: Name of the station
- `station_type`: Type of station (e.g., Elevated, Underground)
- `type`: Type of asset (e.g., Gate, Lift)
- `name`: Name/identifier of the gate or lift
- `location`: Description of location (e.g., Towards Parking, Towards Colony)
- `linked_options`: Asset(s) linked to this gate (e.g., Lift No. 3)

**Example:**
| station_id | station_code | station_name   | station_type | type | name       | location               | linked_options |
|------------|---------------|----------------|--------------|------|------------|------------------------|----------------|
| 72         | DSG           | DILSHAD GARDEN | Elevated     | Gate | Gate No. 1 | Towards Parking        | Lift No. 3     |
| 72         | DSG           | DILSHAD GARDEN | Elevated     | Gate | Gate No. 2 | Towards Dilshad Colony | Lift No. 3     |


### 2. Lift to Platforms Mapping
- `station_id`: Unique identifier for the station
- `station_code`: Short code for the station
- `station_name`: Name of the station
- `station_type`: Type of station (e.g., Elevated, Underground)
- `type`: Type of asset (Lift)
- `name`: Name/identifier of the lift
- `location`: Description of location (e.g., Concourse to Platform)
- `linked_options`: Asset(s) linked to this lift (e.g., Gate No. 1, Platform 2, Concourse)

**Example:**
| station_id | station_code | station_name   | station_type | type | name       | location               | linked_options |
|------------|---------------|----------------|--------------|------|------------|------------------------|------------------|
| 72         | DSG           | DILSHAD GARDEN | Elevated     | Lift | Lift No. 3 | Ground to Concourse    | Gate No. 1       |
| 72         | DSG           | DILSHAD GARDEN | Elevated     | Lift | Lift No. 1 | Concourse to Platform  | Platform 2       |
| 72         | DSG           | DILSHAD GARDEN | Elevated     | Lift | Lift No. 1 | Concourse to Platform  | Platform 1       |

## Data Sharing
- Data can be shared as CSV, JSON, or via API endpoints.
- This data supports journey planners, and accessibility apps.
