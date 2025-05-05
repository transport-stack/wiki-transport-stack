# ONDC Intra-city Bus Ticketing (Seller Backend)

## Overview

Intra-city buses remain a foundational mode of urban mobility—but ticketing for these services is often fragmented, cash-based, and inaccessible via digital platforms. A Seller Backend system, aligned with the ONDC Mobility framework, can serve as a foundational layer to digitize unreserved ticketing for public buses.

This page outlines how such a system could be designed, the problems it addresses, and the potential architecture that cities or agencies may adopt.


<p align="center">
  <img src="/img/ondc-sys-arch.png" alt="ONDC System Architecture" width="600" />
</p>

---

## Why Build a Seller Backend?

A Seller Backend should enable transport agencies to expose their services—routes, fares, availability—to the wider ONDC network. This allows commuters to discover and book bus journeys from any ONDC-integrated app.

Such a system can:

- Offer **standardized, digital ticketing** for unreserved city bus services
- Allow **multiple buyer apps** (wallets, journey planners, super apps) to access bus data
- Support **real-time route and fare discovery**
- Issue **QR-based digital tickets** upon confirmation

This approach ensures interoperability, decentralization, and scalability—key traits for modern urban mobility infrastructure.

---

## Key Capabilities of the Seller System

A robust Seller Backend should be able to:

### 1. Expose Route and Stop Information

- Serve a complete list of all bus stops and the routes that pass through them
- Cater to both unfiltered (exploratory) and filtered (specific source/destination) queries
- Return relevant metadata: stop names, coordinates, stop sequences, and service types

### 2. Respond to Trip Search Requests

- Given a source and destination, the system should identify valid routes
- Return route details including intermediate stops, total fare, and expected duration
- Include additional metadata like bus type, frequency, or real-time availability (if supported)

### 3. Support Booking Lifecycle

- Allow a user to select a preferred route
- Calculate fare based on passenger count
- Initiate a session to reserve the route and accept payment
- Upon payment confirmation, issue a digital ticket (e.g., QR code)

### 4. Allow Booking Updates

- Provide mechanisms for post-booking updates such as passenger changes or corrections
- Return updated ticket information to the buyer app

<!-- > _[Insert system architecture diagram placeholder here — `/img/seller-architecture.png`]_ -->

---

## Buyer–Seller Interaction Flow

A typical user journey across ONDC buyer and seller apps could follow this structure:

1. User enters trip query (source + destination) in an ONDC buyer app
2. Buyer app sends request to ONDC gateway
3. Seller Backend responds with matching routes and fare
4. User selects route and confirms
5. Buyer app initiates payment
6. Upon payment, seller backend issues the ticket and returns it to the app

> _[Insert flow diagram of buyer-seller transaction — `/img/ondc-ticketing-flow.png`]_

---

## Architectural Considerations

While implementations may vary, a typical deployment may include:

- RESTful APIs exposed to ONDC-compliant buyer apps
- Session management for ongoing transactions
- Local caching of stop/route data for performance
- Real-time integration with payment and confirmation services
- Stateless components deployed via container orchestration (e.g., Kubernetes)


<p align="center">
  <img src="/img/ondc-seller-deployment.png" alt="ONDC Seller Deployment" width="600" />
</p>

---

## Design Principles

### Interoperability

- Responses and payloads should follow ONDC Mobility specifications (e.g., JSON schemas)
- Enables seamless use across multiple buyer apps

### Modularity

- Each core function—search, select, initiate, confirm, update—should exist as an independent, composable endpoint
- Enables future upgrades or integrations without systemic overhauls

### Observability

- System should be instrumented for logging, monitoring, and performance tracking
- Logs and metrics should be viewable through standard tools like ELK or AWS CloudWatch

---

## Performance and Scalability

A production-grade system should be built to:

- **Auto-scale** based on demand (e.g., during peak travel hours)
- **Minimize latency** in route and fare discovery
- **Maintain uptime and fault tolerance** using high-availability infrastructure

Technologies such as Redis caching, Kubernetes (e.g., AWS EKS), and load balancing should be considered as part of the deployment strategy.

---

## Security and Compliance

The system should adhere to best practices around:

- **Encryption:** HTTPS for data in transit; AES or equivalent for data at rest
- **Authentication & Access Control:** Role-based access policies for internal interfaces
- **Data Governance:** Minimal data retention, compliance with local privacy laws (e.g., GDPR-equivalent frameworks)

---

## Extensibility

Over time, a Seller Backend may evolve to support:

- Reserved seat bookings for intercity or premium routes
- Integrated multimodal journeys (e.g., bus + metro)
- Fare capping or subscription-based ticketing
- Multilingual interfaces and customer notifications

---

## Suggested Next Steps

Cities or transit agencies exploring ONDC-based mobility can consider:

- Mapping current bus route data into a format compatible with ONDC standards
- Prototyping a minimal seller backend with key endpoints (`/search`, `/select`, `/init`, `/confirm`)
- Testing integrations with a known ONDC buyer app to validate interoperability

> _[Include link or CTA to technical repo or prototype implementation if available]_

---

## Resources

- [ONDC Mobility Reference Implementation](https://www.ondc.org/)
