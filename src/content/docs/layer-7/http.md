---
title: HTTP
---

## HyperText Transfer Protocol

### Protocol Evolution
-   **HTTP/1.1**:
    -   Text-based.
    -   **Head-of-Line (HoL) Blocking**: One request per TCP connection (unless Pipelining is used, which is rare).
    -   **Keep-Alive**: Reusing TCP connections.
-   **HTTP/2**:
    -   Binary framing layer.
    -   **Multiplexing**: Multiple streams over a single TCP connection. Solves HTTP HoL blocking.
    -   **HPACK**: Header compression.
    -   **Server Push**: Proactive resource delivery.
-   **HTTP/3**:
    -   Built on **QUIC** (UDP).
    -   Solves **TCP HoL Blocking**: Packet loss only affects the specific stream, not the whole connection.
    -   **0-RTT**: Faster connection establishment.

### Critical Headers
-   **Security**:
    -   `Strict-Transport-Security (HSTS)`: Enforces HTTPS.
    -   `Content-Security-Policy (CSP)`: Mitigates XSS by defining allowed sources for scripts/styles.
    -   `X-Content-Type-Options: nosniff`: Prevents MIME-sniffing.
-   **CORS (Cross-Origin Resource Sharing)**:
    -   Browser security mechanism restricting cross-origin requests.
    -   `Access-Control-Allow-Origin`: Defines which domains can access the resource.
    -   Preflight Requests (`OPTIONS`): Checks permissions before sending actual data.

### Status Codes
-   **2xx**: Success.
-   **3xx**: Redirection.
    -   `301`: Permanent (Cacheable).
    -   `302`: Found (Temporary).
-   **4xx**: Client Error.
    -   `401`: Unauthenticated.
    -   `403`: Unauthorized (Authenticated but forbidden).
    -   `429`: Rate Limited.
-   **5xx**: Server Error.
    -   `502`: Bad Gateway (Upstream error).
    -   `504`: Gateway Timeout (Upstream timeout).
