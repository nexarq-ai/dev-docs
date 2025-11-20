---
title: Amazon DynamoDB
---

## Introduction to DynamoDB

Amazon DynamoDB is a fully managed proprietary NoSQL database service that supports key-value and document data structures. It is known for single-digit millisecond latency at any scale.

### Key Concepts

#### Data Model
-   **Tables**: Collection of items.
-   **Items**: Collection of attributes (like a row).
-   **Attributes**: Fundamental data element (like a column).

#### Primary Keys
DynamoDB requires a Primary Key to uniquely identify each item.
1.  **Partition Key (PK)**: Simple primary key. Used to distribute data across partitions.
2.  **Composite Key (PK + SK)**: Partition Key + Sort Key. Allows storing multiple items with the same PK but different SKs.

#### Indexes
-   **Global Secondary Index (GSI)**: An index with a partition key and a sort key that can be different from those on the base table.
-   **Local Secondary Index (LSI)**: An index that has the same partition key as the base table, but a different sort key.

### Capacity Modes
-   **On-Demand**: Automatically scales read/write capacity. Pay per request.
-   **Provisioned**: You specify the number of reads/writes per second. Cheaper if traffic is predictable.

### When to use DynamoDB?
-   Serverless applications (works great with AWS Lambda).
-   High-scale applications (gaming, ad tech, IoT).
-   Key-value access patterns.
