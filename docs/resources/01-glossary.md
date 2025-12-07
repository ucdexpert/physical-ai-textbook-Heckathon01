---
title: "Glossary of Terms"
sidebar_position: 1
---

# Glossary of Terms

## Overview
This glossary provides definitions for key terms and concepts encountered throughout the "Physical AI & Humanoid Robotics" course. It is organized alphabetically and categorized by module for easy reference. Understanding this terminology is essential for grasping the technical details and advanced concepts presented in the book. Cross-references to relevant chapters are provided where applicable to help deepen your understanding.

## Categories:

### ROS 2
- **Action**: A high-level communication mechanism in ROS 2 for long-running, goal-based tasks that provide continuous feedback and can be preempted. (See Module 1, Week 4)
- **DDS (Data Distribution Service) Middleware**: The backbone of ROS 2 communication, handling discovery, data transfer, and QoS policies. (See Module 1, Week 3)
- **Launch File**: A Python script in ROS 2 that defines and orchestrates the startup of multiple nodes, executables, and other system components. (See Module 1, Week 5)
- **Node**: A fundamental computational process within a ROS 2 system. (See Module 1, Week 3)
- **Parameter**: Key-value pairs stored on a ROS 2 node, allowing runtime configuration and modification of its behavior. (See Module 1, Week 5)
- **Publisher**: A ROS 2 entity that sends messages on a named topic. (See Module 1, Week 3)
- **QoS (Quality of Service) Settings**: Configurable parameters for ROS 2 communication that govern aspects like reliability, message history, deadline, and liveliness. (See Module 1, Week 3)
- **`rclpy`**: The Python client library for ROS 2. (See Module 1, Week 3)
- **Service**: A synchronous, request-response communication pattern in ROS 2. (See Module 1, Week 4)
- **Subscriber**: A ROS 2 entity that registers to receive messages published on a named topic. (See Module 1, Week 3)
- **TF2 Transforms**: A ROS 2 library for representing, buffering, and transforming coordinate frames over time. (See Module 1, Week 5)
- **Topic**: A named channel over which nodes exchange messages in a publish-subscribe manner. (See Module 1, Week 3)
- **URDF (Unified Robot Description Format)**: An XML file format in ROS that describes a robot's physical and kinematic properties. (See Module 1, Week 5)

### Simulation (Gazebo & Unity)
- **Digital Twin**: A virtual replica of a physical robot, used for testing, optimization, and monitoring in a simulated environment. (See Module 2, Week 6)
- **Gazebo**: A popular open-source 3D robot simulator. (See Module 2, Week 6)
- **Physics Engine**: Software component responsible for calculating physical interactions in a simulation. (See Module 2, Week 6)
- **Reality Gap**: The discrepancy in performance when transferring a policy or controller from simulation to a real robot. (See Module 3, Week 10)
- **Robot Simulation**: The use of software environments to model robot behavior. (See Module 2, Week 6)
- **SDF (Simulation Description Format)**: An XML file format that describes objects and environments for robot simulators like Gazebo. (See Module 2, Week 6)
- **Sim-to-Real Transfer**: Techniques for effectively deploying behaviors learned in simulation onto physical hardware. (See Module 3, Week 10)
- **Unity Game Engine**: A powerful cross-platform game development engine also used for robotics simulation and visualization. (See Module 2, Week 7)

