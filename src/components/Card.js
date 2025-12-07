import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

// Placeholder SVG for a generic robot head or icon
const RobotIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M7 10a1 1 0 11-2 0 1 1 0 012 0zM17 10a1 1 0 11-2 0 1 1 0 012 0zM12 2a10 10 0 00-10 10c0 4.14 2.52 7.6 6 9.17V20h8v1.17c3.48-1.57 6-5.03 6-9.17A10 10 0 0012 2zm0 18a8 8 0 01-8-8c0-3.35 1.54-6.27 4-8.28V14a2 2 0 002 2h0a2 2 0 002-2v-4.28c2.46 2.01 4 4.93 4 8.28a8 8 0 01-8 8zM9 16h6V14H9v2z" />
  </svg>
);

export default function Card({ title, weeks, color, description, href }) {
  const cardColorClass = `bg-${color}-600`; // e.g., bg-blue-600
  const iconColorClass = `text-${color}-200`; // e.g., text-blue-200

  return (
    <div className={clsx("card-wrapper", cardColorClass)}>
      <RobotIcon className="card-watermark" /> {/* Subtle robot icon watermark */}
      <div>
        <div className={clsx("mb-4 p-2 rounded-full inline-block", iconColorClass)}>
          <RobotIcon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-white text-opacity-80 mb-3">{weeks}</p>
        <p className="text-sm text-white text-opacity-90 leading-relaxed">{description}</p>
      </div>
      <div className="mt-6">
        <Link
          className={clsx("button button--outline button--md button--white")}
          to={href}>
          Open Module
        </Link>
      </div>
    </div>
  );
}