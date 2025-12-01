---
title: Three-Tier Architecture
---

## Architectural Patterns

The Three-Tier architecture is the foundational pattern for enterprise web applications, enforcing separation of concerns.

### 1. Presentation Tier (Client)
-   **Responsibility**: Rendering UI and capturing user input.
-   **Technologies**: SPA Frameworks (React, Vue), Mobile SDKs (iOS, Android).
-   **State**: Ideally stateless; maintains session via tokens (JWT) or cookies.
-   **Optimization**: Assets served via CDN to minimize latency.

### 2. Application Tier (Logic)
-   **Responsibility**: Business logic, authorization, data processing.
-   **Technologies**: REST/GraphQL APIs (Node.js, Go, Python, Java).
-   **Scaling**: Horizontal scaling behind a Load Balancer.
-   **Statelessness**: Crucial for scaling. No local session storage; use external stores (Redis) or stateless tokens.

### 3. Data Tier (Persistence)
-   **Responsibility**: Data storage and retrieval.
-   **Technologies**:
    -   **RDBMS**: PostgreSQL, MySQL (ACID compliance).
    -   **NoSQL**: MongoDB, DynamoDB (Flexible schema, high throughput).
    -   **Cache**: Redis, Memcached (Sub-millisecond access).
-   **Scaling**: Vertical (bigger instance) or Horizontal (Sharding/Read Replicas).

### Microservices vs Monolith
-   **Monolith**: All tiers in a single deployable unit. Simple to develop, hard to scale components independently.
-   **Microservices**: Application tier broken into small, independent services communicating via gRPC/HTTP. Complex operations, high scalability.
