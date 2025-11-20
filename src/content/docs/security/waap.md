---
title: "Security: WAAP (DDoS, WAF, Bot, API)"
---

## Web Application & API Protection (WAAP)

Modern security requires a layered defense strategy integrating DDoS mitigation, WAF, Bot Management, and API Security.

### 1. DDoS Mitigation
-   **Volumetric Attacks (L3/L4)**: Flooding pipes with UDP/ICMP traffic (e.g., UDP Reflection). [What is a DDoS Attack? (Cloudflare)](https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/).
    -   *Defense*: Anycast network absorption. Spreading traffic across global PoPs.
-   **Application Attacks (L7)**: Flooding resources with HTTP requests (e.g., HTTP Flood).
    -   *Defense*: Rate Limiting, Challenge/Response (JS Challenge).

### 2. WAF (Web Application Firewall)
Protects against application vulnerabilities. [What is a WAF? (Cloudflare)](https://www.cloudflare.com/learning/ddos/glossary/web-application-firewall-waf/).
-   **OWASP Top 10**: Standard awareness document (Injection, Broken Auth, XSS, etc.). [OWASP Top 10](https://owasp.org/www-project-top-ten/).
-   **Rule Sets**:
    -   **Managed Rules**: Vendor-provided signatures (e.g., Cloudflare Managed Ruleset).
    -   **Custom Rules**: Logic based on Headers, IP, ASN, etc.
-   **Positive Security Model**: Deny all, allow only known good traffic (Strict Schema Validation).

### 3. Bot Management
Distinguishing between Humans, Good Bots (Googlebot), and Bad Bots (Scrapers, Credential Stuffing). [What is Bot Management? (Cloudflare)](https://www.cloudflare.com/learning/bots/what-is-bot-management/).
-   **Fingerprinting**: Analyzing TLS Handshake (JA3), HTTP Headers, and Browser behavior (Canvas fingerprinting).
-   **Behavioral Analysis**: Detecting non-human patterns (mouse movement, request velocity).
-   **Actions**: Allow, Block, Log, Challenge (Turnstile/CAPTCHA).

### 4. API Security
APIs are the primary attack vector for modern apps. [OWASP API Security Top 10](https://owasp.org/www-project-api-security/).
-   **Schema Validation**: Enforcing strict OpenAPI/Swagger definitions. Rejecting malformed JSON.
-   **Authentication**:
    -   **mTLS**: Mutual authentication for service-to-service.
    -   **OIDC/OAuth2**: Standard delegation protocols.
-   **Shadow APIs**: Undocumented endpoints exposed to the public. Discovery tools are essential.
