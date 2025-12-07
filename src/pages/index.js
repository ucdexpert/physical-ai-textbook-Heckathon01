// Developer Notes:
// This homepage component uses a mix of Docusaurus's Infima CSS framework and custom classes.
// Custom classes (e.g., `card-wrapper`, `module-card`, `flowchart-node`, `checklist-card`) are defined in `src/css/custom.css`.
// Tailwind-friendly utility-like classNames (e.g., `flex`, `p-6`, `rounded-lg`, `shadow-lg`, `text-white`) are used for clarity,
// but their actual implementation (if not using Tailwind directly) would reside in `src/css/custom.css`.
// Ensure `src/css/custom.css` is updated with styles for these classes, including responsive breakpoints.

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import Card from '../components/Card';
import styles from './index.module.css'; // For homepage-specific CSS modules
import '@site/src/css/custom.css'; // Ensure custom global styles are loaded

// SVG for a flowchart arrow
const FlowchartArrowSVG = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
  </svg>
);

function HomepageCompactHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="homepage-compact-header">
      <div className="container text--center">
        <img src="/img/logo.svg" alt="Robot icon" className="homepage-robot-logo" />
        <h1 className="hero__title">Physical AI & Humanoid Robotics</h1>
        <p className="hero__subtitle">A Complete Hands-on Learning Journey from ROS 2 to Humanoid Intelligence</p>
        <div className="buttons hero__buttons">
          <Link
            className="button button--lg button--primary"
            to="/docs/getting-started/introduction-to-physical-ai">
            Start Learning
          </Link>
          <Link
            className="button button--lg button--secondary"
            to="/docs/resources/glossary">
            View Resources
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="From Digital Brain to Physical Body. Learn to build autonomous humanoid robots with ROS 2, Gazebo, Unity, and NVIDIA Isaac.">
      <Head>
        <title>{siteConfig.title} - {siteConfig.tagline}</title>
        <meta property="og:title" content={`${siteConfig.title} - ${siteConfig.tagline}`} />
        <meta property="og:description" content="From Digital Brain to Physical Body. Learn to build autonomous humanoid robots with ROS 2, Gazebo, Unity, and NVIDIA Isaac." />
        <meta name="twitter:title" content={`${siteConfig.title} - ${siteConfig.tagline}`} />
        <meta name="twitter:description" content="From Digital Brain to Physical Body. Learn to build autonomous humanoid robots with ROS 2, Gazebo, Unity, and NVIDIA Isaac." />
      </Head>
      <HomepageCompactHeader />
      <main className="container my-12 lg:my-20">
        <section className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-800">Course Modules</h2>
          <div className="grid-layout-2x2">
            <Card
              title="Module 1 — ROS 2"
              weeks="Weeks 3–5"
              color="blue"
              description="Master the Robotic Operating System: Nodes, Topics, Services, Actions, and system architecture."
              href="/docs/module-1-ros2/week-3/ros2-architecture"
            />
            <Card
              title="Module 2 — Digital Twin"
              weeks="Weeks 6–7"
              color="green"
              description="Build and interact with virtual robot environments in Gazebo and Unity."
              href="/docs/module-2-digital-twin/week-6/introduction-to-simulation"
            />
            <Card
              title="Module 3 — Isaac"
              weeks="Weeks 8–10"
              color="orange"
              description="Unlock AI capabilities: perception, navigation, and reinforcement learning with NVIDIA Isaac."
              href="/docs/module-3-isaac/week-8/nvidia-isaac-overview"
            />
            <Card
              title="Module 4 — VLA"
              weeks="Weeks 11–13"
              color="purple"
              description="Integrate Vision, Language, and Action for human-like robot intelligence."
              href="/docs/module-4-vla/week-11/humanoid-kinematics"
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-800">Your Learning Path</h2>
          <div className="flowchart-container">
            <Link to="/docs/getting-started/introduction-to-physical-ai" className="flowchart-node flowchart-blue">Prerequisites</Link>
            <FlowchartArrowSVG className="flowchart-arrow" />
            <Link to="/docs/module-1-ros2/week-3/ros2-architecture" className="flowchart-node flowchart-green">Module 1</Link>
            <FlowchartArrowSVG className="flowchart-arrow" />
            <Link to="/docs/module-2-digital-twin/week-6/introduction-to-simulation" className="flowchart-node flowchart-green">Module 2</Link>
            <FlowchartArrowSVG className="flowchart-arrow" />
            <Link to="/docs/module-3-isaac/week-8/nvidia-isaac-overview" className="flowchart-node flowchart-orange">Module 3</Link>
            <FlowchartArrowSVG className="flowchart-arrow" />
            <Link to="/docs/module-4-vla/week-11/humanoid-kinematics" className="flowchart-node flowchart-purple">Module 4</Link>
            <FlowchartArrowSVG className="flowchart-arrow" />
            <Link to="/docs/capstone/capstone-overview" className="flowchart-node flowchart-gold">Capstone</Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-800">Prerequisites Checklist</h2>
          <div className="checklist-card">
            <p className="text-lg font-semibold text-gray-700 mb-4">Estimated prep time: 1–2 weeks</p>
            <ul className="prerequisites-checklist">
              <li><span>Basic Python programming proficiency</span></li>
              <li><span>Familiarity with Linux command-line operations</span></li>
              <li><span>Understanding of basic Git version control</span></li>
              <li><span>Exposure to fundamental Machine Learning concepts</span></li>
              <li><span>Basic understanding of Docker containers</span></li>
              <li><span>(Optional) Prior exposure to ROS 1 or ROS 2 concepts</span></li>
            </ul>
          </div>
        </section>

        <footer className="text-center mt-16 text-gray-600">
          <Link
            className="text-primary-500 hover:text-primary-700 hover:no-underline"
            to="https://github.com/your-org/your-repo"> {/* Placeholder GitHub link */}
            View on GitHub
          </Link>
        </footer>
      </main>
    </Layout>
  );
}