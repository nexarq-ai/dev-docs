---
title: Key Design Concerns
---

## System Design Principles

### Scalability
The ability of a system to handle growing amounts of work.
-   **Vertical Scaling (Scale Up)**: Adding resources (CPU/RAM) to a single node. Limited by hardware ceilings.
-   **Horizontal Scaling (Scale Out)**: Adding more nodes to a pool. Theoretically infinite but requires stateless application design.

### Availability & Reliability
-   **SLA (Service Level Agreement)**: Contractual uptime guarantee (e.g., 99.9% = ~43m downtime/month).
-   **Redundancy**: Eliminating Single Points of Failure (SPOF).
    -   **Active-Passive**: Standby node takes over on failure.
    -   **Active-Active**: All nodes handle traffic; load redistributed on failure.
-   **CAP Theorem**: In a distributed system, you can only pick two: **C**onsistency, **A**vailability, **P**artition Tolerance.

### Observability
Understanding the internal state of the system based on external outputs.
-   **Logs**: Discrete events (e.g., "User logged in"). Centralized via ELK/Splunk.
-   **Metrics**: Aggregated numerical data (e.g., "CPU usage", "Requests/sec"). Visualized via Grafana/Datadog.
-   **Tracing**: Lifecycle of a request across microservices. (OpenTelemetry).

### Latency
-   **TTFB (Time to First Byte)**: Server processing time + Network latency.
-   **RTT (Round Trip Time)**: Time for a packet to go client->server->client.
-   **Edge Computing**: Reducing latency by moving compute closer to the user (Cloudflare Workers).
