---
title: Infrastructure Components
---

## Enterprise Web Infrastructure

### Web Servers: Architecture Patterns
-   **Thread/Process-Based (Apache)**: Creates a new thread/process for each connection. Good for CPU-bound tasks but memory-intensive under high concurrency.
-   **Event-Driven (Nginx)**: Uses a non-blocking, asynchronous event loop. Handles thousands of connections with a single worker process. Ideal for I/O-bound tasks and high concurrency.

### Load Balancers
Distributes traffic across backend servers to ensure availability and scalability.
-   **L4 Load Balancing (Transport)**: Decisions based on IP/Port. Fast, packet-level. No visibility into HTTP headers.
-   **L7 Load Balancing (Application)**: Decisions based on URL, Headers, Cookies. CPU-intensive but smarter (e.g., routing `/api` to Service A and `/static` to Service B).
-   **Algorithms**:
    -   **Round Robin**: Sequential distribution.
    -   **Least Connections**: Sends to server with fewest active connections.
    -   **Consistent Hashing**: Maps keys (e.g., User ID) to servers; minimizes reshuffling when servers are added/removed.

### Reverse Proxy
Intermediary between client and origin.
-   **SSL Termination**: Offloads decryption CPU cost from backend servers.
-   **Connection Pooling**: Maintains keep-alive connections to backends to reduce TCP handshake overhead.
-   **Buffering**: Reads slow client uploads completely before sending to backend (prevents "Slowloris" attacks).

### CDN (Content Delivery Network)
-   **Edge Caching**: Storing static assets (images, CSS, JS) at the network edge (PoPs) to reduce latency and origin load.
-   **Cache-Control**: HTTP header controlling cache behavior.
    -   `public`: Cacheable by anyone (CDN, Browser).
    -   `private`: Cacheable only by browser (User-specific data).
    -   `no-store`: Never cache.
    -   `s-maxage`: TTL for shared caches (CDNs).
-   **Purging**: Invalidating cached content before TTL expires (e.g., after a deployment).
