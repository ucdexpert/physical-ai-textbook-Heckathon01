# Tasks: Book Structure and Layout for Physical AI & Humanoid Robotics

**Input**: Design documents from `specs/1-physical-ai-book-structure/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Initialize Docusaurus project using `npx create-docusaurus@latest my-website classic`
- [x] T002 [P] Configure `docusaurus.config.js` with the specified theme, navbar, and plugins.
- [x] T003 [P] Create `sidebars.js` with the hierarchical structure of modules, weeks, and chapters.

---

## Phase 2: User Story 1 - Clear Course Structure (Priority: P1) 🎯 MVP

**Goal**: Create the basic structure of the book with placeholder pages.

**Independent Test**: The site should build and the sidebar should reflect the full course structure.

### Implementation for User Story 1

- [x] T004 [US1] Create placeholder markdown files for each chapter in the `docs/` directory, following the structure in `plan.md`.
- [x] T005 [US1] Add frontmatter to each chapter file with title and sidebar position.

**Checkpoint**: At this point, the Docusaurus site should build with the full sidebar navigation and placeholder pages for all chapters.

---

## Phase 3: User Story 2 - Easy Navigation for Developers (Priority: P2)

**Goal**: Create a landing page that provides a clear overview of the book and its content.

**Independent Test**: The landing page should render correctly and all links should work.

### Implementation for User Story 2

- [x] T006 [US2] Create the landing page at `src/pages/index.js`.
- [x] T007 [US2] Implement the Hero Section, Course Overview, Learning Path, What You'll Build, Prerequisites, and Hardware Quick Start sections on the landing page.
- [x] T008 [US2] Ensure all links on the landing page point to the correct internal or external pages.

**Checkpoint**: At this point, the landing page should be fully functional.

---

## Phase 4: User Story 3 - Actionable Chapter Content (Priority: P3)

**Goal**: Add the required sections to each chapter's placeholder file.

**Independent Test**: A single chapter page should show all the required sections.

### Implementation for User Story 3

- [x] T009 [US3] For each chapter's placeholder markdown file, add the following sections: Learning Objectives, Content Summary, Key Concepts, Hands-On Component, and Assessment.

**Checkpoint**: All chapter pages should have the required sections.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories.

- [x] T010 [P] Add admonition styles to the custom CSS.
- [x] T011 [P] Add icon/badge styles to the custom CSS.
- [x] T012 Run a full build and check for any errors.
- [x] T013 Run a link checker to find any broken links.

---

## Dependencies & Execution Order

- **Phase 1 (Setup)** must be completed before any other phase.
- **Phase 2 (User Story 1)** can be completed independently.
- **Phase 3 (User Story 2)** can be completed independently.
- **Phase 4 (User Story 3)** depends on Phase 2.
- **Phase 5 (Polish)** should be done last.
