# Quickstart: UI/UX Enhancement

## Overview
This feature enhances the visual quality and interaction feedback of the Terminal Grid. It introduces hover states, clear focus indicators, and visual cues for terminal status (startup, active, error).

## Key Changes
1.  **CSS Refactoring**: Update `gridTerminal.html` (inlined in `TerminalGridPanel.ts`) with new CSS variables and state-based classes.
2.  **State Management**: Add logic in `TerminalGridPanel.ts` to track cell status and notify the webview.
3.  **Interaction Handlers**: Add `mouseenter`, `mouseleave`, and `mousedown` listeners in `gridTerminal.ts` to trigger visual changes.

## Verification Steps
1.  **Hover Test**: Hover over a cell. It should show a subtle border highlight.
2.  **Focus Test**: Click a cell. It should show a distinct focus border (stronger than hover).
3.  **Startup Test**: Run a command that triggers `startupSteps`. The cell should show a pulsing loading indicator.
4.  **Theme Test**: Switch between Light, Dark, and High Contrast themes. Ensure all UI elements (labels, borders, overlays) remain readable.
