---
title: "Building ROS 2 Packages with Python"
sidebar_position: 3
---

# Building ROS 2 Packages with Python

**Week 4 | Module 1 | Estimated Time: 4 hours**

## Learning Objectives
- Create a new ROS 2 Python package from scratch using `ros2 pkg create`.
- Understand the structure of a ROS 2 package, including `package.xml` and `setup.py`.
- Manage dependencies between ROS 2 packages and external Python libraries.
- Build a ROS 2 workspace using `colcon build`.

## Prerequisites
- Completed "Actions for Long Tasks".
- Intermediate Python programming knowledge.

## Overview
As your ROS 2 projects grow in complexity, organizing your code into "packages" becomes essential for reusability, maintainability, and collaboration. This chapter guides you through the process of creating a new ROS 2 Python package, the standard unit of software organization in ROS 2. You will learn about the key files that define a package: `package.xml`, which contains metadata and dependencies, and `setup.py`, which is crucial for Python-specific build instructions.

We will cover how to declare dependencies on other ROS 2 packages and external Python libraries, ensuring your code can be easily shared and built by others. You'll gain hands-on experience using `colcon build`, the recommended build tool for ROS 2, to compile your workspace and make your executables discoverable by the ROS 2 runtime. Mastering package creation is a fundamental skill for any ROS 2 developer, enabling you to structure your robotic applications effectively.

## Key Concepts
- **ROS 2 Package**: The fundamental unit for organizing software in ROS 2, containing nodes, message definitions, launch files, and other resources.
- **`package.xml`**: An XML file containing metadata about a ROS 2 package, including its name, version, description, maintainers, license, and dependencies.
- **`setup.py`**: A Python script used by `setuptools` to build and install Python packages. In ROS 2, it defines executables, entry points, and dependencies for Python nodes.
- **`colcon build`**: The primary command-line tool for building ROS 2 workspaces, capable of building multiple packages in the correct order based on their dependencies.
- **ROS 2 Workspace**: A collection of ROS 2 packages that are built and developed together.
- **Dependencies**: Other packages or libraries that a ROS 2 package relies on.

## What You'll Build
- A complete ROS 2 Python package that contains the publisher and subscriber nodes developed in earlier chapters. You will build this package within a `colcon` workspace.

## Tools & Technologies
- ROS 2 Humble/Iron
- `ros2 pkg create` CLI tool
- `package.xml`
- `setup.py`
- `colcon build` CLI tool
- Python 3.8+

## Next Steps
- Proceed to "Working with `rclpy`" to deepen your understanding of the Python client library and its advanced features.

---
*📝 Note: Detailed content, code examples, and step-by-step tutorials will be added in Phase 2.*