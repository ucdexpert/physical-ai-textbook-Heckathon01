---
title: "Troubleshooting Guide"
sidebar_position: 2
---

# Troubleshooting Guide

## Overview
This guide provides solutions to common issues and debugging strategies you might encounter during the "Physical AI & Humanoid Robotics" course. Effective troubleshooting is a critical skill for any robotics developer. This section is organized by module to help you quickly find relevant advice for specific problems.

## Common Issues by Module:

### Module 1: ROS 2
- **Node not starting/crashing**:
    - **Symptom**: `ros2 run` command fails or node exits immediately.
    - **Possible Causes**: Python syntax error, missing dependencies (check `package.xml`, `setup.py`), incorrect executable permissions, `rclpy.init()` not called.
    - **Solution**: Check node's console output for Python tracebacks. Use `colcon build --symlink-install` for faster iteration. Ensure `ros2 run package_name executable_name` is correct. Check `ros2 pkg prefix your_package_name` to confirm install location.
- **Topics not found or messages not received**:
    - **Symptom**: `ros2 topic list` doesn't show expected topic, or `ros2 topic echo` shows no data.
    - **Possible Causes**: Mismatched topic names, different message types, QoS settings preventing communication, nodes not running.
    - **Solution**: Use `ros2 topic list -t` to check topic names and types. Use `ros2 node info <node_name>` to see its publishers/subscribers. Ensure all nodes are sourced from the same ROS 2 workspace. Verify QoS settings match between publisher and subscriber (e.g., `reliable` vs `best_effort`).
- **`colcon build` fails**:
    - **Symptom**: Build command produces errors.
    - **Possible Causes**: Missing build dependencies (e.g., `python3-pip`, `python3-rosdep`), syntax errors in `package.xml` or `setup.py`, incorrect CMakeLists.txt.
    - **Solution**: Run `rosdep install --from-paths src --ignore-src -r -y` to install dependencies. Check `colcon` output carefully for specific error messages and line numbers.

### Module 2: Digital Twin (Gazebo & Unity)
- **Gazebo not launching or crashing**:
    - **Symptom**: `ros2 launch` for Gazebo fails, or Gazebo GUI closes unexpectedly.
    - **Possible Causes**: Missing Gazebo packages, GPU driver issues, world file errors, high memory/CPU usage.
    - **Solution**: Check Gazebo logs. Ensure correct Gazebo version is installed. Update GPU drivers. Try launching an empty world first. Verify SDF/URDF syntax.
- **Robot model not appearing in Gazebo/Unity**:
    - **Symptom**: Robot model is absent or incorrect in the simulator.
    - **Possible Causes**: Incorrect `GAZEBO_MODEL_PATH` or `ROS_MODEL_PATH`, errors in URDF/SDF, failed `robot_state_publisher` launch.
    - **Solution**: Validate URDF/SDF using `check_urdf` or `gz sdf`. Ensure `robot_state_publisher` is running and publishing TF2 transforms. Check launch file for correct model paths.
- **Simulated sensor data not publishing to ROS 2**:
    - **Symptom**: `ros2 topic list` doesn't show sensor topics from Gazebo, or they are empty.
    - **Possible Causes**: Missing `gazebo_ros` plugins in URDF/SDF, incorrect plugin configuration, clock synchronization issues.
    - **Solution**: Double-check `gazebo_ros` plugin configuration in your robot model description. Ensure `/use_sim_time` is set to true in your ROS 2 nodes. Verify sensor data in Gazebo's topic viewer.

### Module 3: NVIDIA Isaac
- **Isaac Sim not launching or crashing**:
    - **Symptom**: Isaac Sim fails to start, or crashes during scene loading.
    - **Possible Causes**: Insufficient VRAM, outdated NVIDIA drivers, Omniverse Launcher issues, USD scene errors.
    - **Solution**: Verify your RTX GPU has at least 12GB VRAM. Update NVIDIA drivers. Reinstall Isaac Sim/Omniverse. Check for errors in `.usd` files.
