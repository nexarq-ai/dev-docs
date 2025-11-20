---
title: IP Addressing
---

## Addressing & Subnetting

### IPv4 & CIDR (Classless Inter-Domain Routing)
-   **Structure**: 32-bit address. [IPv4 vs IPv6 (Google)](https://cloud.google.com/network-connectivity/docs/vpn/concepts/ipv4-ipv6-overview).
-   **CIDR Notation**: `IP/PrefixLength` (e.g., `192.0.2.0/24`). [What is CIDR? (DigitalOcean)](https://www.digitalocean.com/community/tutorials/understanding-ip-addresses-subnets-and-cidr-notation-for-networking).
    -   **Prefix**: Identifies the network.
    -   **Suffix**: Identifies the host.
-   **Subnetting**: Breaking a large block into smaller networks for efficiency and security.
    -   `/32`: Single IP (Host).
    -   `/24`: 256 IPs (Standard LAN).
    -   `/0`: The entire internet (`0.0.0.0/0` = Default Route).

### Private Address Space (RFC 1918)
Non-routable on the public internet. Used within LANs/VPCs.
-   `10.0.0.0/8`
-   `172.16.0.0/12`
-   `192.168.0.0/16`

### NAT (Network Address Translation)
Required to bridge Private and Public space due to IPv4 exhaustion. [What is NAT? (Cisco)](https://www.cisco.com/c/en/us/support/docs/ip/network-address-translation-nat/26704-nat-faq-00.html).
-   **SNAT (Source NAT)**: Internal hosts accessing the internet. Router replaces Source IP with Public IP.
-   **DNAT (Destination NAT)**: External traffic accessing internal service (Port Forwarding).
-   **CGNAT (Carrier-Grade NAT)**: ISPs sharing public IPs among many customers.

### IPv6
-   **Structure**: 128-bit address (Hexadecimal).
-   **No NAT**: Designed for end-to-end connectivity. Every device gets a global unicast address.
-   **Dual Stack**: Running IPv4 and IPv6 simultaneously during transition.
