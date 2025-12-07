---
title: "Nodes Fundamentals"
sidebar_position: 2
---

# Nodes Fundamentals

**Week 3 | Module 1 | Estimated Time: 3 hours**

## Learning Objectives
- Create and compile simple ROS 2 Python nodes using `rclpy`.
- Understand the concept of a ROS 2 node and its lifecycle.
- Implement basic node functionality, including initialization and shutdown.
- Utilize ROS 2 CLI tools to inspect and interact with running nodes.

## Prerequisites
- Completed "ROS 2 Architecture".
- Basic Python programming knowledge.
- ROS 2 Humble/Iron installed on Ubuntu 22.04.

## Overview
In ROS 2, a "node" is the fundamental building block of a robot's software system. It's an executable program that performs a single, well-defined task, such as reading sensor data, controlling a motor, or performing a navigation algorithm. This chapter will guide you through the process of creating your first ROS 2 nodes using `rclpy`, the Python client library for ROS 2.

We will cover node initialization, how to keep a node "spinning" to process callbacks, and proper shutdown procedures. You'll learn about the node lifecycle and how different states (unconfigured, inactive, active) allow for robust system management. Crucially, you'll gain hands-on experience using ROS 2 command-line interface (CLI) tools like `ros2 node list` and `ros2 node info` to inspect and understand the behavior of your running nodes, which is essential for debugging and system monitoring.

## Key Concepts
- **Node**: A process that performs computation, communicating with other nodes using ROS 2 communication mechanisms.
- **`rclpy`**: The Python client library for ROS 2, providing an API to write ROS 2 applications in Python.
- **Node Lifecycle**: A standard state machine for ROS 2 nodes (e.g., configuring, activating, deactivating, shutting down) that allows for controlled transitions and improved system reliability.
- **Executors**: Mechanisms that manage the execution of callbacks (e.g., timer callbacks, subscription callbacks) within a node.
- **Spinning**: The process by which a ROS 2 node continuously checks for and executes pending callbacks.
- **ROS 2 CLI Tools**: Command-line utilities (e.g., `ros2 node`, `ros2 topic`) for interacting with and debugging ROS 2 systems.

## What You'll Build
- A basic ROS 2 Python node that prints "Hello, ROS 2!" to the console every second.

## Tools & Technologies
- ROS 2 Humble/Iron (Python 3.8+)
- `rclpy`
- `colcon build`
- `ros2 run`, `ros2 node` CLI tools

## Next Steps
- Proceed to "Topics and Publishers" to learn how nodes can send data to other parts of the ROS 2 system.

---
*📝 Note: Detailed content, code examples, and step-by-step tutorials will be added in Phase 2.*