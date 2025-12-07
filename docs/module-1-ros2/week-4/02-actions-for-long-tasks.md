---
title: "Actions for Long Tasks"
sidebar_position: 2
---

# Actions for Long Tasks

**Week 4 | Module 1 | Estimated Time: 3 hours**

## Learning Objectives
- Understand the ROS 2 Action communication pattern for long-running, preemptible tasks.
- Implement a ROS 2 Action server that executes a multi-step goal.
- Create a ROS 2 Action client to send goals, receive feedback, and get results.
- Grasp concepts of goal preemption and concurrent goal handling.

## Prerequisites
- Completed "Services and Clients".
- Basic Python programming knowledge.

## Overview
For long-running tasks that require continuous feedback and the ability to be canceled or "preempted," ROS 2 offers the "Action" communication pattern. This chapter introduces Actions as a powerful alternative to services when the operation is not instantaneous. Actions are used for tasks like navigating to a distant waypoint, picking up a series of objects, or executing a complex manipulation sequence.

You will learn how to define an Action interface (`.action` files) specifying the goal (what to do), feedback (progress updates), and result (final outcome). We'll then implement an Action server that processes incoming goals, sends periodic feedback to clients, and returns a final result. Concurrently, you'll develop an Action client that sends a goal to the server, monitors its progress, and can optionally cancel the goal mid-execution. This pattern is fundamental for building responsive and robust autonomous robot behaviors.

## Key Concepts
- **Action**: A high-level communication mechanism in ROS 2 for long-running, goal-based tasks that provide continuous feedback and can be preempted.
- **Action Server**: A ROS 2 node that accepts goals from clients, executes the task, provides feedback, and sends a final result.
- **Action Client**: A ROS 2 node that sends a goal to an action server, receives feedback about its progress, and can request preemption or cancellation.
- **`.action` files**: Special files that define the structure of an Action's goal, feedback, and result.
- **Goal Preemption**: The ability to cancel a running action or issue a new goal that overrides the current one.
- **Feedback**: Intermediate updates sent by an Action server to its clients about the progress of a long-running task.

## What You'll Build
- A ROS 2 Python Action server that simulates "counting to a number," providing feedback on the current count and allowing preemption.
- A ROS 2 Python Action client that sends a goal to count to 10, then potentially cancels it if the count reaches 5.

## Tools & Technologies
- ROS 2 Humble/Iron
- `rclpy`
- ROS 2 `.action` definition files
- `ros2 action` CLI tools

## Next Steps
- Proceed to "Building ROS 2 Packages" to learn how to organize and build your ROS 2 code into reusable packages.

---
*📝 Note: Detailed content, code examples, and step-by-step tutorials will be added in Phase 2.*