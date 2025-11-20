---
title: MongoDB
---

## Introduction to MongoDB

MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.

### Key Concepts

#### Document Model
Data is stored in **BSON** (Binary JSON) documents. Fields can vary from document to document and data structure can be changed over time.

```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "Alice",
  "age": 25,
  "address": {
    "street": "123 Main St",
    "city": "Wonderland"
  }
}
```

#### Collections vs. Tables
-   **RDBMS**: Tables -> Rows -> Columns
-   **MongoDB**: Collections -> Documents -> Fields

### Features
-   **Ad-hoc queries**: Supports field, range query, and regular expression searches.
-   **Indexing**: Any field in a document can be indexed.
-   **Replication**: Provides high availability with replica sets.
-   **Sharding**: Horizontal scaling by distributing data across multiple machines.

### When to use MongoDB?
-   Content Management Systems (CMS).
-   Catalogs (e.g., E-commerce product catalogs).
-   Real-time analytics.
