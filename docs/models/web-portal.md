# Web Portal Requirements

## Introduction

### Objectives of the System

- To create a unified transport ecosystem covering Metro, Bus, Rapid Rail and Micromobility through establishment of secure data highways.
- To unlock and harness the transit data, paving the way for effective urban management and evolve into smart city.
- To foster innovation ecosystem by providing open API access to Transport and Ancillary Services data, enabling businesses, startups, and app developers to create new services.

---

## The Web Portal: A Gateway to the Open Transit Ecosystem

The Web Portal is the central gateway to the entire Open Transit Data (OTD) ecosystem. It serves as the primary interface for all users - from the public to developers and transit administrators - to discover, access, and interact with the rich datasets provided by the platform. Its core purpose is to make transit data accessible, usable, and actionable.

### Key Roles and Features by User Type

The portal is designed to meet the distinct needs of its diverse user base:

#### For Public, Developers, Researchers, and Businesses

- **Centralised Data Catalog:** A comprehensive catalog to discover all available datasets, including static schedules (GTFS), real-time feeds (GTFS-RT), and specialised models for bus, metro, accessibility, and shared mobility.
- **API Documentation and Access:** Provides detailed, interactive API documentation (e.g., Swagger/OpenAPI) and a streamlined process for subscribing to APIs and managing access keys.
- **Data Download:** Allows users to register and download complete datasets in various formats (e.g., CSV, JSON) for offline analysis, research, and application development.

#### For Transit Operators and Administrators

- **User and Access Management:** A secure backend portal for administrators to manage user registrations, approve data access requests, and oversee API subscriptions.
- **Data Management:** A backend portal to add, update, and manage datasets, APIs, and services for administrators.

---

### Functional Requirements

#### For Front-End Users

- Browse and search available datasets, APIs, and services
- Register, sign in, and manage user profile
- Subscribe to and manage datasets, APIs, and service requests (free and paid)
- View all current and past subscriptions and requests in one place (including status and access details)
- Download datasets in supported formats (CSV, JSON, etc.)
- Access API documentation and manage API keys
- Receive notifications and updates
- Access support and help resources

#### For Admin Users

- Manage user registrations and profiles
- Manage requests for datasets and services (with separate dashboards/sections for each)
- Approve or reject access requests for datasets, APIs, and services
- Monitor and manage all active subscriptions and requests
- Edit payment amounts and generate payment links
- View analytics and usage reports
- Manage API access and keys
- Configure portal settings and access controls

#### Request Management

- Centralised dashboards for managing requests for datasets and for services (separately)
- Generalised flow for paid APIs/datasets/services: request, admin review, payment (if applicable), and access
- Approve or reject requests with comments
- Track and display request/subscription status (e.g., submitted, approved, payment pending, access granted, rejected)
- Notify users of request status changes
- Export request logs and reports

---

### Back End Portal- Request Management

**Request Management (Admin Portal)**

- The backend portal should provide separate dashboards for managing requests for datasets and for services.
- There should also be a section for managing user registration requests (e.g., organisation validation).
- Each dashboard should display all pending, approved, and rejected requests, with key details and actions (such as Approve/Reject).
- For paid APIs/datasets/services, the flow should be:
  1. User submits a request.
  2. Admin reviews the request and, if applicable, can adjust payment terms.
  3. Upon approval, the user is notified and provided with payment instructions if payment is required.
  4. Once payment is confirmed, access is granted.
  5. If rejected, the user is notified with a reason.
- The portal should clearly display the status of each request (e.g., submitted, approved, payment pending, payment successful, access granted, rejected).
- All admin actions (approve/reject, payment adjustments, remarks) should be tracked for audit and reporting.
