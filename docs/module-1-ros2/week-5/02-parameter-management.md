---
title: "Parameter Management"
sidebar_position: 2
---

# Parameter Management

**Week 5 | Module 1 | Estimated Time: 2.5 hours**

## Learning Objectives
- Declare and access ROS 2 parameters within `rclpy` nodes.
- Load and save parameters using YAML configuration files.
- Dynamically modify parameters of running nodes using CLI tools.
- Understand the implications of runtime parameter reconfiguration for robot behavior.

## Prerequisites
- Completed "Launch Files and Parameter Management".
- Familiarity with YAML syntax.

## Overview
ROS 2 parameters provide a powerful mechanism for configuring the behavior of your robot's nodes without having to recompile code. This chapter delves into the intricacies of parameter management, showing you how to declare parameters within your `rclpy` nodes, set default values, and retrieve their current values. This allows your nodes to be more flexible and adaptable to different operational scenarios.

A key benefit of the parameter system is the ability to load entire sets of parameters from YAML configuration files. This enables easy management of complex configurations for multiple nodes or different robot setups. You will learn how to create and use these YAML files. Furthermore, we will explore how to dynamically modify parameters of *running* ROS 2 nodes using the `ros2 param` command-line tools. This capability is invaluable for fine-tuning robot behavior in real-time, such as adjusting a PID gain or changing a navigation threshold, without interrupting the system's operation.

## Key Concepts
- **Parameters**: Dynamic key-value pairs stored on a ROS 2 node, allowing runtime configuration and modification of its behavior.
- **`declare_parameter()`**: An `rclpy` node method used to register a parameter with a given name, type, and optional default value.
- **`get_parameter()`**: An `rclpy` node method used to retrieve the current value of a declared parameter.
- **YAML Configuration**: A human-readable data serialization standard widely used in ROS 2 for storing parameter sets and other configuration data.
- **Dynamic Reconfiguration**: The ability to change parameters of active ROS 2 nodes without needing to restart them, enabling on-the-fly tuning.
- **`ros2 param` CLI**: Command-line tools (e.g., `ros2 param list`, `ros2 param get`, `ros2 param set`) for interacting with the ROS 2 parameter server.

## What You'll Build
- A ROS 2 Python node that declares multiple parameters (e.g., robot speed, turning radius, a boolean flag).
- You will create a YAML file to load these parameters upon node startup via a launch file.
- You will then dynamically change one of these parameters using `ros2 param set` and observe its effect on the node's behavior.

## Tools & Technologies
- ROS 2 Humble/Iron
- `rclpy`
- Python launch files (`.launch.py`)
- YAML configuration files
- `ros2 param` CLI tools

## Next Steps
- Proceed to "URDF for Humanoids" to learn how to formally describe your robot's physical structure using the Unified Robot Description Format.

---
*📝 Note: Detailed content, code examples, and step-by-step tutorials will be added in Phase 2.*