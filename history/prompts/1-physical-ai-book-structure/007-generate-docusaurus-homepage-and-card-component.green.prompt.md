---
id: 007
title: Generate Docusaurus Homepage and Card Component
stage: green
date: 2025-12-07
surface: agent
model: Gemini
feature: 1-physical-ai-book-structure
branch: 1-physical-ai-book-structure
user: 
command: Generate a Docusaurus React homepage component at `src/pages/index.js` plus a reusable `components/Card.js` for module cards and minimal CSS/Tailwind-friendly classes.
labels: [homepage, react, docusaurus, green-path]
links:
  spec: specs/1-physical-ai-book-structure/spec.md
  ticket: null
  adr: null
  pr: null
files:
 - physical-ai-book/src/pages/index.tsx
 - physical-ai-book/src/components/Card.js
 - physical-ai-book/src/css/custom.css
tests:
  - Docusaurus build (passed)
---

## Prompt

Generate a Docusaurus React homepage component at `src/pages/index.js` plus a reusable `components/Card.js` for module cards and minimal CSS/Tailwind-friendly classes.

Requirements:
1. Project/tech:
   - Use React (Docusaurus v3), Tailwind-style utility classes (or plain classNames if Tailwind not available).
   - Keep markup accessible (semantic elements, aria labels, keyboard focus).
   - Responsive: layout should collapse to a single column on small screens and grid on larger screens.
   - No external images required — use inline SVGs / simple shapes for icons/flowchart.

2. Hero banner:
   - Big headline (title of book), small tagline, 2 CTA buttons side-by-side on wide screens and stacked on mobile:
     * Primary CTA: "Start Learning" (links to /docs/getting-started)
     * Secondary CTA: "View Syllabus" (links to /docs/resources)
   - Short 1-line badge for "Physical AI & Humanoid Robotics — Course Book"
   - Subtle decorative SVG background (non-blocking, low-contrast).

3. Four-module colored cards (reusable Card component):
   - Create `components/Card.js` that accepts: title, weeks, color (string like 'blue'), description, href.
   - Render four cards in a responsive grid with these colors and labels:
     * Module 1 — ROS 2 (Blue) — Weeks 3–5
     * Module 2 — Digital Twin (Green) — Weeks 6–7
     * Module 3 — Isaac (Orange) — Weeks 8–10
     * Module 4 — VLA (Purple) — Weeks 11–13
   - Each card: icon (SVG circle or robot icon), short 2-line summary, "Open Module" link button.

4. Learning-path flowchart:
   - Add a simple horizontal flowchart section below cards showing progression:
     [Prereqs] → [Module 1] → [Module 2] → [Module 3] → [Module 4] → [Capstone]
   - Implement using semantic HTML + inline SVG arrows so it scales on mobile (stack vertically on small screens).
   - Each node clickable to its docs (use anchor hrefs to /docs/...).

5. Prerequisites checklist:
   - A compact card/section with 6 bullet checklist items (checkbox icons) such as:
     * Basic Python, Linux command-line, ROS fundamentals, Git, Basic ML concepts, Docker basics.
   - Mark the checklist visually (not interactive required), include "Estimated prep time: 1–2 weeks".

6. Visual & UX:
   - Clean, modern, airy spacing, readable type sizes.
   - Color palette: Blue (#2563EB), Green (#10B981), Orange (#F59E0B), Purple (#7C3AED). Use them for cards & small accents only.
   - Buttons: primary (solid, accessible contrast), secondary (outline).
   - Mobile-first CSS — ensure hero and cards reflow properly.
   - Include small footer anchor to GitHub repo.

7. Developer notes/comments:
   - At top of file, include a comment that says where to place CSS/Tailwind or how to adapt classes if Tailwind isn’t installed.
   - Export default React component for the page. Export Card as default from components/Card.js.

Output files to generate:
- src/pages/index.js
- src/components/Card.js
- (optional) src/styles/homepage.css or instructions comment for Tailwind classes

Focus on code clarity and simplicity — produce working JSX that can be dropped into a Docusaurus project and previewed with `npm run start`. Keep code self-contained, minimal external deps, and add TODO comments where integration with real docs links is required.

## Response snapshot

I have completed generating the Docusaurus React homepage component at `src/pages/index.tsx`, the reusable `src/components/Card.js` component, and updated `src/css/custom.css` with the required styling. The project now builds successfully.

## Outcome

- ✅ Impact: A new, responsive, and visually appealing homepage has been generated, along with a reusable Card component and updated global CSS. This significantly enhances the user's initial experience with the book.
- 🧪 Tests: Docusaurus build passed successfully.
- 📁 Files: 
  - `physical-ai-book/src/components/Card.js` (created)
  - `physical-ai-book/src/pages/index.tsx` (created/overwritten and updated)
  - `physical-ai-book/src/css/custom.css` (appended)
- 🔁 Next prompts: The user can now view the new homepage locally using `npm run start` within the `physical-ai-book` directory, or request further development tasks.
- 🧠 Reflection: The detailed requirements for the homepage were met, including responsive design, accessible markup, color palette integration, and dynamic components. The CSS strategy using Tailwind-like classNames defined in `custom.css` provides flexibility.

## Evaluation notes (flywheel)

- Failure modes observed: None after initial debugging of build issues from previous step.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): None
- Next experiment (smallest change to try): Add a simple test for the homepage component.
