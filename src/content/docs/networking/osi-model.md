---
title: OSI Model (7 Layers)
---

## Encapsulation & Troubleshooting

The OSI model provides a framework for understanding network interactions. In practice, we focus on the **TCP/IP** model, but OSI terminology is standard for troubleshooting.

### The Layers & Troubleshooting

| Layer | Name | PDU | Key Concepts | Troubleshooting Context |
| :--- | :--- | :--- | :--- | :--- |
| **L7** | **Application** | Data | HTTP, DNS, TLS, SSH | Status codes (502, 404), Headers, Payload corruption. |
| **L6** | **Presentation** | Data | Encryption (TLS), Encoding | SSL Handshake failures, Certificate errors. |
| **L5** | **Session** | Data | Session Mgmt | Keep-alives, Timeouts. |
| **L4** | **Transport** | Segment | TCP, UDP, Ports | Syn/Ack, Retransmissions, Buffer bloat, Port exhaustion. |
| **L3** | **Network** | Packet | IP, ICMP, BGP, IPSec | Routing loops, MTU/Fragmentation, Packet loss. |
| **L2** | **Data Link** | Frame | Ethernet, MAC, VLAN | ARP issues, MAC flapping, CRC errors. |
| **L1** | **Physical** | Bit | Fiber, Copper | Signal degradation, Cable cuts, Interface errors. |

### Encapsulation Process
Data flows down the stack, with each layer adding a header (**Encapsulation**).
1.  **L7**: HTTP Request.
2.  **L4**: Adds TCP Header (Source/Dest Port).
3.  **L3**: Adds IP Header (Source/Dest IP).
4.  **L2**: Adds Ethernet Header (Source/Dest MAC).

Upon reception, the process is reversed (**Decapsulation**).

### Cross-Layer Concepts
-   **MTU (Maximum Transmission Unit)**: Typically 1500 bytes (Ethernet). If L3 packet > MTU, fragmentation occurs (bad for performance).
-   **MSS (Maximum Segment Size)**: L4 parameter to prevent fragmentation.
