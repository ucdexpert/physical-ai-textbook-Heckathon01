---
title: "Services and Clients"
sidebar_position: 1
---

# Services and Clients

**Week 4 | Module 1 | Estimated Time: 3 hours**

## Learning Objectives
- Implement ROS 2 services for synchronous, request-response communication.
- Create service clients to call defined services.
- Understand the differences and appropriate use cases for topics versus services.
- Utilize ROS 2 CLI tools to interact with services.

## Prerequisites
- Completed Week 3 ROS 2 Fundamentals.
- Basic Python programming knowledge.

## Overview
While topics provide an asynchronous, many-to-many data stream, ROS 2 "services" offer a synchronous, one-to-one communication mechanism. Services are ideal for request-response interactions, where a "client" sends a request to a "server" and waits for a single, immediate reply. This chapter will guide you through defining your own ROS 2 service interfaces (`.srv` files) and implementing both the server (the node that provides the service) and the client (the node that calls the service).

You will learn when to choose services over topics—typically for configuration changes, querying data, or triggering specific actions that require an immediate response. We will build a practical example, such as a service to set a robot's speed or to query its current status. Furthermore, you'll become proficient with ROS 2 CLI tools like `ros2 service list`, `ros2 service info`, and `ros2 service call` to inspect available services and test their functionality directly from the command line, crucial for development and debugging.

## Key Concepts
- **Service**: A synchronous, request-response communication pattern in ROS 2, used for immediate, one-off interactions.
- **Service Server**: A ROS 2 node that implements the logic to respond to service requests.
- **Service Client**: A ROS 2 node that sends requests to a service server and waits for a response.
- **`.srv` files**: Special files that define the structure of service requests and responses.
- **Synchronous Communication**: A communication model where the client waits for the server's response before proceeding.
- **Service Introspection**: The ability to discover, query, and call services using ROS 2 CLI tools.

## What You'll Build
- A ROS 2 Python service server that takes an integer request (e.g., a desired speed) and returns a boolean response (success/failure).
- A ROS 2 Python service client that calls this service.

## Tools & Technologies
- ROS 2 Humble/Iron
- `rclpy`
- ROS 2 `.srv` definition files
- `ros2 service list`, `ros2 service info`, `ros2 service call` CLI tools

## Next Steps
- Proceed to "Actions for Long Tasks" to explore a communication pattern designed for longer-running, preemptible operations.

---
*📝 Note: Detailed content, code examples, and step-by-step tutorials will be added in Phase 2.*