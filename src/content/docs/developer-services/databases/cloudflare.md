---
title: Cloudflare Data Products
---

## Introduction

Cloudflare offers a suite of data storage products designed to work seamlessly with Cloudflare Workers at the edge. These products enable developers to build full-stack applications without managing traditional infrastructure.

## D1: SQL Database at the Edge

**D1** is Cloudflare's native serverless database built on SQLite. It allows you to run SQL queries at the edge with low latency.

### Key Features
-   **SQLite Compatible**: Use standard SQL syntax.
-   **Global Distribution**: Data is replicated across Cloudflare's network.
-   **Serverless**: No servers to manage, automatic scaling.
-   **Low Latency**: Queries execute close to your users.

### Use Cases
-   User authentication and session management.
-   E-commerce product catalogs.
-   Content management systems.

### Example
```javascript
// Query D1 from a Cloudflare Worker
export default {
  async fetch(request, env) {
    const { results } = await env.DB.prepare(
      "SELECT * FROM users WHERE id = ?"
    ).bind(1).all();
    return Response.json(results);
  }
};
```

### Learn More
-   [Cloudflare D1 Documentation](https://developers.cloudflare.com/d1/)

---

## R2: Object Storage

**R2** is Cloudflare's object storage service, compatible with the S3 API. It offers zero egress fees, making it cost-effective for serving large files.

### Key Features
-   **S3 Compatible**: Use existing S3 SDKs and tools.
-   **Zero Egress Fees**: No charges for data transfer out.
-   **Global Access**: Low-latency access from anywhere.
-   **Automatic Replication**: Data is replicated for durability.

### Use Cases
-   Storing images, videos, and static assets.
-   Backups and archives.
-   Data lakes for analytics.

### Example
```javascript
// Upload a file to R2 from a Cloudflare Worker
export default {
  async fetch(request, env) {
    await env.MY_BUCKET.put("file.txt", "Hello, World!");
    return new Response("File uploaded!");
  }
};
```

### Learn More
-   [Cloudflare R2 Documentation](https://developers.cloudflare.com/r2/)

---

## KV: Key-Value Store

**Workers KV** is a global, low-latency key-value data store. It's optimized for high-read, low-write workloads.

### Key Features
-   **Eventually Consistent**: Optimized for reads, writes propagate globally.
-   **Low Latency**: Data is cached at the edge.
-   **Simple API**: Get, put, delete operations.
-   **Expiration**: Automatic key expiration (TTL).

### Use Cases
-   Caching API responses.
-   Feature flags and configuration.
-   User preferences and settings.

### Example
```javascript
// Read from KV in a Cloudflare Worker
export default {
  async fetch(request, env) {
    const value = await env.MY_KV.get("myKey");
    return new Response(value);
  }
};
```

### Learn More
-   [Cloudflare Workers KV Documentation](https://developers.cloudflare.com/kv/)

---

## Comparison Table

| Feature | D1 | R2 | KV |
| :--- | :--- | :--- | :--- |
| **Type** | SQL Database | Object Storage | Key-Value Store |
| **Best For** | Relational data, complex queries | Large files, media | High-read, low-write data |
| **Consistency** | Strong | Strong | Eventual |
| **Query Language** | SQL | S3 API | Simple Get/Put |
| **Latency** | Low | Low | Very Low |

## Recap
-   **D1** is for SQL workloads at the edge.
-   **R2** is for object storage with zero egress fees.
-   **KV** is for fast, globally distributed key-value data.
