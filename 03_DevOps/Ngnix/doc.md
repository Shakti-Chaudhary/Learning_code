Here's an in-depth interview guide for **Nginx**, focusing on its role as a web server, reverse proxy, load balancer, and its key configurations. The guide provides conceptual explanations alongside practical Nginx configuration snippets.

-----

# Nginx Interview Guide (In-Depth with Configuration Examples)

This guide covers fundamental to advanced concepts of Nginx, a high-performance HTTP server, reverse proxy, and load balancer. It emphasizes practical configuration and common use cases.

## Table of Contents

1.  [Introduction to Nginx](https://www.google.com/search?q=%231-introduction-to-nginx)
      * 1.1 What is Nginx?
      * 1.2 Why Nginx? Key Advantages
      * 1.3 Nginx vs. Apache (Brief Comparison)
2.  [Nginx Core Concepts & Architecture](https://www.google.com/search?q=%232-nginx-core-concepts--architecture)
      * 2.1 Event-Driven, Asynchronous, Non-Blocking Model
      * 2.2 Master-Worker Process Model
      * 2.3 Configuration File Structure & Contexts
      * 2.4 Reloading Nginx Configuration
3.  [Basic Web Server Configuration](https://www.google.com/search?q=%233-basic-web-server-configuration)
      * 3.1 Serving Static Content
      * 3.2 Virtual Hosts (Server Blocks)
      * 3.3 Default Server Block
      * 3.4 Directory Index Files
4.  [Reverse Proxy Configuration](https://www.google.com/search?q=%234-reverse-proxy-configuration)
      * 4.1 What is a Reverse Proxy?
      * 4.2 Basic Reverse Proxy Setup
      * 4.3 Passing Request Headers
      * 4.4 Proxy Buffering
5.  [Load Balancing with Nginx](https://www.google.com/search?q=%235-load-balancing-with-nginx)
      * 5.1 What is Load Balancing?
      * 5.2 Basic `upstream` Configuration
      * 5.3 Load Balancing Methods
      * 5.4 Server Weight & Health Checks (Brief)
6.  [SSL/TLS Termination](https://www.google.com/search?q=%236-ssltls-termination)
      * 6.1 Why Terminate SSL at Nginx?
      * 6.2 Enabling HTTPS
      * 6.3 Redirecting HTTP to HTTPS
      * 6.4 HTTP Strict Transport Security (HSTS)
      * 6.5 Cipher Suites
7.  [HTTP Caching with Nginx](https://www.google.com/search?q=%237-http-caching-with-nginx)
      * 7.1 Why Cache at Nginx?
      * 7.2 Basic Proxy Cache Setup
      * 7.3 Cache Validation & Control
      * 7.4 Bypassing and No-Caching
8.  [Nginx Security Best Practices](https://www.google.com/search?q=%238-nginx-security-best-practices)
      * 8.1 Hiding Nginx Version
      * 8.2 Disabling Default Server
      * 8.3 Rate Limiting Requests
      * 8.4 IP Address Access Control
      * 8.5 Basic HTTP Authentication
      * 8.6 Preventing DDoS (Basic Measures)
9.  [Advanced Nginx Concepts & Directives](https://www.google.com/search?q=%239-advanced-nginx-concepts--directives)
      * 9.1 Gzip Compression
      * 9.2 Logging Configuration
      * 9.3 `try_files` Directive
      * 9.4 Rewrites and Returns
      * 9.5 Keepalive Connections
10. [Troubleshooting Nginx](https://www.google.com/search?q=%2310-troubleshooting-nginx)
      * 10.1 Configuration Syntax Check
      * 10.2 Checking Logs
      * 10.3 Common Issues
11. [Common Interview Questions & Scenarios](https://www.google.com/search?q=%2311-common-interview-questions--scenarios)

-----

## 1\. Introduction to Nginx

### 1.1 What is Nginx?

  * **Definition:** Nginx (pronounced "engine-x") is a high-performance, open-source web server, reverse proxy, load balancer, HTTP cache, and media streaming server.
  * **Origin:** Created by Igor Sysoev in 2004 to address the C10K problem (handling 10,000 concurrent connections).

### 1.2 Why Nginx? Key Advantages

  * **High Performance:** Efficiently handles a large number of concurrent connections with low memory footprint.
  * **Scalability:** Excellent for scaling web applications.
  * **Reverse Proxy:** Hides backend servers, provides centralized SSL, caching, and load balancing.
  * **Load Balancing:** Distributes incoming traffic across multiple backend servers.
  * **Security:** Enhances security by acting as a buffer to backend servers and offering features like rate limiting, WAF integration.
  * **Flexibility:** Can be easily extended with modules.

### 1.3 Nginx vs. Apache (Brief Comparison)

| Feature           | Apache HTTP Server                                      | Nginx                                                           |
| :---------------- | :------------------------------------------------------ | :-------------------------------------------------------------- |
| **Architecture**  | Process-per-connection (or hybrid)                      | Event-driven, asynchronous, non-blocking                        |
| **Performance**   | Good for static, scales less well with high concurrency | Excellent for high concurrency, low memory footprint            |
| **Configuration** | `.htaccess` files (distributed)                         | Centralized `nginx.conf`                                        |
| **Use Case**      | General-purpose web server, complex configurations      | High-traffic sites, reverse proxy, load balancing, API gateways |
| **Modules**       | Dynamic loading                                         | Dynamic loading                                                 |

-----

## 2\. Nginx Core Concepts & Architecture

### 2.1 Event-Driven, Asynchronous, Non-Blocking Model

  * **How it works:** Instead of creating a new process or thread for each connection, Nginx uses a single thread (or a few threads) to handle multiple connections simultaneously. When a connection is idle (e.g., waiting for data from a backend server), Nginx continues to process other connections, returning to the original one when data is ready.
  * **Benefits:** This model allows Nginx to handle thousands of concurrent connections with minimal resource overhead, making it highly efficient.

### 2.2 Master-Worker Process Model

  * **Master Process:**
      * Runs as root (typically).
      * Reads and validates configuration.
      * Manages worker processes (starts, stops, reloads).
      * Does not handle client connections directly.
  * **Worker Processes:**
      * Run as a less privileged user (e.g., `nginx`, `www-data`).
      * Handle all incoming client connections and requests.
      * Perform actual reading/writing to disk and network.
      * Number of worker processes typically equals the number of CPU cores.
  * **Configuration:**
    ```nginx
    # /etc/nginx/nginx.conf

    worker_processes auto; # Usually set to 'auto' or number of CPU cores
    # worker_connections 1024; # Per worker process max connections
    ```

### 2.3 Configuration File Structure & Contexts

Nginx uses a hierarchical configuration structure, primarily defined in `nginx.conf` and included files.

  * **Main Context:** Global directives (e.g., `worker_processes`, `error_log`).
  * **`events` Context:** Configures global connection processing (e.g., `worker_connections`, `multi_accept`).
  * **`http` Context:** Defines configurations for HTTP traffic. Most common directives like `access_log`, `sendfile`, `gzip` are here.
  * **`server` Context:** Defines a virtual host, handling requests for a specific domain name or IP address/port. Can be inside `http` context.
  * **`location` Context:** Defines how Nginx handles requests for specific URIs or paths within a `server` block.

**Example `nginx.conf` snippet:**

```nginx
# Main Context
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log warn;
pid /var/run/nginx.pid;

# Events Context
events {
    worker_connections 1024;
}

# HTTP Context (most common)
http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log /var/log/nginx/access.log main;
    sendfile on;
    # tcp_nopush on;
    # tcp_nodelay on;
    keepalive_timeout 65;
    # types_hash_max_size 2048;

    # Includes virtual host configurations from sites-enabled
    include /etc/nginx/conf.d/*.conf; # Or /etc/nginx/sites-enabled/*;
}
```

### 2.4 Reloading Nginx Configuration

After making changes to `nginx.conf` or included files:

1.  **Test configuration syntax (recommended first step):**
    ```bash
    sudo nginx -t
    ```
2.  **Reload Nginx (graceful restart):**
    ```bash
    sudo systemctl reload nginx # Preferred on systemd systems
    # OR
    sudo service nginx reload   # On older sysVinit systems
    # OR
    sudo nginx -s reload        # Using the Nginx binary directly
    ```
      * *Explanation:* The `reload` command tells the master process to re-read the configuration and gracefully shut down old worker processes after they finish handling current connections, while new worker processes start up with the new config.

-----

## 3\. Basic Web Server Configuration

### 3.1 Serving Static Content

```nginx
# /etc/nginx/conf.d/static_site.conf
server {
    listen 80;
    server_name example.com www.example.com; # Your domain name

    root /var/www/html/example.com; # Path to your static files

    index index.html index.htm; # Default files to look for when a directory is requested

    location / {
        try_files $uri $uri/ =404; # Tries to serve file, then directory, then 404
    }
}
```

### 3.2 Virtual Hosts (Server Blocks)

Nginx uses `server` blocks to define "virtual hosts," allowing it to host multiple websites on a single server instance.

```nginx
# First site
server {
    listen 80;
    server_name site1.com;
    root /var/www/site1;
    index index.html;
    # ... other configurations for site1 ...
}

# Second site
server {
    listen 80;
    server_name site2.com;
    root /var/www/site2;
    index index.html;
    # ... other configurations for site2 ...
}
```

  * **`listen`:** Specifies the IP address and port Nginx listens on.
  * **`server_name`:** Defines the domain names for which this `server` block is responsible. Supports exact names, wildcards (`*.example.com`), and regular expressions (`~^www\.(?<domain>.+)\.com$`).

### 3.3 Default Server Block

If no `server_name` matches an incoming request, Nginx directs the request to the *default* server. This is often the first `server` block defined or one explicitly marked `default_server`.

```nginx
server {
    listen 80 default_server; # This becomes the default server
    server_name _; # A non-existent domain name, to catch anything else
    return 444; # Return a non-standard 444 error to immediately close connection
}
```

  * *Best Practice:* Set up a default server block that either returns a 444 (connection closed without response) or serves a generic page, preventing unconfigured domain names from reaching unexpected sites.

### 3.4 Directory Index Files

```nginx
server {
    listen 80;
    server_name example.com;
    root /var/www/html;
    index index.html index.htm index.php; # Order of preference
    # ...
}
```

  * *Explanation:* When a request for a directory (e.g., `http://example.com/`) is made, Nginx will look for these files in the specified order within that directory.

-----

## 4\. Reverse Proxy Configuration

### 4.1 What is a Reverse Proxy?

  * **Definition:** A server that sits in front of one or more web servers (backend servers) and forwards client requests to them.
  * **Benefits:**
      * **Load Balancing:** Distributes traffic (see Section 5).
      * **Security:** Hides backend server details, acts as a buffer.
      * **SSL Termination:** Offloads encryption/decryption from backend (see Section 6).
      * **Caching:** Improves response times by serving cached content (see Section 7).
      * **Compression:** Compresses responses.
      * **Centralized Logging/Monitoring:**
      * **URL Rewriting/Routing.**

### 4.2 Basic Reverse Proxy Setup

```nginx
# /etc/nginx/conf.d/proxy_app.conf
server {
    listen 80;
    server_name api.example.com;

    location / {
        proxy_pass http://backend_server_ip:8080; # Forward requests to backend
        # Other proxy settings below
    }
}
```

### 4.3 Passing Request Headers

Crucial for the backend to correctly identify the client's original IP, host, and protocol.

```nginx
location / {
    proxy_pass http://backend_server_ip:8080;
    proxy_set_header Host $host; # Passes original Host header to backend
    proxy_set_header X-Real-IP $remote_addr; # Passes client's real IP
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; # Appends client IP to X-Forwarded-For chain
    proxy_set_header X-Forwarded-Proto $scheme; # Passes original protocol (http/https)
}
```

### 4.4 Proxy Buffering

  * **Concept:** Nginx can buffer responses from the backend servers before sending them to the client.
  * **`proxy_buffering`:**
      * `on` (default): Nginx buffers the response. Improves performance, protects slow clients/backends.
      * `off`: Nginx streams the response directly. Good for long-polling, WebSockets, or when you need immediate data flushing.
  * **Configuration:**
    ```nginx
    location / {
        proxy_pass http://backend_server_ip:8080;
        proxy_buffering on; # Or off
        # proxy_buffers 8 16k; # Number and size of buffers
        # proxy_buffer_size 8k; # Size of buffer for the first part of the response
    }
    ```

-----

## 5\. Load Balancing with Nginx

### 5.1 What is Load Balancing?

  * **Definition:** Distributing incoming network traffic across multiple servers (backend servers) to ensure no single server is overloaded.
  * **Benefits:**
      * **High Availability:** If one server fails, others can handle the load.
      * **Scalability:** Distributes load, allowing you to add more backend servers to handle increased traffic.
      * **Improved Performance:** Reduces latency by distributing requests.

### 5.2 Basic `upstream` Configuration

Define a group of backend servers using the `upstream` block.

```nginx
http {
    upstream backend_servers {
        server backend1.example.com:8080;
        server backend2.example.com:8080;
        # Add more servers here
    }

    server {
        listen 80;
        server_name myapp.com;

        location / {
            proxy_pass http://backend_servers; # Use the upstream group name
            # ... other proxy settings ...
        }
    }
}
```

### 5.3 Load Balancing Methods

  * **Round Robin (Default):** Requests are distributed sequentially to each server in the `upstream` block.
      * *Configuration:* No explicit directive needed for `upstream`.
  * **Least Conn (Least Connections):** A request is sent to the server with the least number of active connections. Good for requests that vary in processing time.
      * *Configuration:* `least_conn;` inside `upstream`.
    <!-- end list -->
    ```nginx
    upstream backend_servers {
        least_conn;
        server backend1.example.com:8080;
        server backend2.example.com:8080;
    }
    ```
  * **IP Hash (Sticky Sessions):** Requests from the same client IP address are always directed to the same backend server. Useful for applications that require session persistence on a specific server.
      * *Configuration:* `ip_hash;` inside `upstream`.
    <!-- end list -->
    ```nginx
    upstream backend_servers {
        ip_hash;
        server backend1.example.com:8080;
        server backend2.example.com:8080;
    }
    ```
  * **Generic Hash:** Distributes requests based on a user-defined key (e.g., URI, header, cookie).
      * *Configuration:* `hash $request_uri consistent;`
  * **Least Time (Nginx Plus):** Sends requests to the server with the lowest average response time and the fewest active connections.
  * **Random:** Randomly selects a server.

### 5.4 Server Weight & Health Checks (Brief)

  * **Weight:** Assigns a weight to each server to control its proportion of traffic.
      * `server backend1.example.com:8080 weight=5;` (gets 5 times more requests)
  * **Health Checks:** Nginx can periodically check the health of backend servers. If a server is unhealthy, Nginx stops sending requests to it. (Basic health checks like `fail_timeout` and `max_fails` are open-source; advanced active health checks are Nginx Plus features).
      * `server backend1.example.com:8080 max_fails=3 fail_timeout=30s;`

-----

## 6\. SSL/TLS Termination

### 6.1 Why Terminate SSL at Nginx?

  * **Performance Offloading:** Encrypting/decrypting SSL traffic is CPU-intensive. Nginx is highly optimized for this, freeing up backend servers to focus on application logic.
  * **Centralized Management:** Manage all SSL certificates and configurations in one place (Nginx).
  * **Security:** Provides an additional layer of security between the client and the backend.
  * **Simplified Backend:** Backend application servers don't need to handle SSL directly.

### 6.2 Enabling HTTPS

Requires SSL certificate (`.crt` or `.pem`) and private key (`.key`).

```nginx
server {
    listen 443 ssl; # Listen on port 443 for SSL/TLS traffic
    server_name secure.example.com;

    ssl_certificate /etc/nginx/ssl/secure.example.com.crt; # Path to your certificate
    ssl_certificate_key /etc/nginx/ssl/secure.example.com.key; # Path to your private key

    ssl_session_timeout 1d;
    ssl_session_cache shared:SSL:10m; # Cache SSL sessions for performance
    ssl_session_tickets off;

    # Strong security settings (recommend using Mozilla SSL Config generator)
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers 'TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256';
    ssl_prefer_server_ciphers off; # Server prefers client's cipher order
    # ssl_dhparam /etc/nginx/ssl/dhparam.pem; # For DHE ciphers (generate with openssl dhparam -out dhparam.pem 2048)

    location / {
        proxy_pass http://backend_app; # Backend server might be listening on HTTP
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto https; # Inform backend it was HTTPS
    }
}
```

### 6.3 Redirecting HTTP to HTTPS

```nginx
server {
    listen 80; # Listen for HTTP traffic
    server_name example.com www.example.com;
    return 301 https://$host$request_uri; # Redirect to HTTPS
}
```

### 6.4 HTTP Strict Transport Security (HSTS)

  * **Purpose:** Forces web browsers to interact with your site only over HTTPS, even if the user types `http://`. Helps prevent SSL stripping attacks.
  * **Configuration:**
    ```nginx
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload";
    ```
      * *Placement:* Inside your `server` block for HTTPS (port 443).
      * `max-age`: How long the browser should remember to use HTTPS (in seconds).
      * `includeSubDomains`: Applies HSTS to all subdomains.
      * `preload`: Allows you to submit your domain to a browser's HSTS preload list.

### 6.5 Cipher Suites

  * **Definition:** A set of algorithms that help secure a network connection. Nginx allows you to specify preferred cipher suites.
  * *Best Practice:* Use modern, strong cipher suites and disable weak ones. Tools like Mozilla SSL Configuration Generator can help.

-----

## 7\. HTTP Caching with Nginx

### 7.1 Why Cache at Nginx?

  * **Reduced Backend Load:** Nginx serves cached content directly, reducing the number of requests that reach backend servers.
  * **Faster Response Times:** For repeat requests, content is served from Nginx's fast cache.
  * **Improved User Experience:** Quicker page loads.

### 7.2 Basic Proxy Cache Setup

1.  **Define Cache Zone (in `http` context):**
    ```nginx
    http {
        # ... other http settings ...
        proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m inactive=60m max_size=1g;
        # Path:   Directory for cache files
        # levels: Directory hierarchy (e.g., /var/cache/nginx/c/29)
        # keys_zone: Name (my_cache) and size (10m) of shared memory zone for cache keys
        # inactive: Items not accessed for 60 minutes are removed
        # max_size: Maximum size of the cache
    }
    ```
2.  **Enable Cache in `server` or `location` block:**
    ```nginx
    server {
        listen 80;
        server_name cache.example.com;

        location / {
            proxy_pass http://backend_app;
            proxy_cache my_cache; # Use the defined cache zone

            proxy_cache_valid 200 302 10m; # Cache 200 and 302 responses for 10 minutes
            proxy_cache_valid 404 1m; # Cache 404 responses for 1 minute

            add_header X-Proxy-Cache $upstream_cache_status; # Add header to see cache status
        }
    }
    ```

### 7.3 Cache Validation & Control

  * **`proxy_cache_valid`:** Specifies cache duration for different HTTP status codes.
  * **`proxy_cache_key`:** Defines what makes a request unique for caching. Default is `$scheme$proxy_host$request_uri`.
  * **`proxy_cache_min_uses`:** Minimum number of times a request must be made before a response is cached.

### 7.4 Bypassing and No-Caching

  * **`proxy_cache_bypass`:** A request will **not** be served from cache if any of the specified variables are not empty or `0`. Use for authenticated requests.
    ```nginx
    proxy_cache_bypass $http_cookie; # Bypass if cookie exists
    ```
  * **`proxy_no_cache`:** A response will **not** be stored in cache if any of the specified variables are not empty or `0`.
    ```nginx
    proxy_no_cache $http_pragma; # Do not cache if Pragma header exists
    ```

-----

## 8\. Nginx Security Best Practices

### 8.1 Hiding Nginx Version

Prevents exposing Nginx version information in HTTP headers and error pages.

```nginx
# In http context or main context
server_tokens off;
```

### 8.2 Disabling Default Server

Crucial for preventing requests for unconfigured domains from hitting your applications.

```nginx
server {
    listen 80 default_server;
    server_name _;
    return 444; # Close connection
}
```

### 8.3 Rate Limiting Requests

Protects against brute-force attacks and abuse by limiting the number of requests a client can make within a period.

1.  **Define a zone (in `http` context):**
    ```nginx
    http {
        # Define a zone named 'mylimit' with 10MB memory, allowing 1 request per second (burst 5)
        limit_req_zone $binary_remote_addr zone=mylimit:10m rate=1r/s;
    }
    ```
2.  **Apply to a `location` or `server` block:**
    ```nginx
    server {
        listen 80;
        server_name api.example.com;

        location /login {
            limit_req zone=mylimit burst=5 nodelay; # Allow 1rps, burst 5, no delay for bursts
            # ... other config ...
        }
    }
    ```
      * `burst`: Allows temporary bursts above the rate, up to `burst` requests.
      * `nodelay`: If `burst` is allowed, requests are processed without delay.

### 8.4 IP Address Access Control

Allow or deny access based on client IP addresses.

```nginx
location /admin {
    deny 192.168.1.1; # Deny a specific IP
    allow 192.168.1.0/24; # Allow a CIDR block
    allow 10.0.0.0/8; # Allow another CIDR block
    deny all; # Deny everyone else
}
```

### 8.5 Basic HTTP Authentication

Protects a URI with a username/password.

```nginx
location /private {
    auth_basic "Restricted Access"; # Message shown in auth prompt
    auth_basic_user_file /etc/nginx/.htpasswd; # Path to htpasswd file
}
```

  * Generate `.htpasswd` file using `htpasswd -c /etc/nginx/.htpasswd username`

### 8.6 Preventing DDoS (Basic Measures)

  * **Rate Limiting:** (See 8.3)
  * **Limiting Connection Timeouts:** `client_body_timeout`, `send_timeout`, `keepalive_timeout`.
  * **Limiting Request Body Size:** `client_max_body_size`.
  * **`limit_conn_zone`:** Limit number of concurrent connections per IP.

-----

## 9\. Advanced Nginx Concepts & Directives

### 9.1 Gzip Compression

Compresses responses before sending them to clients that support Gzip, reducing bandwidth and improving load times.

```nginx
http {
    # ...
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    gzip_comp_level 6; # Compression level (1-9, 6 is good balance)
    gzip_min_length 1000; # Minimum length of response to compress
    # gzip_buffers 16 8k;
    # ...
}
```

### 9.2 Logging Configuration

  * **`access_log`:** Logs all incoming requests.
  * **`error_log`:** Logs errors at specified severity levels.
  * **`log_format`:** Defines custom log formats.

<!-- end list -->

```nginx
http {
    log_format custom_format '$remote_addr - $remote_user [$time_local] "$request" '
                             '$status $body_bytes_sent "$http_referer" '
                             '"$http_user_agent" "$http_x_forwarded_for" '
                             '$request_time $upstream_response_time';

    access_log /var/log/nginx/access.log custom_format;
    error_log /var/log/nginx/error.log error; # Log errors at 'error' level and above
}
```

### 9.3 `try_files` Directive

Attempts to serve files or directories based on specified paths, falling back to a default URI or error.

```nginx
location / {
    root /var/www/my_app/public;
    try_files $uri $uri/ /index.php?$query_string; # Try $uri, then $uri/, then pass to index.php
}

location /images {
    root /var/www/static;
    try_files $uri =404; # Serve image directly, or return 404
}
```

### 9.4 Rewrites and Returns

  * **`rewrite`:** Changes a URL path internally or externally. Uses regex.
    ```nginx
    location /old-path {
        rewrite ^/old-path/(.*)$ /new-path/$1 permanent; # 301 redirect
    }
    ```
  * **`return`:** Immediately stops processing the request and returns a specified status code and URL/text. Simpler and preferred over `rewrite` when possible.
    ```nginx
    server {
        listen 80;
        server_name old-domain.com;
        return 301 https://new-domain.com$request_uri; # Redirect entire domain
    }

    location /maintenance {
        return 503 "Site under maintenance."; # Custom 503 response
    }
    ```

### 9.5 Keepalive Connections

  * **Concept:** Allows a client to make multiple requests over a single TCP connection, reducing overhead.
  * **`keepalive_timeout`:** Specifies the timeout for keep-alive client connections.
    ```nginx
    http {
        keepalive_timeout 65s; # Default is 75s, 65s is common
        # ...
    }
    ```

-----

## 10\. Troubleshooting Nginx

### 10.1 Configuration Syntax Check

  * Always run this after modifying configuration files:
    ```bash
    sudo nginx -t
    ```
      * Looks for syntax errors and common misconfigurations.

### 10.2 Checking Logs

  * **Error Logs:** Essential for debugging.
    ```bash
    tail -f /var/log/nginx/error.log
    ```
  * **Access Logs:** For seeing incoming requests and their status.
    ```bash
    tail -f /var/log/nginx/access.log
    ```

### 10.3 Common Issues

  * **Syntax Errors:** Caught by `nginx -t`.
  * **Permissions:** Nginx worker processes need read access to content files and write access to log directories.
  * **Firewall:** Ensure necessary ports (80, 443) are open.
  * **Backend Unreachable:** Check network connectivity, backend service status.
  * **Incorrect `server_name` or `listen`:** Causes requests to go to the wrong `server` block or not be received.
  * **Cached Responses:** If changes aren't reflecting, clear browser cache, check Nginx cache.
  * **SELinux/AppArmor:** Security modules might prevent Nginx from accessing certain paths.

-----

## 11\. Common Interview Questions & Scenarios

  * **Conceptual Questions:**
      * "What is Nginx, and what are its primary use cases?"
      * "Explain Nginx's event-driven architecture. How does it contribute to high performance?"
      * "Differentiate between Nginx acting as a web server versus a reverse proxy."
      * "What is a `server` block in Nginx, and what is its purpose?"
      * "What are the main load balancing methods available in Nginx, and when would you use `ip_hash`?"
      * "Why would you terminate SSL/TLS at Nginx instead of on the backend application server?"
      * "Explain the purpose of `proxy_set_header X-Forwarded-For`."
      * "What is HTTP Strict Transport Security (HSTS), and how do you configure it in Nginx?"
      * "Describe the advantages of caching at the Nginx layer."
      * "What's the difference between `nginx -s reload` and `nginx -s stop` followed by `nginx`?"
  * **Configuration/Scenario-Based Questions:**
      * "You have a static website at `/var/www/mywebsite`. Write an Nginx configuration to serve it on `example.com`."
          * *(Expected commands/directives: `server`, `listen 80`, `server_name`, `root`, `index`, `location / { try_files }`)*
      * "Your Node.js application is running on port 3000 on `localhost`. Configure Nginx to act as a reverse proxy for `api.yourdomain.com` to this application."
          * *(Expected: `server`, `listen 80`, `server_name api.yourdomain.com`, `location / { proxy_pass http://localhost:3000; }`, header settings)*
      * "You need to set up load balancing for three backend application servers: `192.168.1.10:8080`, `192.168.1.11:8080`, and `192.168.1.12:8080`. Write the Nginx configuration."
          * *(Expected: `upstream` block, `server` directives within it, `proxy_pass` to the upstream group)*
      * "How would you redirect all HTTP traffic to HTTPS for `www.secure.com`? Provide the Nginx configuration."
          * *(Expected: A `server` block for `listen 80` with `return 301 https://$host$request_uri;`)*
      * "You want to limit clients to 10 requests per second to your `/api/v1/data` endpoint, with a burst of 5 requests allowed. How would you configure Nginx for this?"
          * *(Expected: `limit_req_zone` in `http`, `limit_req` in `location`)*
      * "A specific client IP `203.0.113.45` is causing issues; you need to block all access from this IP to your entire site. How?"
          * *(Expected: `deny 203.0.113.45;` and `allow all;` or `deny all;`)*
      * "How would you enable Gzip compression for common web file types in Nginx?"
          * *(Expected: `gzip on`, `gzip_types`, etc. in `http` context)*
      * "Your Nginx server is showing a 502 Bad Gateway error. What steps would you take to troubleshoot this?"
          * *(Expected: Check backend service, check Nginx error logs, check firewall, check `proxy_pass` configuration.)*
      * "You've pushed a new version of your frontend code, but users are still seeing the old version. What's the first thing you'd check in Nginx configuration?"
          * *(Expected: Nginx caching configuration (`proxy_cache_valid`), browser cache, Nginx reload status.)*