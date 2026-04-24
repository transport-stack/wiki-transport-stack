# ONDC Intra-city Bus Ticketing (Seller Backend)

## Introduction

Intra-city buses remain a foundational mode of urban mobility—but ticketing for these services is often fragmented, cash-based, and inaccessible via digital platforms. A Seller Backend system, aligned with the ONDC Mobility framework, can serve as a foundational layer to digitize unreserved ticketing for public buses.

This page outlines how such a system could be designed, the problems it addresses, and the potential architecture that cities or agencies may adopt.

## Why Build a Seller Backend?

A Seller Backend should enable transport agencies to expose their services—routes, fares, availability—to the wider ONDC network. This allows commuters to discover and book bus journeys from any ONDC-integrated app.

Such a system can:

- Offer standardized, digital ticketing for unreserved city bus services
- Allow multiple buyer apps (wallets, journey planners, super apps) to access bus data
- Support real-time route and fare discovery
- Issue QR-based digital tickets upon confirmation

This approach ensures interoperability, decentralization, and scalability—key traits for modern urban mobility infrastructure.

## Core Functional Capabilities

A reliable Seller Backend must efficiently handle route discovery, trip planning, booking, and post-booking processes.

### Expose Route and Stop Information

- Provide a complete listing of all bus stops along with the routes that service them.
- Support both broad (exploratory) and narrow (specific source/destination) route queries.
- Deliver detailed metadata such as stop names, geographic coordinates, stop order, and types of service offered.

### Respond to Trip Search Requests

- When provided with a starting point and destination, the system should determine appropriate route options.
- Return route information including all intermediate stops, total fare, and estimated trip duration.
- Add extra metadata where available, such as the bus category, service frequency, and real-time availability status.

### Support Booking Lifecycle

- Enable users to select a preferred travel route from the available options.
- Calculate the total fare based on how many passengers are included in the booking.
- Start a session to hold the chosen route and accept payment from the user.
- After confirming the payment, issue a digital travel ticket, such as a QR code.

### Allow Booking Updates

- Offer options to modify bookings after confirmation, such as updating passenger information or correcting details.
- Send the revised ticket data back to the buyer application once updates are made.

## Buyer–Seller Interaction Flow
<div style={{textAlign: 'center'}}>
  <img src="/img/ondc-sys-arch.png" alt="ONDC System Architecture" />
</div>


A typical user journey across ONDC buyer and seller apps could follow this structure:

1. User enters trip query (source + destination) in an ONDC buyer app
2. Buyer app sends request to ONDC gateway
3. Seller Backend responds with matching routes and fare
4. User selects route and confirms
5. Buyer app initiates payment
6. Upon payment, seller backend issues the ticket and returns it to the app

## System Overview

While implementations may vary, a typical deployment may include:

- RESTful APIs exposed to ONDC-compliant buyer apps
- Session management for ongoing transactions
- Local caching of stop/route data for performance
- Real-time integration with payment and confirmation services
- Stateless components deployed via container orchestration (e.g., Kubernetes)

<div style={{textAlign: 'center'}}>
  <img src="/img/ondc-seller-deployment.png" alt="ONDC Seller Deployment" />
</div>

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

## Performance and Security Considerations

A production-grade system should be built to:

- Auto-scale based on demand (e.g., during peak travel hours)
- Minimize latency in route and fare discovery
- Maintain uptime and fault tolerance using high-availability infrastructure

Technologies such as Redis caching, Kubernetes (e.g., AWS EKS), and load balancing should be considered as part of the deployment strategy.

## Security

- Ensure secure access through token-based authentication mechanisms.
- Encrypt all data in transit using industry-standard protocols (SSL/TLS).
- Ensure backend systems are isolated within private network zones and protected by firewalls.
- Role-based access policies for internal interfaces.
- Minimal data retention, compliance with local privacy laws (e.g., GDPR-equivalent frameworks)

## Open Source Repository

The source code and documentation for the ONDC system are available on GitLab:

[ONDC Mobility Reference Implementation](https://www.ondc.org/)

Gitlab repository: [Bus Ticketing Seller Backend](https://github.com/transport-stack/ondc-buses-seller)