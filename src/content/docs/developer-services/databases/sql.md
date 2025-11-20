---
title: SQL Databases
---

## Introduction to SQL

SQL (Structured Query Language) is the standard language for relational database management systems (RDBMS). It is used to store, manipulate, and retrieve data in databases.

### Key Concepts

#### ACID Properties
Transactions in SQL databases are designed to be **ACID** compliant to ensure data integrity.

-   **Atomicity**: All or nothing. A transaction is treated as a single unit. If any part fails, the entire transaction fails.
-   **Consistency**: Data must meet all validation rules. The database goes from one valid state to another.
-   **Isolation**: Concurrent transactions do not interfere with each other.
-   **Durability**: Once a transaction is committed, it remains committed even in the case of a system failure.

#### Normalization
The process of organizing data to minimize redundancy and improve data integrity.
-   **1NF (First Normal Form)**: Atomic values, no repeating groups.
-   **2NF**: 1NF + no partial dependencies.
-   **3NF**: 2NF + no transitive dependencies.

### Common SQL Databases

1.  **PostgreSQL**: Advanced, open-source, object-relational database. Known for reliability and feature robustness.
2.  **MySQL**: The world's most popular open-source database. Great for web applications.
3.  **SQLite**: C-library that provides a lightweight disk-based database. No separate server process.

### Basic SQL Commands

```sql
-- Create a table
CREATE TABLE Users (
    ID INT PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100)
);

-- Insert data
INSERT INTO Users (ID, Name, Email) VALUES (1, 'Alice', 'alice@example.com');

-- Query data
SELECT * FROM Users WHERE Name = 'Alice';
```
