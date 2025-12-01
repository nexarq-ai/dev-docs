---
title: Routing
---

## Internet Routing Architecture

### BGP (Border Gateway Protocol)
The protocol of the internet. It exchanges reachability information between **Autonomous Systems (AS)**.
-   **ASN (Autonomous System Number)**: Unique identifier for a network (e.g., Cloudflare is AS13335).
-   **Peering**: Direct interconnection between two networks to exchange traffic (settlement-free).
-   **Transit**: Paying an upstream provider to carry traffic to the rest of the internet.
-   **Path Selection**: BGP prefers the shortest **AS_PATH**, but policies (Local Pref, MED) often override this for business/performance reasons.

### Anycast Routing
A network addressing and routing methodology where a single destination address has multiple routing paths to two or more endpoint destinations.
-   **Mechanism**: The same IP prefix is advertised via BGP from multiple geographic locations (PoPs).
-   **Result**: The internet routing infrastructure (BGP) automatically directs traffic to the "topologically closest" location.
-   **Cloudflare Context**: All Cloudflare services run on Anycast IPs. A user in London hits the London data center; a user in Sydney hits Sydney.
-   **Benefits**:
    -   **Latency**: Minimized RTT.
    -   **DDoS Mitigation**: Attack traffic is distributed across the global network surface, preventing any single PoP from being overwhelmed.
