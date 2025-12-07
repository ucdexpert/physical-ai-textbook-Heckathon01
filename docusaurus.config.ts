import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'From Digital Brain to Physical Body',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    '@docusaurus/plugin-ideal-image',
  ],
  themes: [
    '@docusaurus/theme-mermaid',
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Physical AI & Humanoid Robotics',
      logo: {
        alt: 'Robot icon',
        src: 'img/logo.svg',
        width: 40,
        height: 40,
      },
      items: [
        {
          type: 'dropdown',
          label: 'Docs',
          position: 'left',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started/introduction-to-physical-ai',
            },
            {
              label: 'Module 1: ROS 2',
              to: '/docs/module-1-ros2/week-3/ros2-architecture',
            },
            {
              label: 'Module 2: Digital Twin',
              to: '/docs/module-2-digital-twin/week-6/introduction-to-simulation',
            },
            {
              label: 'Module 3: NVIDIA Isaac',
              to: '/docs/module-3-isaac/week-8/nvidia-isaac-overview',
            },
            {
              label: 'Module 4: Vision-Language-Action',
              to: '/docs/module-4-vla/week-11/humanoid-kinematics',
            },
            {
              label: 'Hardware & Lab Setup',
              to: '/docs/hardware/hardware-requirements-overview',
            },
            {
              label: 'Capstone Project',
              to: '/docs/capstone/capstone-overview',
            },
          ],
        },
        {to: '/docs/resources/glossary', label: 'Resources', position: 'left'},
        {
          href: 'https://github.com/your-org/your-repo', // Placeholder for GitHub repo
          label: 'GitHub',
          position: 'right',
        },
        {
            type: 'search',
            position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started/introduction-to-physical-ai',
            },
            {
              label: 'Module 1: ROS 2',
              to: '/docs/module-1-ros2/week-3/ros2-architecture',
            },
            {
              label: 'Module 2: Digital Twin',
              to: '/docs/module-2-digital-twin/week-6/introduction-to-simulation',
            },
            {
              label: 'Module 3: NVIDIA Isaac',
              to: '/docs/module-3-isaac/week-8/nvidia-isaac-overview',
            },
            {
              label: 'Module 4: Vision-Language-Action',
              to: '/docs/module-4-vla/week-11/humanoid-kinematics',
            },
            {
              label: 'Hardware & Lab Setup',
              to: '/docs/hardware/hardware-requirements-overview',
            },
            {
              label: 'Capstone Project',
              to: '/docs/capstone/capstone-overview',
            },
            {
              label: 'Resources',
              to: '/docs/resources/glossary',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'ROS Discourse',
              href: 'https://discourse.ros.org/',
            },
            {
              label: 'NVIDIA DevTalk Forums',
              href: 'https://forums.developer.nvidia.com/c/agx-autonomous-machines/isaac/37',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/your-org/your-repo', // Placeholder for GitHub repo
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
