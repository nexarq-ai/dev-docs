---
title: Operating Systems & Linux Fundamentals
---

## Linux in the Cloud Context

Linux is the de facto operating system for cloud infrastructure, edge computing, and containerization. Understanding its core mechanisms is essential for troubleshooting and performance tuning.

### Kernel Space vs. User Space
-   **Kernel Space**: Privileged mode where the kernel executes. Manages hardware resources (CPU, memory, I/O) and provides system calls.
-   **User Space**: Restricted mode where applications (Nginx, Node.js) run. They must use **System Calls** (e.g., `read()`, `write()`, `fork()`) to request kernel services.
-   **Context Switching**: The CPU switching between user and kernel mode. High context switching rates can indicate performance bottlenecks.

### Process Management
-   **PID (Process ID)**: Unique identifier for every running process.
-   **Signals**: Inter-process communication.
    -   `SIGTERM` (15): Graceful termination request.
    -   `SIGKILL` (9): Immediate forced termination (cannot be caught).
    -   `SIGHUP` (1): Reload configuration (common in daemons like Nginx).
-   **Load Average**: The average number of processes waiting for CPU time over 1, 5, and 15 minutes. A load > number of cores implies saturation.

### File Descriptors & Permissions
-   **Everything is a File**: In Linux, sockets, pipes, and devices are treated as files.
-   **File Descriptors (FD)**: Integers representing open files/sockets. High-concurrency servers (like Nginx) require high `ulimit -n` values to handle thousands of connections.
-   **Permissions (Octal/Symbolic)**:
    -   `chmod 755` (rwxr-xr-x): Owner has full access; Group/Others can read/execute.
    -   `chmod 600` (rw-------): Only owner can read/write (standard for private keys).
    -   `chown user:group`: Change ownership.

### Why Linux for Edge?
-   **Performance**: Lightweight kernel, efficient TCP/IP stack implementation.
-   **eBPF (Extended Berkeley Packet Filter)**: Allows running sandboxed programs in the kernel without changing source code. Used extensively by Cloudflare for high-performance packet filtering and observability.
