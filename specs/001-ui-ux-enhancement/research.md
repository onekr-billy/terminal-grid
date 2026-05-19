# Research: UI/UX Enhancement for Terminal Grid

## Decision: VS Code Native Aesthetic & Immediate Interaction Feedback

### VS Code Theme Integration
- **Finding**: The webview already uses VS Code CSS variables but lacks depth and responsiveness in some areas.
- **Decision**: Leverage more specific VS Code variables for borders (`--vscode-sideBar-border`), backgrounds (`--vscode-sideBar-background`), and interactive states (`--vscode-button-hoverBackground`).
- **Rationale**: Ensures the extension feels like a built-in feature rather than an iframe.

### Interaction Recognizability
- **Finding**: Current feedback is limited to a focus border. Hover and active (click) states are absent for the terminal cells.
- **Decision**:
    - Add a subtle hover border and background highlight to cells.
    - Implement a "pressed" state for active interactions.
    - Improve the visual weight of labels (`cell-label`) and status indicators.
- **Rationale**: Users need to know exactly which cell they are about to interact with.

### Loading & Initialization Feedback
- **Finding**: Startup steps (LLM initialization, shell spawning) are "invisible" to the user until output starts appearing.
- **Decision**:
    - Add a "Pulse" or "Spinner" overlay for cells in the `initialization` or `startup` state.
    - Use VS Code's standard progress/loading colors.
- **Rationale**: Reduces perceived latency and confirms that the system is working.

### Accessibility & Contrast
- **Finding**: Opacity 0.6 on labels might fail contrast checks in some light themes.
- **Decision**: Use `color-mix` or specific VS Code foreground variables (`--vscode-descriptionForeground`) to ensure readability.
- **Rationale**: Compliance with WCAG AA and better usability for all users.

## Alternatives Considered
- **Custom CSS Frameworks (Tailwind/Bootstrap)**: Rejected in favor of Vanilla CSS + VS Code Variables to minimize bundle size and maintain theme consistency.
- **Heavy Animations**: Rejected to avoid performance degradation in multi-cell grids (e.g., 4x4). Subtle CSS transitions (200ms) will be used instead.
