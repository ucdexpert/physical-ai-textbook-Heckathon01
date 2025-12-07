---
title: "Nav2 Introduction"
sidebar_position: 1
---

# Nav2 Introduction

**Week 10 | Module 3 | Estimated Time: 3 hours**

## Learning Objectives
- Understand the core components and architecture of the ROS 2 Navigation Stack (Nav2).
- Configure Nav2 for autonomous navigation of a simulated humanoid robot.
- Set up global and local costmaps for obstacle avoidance.
- Utilize the Nav2 behavior tree for flexible navigation behaviors.

## Prerequisites
- Completed Week 9 Perception and Navigation (specifically VSLAM and AI perception).
- Familiarity with ROS 2 launch files and parameter management.

## Overview
Equipped with perception capabilities, your humanoid robot now needs to be able to move autonomously from one point to another while avoiding obstacles. This chapter introduces Nav2, the powerful ROS 2 Navigation Stack, which provides a complete framework for autonomous mobile robot navigation. You will learn about Nav2's modular architecture, comprising various planners, controllers, and recovery behaviors orchestrated by a flexible behavior tree.

We will guide you through configuring Nav2 for your simulated humanoid robot. This involves setting up global costmaps (for long-range planning based on a static map) and local costmaps (for immediate obstacle avoidance using real-time sensor data). You'll understand how these costmaps represent obstacles and how they influence the robot's planned paths. By the end of this chapter, your robot will be able to receive a navigation goal and autonomously plan and execute a path to it, making it a truly mobile Physical AI agent.

## Key Concepts
- **Nav2 (ROS 2 Navigation Stack)**: A complete software stack in ROS 2 that enables mobile robots to navigate autonomously in complex environments.
- **Behavior Tree**: A powerful and flexible task-sequencing framework used in Nav2 to define complex navigation behaviors and recovery strategies.
- **Global Planner**: A component in Nav2 responsible for calculating a long-term, collision-free path from the robot's current position to a distant goal on a static map.
- **Local Controller**: A component in Nav2 responsible for generating short-term, velocity commands to follow the global plan while avoiding dynamic obstacles in the immediate vicinity.
- **Costmap**: A grid-based map representation used by Nav2 to store information about obstacles, inflation layers, and other navigation costs, influencing path planning.
- **Global Costmap**: A costmap used for global path planning, typically built from a static map (e.g., from SLAM).
- **Local Costmap**: A costmap used for local obstacle avoidance and trajectory generation, dynamically updated with real-time sensor data.

## What You'll Build
- A Nav2-configured simulated humanoid robot in Isaac Sim.
- You will launch the Nav2 stack, provide a navigation goal in `rviz2`, and observe your robot autonomously planning and executing a path to the goal, avoiding detected obstacles.

## Tools & Technologies
- Nav2 ROS 2 packages
- ROS 2 Humble/Iron
- NVIDIA Isaac Sim (for robot and environment simulation)
- `rviz2` (for visualization of maps, paths, and goals)
- Your humanoid robot USD model

## Next Steps
- Proceed to "Path Planning Algorithms" to delve deeper into the specific algorithms Nav2 uses for generating trajectories.

---
*📝 Note: Detailed content, code examples, and step-by-step tutorials will be added in Phase 2.*