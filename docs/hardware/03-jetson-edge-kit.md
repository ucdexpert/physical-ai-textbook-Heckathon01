---
title: "The Physical AI Edge Kit"
sidebar_position: 3
---

# The Physical AI Edge Kit

**Estimated Time: 3 hours**

## Learning Objectives
- Set up an NVIDIA Jetson Orin Nano for edge AI robotics development.
- Flash JetPack SDK onto the Jetson device and configure the environment.
- Integrate external sensors, specifically the Intel RealSense D435i depth camera.
- Set up a voice interface using a device like the ReSpeaker microphone array.

## Prerequisites
- Completed "The Digital Twin Workstation".
- Basic electronics and hardware connection skills.

## Overview
While powerful workstations are essential for training and simulation, actual physical robots often operate on compact, power-efficient "edge" devices. This chapter guides you through setting up a Physical AI Edge Kit, centered around the NVIDIA Jetson Orin Nano. This powerful embedded platform is designed for AI at the edge, making it ideal for on-robot computation, perception, and control.

You will learn how to flash the JetPack SDK onto your Jetson, which includes the Linux operating system, CUDA libraries, and optimized AI runtimes like TensorRT. We will then integrate crucial external sensors. This includes connecting and configuring the Intel RealSense D435i, a popular RGB-D camera that provides both color images and depth information, and setting up a voice interface using a microphone array like the ReSpeaker, essential for our voice-controlled humanoid. A properly configured edge kit is your gateway to deploying your AI models from simulation onto real hardware.

## Key Concepts
- **NVIDIA Jetson Orin Nano**: A compact, power-efficient embedded computing platform designed for AI inference and robotics at the edge.
- **JetPack SDK**: NVIDIA's comprehensive software development kit for the Jetson platform, including OS image, CUDA, TensorRT, and developer tools.
- **Edge AI**: Running artificial intelligence computations directly on the device where data is generated, rather than sending it to a cloud server.
- **Intel RealSense D435i**: A popular and cost-effective RGB-D (color and depth) camera widely used in robotics for 3D perception and environment mapping.
- **ReSpeaker Microphone Array**: A series of microphones arranged to capture audio, often with beamforming and noise reduction capabilities, ideal for voice interfaces.
- **Sensor Integration**: The process of connecting physical sensors to a robot's computing platform and configuring their drivers and software interfaces.
- **TensorRT**: NVIDIA's SDK for high-performance deep learning inference, crucial for running AI models efficiently on Jetson devices.

## What You'll Build
- A fully operational Physical AI Edge Kit consisting of:
    - An NVIDIA Jetson Orin Nano with JetPack SDK installed.
    - An Intel RealSense D435i depth camera connected and configured, streaming data to ROS 2.
    - A ReSpeaker microphone array set up and streaming audio data to ROS 2.

## Tools & Technologies
- NVIDIA Jetson Orin Nano Developer Kit
- JetPack SDK
- Intel RealSense D435i
- ReSpeaker (e.g., ReSpeaker 4-mic array)
- Ubuntu 20.04/22.04 (on Jetson)
- ROS 2 Humble/Iron
- RealSense ROS 2 package, `audio_common` ROS 2 package

## Next Steps
- Proceed to "Robot Hardware Options" to explore different physical robot platforms suitable for this course.

---
*📝 Note: Detailed content, code examples, and step-by-step tutorials will be added in Phase 2.*