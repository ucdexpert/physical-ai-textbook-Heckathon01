---
title: "FAQ"
sidebar_position: 3
---

# Frequently Asked Questions (FAQ)

## Overview
This section addresses common questions that learners often have throughout the "Physical AI & Humanoid Robotics" course. These FAQs are organized by module for quick navigation and cover a range of topics from theoretical concepts to practical hardware advice.

## General Questions:

- **Q: What is the primary difference between a digital AI and a Physical AI?**
    - A: A digital AI operates purely in software (e.g., a chatbot, image classifier), while a Physical AI has a physical body and interacts with the real world using sensors and actuators. Physical AI deals with real-world physics, uncertainty, and embodied intelligence. (See "Introduction to Physical AI" in Getting Started)
- **Q: Do I need a physical robot to follow this course?**
    - A: No, the course is designed to be followed entirely through high-fidelity simulations (Gazebo, Isaac Sim). While owning a physical robot enhances the experience, it is not strictly required. Hardware sections provide guidance for those who wish to build a physical setup.
- **Q: What programming languages are primarily used in this course?**
    - A: Python is the primary language for ROS 2 nodes, AI development (RL, LLMs, computer vision), and scripting. JavaScript/TypeScript is used for Docusaurus website development.
- **Q: What operating system is required?**
    - A: Ubuntu 22.04 LTS is required for most ROS 2, Gazebo, and NVIDIA Isaac development. Dual-booting or using a dedicated Linux machine is recommended.

## Module-Specific Questions:

### Module 1: ROS 2

- **Q: Why ROS 2 instead of ROS 1?**
    - A: ROS 2 offers significant improvements over ROS 1, including better support for multi-robot systems, real-time control, security, and multiple DDS implementations for flexible communication. It is the future of robotics software development. (See "ROS 2 Architecture")
- **Q: My ROS 2 nodes aren't communicating. What should I check first?**
    - A: Verify nodes are running (`ros2 node list`), topics exist and match (`ros2 topic list -t`), and QoS settings are compatible. Also check for mismatched message types or incorrect topic remapping. (See "Troubleshooting Guide")

### Module 2: Digital Twin (Gazebo & Unity)

- **Q: What is the "sim-to-real gap" and how do we reduce it?**
    - A: The sim-to-real gap refers to the discrepancy between a robot's behavior in simulation versus reality. It's caused by unmodeled physics, sensor noise, and hardware differences. Techniques like domain randomization, accurate physics/sensor modeling, and system identification help reduce it. (See "Introduction to Simulation", "Sim-to-Real Transfer Techniques")
- **Q: When should I use Gazebo vs. Unity for simulation?**
    - A: Gazebo is excellent for physics-accurate simulation and ROS 2 integration. Unity excels in high-fidelity rendering, visual realism, and complex human-robot interaction scenarios. Isaac Sim combines both. (See "Introduction to Simulation", "Unity for High-Fidelity Rendering")

### Module 3: NVIDIA Isaac

- **Q: Do I need an NVIDIA GPU to follow Module 3?**
    - A: Yes, a powerful NVIDIA RTX GPU (RTX 4070 Ti+ recommended) is essential for running Isaac Sim and leveraging Isaac ROS hardware acceleration effectively. Jetson devices are also NVIDIA GPUs for edge deployment. (See "Hardware Requirements Overview")
- **Q: What is USD in the context of Isaac Sim?**
    - A: USD (Universal Scene Description) is a powerful, open-source 3D scene description format developed by Pixar. It's the foundational format for building and composing virtual worlds in NVIDIA Omniverse and Isaac Sim. (See "NVIDIA Isaac Platform Overview")

### Module 4: Vision-Language-Action (VLA)

- **Q: How accurate is Whisper for voice commands?**
    - A: OpenAI Whisper is highly accurate for Automatic Speech Recognition (ASR), even in noisy environments and with various accents. Its performance is state-of-the-art and makes it an excellent choice for robotics voice interfaces. (See "Using OpenAI Whisper for Voice Commands")
- **Q: How do LLMs like GPT help with robot planning?**
    - A: LLMs can act as a high-level cognitive planner, translating natural language goals into sequences of abstract robot actions, aiding in intent recognition, and facilitating more natural human-robot interaction. (See "Cognitive Planning with LLMs")

## Hardware & Lab Setup

- **Q: What is the minimum recommended hardware for this course?**
    - A: A workstation with a recent NVIDIA RTX GPU (e.g., 3060/4060 or better), 32GB RAM, and a modern CPU is recommended for simulation. For edge deployment, an NVIDIA Jetson Orin Nano is an excellent starting point. (See "Hardware Requirements Overview")
- **Q: Can I use cloud computing for this course?**
    - A: Yes, cloud options (like AWS g5.2xlarge for Isaac Sim) are viable for parts of the course, especially for GPU-intensive tasks. However, network latency can impact real-time interactions, and costs should be managed. (See "Cloud vs On-Premise Lab Setup" in Hardware)

---
*📝 Note: Detailed content, code examples, and step-by-step tutorials will be added in Phase 2.*