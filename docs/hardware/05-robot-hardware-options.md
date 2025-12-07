---
title: "Robot Hardware Options"
sidebar_position: 5
---

# Robot Hardware Options

**Estimated Time: 2.5 hours**

## Learning Objectives
- Compare various humanoid and quadruped robot platforms for Physical AI development.
- Evaluate robot platforms based on cost, capabilities, and ease of integration with ROS 2.
- Understand the pros and cons of using quadruped robots as "proxies" for humanoid locomotion research.
- Plan a hardware acquisition strategy aligned with different budget levels (economy, standard, premium).

## Prerequisites
- Completed "Sensor Systems Setup".
- Understanding of project budget constraints.

## Overview
Throughout this course, we emphasize humanoid robotics, but acquiring a full-scale humanoid can be prohibitively expensive. This chapter explores various robot hardware options that allow you to apply the principles of Physical AI, ranging from cost-effective kits to advanced research platforms. You will learn to evaluate different robots based on their form factor (bipedal humanoids, quadruped 'proxy' humanoids, miniature humanoids), sensor suites, actuator capabilities, and ROS 2 integration.

We will discuss using quadruped robots (like the Unitree Go2) as excellent "proxies" for humanoids. They share many control challenges (balance, locomotion, contact dynamics) and often offer more robust, accessible platforms for initial development. We will also present budget-aware options: an economy ($700) Jetson-based kit, a standard ($3,000+) option like the Unitree Go2, and a premium ($16,000+) advanced humanoid such as the Unitree G1. By understanding these options, you can make informed decisions about your physical robot platform, ensuring it aligns with your learning objectives and financial resources.

## Key Concepts
- **Quadruped Robots**: Four-legged robots (e.g., Unitree Go2, Go1) that can serve as excellent platforms for learning advanced locomotion, balance, and manipulation principles applicable to humanoids.
- **Humanoid Proxy**: A robot platform that, while not strictly humanoid, shares enough characteristics (e.g., balance, dynamic locomotion) to be a valuable substitute for research and development.
- **Miniature Humanoids**: Smaller, often less expensive bipedal robots that offer a direct but scaled-down experience of humanoid control challenges.
- **Economy Option**: A budget-conscious hardware setup, typically involving a Jetson-based mobile platform with basic sensors.
- **Standard Option**: A mid-range hardware setup, often featuring a well-supported quadruped robot.
- **Premium Option**: High-end research-grade humanoid robots with advanced capabilities and higher costs.
- **ROS 2 Integration**: The ease and completeness with which a robot platform can be integrated into a ROS 2 software ecosystem.

## What You'll Build
- A robot platform decision matrix, comparing 2-3 specific robot options (e.g., a Jetson-based rover, a Unitree Go2, and a conceptual full humanoid) across criteria like cost, ROS 2 support, and suitability for VLA tasks.

## Tools & Technologies
- None (conceptual hardware evaluation).

## Next Steps
- You have completed the **Hardware & Lab Setup** section. Proceed to the **Capstone Project: The Autonomous Humanoid** to integrate all your learned skills.

---
*📝 Note: Detailed content, code examples, and step-by-step tutorials will be added in Phase 2.*