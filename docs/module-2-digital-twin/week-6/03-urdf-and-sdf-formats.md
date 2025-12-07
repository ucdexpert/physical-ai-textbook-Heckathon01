---
title: "URDF and SDF Robot Description"
sidebar_position: 3
---

# URDF and SDF Robot Description

**Week 6 | Module 2 | Estimated Time: 3 hours**

## Learning Objectives
- Compare and contrast the capabilities and limitations of URDF and SDF formats.
- Understand when to use URDF for ROS 2 applications and SDF for Gazebo-native features.
- Learn to convert URDF models to SDF for full Gazebo compatibility.
- Define simple environments and static objects using the SDF format.

## Prerequisites
- Completed "Gazebo Environment Setup".
- Familiarity with URDF from Module 1.

## Overview
In Module 1, you learned about URDF for describing your robot's kinematic and visual properties in ROS 2. For robust simulation in Gazebo, however, another format becomes crucial: SDF (Simulation Description Format). This chapter will delve into the differences between URDF and SDF, explaining why Gazebo natively prefers SDF and how the two formats complement each other in a ROS 2-Gazebo workflow.

You will discover that while URDF is excellent for basic robot descriptions, SDF offers more comprehensive features for simulation, such as defining physics properties (mass, inertia, collision shapes), sensors, actuators, and entire world environments. We will explore how to convert existing URDF models into SDF and how to directly define static world elements (like walls, tables, and obstacles) using SDF. Mastering both URDF and SDF is essential for accurately representing your humanoid robot and its operating environment within the Gazebo digital twin.

## Key Concepts
- **SDF (Simulation Description Format)**: An XML file format that describes objects and environments for robot simulators like Gazebo, offering more comprehensive physics and sensor definitions than URDF.
- **URDF (Unified Robot Description Format)**: Primarily used in ROS for kinematics and visualization, with limited physics properties.
- **Physics Properties**: Attributes in SDF (e.g., mass, inertia, friction coefficients) that determine how objects behave in a physics simulation.
- **Collision Shapes**: Simplified geometric primitives (e.g., boxes, spheres, cylinders) used in SDF to represent the physical bounds of an object for collision detection, optimizing computation.
- **Visual Meshes**: Detailed 3D models (e.g., STL, DAE) used in SDF for rendering the appearance of objects, distinct from collision shapes.
- **World Files**: SDF files that describe an entire simulated scene, including static objects, lighting, and environmental physics.

## What You'll Build
- An SDF world file that includes a simple floor plane, a few basic obstacles (e.g., a box, a cylinder), and configured gravity.
- You will load this world into Gazebo and verify the objects behave as expected under gravity.

## Tools & Technologies
- Gazebo Sim (Ignition)
- SDF (.sdf) files
- `gz sdf` CLI tool (for SDF validation and conversion)
- `ros2 launch`

## Next Steps
- Proceed to "Physics Simulation" to learn how to configure physics engines and tune parameters for realistic robot behavior in Gazebo.

---
*📝 Note: Detailed content, code examples, and step-by-step tutorials will be added in Phase 2.*