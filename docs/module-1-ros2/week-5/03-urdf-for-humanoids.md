---
title: "Understanding URDF for Humanoids"
sidebar_position: 3
---

# Understanding URDF for Humanoids

**Week 5 | Module 1 | Estimated Time: 4 hours**

## Learning Objectives
- Write and interpret URDF (Unified Robot Description Format) files for humanoid robots.
- Define kinematic chains, specifying links and joints with their properties.
- Utilize XACRO macros to simplify URDF generation for complex robots.
- Integrate `robot_state_publisher` to broadcast the robot's state in ROS 2.

## Prerequisites
- Completed "Parameter Management".
- Basic understanding of XML syntax.
- Familiarity with kinematic concepts (e.g., links, joints, degrees of freedom).

## Overview
To effectively simulate, visualize, and control a humanoid robot, ROS 2 needs a precise geometric and kinematic description of its physical structure. This is where URDF (Unified Robot Description Format) comes in. This chapter will guide you through the process of creating URDF files, which are XML-based files that describe a robot's non-movable "links" (like a forearm or torso) and the "joints" that connect them, allowing for movement.

We will focus specifically on humanoid structures, detailing how to define complex kinematic chains that represent arms, legs, and a head. You'll learn about different joint types (revolute, prismatic, fixed) and their properties. For more complex robots, we'll introduce XACRO, an XML macro language that simplifies the generation of URDF, making it more modular and readable. Finally, you will integrate the `robot_state_publisher` node, a crucial component that takes joint states and broadcasts the robot's full kinematic state as TF2 transforms in ROS 2, allowing other nodes to understand where different parts of the robot are relative to each other.

## Key Concepts
- **URDF (Unified Robot Description Format)**: An XML file format in ROS that describes a robot's physical and kinematic properties.
- **Links**: The rigid bodies of a robot (e.g., a forearm, a wheel, the torso) described in URDF.
- **Joints**: The connections between links in a robot, defining their relative motion (e.g., revolute, prismatic, fixed).
- **Kinematic Chain**: A series of links connected by joints, defining the robot's degrees of freedom and how its parts move.
- **XACRO**: An XML macro language that extends URDF, allowing for more modular and parametric robot descriptions, reducing redundancy.
- **`robot_state_publisher`**: A ROS 2 node that reads the joint states of a robot and publishes the 3D poses of the robot's links as TF2 transforms.
- **TF2 Transforms**: A ROS 2 library for representing, buffering, and transforming coordinate frames over time, essential for understanding spatial relationships between robot parts and the environment.

## What You'll Build
- A basic URDF file for a simplified humanoid robot, including a torso, two arms, and two legs, defining their links and joints.
- You will use `check_urdf` to validate your URDF and `rviz2` to visualize it, demonstrating the kinematic structure.

## Tools & Technologies
- ROS 2 Humble/Iron
- URDF (.urdf) files
- XACRO (.xacro) files
- `robot_state_publisher`
- `rviz2` (ROS 2 visualization tool)
- `check_urdf` (URDF validation tool)

## Next Steps
- Proceed to "ROS 2 Best Practices" to learn how to write robust, maintainable, and efficient ROS 2 code.

---
*📝 Note: Detailed content, code examples, and step-by-step tutorials will be added in Phase 2.*