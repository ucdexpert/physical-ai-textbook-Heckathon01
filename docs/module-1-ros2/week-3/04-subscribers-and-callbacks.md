---
title: "Subscribers and Callbacks"
sidebar_position: 4
---

# Subscribers and Callbacks

**Week 3 | Module 1 | Estimated Time: 2.5 hours**

## Learning Objectives
- Create a ROS 2 subscriber to receive messages from a topic.
- Understand and implement callback functions for message processing.
- Process incoming sensor data (e.g., from a simulated laser scanner).
- Utilize ROS 2 CLI tools to monitor topic data.

## Prerequisites
- Completed "Topics and Publishers".
- Basic Python programming knowledge.

## Overview
Building on the concept of topics, this chapter focuses on the receiving end of the publish-subscribe communication model: "subscribers." You will learn how to create a ROS 2 node that subscribes to a topic, allowing it to receive messages published by other nodes. The core of this process lies in "callback functions"—special functions that are automatically executed whenever a new message arrives on a subscribed topic.

We will demonstrate how to effectively implement these callbacks to process incoming data, such as simulated laser scan readings or robot odometry. This involves understanding message structures and extracting relevant information for your robot's decision-making process. Mastering subscribers is crucial for any robot that needs to perceive its environment. You will also use ROS 2 CLI tools like `ros2 topic echo` and `ros2 topic hz` to monitor the data flowing through your system, ensuring your subscribers are receiving data as expected.

## Key Concepts
- **Subscriber**: A ROS 2 entity that registers to receive messages published on a named topic.
- **Callback Function**: A function that is invoked automatically by the ROS 2 executor whenever a new message is received on a topic subscribed to by a node.
- **Message Processing**: The act of extracting, interpreting, and utilizing data from incoming ROS 2 messages within a callback.
- **Sensor Data**: Information collected from a robot's sensors (e.g., LiDAR, cameras, IMUs), typically transmitted via ROS 2 topics.
- **`ros2 topic echo`**: A ROS 2 CLI tool used to display the contents of messages being published on a specified topic.
- **`ros2 topic hz`**: A ROS 2 CLI tool used to report the publishing rate (frequency) of messages on a specified topic.

## What You'll Build
- A ROS 2 Python subscriber node that receives simulated laser scan data (type `sensor_msgs/msg/LaserScan`) and prints the minimum distance to an obstacle.

## Tools & Technologies
- ROS 2 Humble/Iron
- `rclpy`
- `sensor_msgs` (specifically `sensor_msgs/msg/LaserScan`)
- `ros2 topic echo`, `ros2 topic hz` CLI tools

## Next Steps
- You have now completed the ROS 2 Foundations for Week 3. Move on to Week 4, starting with "Services and Clients" to explore synchronous communication patterns.

---
*📝 Note: Detailed content, code examples, and step-by-step tutorials will be added in Phase 2.*