- **Isaac ROS nodes not accelerating or performing poorly**:
    - **Symptom**: Isaac ROS nodes run slowly, or errors related to CUDA/TensorRT.
    - **Possible Causes**: Incorrect CUDA/TensorRT installation, incompatible GPU, missing Isaac ROS dependencies, incorrect Docker configuration.
    - **Solution**: Ensure CUDA toolkit and TensorRT are correctly installed and configured. Verify GPU compatibility. Check Isaac ROS documentation for specific setup instructions. Run with `STRACE` to debug.

### Module 4: Vision-Language-Action (VLA)
- **Voice command not recognized/transcribed**:
    - **Symptom**: Whisper node produces garbled text or no output.
    - **Possible Causes**: Microphone not configured correctly, audio input format mismatch, Whisper model not loaded, environmental noise.
    - **Solution**: Verify microphone input using system tools. Check ROS 2 audio topic data. Ensure Whisper model is correctly loaded and receiving audio. Reduce background noise.
- **LLM/GPT integration issues**:
    - **Symptom**: GPT returns irrelevant or incorrect responses, or API calls fail.
    - **Possible Causes**: Incorrect API key, rate limits, poorly designed prompts, network issues.
    - **Solution**: Verify API key. Check API documentation for rate limits. Refine prompts with specific instructions and few-shot examples. Ensure network connectivity to the API endpoint.

### Hardware & Lab Setup
- **Jetson issues (not booting, not connecting)**:
    - **Symptom**: Jetson fails to boot, or cannot connect via SSH/USB.
    - **Possible Causes**: Incorrect JetPack flashing, power supply issues, network configuration.
    - **Solution**: Re-flash JetPack. Check power supply. Verify network settings. Refer to NVIDIA Jetson documentation.
- **RealSense/ReSpeaker not detected in ROS 2**:
    - **Symptom**: `ros2 topic list` doesn't show RealSense/ReSpeaker topics.
    - **Possible Causes**: Missing drivers, incorrect ROS 2 wrappers, USB connectivity issues.
    - **Solution**: Install RealSense SDK and ROS 2 wrapper. Check USB connections. Verify device permissions.

## General Debugging Strategies:
- **`ros2 CLI` Tools**: `ros2 node list`, `ros2 topic list`, `ros2 topic echo`, `ros2 param list`, `ros2 launch --debug`.
- **`rviz2`**: Visualize sensor data, robot state, paths, and costmaps.
- **Logging**: Use `ros2 log` to monitor system-wide logs, set log levels (`rclpy.logging.set_logger_level`).
- **Single Component Testing**: Isolate and test individual nodes or subsystems before integrating them.
- **Check Environment Variables**: Ensure `ROS_DOMAIN_ID`, `COLCON_PREFIX_PATH`, etc., are correctly set.
- **Read Documentation**: Always refer to official ROS 2, Gazebo, Isaac Sim, and specific package documentation.
- **Community Forums**: Leverage the ROS Discourse, NVIDIA DevTalk, and Docusaurus community forums for common issues.

## Performance Optimization Tips:
- **QoS Tuning**: Adjust QoS settings for topics to match data requirements (e.g., `best_effort` for high-frequency sensor data, `reliable` for commands).
- **Hardware Acceleration**: Utilize Isaac ROS, CUDA, and TensorRT on NVIDIA GPUs for computationally intensive tasks.
- **Efficient Algorithms**: Choose optimized algorithms for perception, planning, and control.
- **Resource Monitoring**: Use `htop`, `nvidia-smi`, `ros2 top` to identify CPU/GPU/memory bottlenecks.
- **Code Profiling**: Profile your Python code to identify slow functions.

---
*📝 Note: Detailed content, code examples, and step-by-step tutorials will be added in Phase 2.*
