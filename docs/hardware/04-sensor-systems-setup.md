---
title: "Sensor Systems Setup"
sidebar_position: 4
---

# Sensor Systems Setup

**Estimated Time: 3 hours**

## Learning Objectives
- Successfully connect and configure the Intel RealSense D435i with ROS 2.
- Calibrate an IMU (Inertial Measurement Unit) for accurate orientation data.
- Integrate a microphone array (e.g., ReSpeaker) for voice command processing.
- Verify sensor data streams in ROS 2 using `ros2 topic echo` and `rviz2`.

## Prerequisites
- Completed "The Physical AI Edge Kit".
- Physical Intel RealSense D435i and ReSpeaker (or similar microphone array).

## Overview
With your Jetson Orin Nano set up, this chapter focuses on integrating the critical sensor systems that will give your humanoid robot its perception capabilities. You will gain hands-on experience connecting, configuring, and verifying data streams from the Intel RealSense D435i depth camera. This involves installing the RealSense SDK and its ROS 2 wrapper, allowing the camera to publish RGB, depth, and infrared images, along with point clouds, to ROS 2 topics.

Next, we will cover the setup and calibration of an IMU, a crucial sensor for robot self-localization and balance. You'll learn how to obtain accurate orientation and acceleration data. Finally, we'll integrate the ReSpeaker microphone array, configuring it to capture audio and stream it into the ROS 2 environment, forming the foundation for our voice-to-action pipeline. By the end of this chapter, all primary sensors for your edge kit will be operational and publishing data reliably within your ROS 2 graph, ready for advanced perception and AI processing.

## Key Concepts
- **Intel RealSense SDK**: The software development kit for Intel RealSense cameras, providing APIs for accessing camera streams and processing data.
- **RealSense ROS 2 Package**: A ROS 2 wrapper for the Intel RealSense cameras, enabling them to publish their data as standard ROS 2 messages.
- **IMU Calibration**: The process of correcting sensor biases and errors in an Inertial Measurement Unit to improve the accuracy of its readings.
- **Microphone Array Integration**: Setting up and configuring multiple microphones to capture audio, often using techniques like beamforming for improved sound source localization.
- **Audio Stream**: A continuous flow of digital audio data, typically published on a ROS 2 topic for processing by ASR systems.
- **`sensor_msgs`**: ROS 2 message types for various sensors, including `Image`, `PointCloud2`, and `Imu`.
- **`audio_common` ROS 2 Package**: A collection of ROS 2 packages providing tools for working with audio data, including drivers and utilities.

## What You'll Build
- A fully integrated sensor system where:
    - RealSense D435i publishes RGB, depth, and point cloud data to ROS 2.
    - An IMU publishes calibrated orientation and acceleration data to ROS 2.
    - The ReSpeaker microphone array publishes audio data to ROS 2.
- You will use `ros2 topic echo` and `rviz2` to visualize the live data streams from all sensors.

## Tools & Technologies
- NVIDIA Jetson Orin Nano
- Intel RealSense D435i
- ReSpeaker (or similar microphone array)
- ROS 2 Humble/Iron
- RealSense ROS 2 package (`realsense-ros`)
- IMU sensor (e.g., BNO055 or similar) and its ROS 2 driver
- `audio_common` ROS 2 package
- `ros2 topic`, `rviz2`

## Next Steps
- Proceed to "Robot Hardware Options" to explore different physical robot platforms and how to select one that fits your budget and learning goals.

---
*📝 Note: Detailed content, code examples, and step-by-step tutorials will be added in Phase 2.*