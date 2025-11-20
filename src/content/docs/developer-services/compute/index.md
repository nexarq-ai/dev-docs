---
title: Compute
---

## Introduction to Compute

In the context of cloud and developer services, "Compute" refers to the processing power required to run applications, process data, and execute logic. It is the fundamental building block of any software service.

### Types of Compute

### Types of Compute: A Comparison

| Type | Abstraction Level | Control | Management Overhead | Startup Time | Use Case |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Virtual Machines (VMs)** | Hardware | High (OS access) | High (Patching, Scaling) | Minutes | Legacy apps, specific OS requirements. |
| **Containers** | OS Kernel | Medium (Runtime) | Medium (Orchestration) | Seconds | Microservices, portable apps. |
| **Serverless** | Runtime | Low (Code only) | Low (No ops) | Milliseconds | Event-driven, APIs, glue code. |
| **Edge Compute** | Network Edge | Low (Code only) | Low (Global dist.) | Milliseconds | Low-latency apps, personalization. |

### 1. Virtual Machines (VMs)
Emulation of a physical computer. Provides full control over the OS and environment.
-   **Examples**: [Amazon EC2](https://aws.amazon.com/ec2/), [Google Compute Engine](https://cloud.google.com/compute).

### 2. Containers
Lightweight, portable units that package code and dependencies. Shares the host OS kernel.
-   **Examples**: [Docker](https://www.docker.com/), [Kubernetes](https://kubernetes.io/).

### 3. Serverless
Run code without provisioning or managing servers. The cloud provider handles scaling and infrastructure.
-   **Examples**: [AWS Lambda](https://aws.amazon.com/lambda/), [Cloudflare Workers](https://workers.cloudflare.com/).

### 4. Edge Compute
Running processing tasks closer to the user to reduce latency.
-   **Examples**: [Cloudflare Workers](https://workers.cloudflare.com/), [Fastly Compute@Edge](https://www.fastly.com/products/compute).

### Key Concepts

-   **CPU vs. GPU**: CPU for general-purpose processing; GPU for parallel processing (AI/ML, rendering). [CPU vs GPU (Intel)](https://www.intel.com/content/www/us/en/products/docs/processors/cpu-vs-gpu.html).
-   **Memory (RAM)**: Temporary storage for active data.
-   **Throughput**: The amount of data processed in a given time.
-   **Latency**: The time it takes to start processing a request.

## Recap
-   **Compute** is the processing power for applications.
-   **VMs** offer control but high overhead.
-   **Containers** offer portability.
-   **Serverless** removes infrastructure management.
-   **Edge Compute** minimizes latency by running code near the user.
