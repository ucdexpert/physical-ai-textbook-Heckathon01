---
title: "Topics and Publishers"
sidebar_position: 3
---

# Topics and Publishers

**Week 3 | Module 1 | Estimated Time: 3 hours**

## Learning Objectives
- Implement a ROS 2 publisher to send data on a topic.
- Understand the publish-subscribe communication pattern.
- Work with standard ROS 2 message types (e.g., `std_msgs`, `geometry_msgs`).
- Configure Quality of Service (QoS) settings for topic communication.

## Prerequisites
- Completed "Nodes Fundamentals".
- Basic Python programming knowledge.

## Overview
Communication is at the heart of any distributed robotic system. In ROS 2, the primary mechanism for asynchronous, many-to-many data flow is "topics." This chapter will teach you how to create a ROS 2 "publisher" node that sends data on a specific topic. This publish-subscribe pattern is highly flexible: any number of nodes can publish to a topic, and any number of nodes can subscribe to receive messages from it, without direct knowledge of each other.

We will explore various standard ROS 2 message types, such as `std_msgs` for basic data (like strings or integers) and `geometry_msgs` for common robotics data (like points, poses, or twists). Understanding these message definitions is crucial for interoperability. Furthermore, you'll learn about Quality of Service (QoS) settings, which allow you to specify communication requirements like reliability, history, and durability, tailoring the communication behavior to the needs of your application (e.g., high-frequency sensor data vs. critical command messages).

## Key Concepts
- **Publisher**: A ROS 2 entity that sends messages on a named topic.
- **Topic**: A named channel over which nodes exchange messages in a publish-subscribe manner.
- **Message Types**: Data structures that define the format of information exchanged over topics (e.g., `std_msgs/msg/String`, `geometry_msgs/msg/Twist`).
- **Publish-Subscribe Pattern**: A communication model where senders (publishers) do not send messages directly to specific receivers (subscribers), but instead "publish" messages to a general category (topic), without knowledge of who may be subscribing.
- **QoS (Quality of Service) Settings**: Configurable parameters for ROS 2 communication that govern aspects like reliability, message history, deadline, and liveliness, enabling performance and robustness tuning.

## What You'll Build
- A ROS 2 Python publisher node that sends velocity commands (type `geometry_msgs/msg/Twist`) to control a hypothetical mobile robot.

## Tools & Technologies
- ROS 2 Humble/Iron
- `rclpy`
- `std_msgs`, `geometry_msgs`
- `ros2 topic pub` (CLI tool for publishing messages)

## Next Steps
- Proceed to "Subscribers and Callbacks" to learn how nodes can receive and process data published on topics.

---
*📝 Note: Detailed content, code examples, and step-by-step tutorials will be added in Phase 2.*