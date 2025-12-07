---
title: "ROS 2 Architecture"
sidebar_position: 1
---

# ROS 2 Architecture

**Week 3 | Module 1 | Estimated Time: 3 hours**

## Learning Objectives
- Explain the fundamental architecture of a ROS 2 system.
- Understand the role of the Data Distribution Service (DDS) middleware.
- Compare and contrast key differences between ROS 1 and ROS 2.
- Identify core ROS 2 concepts such as nodes, topics, and services.

## Prerequisites
- Basic familiarity with Linux command line operations.
- Understanding of distributed systems concepts (optional but helpful).

## Overview
This chapter dives into the heart of ROS 2, the Robotic Operating System that serves as the nervous system for advanced robotic applications. We will explore its distributed architecture, designed for modern, multi-robot, and real-time capable systems. A key differentiator of ROS 2 is its reliance on the Data Distribution Service (DDS) middleware, which provides robust, flexible, and high-performance communication between various components.

We will compare ROS 2 with its predecessor, ROS 1, highlighting improvements in areas like security, quality of service (QoS), and support for embedded systems. Core concepts such as nodes (individual processes), topics (asynchronous data streams), services (synchronous request-reply), and actions (long-running goal-based interactions) will be introduced. Understanding this architectural foundation is crucial for building scalable and reliable Physical AI systems.

## Key Concepts
- **DDS (Data Distribution Service) Middleware**: The backbone of ROS 2 communication, handling discovery, data transfer, and QoS policies.
- **Nodes**: Independent executable processes within a ROS 2 system, often performing a single functional role (e.g., a camera driver node, a navigation node).
- **Topics**: A mechanism for asynchronous, many-to-many communication in ROS 2. Nodes publish messages to topics, and other nodes subscribe to receive those messages.
- **Services**: A synchronous request-reply communication mechanism used for calling remote functions or performing immediate, short-duration tasks.
- **Actions**: A higher-level communication pattern in ROS 2 used for long-running, preemptible tasks that provide continuous feedback (e.g., navigating to a goal).
- **Quality of Service (QoS)**: A set of policies that define how messages are delivered, including reliability, durability, and latency settings.

## What You'll Build
- You will create a simple block diagram illustrating the interaction between two ROS 2 nodes communicating via a topic, service, and action.

## Tools & Technologies
- ROS 2 Humble/Iron
- Ubuntu 22.04 LTS
- `rqt_graph` (ROS 2 introspection tool)

## Next Steps
- Proceed to "Nodes Fundamentals" to learn how to create and manage individual computational units in ROS 2.

---
*📝 Note: Detailed content, code examples, and step-by-step tutorials will be added in Phase 2.*