### AI/ML (NVIDIA Isaac & VLA)
- **ASR (Automatic Speech Recognition)**: Technology that converts spoken audio into written text. (See Module 4, Week 13)
- **CUDA**: NVIDIA's parallel computing platform for harnessing GPU power. (See Module 3, Week 9)
- **Domain Randomization**: Technique to improve sim-to-real transfer by randomizing simulation parameters during training. (See Module 3, Week 9)
- **Embodied Intelligence**: Intelligence emerging from the interaction between a body, brain, and environment. (See Getting Started)
- **Isaac ROS**: NVIDIA's hardware-accelerated ROS 2 packages. (See Module 3, Week 9)
- **Isaac Sim**: NVIDIA's robotics simulation platform built on Omniverse. (See Module 3, Week 8)
- **LLM (Large Language Model)**: Advanced AI models capable of generating human-like text and understanding context. (See Module 4, Week 13)
- **Nav2 (ROS 2 Navigation Stack)**: A complete software stack in ROS 2 that enables autonomous navigation. (See Module 3, Week 10)
- **NLU (Natural Language Understanding)**: The process of extracting semantic meaning, intent, and entities from natural language text. (See Module 4, Week 13)
- **Object Detection**: Computer vision task to identify and localize objects with bounding boxes. (See Module 3, Week 9)
- **Omniverse**: NVIDIA's platform for connecting and building 3D virtual worlds. (See Module 3, Week 8)
- **PPO (Proximal Policy Optimization)**: A popular policy gradient algorithm in Reinforcement Learning. (See Module 3, Week 10)
- **Reinforcement Learning (RL)**: A type of machine learning where an agent learns through interaction and rewards. (See Module 3, Week 10)
- **Synthetic Data Generation (SDG)**: Creating artificial labeled data in simulation for training ML models. (See Module 3, Week 9)
- **TensorRT**: NVIDIA's SDK for high-performance deep learning inference. (See Module 3, Week 9)
- **USD (Universal Scene Description)**: An open-source 3D scene description format. (See Module 3, Week 8)
- **Visual SLAM (VSLAM)**: SLAM technique using visual information (from cameras) for mapping and localization. (See Module 3, Week 9)
- **Whisper (OpenAI)**: State-of-the-art ASR model. (See Module 4, Week 13)
- **ZMP (Zero-Moment Point)**: A stability criterion for robots with feet on the ground. (See Module 4, Week 11)

### Robotics (General & Humanoid Specific)
- **Actuator**: A component that converts energy into physical motion (e.g., a motor).
- **Anthropomorphic Design**: Designing robots with human-like form and capabilities. (See Getting Started)
- **Bipedal Locomotion**: Walking on two legs. (See Module 4, Week 11)
- **End-Effector**: The device at the end of a robotic arm, designed to interact with the environment (e.g., a gripper, a tool).
- **Forward Kinematics**: Calculating end-effector pose from joint angles. (See Module 4, Week 11)
- **Grasp Planning**: Determining how a robot's gripper or hand should hold an object. (See Module 4, Week 12)
- **HRI (Human-Robot Interaction)**: The study of interactions between humans and robots. (See Getting Started)
- **IMU (Inertial Measurement Unit)**: Sensor for orientation, angular velocity, and linear acceleration. (See Getting Started)
- **Inverse Kinematics (IK)**: Determining joint angles for a desired end-effector pose. (See Module 4, Week 11)
- **Joints**: Connections between links in a robot that allow relative motion. (See Module 1, Week 5)
- **Kinematic Chain**: A series of links connected by joints. (See Module 4, Week 11)
- **LiDAR (Light Detection and Ranging)**: Sensor using laser beams to measure distances. (See Getting Started)
- **Links**: The rigid bodies of a robot. (See Module 1, Week 5)
- **Multi-fingered Hands**: Robotic hands with multiple fingers for dexterous manipulation. (See Module 4, Week 12)
- **Proprioception**: The robot's ability to sense its own body's position and movement. (See Getting Started)
- **RGB-D Cameras**: Cameras that capture both color and depth information. (See Getting Started)
- **Sensor Fusion**: Combining data from multiple sensors for a more accurate understanding. (See Getting Started)

## How to Use This Glossary
- **Quick Lookups**: If you encounter an unfamiliar term, refer here for a concise definition.
- **Contextual Learning**: Definitions often include references to the module and week where the concept is introduced in detail.
- **Review**: Use this as a study aid to reinforce your understanding of core terminology.
