# Contract: Extension to Webview Communication (UI State)

## Message: `setStatus`
Updates the visual status of a specific terminal cell.

**Direction**: Extension → Webview

### Payload Schema (JSON)
```json
{
  "type": "setStatus",
  "id": number,
  "status": "idle" | "startup" | "active" | "error",
  "message": string (optional)
}
```

### Visual Mappings
- `idle`: Default border, no overlay.
- `startup`: Pulsing background or progress bar at the top of the cell.
- `active`: Subtle glow or indicator in the info bar.
- `error`: Red border and error icon/text overlay.

---

## Message: `updateTheme` (Enhanced)
Existing message updated to include more fine-grained UI variables if needed.

**Direction**: Extension → Webview

### Payload Schema (JSON)
```json
{
  "type": "configUpdate",
  "zoom": number,
  "fontFamily": string,
  "bgColor": string,
  "fgColor": string,
  "themeName": string,
  "themeColors": object,
  "uiCustomizations": {
    "borderRadius": number,
    "borderWidth": number,
    "showLabels": boolean
  } (optional)
}
```
