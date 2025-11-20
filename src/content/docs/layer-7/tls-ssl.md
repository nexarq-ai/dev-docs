---
title: TLS/SSL
---

## Transport Layer Security

### Concepts
-   **PKI (Public Key Infrastructure)**: Framework for digital certificates. [What is PKI? (Cloudflare)](https://www.cloudflare.com/learning/ssl/what-is-pki/).
-   **Chain of Trust**: Root CA -> Intermediate CA -> Leaf Certificate.
-   **Symmetric Encryption**: Fast, uses shared key (AES, ChaCha20). Used for data transfer.
-   **Asymmetric Encryption**: Slow, uses Public/Private key pair (RSA, ECC). Used for key exchange.

### The Handshake (Simplified)
1.  **Client Hello**: Supported versions, cipher suites, random bytes. [What happens in a TLS Handshake? (Cloudflare)](https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/).
2.  **Server Hello**: Selected version/cipher, Server Certificate.
3.  **Key Exchange**: Diffie-Hellman (ECDHE) to agree on a shared secret (Session Key).
4.  **Finished**: Verify integrity.
5.  **Application Data**: Encrypted with Session Key.

**TLS 1.3 Improvements**:
-   Removes obsolete crypto (SHA-1, RC4).
-   **1-RTT Handshake**: Faster connection setup.
-   **0-RTT Resumption**: Resuming previous sessions instantly (security trade-off: replay attacks).

### Cloudflare SSL Modes
-   **Flexible**: Encrypted Client <-> Cloudflare. **Plaintext** Cloudflare <-> Origin. (Insecure, avoid).
-   **Full**: Encrypted end-to-end. Origin can use self-signed cert.
-   **Full (Strict)**: Encrypted end-to-end. Origin must have a valid trusted certificate.
-   **mTLS (Mutual TLS)**: Server authenticates Client using a Client Certificate. Used for Zero Trust and securing Origin Pulls.
