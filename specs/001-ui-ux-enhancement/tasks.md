# Tasks: UI/UX Enhancement

**Input**: Design documents from `/specs/001-ui-ux-enhancement/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: This project primarily relies on visual verification in the VS Code Extension Host. No automated test tasks are generated as they were not explicitly requested in the spec.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure.
*(Since this is an enhancement to an existing project, setup is minimal).*

- [x] T001 Verify project compiles with `npm run compile`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T002 Implement cell state tracking (`TerminalCellState` model) in `src/TerminalGridPanel.ts`
- [x] T003 Implement `setStatus` message contract handler in `src/TerminalGridPanel.ts`
- [x] T004 Implement `setStatus` message receiver in `media/gridTerminal.js`

**Checkpoint**: Foundation ready - webview can receive and process state changes.

---

## Phase 3: User Story 1 - Visually Cohesive Interface (Priority: P1) 🎯 MVP

**Goal**: Ensure the interface looks modern and adapts to VS Code themes.

**Independent Test**: Switch VS Code themes (Light/Dark) and verify studio UI elements adapt automatically. Layout spacing should be consistent.

### Implementation for User Story 1

- [x] T005 [P] [US1] Update `xterm.css` (or internal styles) to use `--vscode-sideBar-background` for terminal container backgrounds.
- [x] T006 [P] [US1] Update cell borders in `gridTerminal.html` (via `TerminalGridPanel.ts`) to use `--vscode-sideBar-border`.
- [x] T007 [P] [US1] Update `cell-label` color to use `--vscode-descriptionForeground` or similar high-contrast variable in `TerminalGridPanel.ts`.
- [x] T008 [US1] Standardize grid gap and cell padding to 4px/8px increments in `TerminalGridPanel.ts` HTML template.

**Checkpoint**: At this point, the interface should seamlessly match the active VS Code theme with proper spacing.

---

## Phase 4: User Story 2 - Interaction Recognizability (Priority: P1)

**Goal**: Provide clear visual feedback when interacting with elements.

**Independent Test**: Hover over and click cells/buttons to ensure immediate and distinct visual changes occur.

### Implementation for User Story 2

- [x] T009 [P] [US2] Add `.cell:hover` CSS class mapping to `--vscode-list-hoverBackground` in `TerminalGridPanel.ts`.
- [x] T010 [P] [US2] Enhance `.cell.focused` CSS class to use `--vscode-focusBorder` with a subtle glow/shadow in `TerminalGridPanel.ts`.
- [x] T011 [US2] Add `mouseenter` and `mouseleave` event listeners in `media/gridTerminal.js` to toggle hover states.
- [x] T012 [US2] Add `.cell.startup` CSS class with a pulsing animation or progress bar indicator in `TerminalGridPanel.ts`.
- [x] T013 [US2] Add `.cell.active` CSS class with a subtle visual indicator in `TerminalGridPanel.ts`.
- [x] T014 [US2] Integrate the `setStatus` logic in `media/gridTerminal.js` to apply `startup`, `active`, and `error` classes to the cell DOM element.

**Checkpoint**: At this point, hover, focus, and programmatic state changes (startup/active) should be visually distinct.

---

## Phase 5: User Story 3 - Visual Hierarchy and Prominence (Priority: P2)

**Goal**: Ensure important actions and information are prominent.

**Independent Test**: Verify that primary UI elements (like active cell labels or main actions) carry more visual weight than secondary elements.

### Implementation for User Story 3

- [x] T015 [P] [US3] Adjust font weights or opacities in `TerminalGridPanel.ts` CSS to emphasize the focused cell's info bar over unfocused cells.
- [x] T016 [US3] Ensure the context menu (`ctxMenu`) styling adheres to strict VS Code native variables (`--vscode-menu-background`, etc.) and transitions smoothly.

**Checkpoint**: All user stories should now be independently functional.

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T017 [P] Verify contrast of all new text/colors against Light, Dark, and High Contrast themes.
- [x] T018 Run `npm run compile` to ensure no TypeScript errors were introduced.
- [ ] T019 Run quickstart.md validation (manual UI verification).

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories.
- **User Story 3 (P2)**: Can start after Foundational (Phase 2) - Should build upon the CSS structure established in US1/US2.

### Within Each User Story

- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- CSS variable updates across different areas (backgrounds vs borders vs labels) can be done in parallel.
- State tracking logic (TS) and State styling (CSS) can be developed concurrently.

---

## Parallel Example: User Story 1

```bash
# Launch CSS variable updates in parallel:
Task: "Update xterm.css to use --vscode-sideBar-background..."
Task: "Update cell borders in gridTerminal.html to use --vscode-sideBar-border..."
Task: "Update cell-label color to use --vscode-descriptionForeground..."
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1 (Native Theme Integration)
4. **STOP and VALIDATE**: Verify UI adapts to themes correctly.
5. Proceed to US2.

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Visuals match IDE.
3. Add User Story 2 → Test independently → Interactions are clear.
4. Add User Story 3 → Test independently → Hierarchy is established.
5. Each story adds value without breaking previous stories
