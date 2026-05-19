# Data Model: UI/UX Enhancement

## Entities

### TerminalCellState
Represents the current visual and functional state of a terminal cell.

| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | `number` | Unique identifier (index) of the cell. |
| `status` | `enum` | `idle`, `startup`, `active`, `error`. |
| `isFocused` | `boolean` | Whether the cell currently has keyboard focus. |
| `isHovered` | `boolean` | Whether the mouse is currently over the cell. |
| `label` | `string` | User-defined or default numeric label. |
| `zoom` | `number` | Current zoom level percentage. |

### ThemeConfiguration
A set of CSS variables and style rules applied to the grid.

| Property | VS Code Variable Mapping | Purpose |
| :--- | :--- | :--- |
| `cell-bg` | `--vscode-terminal-background` | Background of the terminal cell. |
| `cell-border` | `--vscode-panel-border` | Default border color. |
| `cell-hover-border`| `--vscode-list-hoverBackground`| Border color on hover. |
| `cell-focus-border`| `--vscode-focusBorder` | Border color when focused. |
| `status-active` | `--vscode-charts-blue` | Indicator for active/running state. |
| `status-loading` | `--vscode-progressBar-background`| Color for startup/loading pulse. |
