---
title: DNS Fundamentals
---

## Domain Name System (DNS)

### The Resolution Chain (Recursion)
1.  **Stub Resolver**: Client OS. Checks local cache/hosts file.
2.  **Recursive Resolver**: (e.g., 1.1.1.1). Performs the lookup on behalf of the client. Caches results aggressively. [What is a Recursive DNS? (Cloudflare)](https://www.cloudflare.com/learning/dns/what-is-recursive-dns/).
3.  **Root Server**: Points to TLD servers (`.com`, `.org`).
4.  **TLD Server**: Points to Authoritative Nameservers.
5.  **Authoritative Nameserver**: Holds the actual records for the domain.

### Record Types
-   **A / AAAA**: Maps hostname to IPv4 / IPv6 address. [DNS Record Types (Google Cloud)](https://cloud.google.com/dns/docs/records).
-   **CNAME**: Canonical Name. Maps hostname to hostname.
    -   *Limitation*: Cannot exist at the root (`@`) of a zone (RFC 1034).
    -   *Cloudflare Solution*: **CNAME Flattening** allows CNAMEs at the root by resolving them to IPs at the edge. [CNAME Flattening (Cloudflare)](https://developers.cloudflare.com/dns/cname-flattening/).
-   **MX**: Mail Exchange. Priority-based routing for email.
-   **TXT**: Arbitrary text. Used for verification (SPF, DKIM, Google Site Verification).
-   **NS**: Delegated nameservers for the zone.
-   **SOA**: Start of Authority. Zone parameters (serial number, refresh intervals).

### Split-Horizon DNS
Serving different DNS answers depending on the source of the query (e.g., Internal users get Private IP, External users get Public IP).
