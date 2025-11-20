---
title: Databases
---

## Introduction to Databases

A database is an organized collection of structured information, or data, typically stored electronically in a computer system.

## State: Stateful vs. Stateless

### Stateless
-   The application does not retain client data generated in one session for use in the next session with that client.
-   Each request is independent.
-   Easier to scale horizontally.
-   Example: REST APIs, Static Websites.

### Stateful
-   The application remembers data from previous interactions.
-   Requires persistence (Databases).
-   Harder to scale; requires synchronization.
-   Example: User Sessions, Shopping Carts, Banking Apps.

## Types of Databases

### SQL vs. NoSQL Comparison

| Feature | SQL (Relational) | NoSQL (Non-Relational) |
| :--- | :--- | :--- |
| **Structure** | Structured (Tables) | Flexible (Documents, Key-Value) |
| **Schema** | Predefined | Dynamic |
| **Scaling** | Vertical (Scale Up) | Horizontal (Scale Out) |
| **Consistency** | Strong (ACID) | Eventual (BASE) |
| **Best For** | Complex queries, transactions | Big data, rapid changes |

### 1. Relational Databases (RDBMS) / SQL
-   **Structure**: Tables with rows and columns. Predefined schema.
-   **Properties**: ACID (Atomicity, Consistency, Isolation, Durability).
-   **Use Cases**: Financial systems, ERP, structured data.
-   **Examples**: PostgreSQL, MySQL, SQLite, Oracle.

### 2. NoSQL Databases
-   **Structure**: Flexible schemas (Key-Value, Document, Graph, Column-family).
-   **Properties**: BASE (Basically Available, Soft state, Eventual consistency).
-   **Use Cases**: Real-time big data, content management, social networks.
-   **Examples**:
    -   *Document*: MongoDB.
    -   *Key-Value*: Redis, DynamoDB.
    -   *Graph*: Neo4j.

### 3. NewSQL
-   Combines the scalability of NoSQL with the ACID guarantees of RDBMS.
-   **Examples**: CockroachDB, Google Spanner.

### 4. Time-Series Databases
-   Optimized for time-stamped or time-series data.
-   **Use Cases**: IoT monitoring, financial trading, logs.
-   **Examples**: InfluxDB, Prometheus.

## The CAP Theorem
In a distributed system, you can only guarantee two of the following three properties at the same time:

1.  **Consistency**: Every read receives the most recent write or an error.
2.  **Availability**: Every request receives a (non-error) response, without the guarantee that it contains the most recent write.
3.  **Partition Tolerance**: The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes.

> **Note**: Since network partitions are inevitable in distributed systems, you usually have to choose between **Consistency** (CP) and **Availability** (AP).

## Recap
-   **Stateful** apps remember data; **Stateless** apps don't.
-   **SQL** is rigid but consistent; **NoSQL** is flexible and scalable.
-   **CAP Theorem** dictates the trade-offs in distributed databases.

## Learn More
-   [AWS Database Blog](https://aws.amazon.com/blogs/database/)
-   [CAP Theorem (IBM)](https://www.ibm.com/topics/cap-theorem)
