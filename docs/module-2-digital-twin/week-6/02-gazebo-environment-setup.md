---
title: "Gazebo Environment Setup"
sidebar_position: 2
---

# Gazebo Environment Setup

**Week 6 | Module 2 | Estimated Time: 3 hours**

## Learning Objectives
- Successfully install Gazebo (Classic and/or Sim) on Ubuntu 22.04.
- Configure Gazebo for seamless integration with ROS 2.
- Verify the correct installation and functionality using basic examples.
- Understand the role of `gazebo_ros` packages for ROS 2 interaction.

## Prerequisites
- Completed "Introduction to Simulation".
- ROS 2 Humble/Iron installed on Ubuntu 22.04.
- Familiarity with Linux command line operations and package management.

## Overview
This chapter provides a hands-on guide to setting up your primary simulation environment: Gazebo. While there are different versions of Gazebo (Gazebo Classic and Gazebo Sim, formerly Ignition), we will focus on getting a functional installation that integrates seamlessly with your ROS 2 environment. A correct setup is crucial for simulating your humanoid robot and developing its control algorithms.

You will learn the necessary steps for installation on Ubuntu 22.04, including dependency management and configuration. We will then connect Gazebo to ROS 2 using specialized bridge packages, primarily `gazebo_ros`. These packages allow ROS 2 nodes to publish commands to a simulated robot in Gazebo and receive sensor data back from the virtual environment. We'll verify your setup with simple launch files that bring up a basic Gazebo world and a ROS 2 robot, ensuring that your digital twin environment is ready for more complex tasks.

## Key Concepts
- **Gazebo Classic**: The original version of the Gazebo robot simulator, widely used and well-documented.
- **Gazebo Sim (Ignition)**: The next-generation Gazebo simulator, offering improved modularity and performance, built on the Ignition Robotics framework.
- **`gazebo_ros_pkgs`**: A suite of ROS 2 packages that provide the bridge between Gazebo and ROS 2, enabling communication and control.
- **Environment Variables**: System-level settings (e.g., `GAZEBO_MODEL_PATH`) that tell Gazebo where to find robot models and world files.
- **World Files**: XML-based files that define the static environment, objects, and lighting within a Gazebo simulation.
- **GUI Basics**: Navigating the Gazebo graphical user interface, including camera controls, object manipulation, and visualization options.

## What You'll Build
- A verified Gazebo installation integrated with ROS 2.
- You will launch a simple Gazebo world (e.g., empty world) and spawn a basic ROS 2-controlled robot model within it.

## Tools & Technologies
- Gazebo Classic/Sim (specific version to be chosen)
- ROS 2 Humble/Iron
- `gazebo_ros_pkgs`
- Ubuntu 22.04 LTS
- `ros2 launch` CLI tool

## Next Steps
- Proceed to "URDF and SDF Formats" to learn how to describe your robot and environment for simulation.

---
*📝 Note: Detailed content, code examples, and step-by-step tutorials will be added in Phase 2.*