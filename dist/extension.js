"use strict";var ee=Object.create;var G=Object.defineProperty;var te=Object.getOwnPropertyDescriptor;var ne=Object.getOwnPropertyNames;var re=Object.getPrototypeOf,se=Object.prototype.hasOwnProperty;var oe=(i,t)=>{for(var s in t)G(i,s,{get:t[s],enumerable:!0})},z=(i,t,s,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of ne(t))!se.call(i,r)&&r!==s&&G(i,r,{get:()=>t[r],enumerable:!(o=te(t,r))||o.enumerable});return i};var k=(i,t,s)=>(s=i!=null?ee(re(i)):{},z(t||!i||!i.__esModule?G(s,"default",{value:i,enumerable:!0}):s,i)),ae=i=>z(G({},"__esModule",{value:!0}),i);var xe={};oe(xe,{activate:()=>we,deactivate:()=>ye});module.exports=ae(xe);var p=k(require("vscode")),_=k(require("path")),x=k(require("fs")),D=k(require("os"));var l=k(require("vscode")),y=k(require("fs")),P=k(require("path")),Z=k(require("child_process"));var g=k(require("vscode")),q=k(require("os")),R=k(require("fs")),I=k(require("path"));var $={"":null,Dracula:{name:"Dracula",background:"#282a36",foreground:"#f8f8f2",cursor:"#f8f8f2",cursorAccent:"#282a36",selectionBackground:"#44475a",black:"#21222c",brightBlack:"#6272a4",red:"#ff5555",brightRed:"#ff6e6e",green:"#50fa7b",brightGreen:"#69ff94",yellow:"#f1fa8c",brightYellow:"#ffffa5",blue:"#bd93f9",brightBlue:"#d6acff",magenta:"#ff79c6",brightMagenta:"#ff92df",cyan:"#8be9fd",brightCyan:"#a4ffff",white:"#f8f8f2",brightWhite:"#ffffff"},Monokai:{name:"Monokai",background:"#272822",foreground:"#f8f8f2",cursor:"#f8f8f0",cursorAccent:"#272822",selectionBackground:"#49483e",black:"#272822",brightBlack:"#75715e",red:"#f92672",brightRed:"#f92672",green:"#a6e22e",brightGreen:"#a6e22e",yellow:"#f4bf75",brightYellow:"#f4bf75",blue:"#66d9ef",brightBlue:"#66d9ef",magenta:"#ae81ff",brightMagenta:"#ae81ff",cyan:"#a1efe4",brightCyan:"#a1efe4",white:"#f8f8f2",brightWhite:"#f9f8f5"},"Solarized Dark":{name:"Solarized Dark",background:"#002b36",foreground:"#839496",cursor:"#839496",cursorAccent:"#002b36",selectionBackground:"#073642",black:"#073642",brightBlack:"#586e75",red:"#dc322f",brightRed:"#cb4b16",green:"#859900",brightGreen:"#586e75",yellow:"#b58900",brightYellow:"#657b83",blue:"#268bd2",brightBlue:"#839496",magenta:"#d33682",brightMagenta:"#6c71c4",cyan:"#2aa198",brightCyan:"#93a1a1",white:"#eee8d5",brightWhite:"#fdf6e3"},"Solarized Light":{name:"Solarized Light",background:"#fdf6e3",foreground:"#657b83",cursor:"#657b83",cursorAccent:"#fdf6e3",selectionBackground:"#eee8d5",black:"#073642",brightBlack:"#586e75",red:"#dc322f",brightRed:"#cb4b16",green:"#859900",brightGreen:"#586e75",yellow:"#b58900",brightYellow:"#657b83",blue:"#268bd2",brightBlue:"#839496",magenta:"#d33682",brightMagenta:"#6c71c4",cyan:"#2aa198",brightCyan:"#93a1a1",white:"#eee8d5",brightWhite:"#fdf6e3"},Nord:{name:"Nord",background:"#2e3440",foreground:"#d8dee9",cursor:"#d8dee9",cursorAccent:"#2e3440",selectionBackground:"#434c5e",black:"#3b4252",brightBlack:"#4c566a",red:"#bf616a",brightRed:"#bf616a",green:"#a3be8c",brightGreen:"#a3be8c",yellow:"#ebcb8b",brightYellow:"#ebcb8b",blue:"#81a1c1",brightBlue:"#81a1c1",magenta:"#b48ead",brightMagenta:"#b48ead",cyan:"#88c0d0",brightCyan:"#8fbcbb",white:"#e5e9f0",brightWhite:"#eceff4"},"One Dark":{name:"One Dark",background:"#282c34",foreground:"#abb2bf",cursor:"#528bff",cursorAccent:"#282c34",selectionBackground:"#3e4451",black:"#282c34",brightBlack:"#5c6370",red:"#e06c75",brightRed:"#e06c75",green:"#98c379",brightGreen:"#98c379",yellow:"#e5c07b",brightYellow:"#d19a66",blue:"#61afef",brightBlue:"#61afef",magenta:"#c678dd",brightMagenta:"#c678dd",cyan:"#56b6c2",brightCyan:"#56b6c2",white:"#abb2bf",brightWhite:"#ffffff"},"Gruvbox Dark":{name:"Gruvbox Dark",background:"#282828",foreground:"#ebdbb2",cursor:"#ebdbb2",cursorAccent:"#282828",selectionBackground:"#504945",black:"#282828",brightBlack:"#928374",red:"#cc241d",brightRed:"#fb4934",green:"#98971a",brightGreen:"#b8bb26",yellow:"#d79921",brightYellow:"#fabd2f",blue:"#458588",brightBlue:"#83a598",magenta:"#b16286",brightMagenta:"#d3869b",cyan:"#689d6a",brightCyan:"#8ec07c",white:"#a89984",brightWhite:"#ebdbb2"},"Tokyo Night":{name:"Tokyo Night",background:"#1a1b26",foreground:"#a9b1d6",cursor:"#c0caf5",cursorAccent:"#1a1b26",selectionBackground:"#33467c",black:"#15161e",brightBlack:"#414868",red:"#f7768e",brightRed:"#f7768e",green:"#9ece6a",brightGreen:"#9ece6a",yellow:"#e0af68",brightYellow:"#e0af68",blue:"#7aa2f7",brightBlue:"#7aa2f7",magenta:"#bb9af7",brightMagenta:"#bb9af7",cyan:"#7dcfff",brightCyan:"#7dcfff",white:"#a9b1d6",brightWhite:"#c0caf5"}},U=Object.keys($);function M(i){let t=$[i];if(!t)return null;let{name:s,...o}=t;return o}function B(i){return new Promise(t=>setTimeout(t,i))}var ie=3e3,le=15e3,de=200,ce=[/[❯>✻⏵›]\s*$/m,/aider>\s*$/m],W=(()=>{if(process.platform!=="win32")return 0;let i=q.release().split(".");return parseInt(i[2]||"0",10)})(),H=W>0&&W<22e3?"\r":"\x1B[13u",pe=["claude","codex","gemini","copilot","aider","claude --dangerously-skip-permissions","codex -s danger-full-access -a never"];function A(i){let t=i.trim();return pe.some(s=>t===s||t.startsWith(s+" "))}function ge(i){let t=i.toLowerCase();return t.includes("powershell")||t.includes("pwsh")||t.includes("cmd")?`\r
`:"\r"}function J(i,t,s,o,r){let e=i[r];return e?.startupSteps&&e.startupSteps.length>0?e.startupSteps:e?.startupCommand?[{type:"command",input:e.startupCommand}]:t[r]?[{type:"command",input:t[r]}]:s.length>0?s:o?[{type:"command",input:o}]:[]}var V={".ttf":"truetype",".otf":"opentype",".woff":"woff",".woff2":"woff2"},f=class i{constructor(t,s,o,r){this._terminals=[];this._outputBuffers=[];this._csiUMode=[];this._insideLlm=[];this._cellShellType=[];this._cellStatus=[];this._disposed=!1;this._stepGeneration={};this._panel=t,this._context=s,this._rows=o,this._cols=r;let e=s.globalState.get("mergedRegions",[]).filter(n=>n.startRow+n.rowSpan<=o&&n.startCol+n.colSpan<=r);this._hiddenCells=new Set;for(let n of e)for(let a=n.startRow;a<n.startRow+n.rowSpan;a++)for(let d=n.startCol;d<n.startCol+n.colSpan;d++)a===n.startRow&&d===n.startCol||this._hiddenCells.add(a*r+d);this._panel.webview.options={enableScripts:!0,localResourceRoots:[g.Uri.joinPath(s.extensionUri,"media")]},this._panel.webview.html=this._getHtml(),this._panel.webview.onDidReceiveMessage(async n=>{switch(n.type){case"ready":if(this._createTerminals(n.defaultCols,n.defaultRows),n.cellDims&&Array.isArray(n.cellDims))for(let d=0;d<n.cellDims.length&&d<this._terminals.length;d++){let c=n.cellDims[d];if(c?.cols&&c?.rows)try{this._terminals[d].pty.resize(c.cols,c.rows)}catch{}}this.loadCustomFonts(this._context.globalState.get("customFonts",[]));let a=this._context.globalState.get("cellOverrides",{});for(let[d,c]of Object.entries(a))if(c.bgColor||c.fgColor||c.fontFamily||c.themeName){let m=c.themeName?M(c.themeName):null;this.sendCellConfig(parseInt(d),c.bgColor||"",c.fgColor||"",c.fontFamily||"",c.themeName||"",m)}break;case"input":{let d=this._terminals[n.id]?.pty;d&&this._chunkedWrite(d,n.data);break}case"clipboardWrite":g.env.clipboard.writeText(n.text);break;case"resize":try{this._terminals[n.id]?.pty.resize(n.cols,n.rows)}catch{}break;case"clearTerminal":this._panel.webview.postMessage({type:"clear",id:n.id});break;case"killTerminal":try{this._terminals[n.id]?.pty.kill()}catch{}break;case"restartTerminal":this._restartTerminal(n.id);break;case"renameCell":{let d=this._context.globalState.get("cellLabels",[]),c=d[n.id]||"",m=await g.window.showInputBox({prompt:g.l10n.t("Rename cell {0}",n.id+1),value:c,placeHolder:g.l10n.t("Enter alias (empty to reset)")});m!==void 0&&(d[n.id]=m,await this._context.globalState.update("cellLabels",d),this.sendLabels(),g.commands.executeCommand("terminalGrid._refreshSidebar"));break}}}),this._configListener=g.workspace.onDidChangeConfiguration(n=>{if(n.affectsConfiguration("terminalGrid")){let a=g.workspace.getConfiguration("terminalGrid"),d=a.get("colorTheme","");this._panel.webview.postMessage({type:"configUpdate",zoom:a.get("zoomPercent",100),fontFamily:a.get("fontFamily",""),bgColor:a.get("backgroundColor",""),fgColor:a.get("foregroundColor",""),themeName:d,themeColors:M(d)})}}),this._panel.onDidDispose(()=>this.dispose()),this._panel.iconPath=g.Uri.joinPath(s.extensionUri,"images","sidebar.svg")}static{this.OUTPUT_BUFFER_SIZE=5e4}static{this.CSI_U_ENABLE=/\x1b\[>[0-9]+u/}static{this.CSI_U_DISABLE=/\x1b\[<[0-9]*u/}static _getLog(){return i._log||(i._log=g.window.createOutputChannel("Terminal Grid")),i._log}_updateCellStatus(t,s){this._disposed||(this._cellStatus[t]=s,this._panel.webview.postMessage({type:"setStatus",id:t,status:s}))}static _getNodePty(){if(i._nodePty===void 0)try{i._nodePty=require("node-pty"),i._ensureNodePtySpawnHelperExecutable()}catch{i._nodePty=null}return i._nodePty}static _ensureNodePtySpawnHelperExecutable(){if(process.platform==="darwin")try{let t=require.resolve("node-pty/package.json"),s=I.dirname(t),o=I.join(s,"prebuilds",`darwin-${process.arch}`,"spawn-helper");if(!R.existsSync(o))return;let r=R.statSync(o);if((r.mode&73)!==0)return;R.chmodSync(o,r.mode|493),i._getLog().appendLine(`[_getNodePty] fixed executable bit on "${o}"`)}catch(t){i._getLog().appendLine(`[_getNodePty] could not fix node-pty spawn-helper permissions: ${t instanceof Error?t.message:String(t)}`)}}static _resolveCommandPath(t){let s=t.trim();if(!s)return null;try{if(/[/\\]/.test(s))return R.existsSync(s)?s:null}catch{return null}if(process.platform!=="win32")for(let o of["/bin","/usr/bin","/usr/local/bin","/opt/homebrew/bin"]){let r=I.join(o,s);try{if(R.existsSync(r))return r}catch{}}try{let o=require("child_process"),r=process.platform==="win32"?"where":"which";return o.execFileSync(r,[s],{encoding:"utf8",stdio:["ignore","pipe","ignore"],timeout:500}).split(/\r?\n/).map(a=>a.trim()).find(Boolean)||null}catch{return null}}static _defaultShell(t){if(process.platform==="win32"){let o=i._resolveCommandPath("pwsh.exe")||i._resolveCommandPath("powershell.exe");if(o)return t?.appendLine(`[_defaultShell] -> using powershell: "${o}"`),{path:o,args:["-NoLogo","-NoProfile"]};let r=process.env.COMSPEC||i._resolveCommandPath("cmd.exe")||"cmd.exe";return t?.appendLine(`[_defaultShell] -> using cmd: "${r}"`),{path:r,args:[]}}let s=process.env.SHELL;if(s){let o=i._resolveCommandPath(s);if(o)return t?.appendLine(`[_defaultShell] -> using SHELL: "${o}"`),{path:o,args:[]};t?.appendLine(`[_defaultShell] -> SHELL not usable: "${s}"`)}for(let o of["/bin/zsh","/bin/bash","/bin/sh"]){let r=i._resolveCommandPath(o);if(r)return t?.appendLine(`[_defaultShell] -> using fallback: "${r}"`),{path:r,args:[]}}return t?.appendLine('[_defaultShell] -> using final fallback: "/bin/sh"'),{path:"/bin/sh",args:[]}}static getAvailableShells(){let t=[{name:"IDE Default",path:"",args:[]}];try{let r=function(d){return i._resolveCommandPath(d)!==null};var s=r;let o=new Set,e=process.platform==="win32"?"windows":process.platform==="darwin"?"osx":"linux",n=g.workspace.getConfiguration(`terminal.integrated.profiles.${e}`);if(n)for(let d of Object.keys(n))try{let c=n.get(d);if(!c||typeof c!="object")continue;let m=Array.isArray(c.path)?c.path[0]:c.path;m&&r(m)&&(t.push({name:d,path:m,args:c.args||[]}),o.add(m.toLowerCase()))}catch{}let a=process.platform==="win32"?[{name:"PowerShell",path:"powershell.exe",args:["-NoLogo"]},{name:"PowerShell 7",path:"pwsh.exe",args:["-NoLogo"]},{name:"Command Prompt",path:"cmd.exe",args:[]},{name:"Git Bash",path:"C:\\Program Files\\Git\\bin\\bash.exe",args:["--login"]},{name:"WSL",path:"wsl.exe",args:[]}]:[{name:"Bash",path:"/bin/bash",args:["--login"]},{name:"Zsh",path:"/bin/zsh",args:["--login"]},{name:"Fish",path:"/usr/bin/fish",args:[]},{name:"sh",path:"/bin/sh",args:[]}];for(let d of a)!o.has(d.path.toLowerCase())&&r(d.path)&&(t.push(d),o.add(d.path.toLowerCase()))}catch{}return t}_resolveShell(t){let s=i._getLog(),o=(t||"").trim();if(s.appendLine(`[_resolveShell] shellType="${o}"`),!o||o.toLowerCase()==="ide default")return i._defaultShell(s);let r=i.getAvailableShells(),e=o.toLowerCase(),n=r.find(c=>c.path.toLowerCase()===e||c.name.toLowerCase()===e||I.basename(c.path).toLowerCase()===e);if(n&&n.path)return s.appendLine(`[_resolveShell] -> matched: "${n.path}"`),{path:n.path,args:n.args};let a=i._resolveCommandPath(o);if(!a)return s.appendLine(`[_resolveShell] -> requested shell not found, falling back: "${o}"`),i._defaultShell(s);let d=a.toLowerCase();return d.includes("powershell")||d.includes("pwsh")?(s.appendLine(`[_resolveShell] -> direct path powershell: "${a}"`),{path:a,args:["-NoLogo"]}):d.includes("bash")||d.includes("zsh")?(s.appendLine(`[_resolveShell] -> direct path bash/zsh: "${a}"`),{path:a,args:["--login"]}):(s.appendLine(`[_resolveShell] -> direct path (no match): "${a}"`),{path:a,args:[]})}static createOrShow(t,s,o){i.currentPanel&&i.currentPanel.dispose();let r=g.window.createWebviewPanel("terminalGrid",g.l10n.t("Terminal Grid {0}\xD7{1}",s,o),g.ViewColumn.One,{enableScripts:!0,retainContextWhenHidden:!0,localResourceRoots:[g.Uri.joinPath(t.extensionUri,"media")]});i.currentPanel=new i(r,t,s,o),t.globalState.update("lastGrid",{rows:s,cols:o}),g.commands.executeCommand("terminalGrid._refreshSidebar")}static revive(t,s,o,r){i.currentPanel&&i.currentPanel.dispose(),i.currentPanel=new i(t,s,o,r),s.globalState.update("lastGrid",{rows:o,cols:r}),g.commands.executeCommand("terminalGrid._refreshSidebar")}_enterSeq(t){return this._csiUMode[t]||this._insideLlm[t]?H:ge(this._cellShellType[t]||"")}broadcastInput(t){for(let s of this._terminals)if(!this._hiddenCells.has(s.id)){if(this._insideLlm[s.id])this._typeToCell(s.id,t).then(()=>B(50)).then(()=>{s.pty.write(this._enterSeq(s.id))});else{let r=/\r?\n/.test(t)?"\x1B[200~"+t+"\x1B[201~":t;s.pty.write(r+this._enterSeq(s.id))}A(t)&&(this._insideLlm[s.id]=!0),t.trim()==="exit"&&(this._insideLlm[s.id]=!1)}}sendToCell(t,s){let o=this._terminals[t];return o?(this._chunkedWrite(o.pty,s),!0):!1}sendInputToCell(t,s){let o=this._terminals[t];if(!o)return!1;if(this._insideLlm[t])this._typeToCell(t,s).then(()=>B(50)).then(()=>{o.pty.write(this._enterSeq(t))});else{let e=/\r?\n/.test(s)?"\x1B[200~"+s+"\x1B[201~":s;o.pty.write(e+this._enterSeq(t))}return A(s)&&(this._insideLlm[t]=!0),s.trim()==="exit"&&(this._insideLlm[t]=!1),!0}static _stripAnsi(t){return t.replace(/\x1b\[[0-9;?]*[a-zA-Z]/g,"").replace(/\x1b\][^\x07\x1b]*(?:\x07|\x1b\\)/g,"").replace(/\x1b[()][0-9A-Z]/g,"").replace(/\x1b[78DEHM]/g,"").replace(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`).replace(/\n{3,}/g,`

`)}readCell(t,s){if(this._hiddenCells.has(t))return null;let o=this._outputBuffers[t];if(o===void 0)return null;let r=i._stripAnsi(o);return s===void 0?r:s<=0?"":r.split(`
`).slice(-s).join(`
`)}getCellCount(){return this._terminals.length}getRows(){return this._rows}getCols(){return this._cols}getCellLabels(){let t=this._context.globalState.get("cellLabels",[]),s=this._rows*this._cols;return Array.from({length:s},(o,r)=>t[r]||String(r+1))}sendCellConfig(t,s,o,r,e,n){this._panel.webview.postMessage({type:"cellConfig",id:t,bgColor:s,fgColor:o,fontFamily:r,themeName:e??"",themeColors:n??null})}clearCellOverrides(){this._panel.webview.postMessage({type:"clearCellOverrides"})}sendLabels(){let t=this._context.globalState.get("cellLabels",[]);this._panel.webview.postMessage({type:"setLabels",labels:t})}loadCustomFonts(t){for(let s of t){let o=this._readFontBase64(s.path);if(o){let r=I.extname(s.path).toLowerCase();this._panel.webview.postMessage({type:"loadFont",name:s.name,data:o,format:V[r]||"truetype"})}}}_readFontBase64(t){try{return R.readFileSync(t).toString("base64")}catch{return null}}_spawnPty(t,s,o,r,e){let n=this._resolveShell(e),a=i._getLog();a.appendLine(`[_spawnPty] shellType param="${e}", resolved path="${n.path}", args=${JSON.stringify(n.args)}`);let d=b=>{if(!t)throw new Error("node-pty unavailable");let v=t.spawn(b.path,b.args,{name:"xterm-256color",cols:s,rows:o,cwd:r,env:process.env});return{onData:u=>{v.onData(u)},write:u=>v.write(u),resize:(u,C)=>v.resize(u,C),kill:()=>v.kill()}};if(t)try{return d(n)}catch(b){a.appendLine(`[_spawnPty] node-pty failed for "${n.path}": ${b instanceof Error?b.message:String(b)}`);let v=i._defaultShell(a);if(v.path!==n.path)try{return a.appendLine(`[_spawnPty] retrying node-pty with fallback "${v.path}"`),d(v)}catch(u){a.appendLine(`[_spawnPty] fallback node-pty failed: ${u instanceof Error?u.message:String(u)}`)}g.window.showWarningMessage(g.l10n.t("Terminal Grid could not start the configured shell. Falling back to basic shell."))}let{spawn:c}=require("child_process"),m=i._defaultShell(a),h=c(m.path,m.args,{cwd:r,env:process.env,windowsHide:!0});return{onData:b=>{h.stdout?.on("data",v=>b(v.toString())),h.stderr?.on("data",v=>b(v.toString())),h.on("error",v=>{a.appendLine(`[_spawnPty] child_process fallback failed: ${v.message}`),b(`Terminal Grid failed to start shell: ${v.message}\r
`)})},write:b=>{h.stdin?.write(b)},resize:()=>{},kill:()=>h.kill()}}_createTerminals(t,s){let o=g.workspace.workspaceFolders?.[0]?.uri.fsPath||process.env.USERPROFILE||process.env.HOME||".",r=this._rows*this._cols,e=i._getNodePty();e||g.window.showWarningMessage(g.l10n.t("node-pty not available. Falling back to basic shell (limited features)."));let n=this._context.globalState.get("startupCommands",[]),a=[];for(let u of n)if(typeof u=="string")a.push(u);else if(u&&typeof u=="object"&&"command"in u){let C=u;for(let T=0;T<(C.count||1);T++)a.push(C.command)}let d=this._context.globalState.get("defaultCommand",""),c=this._context.globalState.get("defaultSteps",[]),m=t||80,h=s||24,b=g.workspace.getConfiguration("terminalGrid").get("shellType",""),v=this._context.globalState.get("cellOverrides",{});for(let u=0;u<r;u++){if(this._hiddenCells.has(u)){let E={onData(){},write(){},resize(){},kill(){}};this._terminals.push({id:u,pty:E}),this._outputBuffers[u]="",this._cellShellType[u]="",this._insideLlm[u]=!1,this._csiUMode[u]=!1;continue}let C=v[u]?.shellType||b||"",T=this._spawnPty(e,m,h,o,C||void 0),w=u,S=J(v,a,c,d,u);this._cellShellType[w]=C,this._insideLlm[w]=!1,this._outputBuffers[w]="",this._csiUMode[w]=!1,this._cellStatus[w]="idle";let L=!1;T.onData(E=>{this._disposed||(i.CSI_U_ENABLE.test(E)&&(this._csiUMode[w]=!0),i.CSI_U_DISABLE.test(E)&&(this._csiUMode[w]=!1),this._outputBuffers[w]=(this._outputBuffers[w]||"")+E,this._outputBuffers[w].length>i.OUTPUT_BUFFER_SIZE&&(this._outputBuffers[w]=this._outputBuffers[w].slice(-i.OUTPUT_BUFFER_SIZE)),this._panel.webview.postMessage({type:"output",id:w,data:E}),L||(L=!0,S.length>0?(this._updateCellStatus(w,"startup"),this._executeSteps(w,S,this._cellShellType[w]||"")):this._updateCellStatus(w,"active")))}),this._terminals.push({id:u,pty:T})}this.sendLabels()}_restartTerminal(t){let s=this._terminals[t];if(!s)return;try{s.pty.kill()}catch{}this._panel.webview.postMessage({type:"reset",id:t});let o=g.workspace.workspaceFolders?.[0]?.uri.fsPath||process.env.USERPROFILE||process.env.HOME||".",r=g.workspace.getConfiguration("terminalGrid").get("shellType",""),e=this._context.globalState.get("cellOverrides",{}),n=e[t]?.shellType||r||"",a=this._spawnPty(i._getNodePty(),80,24,o,n||void 0),d=this._context.globalState.get("startupCommands",[]),c=[];for(let u of d)if(typeof u=="string")c.push(u);else if(u&&typeof u=="object"&&"command"in u){let C=u;for(let T=0;T<(C.count||1);T++)c.push(C.command)}let m=this._context.globalState.get("defaultCommand",""),h=this._context.globalState.get("defaultSteps",[]),b=J(e,c,h,m,t);this._cellShellType[t]=n,this._insideLlm[t]=!1;let v=!1;this._outputBuffers[t]="",this._csiUMode[t]=!1,this._cellStatus[t]="idle",a.onData(u=>{this._disposed||(i.CSI_U_ENABLE.test(u)&&(this._csiUMode[t]=!0),i.CSI_U_DISABLE.test(u)&&(this._csiUMode[t]=!1),this._outputBuffers[t]=(this._outputBuffers[t]||"")+u,this._outputBuffers[t].length>i.OUTPUT_BUFFER_SIZE&&(this._outputBuffers[t]=this._outputBuffers[t].slice(-i.OUTPUT_BUFFER_SIZE)),this._panel.webview.postMessage({type:"output",id:t,data:u}),v||(v=!0,b.length>0?(this._updateCellStatus(t,"startup"),this._executeSteps(t,b,this._cellShellType[t]||"")):this._updateCellStatus(t,"active")))}),this._terminals[t]={id:t,pty:a}}static{this.CHUNK_SIZE=65536}_chunkedWrite(t,s){if(s.length<=i.CHUNK_SIZE){t.write(s);return}let o=0,r=()=>{if(o>=s.length)return;let e=s.slice(o,o+i.CHUNK_SIZE);o+=i.CHUNK_SIZE,t.write(e),o<s.length&&setTimeout(r,5)};r()}async _typeToCell(t,s){let o=this._terminals[t]?.pty;if(o)for(let r of s)o.write(r),await B(20)}static{this.LLM_TYPE_MAX_RETRIES=5}static{this.LLM_ECHO_WAIT=2e3}async _waitForLlmPrompt(t){let s=(this._outputBuffers[t]||"").length,o=Date.now()+le;for(;Date.now()<o;){await B(de);let r=this._outputBuffers[t]||"",e=i._stripAnsi(r.slice(s));if(ce.some(n=>n.test(e)))return!0;if(this._disposed)return!1}return!1}async _typeWithRetry(t,s){let o=this._terminals[t]?.pty;if(!o)return!1;for(let r=0;r<i.LLM_TYPE_MAX_RETRIES;r++){let e=(this._outputBuffers[t]||"").length;await this._typeToCell(t,s);let n=Date.now()+i.LLM_ECHO_WAIT;for(;Date.now()<n;){await B(50);let a=this._outputBuffers[t]||"";if(i._stripAnsi(a.slice(e)).includes(s))return!0;if(this._disposed)return!1}for(let a=0;a<s.length;a++)o.write("\x7F");await B(300)}return!1}async _executeSteps(t,s,o){this._stepGeneration[t]||(this._stepGeneration[t]=0);let r=++this._stepGeneration[t],e=!1;for(let n=0;n<s.length;n++){if(this._disposed||this._stepGeneration[t]!==r)return;let a=s[n];if(a.type==="timeout")await B(a.ms);else if(a.type==="command"){if(n>0&&(e?await this._waitForLlmPrompt(t):s[n-1].type==="command"&&await B(ie)),this._disposed||this._stepGeneration[t]!==r)return;let d=e?H:this._enterSeq(t);e?(await this._typeWithRetry(t,a.input),this._terminals[t]?.pty.write(d)):this._terminals[t]?.pty.write(a.input+d),A(a.input)&&(e=!0),a.input.trim()==="exit"&&(e=!1),this._insideLlm[t]=e}}this._updateCellStatus(t,"active")}restartCell(t){this._restartTerminal(t)}restartAllCells(){for(let t of this._terminals)this._restartTerminal(t.id)}dispose(){this._disposed=!0,i.currentPanel=void 0,this._configListener?.dispose(),this._context.globalState.update("lastGrid",void 0);for(let t of this._terminals)try{t.pty.kill()}catch{}this._terminals=[],this._panel.dispose()}_buildCustomFontCss(){let t=this._context.globalState.get("customFonts",[]),s="";for(let o of t){let r=this._readFontBase64(o.path);if(!r)continue;let e=I.extname(o.path).toLowerCase(),n=V[e]||"truetype";s+=`@font-face { font-family: '${o.name}'; src: url(data:font/${e.slice(1)};base64,${r}) format('${n}'); font-display: swap; }
`}return s}_getHtml(){let t=this._panel.webview,s=t.asWebviewUri(g.Uri.joinPath(this._context.extensionUri,"media","gridTerminal.js")),o=t.asWebviewUri(g.Uri.joinPath(this._context.extensionUri,"media","xterm.css")),r=ue(),e=this._buildCustomFontCss();return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Security-Policy"
        content="default-src 'none';
                 style-src ${t.cspSource} 'unsafe-inline';
                 script-src 'nonce-${r}';
                 font-src ${t.cspSource} data: *;">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="${o}">
  <style>
    ${e}
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body {
      width: 100%; height: 100%;
      overflow: hidden;
      background: var(--vscode-editor-background, #1e1e1e);
    }
    #grid {
      display: grid;
      grid-template-rows: repeat(${this._rows}, 1fr);
      grid-template-columns: repeat(${this._cols}, 1fr);
      width: 100%; height: 100%;
      gap: 4px;
      padding: 4px;
      position: relative;
    }
    .cell {
      overflow: hidden;
      contain: strict;
      background: var(--vscode-sideBar-background, var(--vscode-editor-background, #1e1e1e));
      border-radius: 4px;
      border: 1px solid var(--vscode-sideBar-border, var(--vscode-panel-border, rgba(255,255,255,0.04)));
      display: flex;
      flex-direction: column;
      position: relative;
      transition: all 0.2s ease;
    }
    .cell:hover {
      border-color: var(--vscode-input-activeBorder, var(--vscode-focusBorder, #007fd4));
    }
    .cell.focused {
      border-color: var(--vscode-focusBorder, #007fd4);
      box-shadow: 0 0 10px color-mix(in srgb, var(--vscode-focusBorder, #007fd4) 30%, transparent);
      z-index: 5;
    }
    .cell.status-startup {
      background: linear-gradient(90deg, var(--vscode-sideBar-background) 0%, var(--vscode-progressBar-background) 50%, var(--vscode-sideBar-background) 100%);
      background-size: 200% 100%;
      animation: startup-pulse 2s infinite linear;
    }
    @keyframes startup-pulse {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    .cell.status-error {
      border-color: var(--vscode-errorForeground, #f48771) !important;
    }
    .cell.status-active .cell-label {
      color: var(--vscode-charts-blue, #3794ff);
      opacity: 0.8;
    }
    .cell.focused .cell-label {
      opacity: 1;
      color: var(--vscode-textLink-activeForeground, var(--vscode-textLink-foreground, #3794ff));
    }
    .cell-info {
      position: absolute;
      top: 4px; right: 8px;
      display: flex; align-items: center; gap: 6px;
      font-size: 10px;
      font-family: var(--vscode-terminal-fontFamily, var(--vscode-editor-fontFamily, 'Menlo', 'Monaco', 'Consolas', monospace));
      z-index: 10;
      pointer-events: none;
      user-select: none;
      transition: opacity 0.2s ease;
    }
    .cell:not(.focused) .cell-info {
      opacity: 0.7;
    }
    .cell-label {
      color: var(--vscode-descriptionForeground, #3794ff);
      font-weight: 600;
    }
    .cell-zoom-pct {
      font-size: 9px;
      color: var(--vscode-descriptionForeground, #3794ff);
      opacity: 0.6;
    }
    .grid-resizer {
      position: absolute;
      z-index: 20;
      background: transparent;
    }
    .grid-resizer:hover, .grid-resizer.active {
      background: var(--vscode-focusBorder, #007fd4);
      opacity: 0.45;
    }
    .grid-resizer.col-resizer {
      top: 0; width: 6px; height: 100%;
      cursor: col-resize;
    }
    .grid-resizer.row-resizer {
      left: 0; height: 6px; width: 100%;
      cursor: row-resize;
    }
    body.resizing-col, body.resizing-col * { cursor: col-resize !important; }
    body.resizing-row, body.resizing-row * { cursor: row-resize !important; }
    .term-container {
      flex: 1;
      overflow: hidden;
      padding: 4px 4px 4px 4px;
      background: var(--vscode-terminal-background, var(--vscode-editor-background, #1e1e1e));
    }
    .term-container .xterm,
    .term-container .xterm-viewport,
    .term-container .xterm-screen {
      height: 100%;
    }
    .term-container .xterm-viewport {
      overflow-y: scroll !important;
      will-change: transform;
    }
    .term-container .xterm-viewport::-webkit-scrollbar { width: 4px; }
    .term-container .xterm-viewport::-webkit-scrollbar-thumb {
      background: var(--vscode-scrollbarSlider-background, rgba(255,255,255,0.1));
      border-radius: 2px;
    }
    .term-container .xterm-viewport::-webkit-scrollbar-thumb:hover {
      background: var(--vscode-scrollbarSlider-hoverBackground, rgba(255,255,255,0.2));
    }
    .ctx-menu {
      position: fixed; display: none; z-index: 1000;
      background: var(--vscode-menu-background, #252526);
      color: var(--vscode-menu-foreground, var(--vscode-foreground));
      border: 1px solid var(--vscode-menu-border, rgba(255,255,255,.12));
      border-radius: 4px;
      padding: 4px 0; min-width: 140px;
      box-shadow: 0 4px 20px rgba(0,0,0,.4);
      user-select: none;
    }
    .ctx-menu.show { display: block; }
    .ctx-menu-item {
      padding: 6px 12px; font-size: 12px; cursor: pointer;
      color: inherit;
      transition: background .1s;
    }
    .ctx-menu-item:hover {
      background: var(--vscode-menu-selectionBackground, rgba(255,255,255,.06));
      color: var(--vscode-menu-selectionForeground, inherit);
    }
    .ctx-menu-sep { height: 1px; background: rgba(255,255,255,.06); margin: 4px 8px; }
  </style>
</head>
<body>
  <div id="grid"></div>
  <div class="ctx-menu" id="ctxMenu">
    <div class="ctx-menu-item" data-action="copy">${g.l10n.t("Copy")}</div>
    <div class="ctx-menu-item" data-action="copyPlain">${g.l10n.t("Copy (Plain)")}</div>
    <div class="ctx-menu-item" data-action="paste">${g.l10n.t("Paste")}</div>
    <div class="ctx-menu-sep"></div>
    <div class="ctx-menu-item" data-action="clear">${g.l10n.t("Clear")}</div>
    <div class="ctx-menu-item" data-action="restart">${g.l10n.t("Restart")}</div>
    <div class="ctx-menu-item" data-action="kill">${g.l10n.t("Kill")}</div>
    <div class="ctx-menu-sep"></div>
    <div class="ctx-menu-item" data-action="rename">${g.l10n.t("Rename")}</div>
  </div>
  <script nonce="${r}">
    var __GRID_ROWS = ${this._rows};
    var __GRID_COLS = ${this._cols};
    var __GRID_ZOOM = ${g.workspace.getConfiguration("terminalGrid").get("zoomPercent",100)};
    var __GRID_FONT_FAMILY = ${JSON.stringify(g.workspace.getConfiguration("terminalGrid").get("fontFamily",""))};
    var __GRID_IDE_FONT_FAMILY = ${JSON.stringify(g.workspace.getConfiguration("terminal.integrated").get("fontFamily","")||g.workspace.getConfiguration("editor").get("fontFamily",""))};
    var __GRID_BG_COLOR = ${JSON.stringify(g.workspace.getConfiguration("terminalGrid").get("backgroundColor",""))};
    var __GRID_FG_COLOR = ${JSON.stringify(g.workspace.getConfiguration("terminalGrid").get("foregroundColor",""))};
    var __GRID_THEME = ${JSON.stringify(g.workspace.getConfiguration("terminalGrid").get("colorTheme",""))};
    var __GRID_THEME_COLORS = ${JSON.stringify(M(g.workspace.getConfiguration("terminalGrid").get("colorTheme","")))};
    var __GRID_MERGE_REGIONS = ${JSON.stringify(this._context.globalState.get("mergedRegions",[]).filter(n=>n.startRow+n.rowSpan<=this._rows&&n.startCol+n.colSpan<=this._cols))};
  </script>
  <script nonce="${r}" src="${s}"></script>
</body>
</html>`}};function ue(){let i="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let s=0;s<32;s++)i+=t.charAt(Math.floor(Math.random()*t.length));return i}var me=[".ttf",".otf",".woff",".woff2"];function fe(){try{return require("node-pty"),!0}catch{return!1}}var N=class{constructor(t){this._mcpPort=0;this._context=t}static{this.viewType="terminalGrid.sidebarView"}setMcpPort(t){this._mcpPort=t,this._view?.webview.postMessage({type:"mcpPort",port:t})}_getPresetFolderPath(){let t=l.workspace.workspaceFolders?.[0];if(t)return P.join(t.uri.fsPath,"terminal-grid")}_listLocalPresets(){let t=this._getPresetFolderPath();if(!t||!y.existsSync(t))return[];try{let s=y.readdirSync(t),o=[];for(let r of s)if(r.endsWith(".json"))try{let e=y.readFileSync(P.join(t,r),"utf-8"),n=JSON.parse(e);n.name&&o.push(n)}catch(e){console.error(`Failed to parse preset file: ${r}`,e)}return o}catch(s){return console.error("Failed to list local presets",s),[]}}_loadLocalPreset(t){let s=this._getPresetFolderPath();if(!s)return;let o=P.join(s,`${t}.json`);if(y.existsSync(o))try{let r=y.readFileSync(o,"utf-8");return JSON.parse(r)}catch(r){console.error(`Failed to load preset: ${t}`,r)}}async _saveLocalPreset(t,s){let o=this._getPresetFolderPath();if(!o){l.window.showWarningMessage(l.l10n.t("Please open a workspace folder first."));return}try{y.existsSync(o)||y.mkdirSync(o,{recursive:!0});let r=P.join(o,`${t}.json`);y.writeFileSync(r,JSON.stringify(s,null,2),"utf-8")}catch(r){l.window.showErrorMessage(`Failed to save preset: ${r}`)}}async _deleteLocalPreset(t){let s=this._getPresetFolderPath();if(!s)return;let o=P.join(s,`${t}.json`);if(y.existsSync(o))try{y.unlinkSync(o)}catch(r){l.window.showErrorMessage(`Failed to delete preset: ${r}`)}}async _saveWorkspaceConfig(){let t=this._getPresetFolderPath();if(t)try{y.existsSync(t)||y.mkdirSync(t,{recursive:!0});let s=l.workspace.getConfiguration("terminalGrid"),o={name:"terminal-grid",rows:s.get("defaultRows",2),cols:s.get("defaultCols",3),startupCommands:this._context.globalState.get("startupCommands",[]),cellLabels:this._context.globalState.get("cellLabels",[]),zoomPercent:s.get("zoomPercent",100),fontFamily:s.get("fontFamily",""),bgColor:s.get("backgroundColor",""),fgColor:s.get("foregroundColor",""),colorTheme:s.get("colorTheme",""),shellType:s.get("shellType",""),defaultCommand:this._context.globalState.get("defaultCommand",""),defaultSteps:this._context.globalState.get("defaultSteps",[]),cellStepsOverrides:this._context.globalState.get("cellOverrides",{}),mergedRegions:this._context.globalState.get("mergedRegions",[])},r=P.join(t,"terminal-grid.json");y.writeFileSync(r,JSON.stringify(o,null,2),"utf-8")}catch(s){console.error("Failed to auto-save workspace config",s)}}resolveWebviewView(t,s,o){this._view=t,t.webview.options={enableScripts:!0,localResourceRoots:[this._context.extensionUri]},t.webview.html=this._getHtml(),t.webview.onDidReceiveMessage(async r=>{switch(r.type){case"openGrid":await l.commands.executeCommand("terminalGrid.openCustomGrid",r.rows,r.cols),this.sendConfig();break;case"reopenGrid":{let e=f.currentPanel,n=l.workspace.getConfiguration("terminalGrid"),a=e?e.getRows():n.get("defaultRows",2),d=e?e.getCols():n.get("defaultCols",3);await l.commands.executeCommand("terminalGrid.openCustomGrid",a,d),this.sendConfig();break}case"reload":await l.commands.executeCommand("workbench.action.reloadWindow");break;case"setConfig":{let e=l.workspace.getConfiguration("terminalGrid");r.key&&r.value!==void 0&&await e.update(r.key,r.value,l.ConfigurationTarget.Global),r.key==="shellType"&&f.currentPanel&&f.currentPanel.restartAllCells();break}case"getConfig":{this.sendConfig();break}case"browseFont":{let e=await l.window.showOpenDialog({canSelectMany:!1,filters:{"Font Files":["ttf","otf","woff","woff2"]},title:l.l10n.t("Select Font File")});if(!e||e.length===0)break;let n=e[0].fsPath,a=P.extname(n).toLowerCase();if(!me.includes(a)){l.window.showWarningMessage(l.l10n.t("Unsupported font format. Use .ttf, .otf, .woff, or .woff2"));break}try{y.accessSync(n,y.constants.R_OK)}catch{l.window.showErrorMessage(l.l10n.t("Cannot read font file."));break}let d=P.basename(n,a),c=this._context.globalState.get("customFonts",[]);c.some(m=>m.path===n)||(c.push({name:d,path:n}),await this._context.globalState.update("customFonts",c)),await this._saveWorkspaceConfig(),this.sendConfig(),f.currentPanel&&f.currentPanel.loadCustomFonts([{name:d,path:n}]);break}case"removeFont":{let n=this._context.globalState.get("customFonts",[]).filter(a=>a.name!==r.name);await this._context.globalState.update("customFonts",n),await this._saveWorkspaceConfig(),this.sendConfig();break}case"addStartupCommand":{let e=this._context.globalState.get("startupCommands",[]);e.push({command:r.command,count:1}),await this._context.globalState.update("startupCommands",e),await this._saveWorkspaceConfig(),this.sendConfig();break}case"removeStartupCommand":{let e=this._context.globalState.get("startupCommands",[]);e.splice(r.index,1),await this._context.globalState.update("startupCommands",e),await this._saveWorkspaceConfig(),this.sendConfig();break}case"updateCommandCount":{let e=this._context.globalState.get("startupCommands",[]);e[r.index]&&(e[r.index].count=Math.max(1,r.count),await this._context.globalState.update("startupCommands",e)),await this._saveWorkspaceConfig(),this.sendConfig();break}case"addStep":{if(r.target==="all"){let e=this._context.globalState.get("defaultSteps",[]);e.push(r.step),await this._context.globalState.update("defaultSteps",e);let n=e.find(a=>a.type==="command");await this._context.globalState.update("defaultCommand",n?.input||"")}else{let e=this._context.globalState.get("cellOverrides",{}),n=r.target;e[n]||(e[n]={}),Array.isArray(e[n].startupSteps)||(e[n].startupSteps=[]),e[n].startupSteps.push(r.step);let a=e[n].startupSteps.find(d=>d.type==="command");e[n].startupCommand=a?.input||"",await this._context.globalState.update("cellOverrides",e)}await this._saveWorkspaceConfig(),this.sendConfig();break}case"removeStep":{if(r.target==="all"){let e=this._context.globalState.get("defaultSteps",[]);e.splice(r.index,1),await this._context.globalState.update("defaultSteps",e);let n=e.find(a=>a.type==="command");await this._context.globalState.update("defaultCommand",n?.input||"")}else{let e=this._context.globalState.get("cellOverrides",{}),n=r.target;if(Array.isArray(e[n]?.startupSteps)){e[n].startupSteps.splice(r.index,1);let a=e[n].startupSteps.find(d=>d.type==="command");e[n].startupCommand=a?.input||"",await this._context.globalState.update("cellOverrides",e)}}await this._saveWorkspaceConfig(),this.sendConfig();break}case"reorderSteps":{if(r.target==="all"){await this._context.globalState.update("defaultSteps",r.steps);let e=r.steps.find(n=>n.type==="command");await this._context.globalState.update("defaultCommand",e?.input||"")}else{let e=this._context.globalState.get("cellOverrides",{}),n=r.target;e[n]||(e[n]={}),e[n].startupSteps=r.steps;let a=r.steps.find(d=>d.type==="command");e[n].startupCommand=a?.input||"",await this._context.globalState.update("cellOverrides",e)}await this._saveWorkspaceConfig(),this.sendConfig();break}case"updateStep":{if(r.target==="all"){let e=this._context.globalState.get("defaultSteps",[]);r.index>=0&&r.index<e.length&&(e[r.index]=r.step,await this._context.globalState.update("defaultSteps",e))}else{let e=this._context.globalState.get("cellOverrides",{}),n=r.target,a=e[n]?.startupSteps||[];r.index>=0&&r.index<a.length&&(a[r.index]=r.step,e[n]||(e[n]={}),e[n].startupSteps=a,await this._context.globalState.update("cellOverrides",e))}await this._saveWorkspaceConfig(),this.sendConfig();break}case"addProject":{let e=this._context.globalState.get("projects",[]);e.some(n=>n.path===r.path)||(e.push({name:r.name,path:r.path}),await this._context.globalState.update("projects",e)),this.sendConfig();break}case"removeProject":{let e=this._context.globalState.get("projects",[]);e.splice(r.index,1),await this._context.globalState.update("projects",e),this.sendConfig();break}case"openProject":{let e=l.Uri.file(r.path);await l.commands.executeCommand("vscode.openFolder",e,{forceNewWindow:!!r.newWindow});break}case"addCurrentProject":{let e=l.workspace.workspaceFolders?.[0];if(!e){l.window.showWarningMessage(l.l10n.t("No workspace folder open."));break}let n=this._context.globalState.get("projects",[]),a=e.uri.fsPath;n.some(d=>d.path===a)||(n.push({name:e.name,path:a}),await this._context.globalState.update("projects",n)),this.sendConfig();break}case"browseProject":{let e=await l.window.showOpenDialog({canSelectFiles:!1,canSelectFolders:!0,canSelectMany:!1,title:l.l10n.t("Select Project Folder")});if(!e||e.length===0)break;let n=e[0].fsPath,a=P.basename(n),d=this._context.globalState.get("projects",[]);d.some(c=>c.path===n)||(d.push({name:a,path:n}),await this._context.globalState.update("projects",d)),this.sendConfig();break}case"savePreset":{let e=l.workspace.getConfiguration("terminalGrid"),n={name:r.name,rows:e.get("defaultRows",2),cols:e.get("defaultCols",3),startupCommands:this._context.globalState.get("startupCommands",[]),cellLabels:this._context.globalState.get("cellLabels",[]),zoomPercent:e.get("zoomPercent",100),fontFamily:e.get("fontFamily",""),bgColor:e.get("backgroundColor",""),fgColor:e.get("foregroundColor",""),colorTheme:e.get("colorTheme",""),shellType:e.get("shellType",""),defaultCommand:this._context.globalState.get("defaultCommand",""),defaultSteps:this._context.globalState.get("defaultSteps",[]),cellStepsOverrides:this._context.globalState.get("cellOverrides",{}),mergedRegions:this._context.globalState.get("mergedRegions",[])};if(l.workspace.workspaceFolders?.[0])await this._saveLocalPreset(r.name,n);else{let a=this._context.globalState.get("presets",[]),d=a.findIndex(c=>c.name===r.name);d>=0?a[d]=n:a.push(n),await this._context.globalState.update("presets",a)}this.sendConfig(r.name);break}case"loadPreset":{let e=this._loadLocalPreset(r.name);if(e||(e=this._context.globalState.get("presets",[]).find(d=>d.name===r.name)),!e)break;let n=l.workspace.getConfiguration("terminalGrid");if(await n.update("defaultRows",e.rows,l.ConfigurationTarget.Global),await n.update("defaultCols",e.cols,l.ConfigurationTarget.Global),await n.update("zoomPercent",e.zoomPercent,l.ConfigurationTarget.Global),await n.update("fontFamily",e.fontFamily,l.ConfigurationTarget.Global),await n.update("backgroundColor",e.bgColor,l.ConfigurationTarget.Global),await n.update("foregroundColor",e.fgColor,l.ConfigurationTarget.Global),await n.update("colorTheme",e.colorTheme||"",l.ConfigurationTarget.Global),await n.update("shellType",e.shellType||"",l.ConfigurationTarget.Global),await this._context.globalState.update("startupCommands",e.startupCommands||[]),await this._context.globalState.update("cellLabels",e.cellLabels||[]),await this._context.globalState.update("defaultCommand",e.defaultCommand||""),e.defaultSteps?await this._context.globalState.update("defaultSteps",e.defaultSteps):e.defaultCommand?await this._context.globalState.update("defaultSteps",[{type:"command",input:e.defaultCommand}]):await this._context.globalState.update("defaultSteps",[]),e.cellStepsOverrides){let a=this._context.globalState.get("cellOverrides",{});for(let[d,c]of Object.entries(e.cellStepsOverrides)){a[Number(d)]||(a[Number(d)]={});let m=c;Array.isArray(m.startupSteps)&&(a[Number(d)].startupSteps=m.startupSteps)}await this._context.globalState.update("cellOverrides",a)}await this._context.globalState.update("mergedRegions",e.mergedRegions||[]),this.sendConfig(r.name);break}case"deletePreset":{l.workspace.workspaceFolders?.[0]&&await this._deleteLocalPreset(r.name);let n=this._context.globalState.get("presets",[]).filter(a=>a.name!==r.name);await this._context.globalState.update("presets",n),this.sendConfig();break}case"broadcast":{f.currentPanel?f.currentPanel.broadcastInput(r.text):l.window.showWarningMessage(l.l10n.t("No terminal grid is open."));break}case"broadcastToCell":{if(f.currentPanel)for(let e of r.cellIds)f.currentPanel.sendInputToCell(e,r.text);else l.window.showWarningMessage(l.l10n.t("No terminal grid is open."));break}case"setCellConfig":{let e=this._context.globalState.get("cellOverrides",{});if(e[r.cellId]={bgColor:r.bgColor||"",fgColor:r.fgColor||"",fontFamily:r.fontFamily||"",themeName:r.themeName||"",shellType:e[r.cellId]?.shellType||""},await this._context.globalState.update("cellOverrides",e),f.currentPanel){let n=r.themeName?M(r.themeName):null;f.currentPanel.sendCellConfig(r.cellId,r.bgColor||"",r.fgColor||"",r.fontFamily||"",r.themeName||"",n)}await this._saveWorkspaceConfig();break}case"setShellForCell":{let e=this._context.globalState.get("cellOverrides",{});e[r.cellId]||(e[r.cellId]={}),e[r.cellId].shellType=r.shellType||"",await this._context.globalState.update("cellOverrides",e),f.currentPanel&&f.currentPanel.restartCell(r.cellId),await this._saveWorkspaceConfig();break}case"setDefaultCommand":{let e=r.command||"";await this._context.globalState.update("defaultCommand",e),await this._context.globalState.update("defaultSteps",e?[{type:"command",input:e}]:[]),await this._saveWorkspaceConfig(),this.sendConfig();break}case"setCellCommand":{let e=this._context.globalState.get("cellOverrides",{});e[r.cellId]||(e[r.cellId]={});let n=r.command||"";e[r.cellId].startupCommand=n,e[r.cellId].startupSteps=n?[{type:"command",input:n}]:[],await this._context.globalState.update("cellOverrides",e),await this._saveWorkspaceConfig(),this.sendConfig();break}case"clearAllCellOverrides":{await this._context.globalState.update("cellOverrides",{}),f.currentPanel&&f.currentPanel.clearCellOverrides(),await this._saveWorkspaceConfig();break}case"clearAllCellShells":{let e=this._context.globalState.get("cellOverrides",{});for(let n of Object.keys(e))e[parseInt(n)]&&(e[parseInt(n)].shellType="");await this._context.globalState.update("cellOverrides",e),await this._saveWorkspaceConfig();break}case"saveMergeRegions":{let e=r.regions||[];await this._context.globalState.update("mergedRegions",e);let n=f.currentPanel,a=r.rows??n?.getRows()??l.workspace.getConfiguration("terminalGrid").get("defaultRows",2),d=r.cols??n?.getCols()??l.workspace.getConfiguration("terminalGrid").get("defaultCols",3),c=new Set;for(let m of e)for(let h=m.startRow;h<m.startRow+m.rowSpan;h++)for(let b=m.startCol;b<m.startCol+m.colSpan;b++)h===m.startRow&&b===m.startCol||h<a&&b<d&&c.add(h*d+b);if(c.size>0){let m=this._context.globalState.get("cellOverrides",{}),h=this._context.globalState.get("cellLabels",[]),b=!1;for(let v of c)m[String(v)]&&(delete m[String(v)],b=!0),h[v]&&(h[v]="",b=!0);b&&(await this._context.globalState.update("cellOverrides",m),await this._context.globalState.update("cellLabels",h))}await this._saveWorkspaceConfig(),this.sendConfig();break}case"saveSectionStates":{await this._context.globalState.update("sectionStates",r.states);break}case"installNodePty":{try{await l.window.withProgress({location:l.ProgressLocation.Notification,title:l.l10n.t("Installing node-pty\u2026"),cancellable:!1},()=>new Promise((a,d)=>{Z.exec("npm install node-pty",{cwd:this._context.extensionPath},c=>{c?d(c):a()})})),this._view?.webview.postMessage({type:"ptyInstallResult",success:!0});let e=l.l10n.t("Reload Window");await l.window.showInformationMessage(l.l10n.t("node-pty installed successfully. Reload window to activate."),e)===e&&l.commands.executeCommand("workbench.action.reloadWindow")}catch(e){let n=e instanceof Error?e.message:String(e);l.window.showErrorMessage(l.l10n.t("node-pty install failed: {0}",n)),this._view?.webview.postMessage({type:"ptyInstallResult",success:!1})}break}}}),l.workspace.onDidChangeConfiguration(r=>{r.affectsConfiguration("terminalGrid")&&this.sendConfig()})}async _migrateSteps(){let t=!1,s=this._context.globalState.get("defaultSteps",[]),o=this._context.globalState.get("defaultCommand","");o&&s.length===0?(await this._context.globalState.update("defaultSteps",[{type:"command",input:o}]),await this._context.globalState.update("defaultCommand",""),t=!0):o&&s.length>0&&(await this._context.globalState.update("defaultCommand",""),t=!0);let r=this._context.globalState.get("cellOverrides",{});for(let n of Object.keys(r)){let a=r[Number(n)];if(!a)continue;let d=a.startupCommand,c=a.startupSteps;d&&(!c||c.length===0)?(a.startupSteps=[{type:"command",input:d}],delete a.startupCommand,t=!0):d&&c&&c.length>0&&(delete a.startupCommand,t=!0)}this._context.globalState.get("startupCommands",[]).length>0&&(await this._context.globalState.update("startupCommands",[]),t=!0),t&&await this._context.globalState.update("cellOverrides",r)}sendConfig(t){if(!this._view)return;this._migrateSteps();let s=l.workspace.getConfiguration("terminalGrid"),o=this._context.globalState.get("customFonts",[]),r=this._context.globalState.get("startupCommands",[]),e=this._context.globalState.get("projects",[]),n=this._listLocalPresets(),a=this._context.globalState.get("projectPresets",{}),d=this._context.globalState.get("cellLabels",[]),c=this._context.globalState.get("cellOverrides",{}),m=this._context.globalState.get("defaultSteps",[]),h=this._context.globalState.get("sectionStates",{}),b=l.workspace.workspaceFolders?.[0]?.uri.fsPath||"",v=f.currentPanel,u=f.getAvailableShells();this._view.webview.postMessage({type:"configValues",zoom:s.get("zoomPercent",100),fontFamily:s.get("fontFamily",""),bgColor:s.get("backgroundColor",""),fgColor:s.get("foregroundColor",""),colorTheme:s.get("colorTheme",""),shellType:s.get("shellType",""),defaultCommand:this._context.globalState.get("defaultCommand",""),themeNames:U,availableShells:u.map(C=>({name:C.name,path:C.path})),customFonts:o.map(C=>C.name),startupCommands:r,projects:e,presets:n,projectPresets:a,cellLabels:d,cellOverrides:c,defaultSteps:m,sectionStates:h,workspacePath:b,gridRows:v?.getRows()??0,gridCols:v?.getCols()??0,mergedRegions:this._context.globalState.get("mergedRegions",[]),hiddenCells:(()=>{let C=this._context.globalState.get("mergedRegions",[]),T=v?v.getCols():s.get("defaultCols",3),w=[];for(let S of C)for(let L=S.startRow;L<S.startRow+S.rowSpan;L++)for(let E=S.startCol;E<S.startCol+S.colSpan;E++)L===S.startRow&&E===S.startCol||w.push(L*T+E);return w})(),loadedPresetName:t})}_getHtml(){let t=ve();return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Security-Policy"
        content="default-src 'none'; style-src 'unsafe-inline'; script-src 'nonce-${t}';">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: var(--vscode-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
      color: var(--vscode-foreground);
      background: transparent;
      -webkit-font-smoothing: antialiased;
    }
    .container { padding: 16px 12px; display: flex; flex-direction: column; gap: 0; }
    .glass-card + .glass-card { margin-top: 10px; }
    .glass-card.collapsed + .glass-card { margin-top: 4px; }
    .glass-card + .glass-card.collapsed { margin-top: 4px; }
    .glass-card.collapsed + .glass-card.collapsed { margin-top: 2px; }
    .hint { margin-top: 10px; }

    .glass-card {
      background: rgba(255,255,255,0.025);
      backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 14px; padding: 18px 16px;
      transition: border-color .3s, box-shadow .3s;
      position: relative;
    }
    .glass-card:has(.tip-wrap:hover) { z-index: 300; }
    .glass-card:hover { border-color: rgba(255,255,255,.10); box-shadow: 0 4px 24px rgba(0,0,0,.12); }

    .section-label {
      font-size: 11px; font-weight: 700; text-transform: uppercase;
      letter-spacing: 0.8px; opacity: .5; margin-bottom: 16px; user-select: none;
      color: var(--vscode-textLink-foreground, #3794ff);
    }

    .grid-selector-wrap { display: flex; justify-content: center; margin-bottom: 14px; }
    .grid-selector { display: inline-grid; gap: 4px; }
    .grid-cell {
      width: 30px; height: 30px;
      background: rgba(255,255,255,.035);
      border: 1px solid rgba(255,255,255,.06);
      border-radius: 6px; cursor: pointer;
      transition: all .1s ease;
    }
    .grid-cell.highlight {
      background: linear-gradient(135deg,rgba(0,127,212,.30),rgba(0,200,255,.18));
      border-color: rgba(0,160,230,.45);
    }
    .grid-cell.selected {
      background: linear-gradient(135deg,rgba(0,127,212,.45),rgba(0,200,255,.28));
      border-color: rgba(0,160,230,.6);
      box-shadow: 0 0 10px rgba(0,150,230,.12);
    }

    .size-label {
      text-align: center; font-size: 15px; font-weight: 600;
      opacity: .65; margin-bottom: 16px; font-variant-numeric: tabular-nums;
    }
    .size-label .num { color: var(--vscode-textLink-foreground,#3794ff); font-size: 20px; font-weight: 700; }

    .glass-btn {
      width: 100%; padding: 11px 14px;
      background: rgba(255,255,255,.035);
      border: 1px solid rgba(255,255,255,.07);
      border-radius: 10px; color: var(--vscode-foreground);
      cursor: pointer; font-size: 12px; font-weight: 500; font-family: inherit;
      transition: all .2s ease;
      display: flex; align-items: center; justify-content: center; gap: 8px;
      outline: none; user-select: none;
    }
    .glass-btn:hover {
      background: rgba(255,255,255,.07); border-color: rgba(255,255,255,.14);
      transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,.1);
    }
    .glass-btn:active { transform: translateY(0); box-shadow: none; }
    .glass-btn.primary {
      background: linear-gradient(135deg,rgba(0,127,212,.22),rgba(0,200,255,.10));
      border-color: rgba(0,150,220,.35);
    }
    .glass-btn.primary:hover {
      background: linear-gradient(135deg,rgba(0,127,212,.35),rgba(0,200,255,.18));
      border-color: rgba(0,150,220,.55);
      box-shadow: 0 4px 20px rgba(0,150,230,.12);
    }
    .btn-group { display: flex; flex-direction: column; gap: 8px; }
    .btn-icon { font-size: 15px; opacity: .75; line-height: 1; }

    /* \u2500\u2500 Cell Merge preview \u2500\u2500 */
    .merge-row {
      display: flex; align-items: flex-start; gap: 8px;
      justify-content: center;
      margin-bottom: 8px;
      overflow: hidden;
    }
    .merge-grid {
      display: inline-grid; gap: 3px; user-select: none;
      border: 1px solid rgba(255,255,255,.06); border-radius: 8px; padding: 6px;
      background: rgba(0,0,0,.15);
      min-width: 0; flex-shrink: 1;
    }
    .merge-cell {
      min-width: 22px; min-height: 22px;
      background: rgba(255,255,255,.04);
      border: 1px solid rgba(255,255,255,.08);
      border-radius: 4px; cursor: crosshair;
      display: flex; align-items: center; justify-content: center;
      font-size: 8px; opacity: .5; transition: all .12s ease;
    }
    .merge-cell.selecting {
      background: linear-gradient(135deg,rgba(0,127,212,.35),rgba(0,200,255,.20));
      border-color: rgba(0,160,230,.5); opacity: 1;
    }
    .merge-cell.merged {
      background: linear-gradient(135deg,rgba(100,200,100,.20),rgba(60,180,60,.12));
      border-color: rgba(100,200,100,.4); opacity: 1;
    }
    .merge-cell.merged-origin { font-size: 9px; font-weight: 600; opacity: .8; }
    .merge-side {
      display: flex; flex-direction: column; gap: 4px; flex-shrink: 0;
    }
    .merge-side .glass-btn { font-size: 9px; padding: 5px 6px; min-width: 0; width: auto; }
    .merge-bottom {
      display: flex; align-items: center; justify-content: center; gap: 12px;
      margin-bottom: 12px;
    }
    .merge-legend {
      display: flex; gap: 10px; font-size: 9px; opacity: .5;
    }
    .merge-legend-item { display: flex; align-items: center; gap: 3px; }
    .merge-legend-swatch {
      width: 8px; height: 8px; border-radius: 2px; border: 1px solid rgba(255,255,255,.12);
    }
    .merge-legend-swatch.sel { background: linear-gradient(135deg,rgba(0,127,212,.35),rgba(0,200,255,.20)); }
    .merge-legend-swatch.mrg { background: linear-gradient(135deg,rgba(100,200,100,.20),rgba(60,180,60,.12)); }

    /* \u2500\u2500 Settings controls \u2500\u2500 */
    .setting-row {
      display: flex; align-items: center; justify-content: space-between;
      margin-bottom: 12px; gap: 12px;
    }
    .setting-row:last-child { margin-bottom: 0; }
    .setting-label { font-size: 11px; opacity: .6; white-space: nowrap; flex-shrink: 0; }
    .stepper { display: flex; align-items: center; gap: 4px; }
    .stepper-btn {
      width: 24px; height: 24px;
      border: 1px solid rgba(255,255,255,.08); border-radius: 6px;
      background: rgba(255,255,255,.03); color: var(--vscode-foreground);
      font-size: 14px; font-family: monospace;
      cursor: pointer; display: flex; align-items: center; justify-content: center;
      transition: all .15s ease; padding: 0; line-height: 1;
    }
    .stepper-btn:hover { background: rgba(255,255,255,.08); border-color: rgba(255,255,255,.16); }
    .stepper-val {
      min-width: 40px; text-align: center; font-size: 12px; font-weight: 600;
      font-variant-numeric: tabular-nums; opacity: .8;
    }

    /* \u2500\u2500 Font dropdown (opens upward) \u2500\u2500 */
    .font-picker { position: relative; flex: 1; }
    .font-display {
      display: flex; align-items: center; justify-content: space-between;
      padding: 5px 8px;
      background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.08);
      border-radius: 6px; color: var(--vscode-foreground);
      font-size: 11px; cursor: pointer; transition: border-color .15s; user-select: none;
    }
    .font-display:hover { border-color: rgba(255,255,255,.16); }
    .font-display.open { border-color: var(--vscode-focusBorder, rgba(0,127,212,.6)); }
    .font-display-text { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1; }
    .font-display-arrow { opacity: .4; font-size: 8px; margin-left: 6px; flex-shrink: 0; }
    .font-dropdown {
      display: none;
      position: absolute; bottom: calc(100% + 4px); left: 0; right: 0;
      background: var(--vscode-dropdown-background, #252526);
      border: 1px solid rgba(255,255,255,.12); border-radius: 8px;
      max-height: 220px; overflow-y: auto; z-index: 100; padding: 4px 0;
      box-shadow: 0 -4px 24px rgba(0,0,0,.3);
    }
    .font-dropdown.show { display: block; }
    .font-dropdown::-webkit-scrollbar { width: 4px; }
    .font-dropdown::-webkit-scrollbar-thumb { background: rgba(255,255,255,.12); border-radius: 2px; }
    .font-opt {
      display: flex; align-items: center; padding: 5px 10px; font-size: 11px;
      cursor: pointer; transition: background .1s;
    }
    .font-opt:hover { background: rgba(255,255,255,.06); }
    .font-opt.active { background: rgba(0,127,212,.18); }
    .font-opt-name { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .font-opt-del {
      width: 18px; height: 18px; border: none; border-radius: 4px;
      background: transparent; color: rgba(255,255,255,.3);
      font-size: 14px; line-height: 1; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; margin-left: 4px; transition: all .1s;
    }
    .font-opt-del:hover { background: rgba(255,80,80,.2); color: #f55; }
    .font-divider { height: 1px; background: rgba(255,255,255,.06); margin: 4px 8px; }
    .font-opt-add {
      display: flex; align-items: center; gap: 6px; padding: 5px 10px; font-size: 11px;
      cursor: pointer; transition: background .1s;
      color: var(--vscode-textLink-foreground, #3794ff);
    }
    .font-opt-add:hover { background: rgba(255,255,255,.06); }

    /* \u2500\u2500 Color picker \u2500\u2500 */
    .color-row { display: flex; align-items: center; gap: 6px; }
    .color-swatch {
      width: 24px; height: 24px; border-radius: 6px;
      border: 1px solid rgba(255,255,255,.12); cursor: pointer;
      position: relative; overflow: hidden; flex-shrink: 0;
    }
    .color-swatch input[type="color"] {
      position: absolute; top: -4px; left: -4px;
      width: 32px; height: 32px; border: none; cursor: pointer;
      opacity: 0;
    }
    .color-swatch-fill {
      width: 100%; height: 100%; border-radius: 5px;
    }
    .color-val {
      font-size: 11px; opacity: .6; flex: 1;
      font-family: monospace; font-variant-numeric: tabular-nums;
    }
    .color-reset {
      width: 18px; height: 18px; border: none; border-radius: 4px;
      background: transparent; color: rgba(255,255,255,.3);
      font-size: 13px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: all .1s; flex-shrink: 0;
    }
    .color-reset:hover { background: rgba(255,255,255,.08); color: var(--vscode-foreground); }
    .color-reset.hidden { visibility: hidden; }

    .hint {
      font-size: 11px; opacity: .35; text-align: center;
      line-height: 1.5; margin-top: 4px;
    }

    /* \u2500\u2500 Tooltip \u2500\u2500 */
    .section-header {
      display: flex; align-items: center; gap: 6px;
      margin-bottom: 16px; position: relative;
    }
    .section-header .section-label { margin-bottom: 0; }
    .tip-icon {
      width: 14px; height: 14px; border-radius: 50%;
      background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1);
      font-size: 9px; display: inline-flex; align-items: center; justify-content: center;
      cursor: help; opacity: .5; transition: opacity .15s; flex-shrink: 0;
    }
    .tip-icon:hover { opacity: .9; }
    .tip-wrap { display: inline-flex; }
    .tip-bubble {
      display: none; position: absolute;
      top: calc(100% + 4px); left: 0; right: 0;
      width: auto; padding: 10px 12px;
      background: var(--vscode-editorHoverWidget-background, #2d2d30);
      border: 1px solid var(--vscode-editorHoverWidget-border, rgba(255,255,255,.12));
      border-radius: 8px; font-size: 11px; line-height: 1.55;
      color: var(--vscode-editorHoverWidget-foreground, var(--vscode-foreground));
      box-shadow: 0 4px 20px rgba(0,0,0,.35);
      z-index: 200; white-space: normal; pointer-events: auto;
    }
    .tip-wrap:hover .tip-bubble { display: block; }
    .tip-bubble b { opacity: .9; }
    .tip-bubble .tip-example {
      margin-top: 8px; padding: 6px 8px;
      background: rgba(0,0,0,.2); border-radius: 5px;
      font-family: monospace; font-size: 10px; line-height: 1.6;
    }

    /* \u2500\u2500 Startup Commands \u2500\u2500 */
    .cmd-list { display: flex; flex-direction: column; gap: 4px; margin-bottom: 10px; }
    .cmd-item {
      display: flex; align-items: center; gap: 6px;
      padding: 5px 8px;
      background: rgba(255,255,255,.03);
      border: 1px solid rgba(255,255,255,.06);
      border-radius: 6px; font-size: 11px;
    }
    .cmd-item-range {
      opacity: .35; font-size: 9px; min-width: 22px; flex-shrink: 0;
      font-variant-numeric: tabular-nums; text-align: right;
    }
    .cmd-item-text {
      flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      font-family: monospace; opacity: .85;
    }
    .cmd-count { display: flex; align-items: center; gap: 2px; flex-shrink: 0; }
    .cmd-count-btn {
      width: 18px; height: 18px;
      border: 1px solid rgba(255,255,255,.06); border-radius: 4px;
      background: rgba(255,255,255,.03); color: var(--vscode-foreground);
      font-size: 12px; font-family: monospace;
      cursor: pointer; display: flex; align-items: center; justify-content: center;
      transition: all .12s; padding: 0; line-height: 1;
    }
    .cmd-count-btn:hover { background: rgba(255,255,255,.08); border-color: rgba(255,255,255,.14); }
    .cmd-count-val {
      min-width: 18px; text-align: center; font-size: 11px; font-weight: 600;
      font-variant-numeric: tabular-nums; opacity: .7;
    }
    .cmd-item-del {
      width: 18px; height: 18px; border: none; border-radius: 4px;
      background: transparent; color: rgba(255,255,255,.3);
      font-size: 14px; line-height: 1; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; transition: all .1s; margin-left: 2px;
    }
    .cmd-item-del:hover { background: rgba(255,80,80,.2); color: #f55; }
    .cmd-add-row { display: flex; gap: 6px; align-items: center; margin-bottom: 6px; }
    .glass-select {
      flex: 1; padding: 5px 8px;
      background: rgba(255,255,255,.03);
      border: 1px solid rgba(255,255,255,.08);
      border-radius: 6px; color: var(--vscode-foreground);
      font-size: 11px; font-family: inherit; outline: none; cursor: pointer;
    }
    .glass-select:hover { border-color: rgba(255,255,255,.16); }
    .glass-select option { background: var(--vscode-dropdown-background, #252526); }
    .glass-input {
      flex: 1; padding: 5px 8px;
      background: rgba(255,255,255,.03);
      border: 1px solid rgba(255,255,255,.08);
      border-radius: 6px; color: var(--vscode-foreground);
      font-size: 11px; font-family: monospace; outline: none;
    }
    .glass-input:focus { border-color: var(--vscode-focusBorder, rgba(0,127,212,.6)); }
    .cmd-empty { font-size: 11px; opacity: .35; text-align: center; padding: 8px 0; }

    /* \u2500\u2500 Broadcast targets \u2500\u2500 */
    .broadcast-targets {
      display: flex; flex-wrap: wrap; gap: 6px;
      margin-bottom: 10px;
    }
    .broadcast-targets.hidden { display: none; }
    .broadcast-target {
      display: flex; align-items: center; gap: 3px;
      font-size: 11px; opacity: .7; cursor: pointer; user-select: none;
    }
    .broadcast-target input[type="checkbox"] {
      accent-color: var(--vscode-textLink-foreground, #3794ff);
      cursor: pointer; margin: 0;
    }
    .broadcast-target.all-label { font-weight: 600; opacity: .85; margin-right: 4px; }

    /* \u2500\u2500 Collapsible sections \u2500\u2500 */
    .section-header.collapsible { cursor: pointer; user-select: none; }
    .collapse-icon {
      font-size: 10px; opacity: .4; transition: transform .2s;
      margin-left: auto; flex-shrink: 0;
    }
    .glass-card.collapsed .collapse-icon { transform: rotate(-90deg); }
    .glass-card.collapsed .section-body { display: none; }
    .glass-card.collapsed { padding: 8px 16px; }
    .glass-card.collapsed .section-header { margin-bottom: 0; }

    /* \u2500\u2500 Settings tabs \u2500\u2500 */
    .settings-tabs {
      display: flex; flex-wrap: wrap; gap: 4px;
      margin-bottom: 12px;
    }
    .settings-tabs.hidden { display: none; }
    .stab {
      padding: 3px 8px; font-size: 10px; font-weight: 600;
      border: 1px solid rgba(255,255,255,.08); border-radius: 6px;
      background: rgba(255,255,255,.03); color: var(--vscode-foreground);
      cursor: pointer; transition: all .15s; font-family: inherit;
      opacity: .6; line-height: 1.4;
    }
    .stab:hover { background: rgba(255,255,255,.06); opacity: .8; }
    .stab.active {
      background: rgba(0,127,212,.18); border-color: rgba(0,150,220,.4);
      opacity: 1; color: var(--vscode-textLink-foreground, #3794ff);
    }
    .stab.has-override {
      border-color: rgba(255,170,0,.35);
    }
    /* \u2500\u2500 Command summary \u2500\u2500 */
    .cmd-summary-divider {
      height: 1px; background: rgba(255,255,255,.06); margin: 10px 0 8px;
    }
    .cmd-summary-list { display: flex; flex-direction: column; gap: 3px; }
    .cmd-summary-item {
      display: flex; align-items: center; gap: 6px;
      padding: 4px 8px;
      background: rgba(255,255,255,.02);
      border: 1px solid rgba(255,255,255,.04);
      border-radius: 5px; font-size: 10px;
    }
    .cmd-summary-label {
      opacity: .45; font-weight: 600; min-width: 28px; flex-shrink: 0;
      font-variant-numeric: tabular-nums;
    }
    .cmd-summary-text {
      flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      font-family: monospace; opacity: .75; font-size: 10px;
    }
    .cmd-summary-del {
      width: 16px; height: 16px; border: none; border-radius: 3px;
      background: transparent; color: rgba(255,255,255,.5);
      font-size: 12px; line-height: 1; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; transition: all .1s;
      opacity: 0;
    }
    .cmd-summary-item:hover { background: rgba(255,255,255,.05); border-color: rgba(255,255,255,.10); }
    .cmd-summary-item:hover .cmd-summary-del { opacity: 1; }
    .cmd-summary-del:hover { background: rgba(255,80,80,.2); color: #f55; }
    /* \u2500\u2500 Step groups (sequential startup commands) \u2500\u2500 */
    .cmd-step-group { margin-bottom: 6px; }
    .cmd-step-group-header {
      font-size: 9px; font-weight: 700; text-transform: uppercase;
      letter-spacing: .5px; opacity: .4; margin-bottom: 4px; padding: 0 4px;
      color: var(--vscode-textLink-foreground, #3794ff);
    }
    .cmd-step-list { display: flex; flex-direction: column; gap: 2px; min-height: 4px; }
    .cmd-step-item {
      display: flex; align-items: center; gap: 5px;
      padding: 4px 6px; background: rgba(255,255,255,.025);
      border: 1px solid rgba(255,255,255,.05); border-radius: 5px;
      font-size: 10px; cursor: grab; transition: background .15s, border-color .15s, opacity .15s;
      user-select: none;
    }
    .cmd-step-item:hover { background: rgba(255,255,255,.08); border-color: rgba(255,255,255,.15); }
    .cmd-step-item.dragging { opacity: .4; border-color: var(--vscode-focusBorder, rgba(0,127,212,.6)); }
    .cmd-step-handle { cursor: grab; opacity: .3; font-size: 14px; line-height: 1; flex-shrink: 0; width: 14px; text-align: center; }
    .cmd-step-handle:hover { opacity: .6; }
    .cmd-step-num {
      opacity: .3; font-size: 9px; font-weight: 700; min-width: 14px;
      text-align: center; flex-shrink: 0; font-variant-numeric: tabular-nums;
    }
    .cmd-step-icon { opacity: .5; font-size: 9px; margin-right: 2px; }
    .cmd-step-text {
      flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      font-family: monospace; opacity: .75; font-size: 10px;
    }
    .cmd-step-del {
      width: 16px; height: 16px; border: none; border-radius: 3px;
      background: transparent; color: rgba(255,255,255,.5);
      font-size: 12px; line-height: 1; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; transition: all .1s;
      opacity: 0;
    }
    .cmd-step-item:hover .cmd-step-del { opacity: 1; }
    .cmd-step-del:hover { background: rgba(255,80,80,.2); color: #f55; }
    /* \u2500\u2500 node-pty banner \u2500\u2500 */
    .pty-banner {
      display: flex; align-items: center; gap: 10px;
      padding: 10px 14px;
      background: linear-gradient(135deg, rgba(255,170,0,.12), rgba(255,120,0,.08));
      border: 1px solid rgba(255,170,0,.25);
      border-radius: 10px;
      font-size: 11px; line-height: 1.45;
    }
    .pty-banner-icon { font-size: 16px; flex-shrink: 0; }
    .pty-banner-text { flex: 1; opacity: .85; }
    .pty-banner-btn {
      padding: 5px 10px;
      background: rgba(255,170,0,.18);
      border: 1px solid rgba(255,170,0,.35);
      border-radius: 6px; color: var(--vscode-foreground);
      cursor: pointer; font-size: 10px; font-weight: 600; font-family: inherit;
      white-space: nowrap; transition: all .15s; flex-shrink: 0;
    }
    .pty-banner-btn:hover {
      background: rgba(255,170,0,.3);
      border-color: rgba(255,170,0,.5);
    }
  </style>
</head>
<body>
  <div class="container">
    ${fe()?"":`
    <div class="pty-banner" id="ptyBanner">
      <span class="pty-banner-icon">\u26A0</span>
      <span class="pty-banner-text">${l.l10n.t("node-pty is required to use Terminal Grid.")}</span>
      <button class="pty-banner-btn" id="ptyInstallBtn">${l.l10n.t("Install")}</button>
    </div>
    `}
    <!-- Projects -->
    <div class="glass-card" data-section="projects">
      <div class="section-header collapsible">
        <div class="section-label">${l.l10n.t("Projects")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${l.l10n.t("Register projects and click to switch folders. Ctrl+Click to open in a new window. If a preset is linked, it will be auto-applied on switch.")}
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div id="mcpPortInfo" style="font-size: 11px; opacity: 0.7; margin-bottom: 8px; display: ${this._mcpPort>0?"block":"none"};">
          MCP Port: <span id="mcpPortValue">${this._mcpPort}</span>
        </div>
        <div id="projectList" class="cmd-list"></div>
        <div class="btn-group" style="gap: 6px;">
          <button class="glass-btn" id="addCurrentProjectBtn" style="font-size: 11px; padding: 8px 10px;">
            <span class="btn-icon" style="font-size: 12px;">+</span> ${l.l10n.t("Add Current Folder")}
          </button>
          <button class="glass-btn" id="browseProjectBtn" style="font-size: 11px; padding: 8px 10px;">
            <span class="btn-icon" style="font-size: 12px;">&#128193;</span> ${l.l10n.t("Browse Folder")}
          </button>
        </div>
      </div>
    </div>

    <!-- Presets -->
    <div class="glass-card" data-section="presets">
      <div class="section-header collapsible">
        <div class="section-label">${l.l10n.t("Presets")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${l.l10n.t("Save and load current grid settings (size, zoom, font, color, commands, cell labels) as presets. Use Link to project for per-project auto-apply.")}
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div class="cmd-add-row">
          <input class="glass-input" id="presetNameInput" placeholder="${l.l10n.t("Preset name\u2026")}" style="flex: 1;" />
        </div>
        <div class="cmd-add-row" style="margin-top: 4px;">
          <select class="glass-select" id="presetSelect" style="flex: 1;">
            <option value="">${l.l10n.t("Select preset\u2026")}</option>
          </select>
        </div>
        <div class="btn-group" style="gap: 6px; margin-top: 8px;">
          <div style="display: flex; gap: 6px;">
            <button class="glass-btn" id="presetSaveBtn" style="font-size: 11px; padding: 8px 10px; flex: 1;">${l.l10n.t("Save")}</button>
            <button class="glass-btn primary" id="presetLoadBtn" style="font-size: 11px; padding: 8px 10px; flex: 1;">${l.l10n.t("Load")}</button>
            <button class="glass-btn" id="presetDeleteBtn" style="font-size: 11px; padding: 8px 10px; flex: 1;">${l.l10n.t("Delete")}</button>
          </div>
        </div>
      </div>
    </div>

    <div class="glass-card" data-section="gridSize">
      <div class="section-header collapsible">
        <div class="section-label">${l.l10n.t("Select Grid Size")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${l.l10n.t("Hover to select the desired rows\xD7cols size. Supports up to 4\xD75 (20 cells). Grid opens as an editor tab, each cell is an independent terminal. Drag cells below to merge them into one larger terminal.")}
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div class="grid-selector-wrap">
          <div class="grid-selector" id="gridSelector"></div>
        </div>
        <div class="size-label" id="sizeLabel"></div>
        <div class="merge-row">
          <div class="merge-grid" id="mergeGrid"></div>
          <div class="merge-side">
            <button class="glass-btn" id="mergeBtn" disabled>${l.l10n.t("Merge")}</button>
            <button class="glass-btn" id="unmergeBtn" disabled>${l.l10n.t("Unmerge")}</button>
            <button class="glass-btn" id="mergeClearBtn">${l.l10n.t("Clear")}</button>
          </div>
        </div>
        <div class="merge-bottom">
          <div class="merge-legend">
            <div class="merge-legend-item"><div class="merge-legend-swatch sel"></div> ${l.l10n.t("Selection")}</div>
            <div class="merge-legend-item"><div class="merge-legend-swatch mrg"></div> ${l.l10n.t("Merged")}</div>
          </div>
        </div>
        <button class="glass-btn primary" id="openGridBtn">
          <span class="btn-icon">&#9654;</span> ${l.l10n.t("Open Grid")}
        </button>
      </div>
    </div>

    <div class="glass-card" data-section="settings">
      <div class="section-header collapsible">
        <div class="section-label">${l.l10n.t("Terminal Settings")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${l.l10n.t("Zoom: Global font size (50\u2013300%). Font/Color: Use tabs for global or per-cell settings. Changes in All tab apply to all cells. Set global first, then customize individual cells. Individual cells can be zoomed separately with Ctrl+Wheel.")}
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div class="setting-row">
          <span class="setting-label">${l.l10n.t("Zoom")}</span>
          <div class="stepper">
            <button class="stepper-btn" id="zoomDown">\u2212</button>
            <span class="stepper-val" id="zoomVal">100%</span>
            <button class="stepper-btn" id="zoomUp">+</button>
          </div>
        </div>

        <div id="settingsTabs" class="settings-tabs hidden"></div>

        <div class="setting-row">
          <span class="setting-label">${l.l10n.t("Theme")}</span>
          <div class="font-picker" id="themePicker">
            <div class="font-display" id="themeDisplay">
              <span class="font-display-text" id="themeDisplayText">${l.l10n.t("IDE Default")}</span>
              <span class="font-display-arrow">\u25B2</span>
            </div>
            <div class="font-dropdown" id="themeDropdown"></div>
          </div>
        </div>

        <div class="setting-row">
          <span class="setting-label">${l.l10n.t("Font")}</span>
          <div class="font-picker" id="fontPicker">
            <div class="font-display" id="fontDisplay">
              <span class="font-display-text" id="fontDisplayText">${l.l10n.t("IDE Default")}</span>
              <span class="font-display-arrow">\u25B2</span>
            </div>
            <div class="font-dropdown" id="fontDropdown"></div>
          </div>
        </div>

        <div class="setting-row">
          <span class="setting-label">${l.l10n.t("Back Color")}</span>
          <div class="color-row">
            <div class="color-swatch" id="bgSwatch">
              <div class="color-swatch-fill" id="bgSwatchFill"></div>
              <input type="color" id="bgColorInput" value="#1e1e1e">
            </div>
            <span class="color-val" id="bgVal">${l.l10n.t("IDE Default")}</span>
            <button class="color-reset hidden" id="bgReset" title="${l.l10n.t("Reset to IDE Default")}">\xD7</button>
          </div>
        </div>

        <div class="setting-row">
          <span class="setting-label">${l.l10n.t("Font Color")}</span>
          <div class="color-row">
            <div class="color-swatch" id="fgSwatch">
              <div class="color-swatch-fill" id="fgSwatchFill"></div>
              <input type="color" id="fgColorInput" value="#cccccc">
            </div>
            <span class="color-val" id="fgVal">${l.l10n.t("IDE Default")}</span>
            <button class="color-reset hidden" id="fgReset" title="${l.l10n.t("Reset to IDE Default")}">\xD7</button>
          </div>
        </div>

      </div>
    </div>

    <!-- Startup Commands -->
    <div class="glass-card" data-section="startup">
      <div class="section-header collapsible">
        <div class="section-label">${l.l10n.t("Startup Commands")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${l.l10n.t("Set shell type and startup command per cell. Use All tab for global defaults, or individual tabs for per-cell overrides.")}
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div id="cmdTabs" class="settings-tabs hidden"></div>
        <div class="setting-row">
          <span class="setting-label">${l.l10n.t("Shell")}</span>
          <div class="font-picker" id="shellPicker">
            <div class="font-display" id="shellDisplay">
              <span class="font-display-text" id="shellDisplayText">${l.l10n.t("IDE Default")}</span>
              <span class="font-display-arrow">\u25B2</span>
            </div>
            <div class="font-dropdown" id="shellDropdown"></div>
          </div>
        </div>
        <div class="setting-row" style="flex-direction: column; align-items: stretch; gap: 8px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <span class="setting-label" style="width: 50px;">${l.l10n.t("Command")}</span>
            <div style="flex: 1; display: flex; gap: 6px;">
              <input class="glass-input" id="cmdCustom" placeholder="${l.l10n.t("Custom command\u2026")}" style="flex:1;min-width:0;" />
              <button class="stepper-btn" id="cmdApplyBtn" title="${l.l10n.t("Apply")}">&#10003;</button>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 12px;">
            <span class="setting-label" style="width: 50px; visibility: hidden;">${l.l10n.t("Command")}</span>
            <select class="glass-select" id="cmdPreset" style="flex:1;min-width:0;">
              <option value="">${l.l10n.t("Select command\u2026")}</option>
              <option value="claude">claude</option>
              <option value="codex">codex</option>
              <option value="claude --dangerously-skip-permissions">claude --dangerously-skip-permissions</option>
              <option value="codex -s danger-full-access -a never">codex -s danger-full-access -a never</option>
              <option value="npm run dev">npm run dev</option>
              <option value="npm start">npm start</option>
              <option value="npm test">npm test</option>
              <option value="python">python</option>
              <option value="node">node</option>
              <option value="docker compose up">docker compose up</option>
              <option value="ssh">ssh</option>
              <option value="htop">htop</option>
              <option value="/resume">/resume</option>
              <option value="/compact">/compact</option>
              <option value="yes">yes</option>
              <option value="exit">exit</option>
              <option value="__enter__">Enter (\u21B5)</option>
              <option value="__timeout__">${l.l10n.t("Timeout (ms)\u2026")}</option>
            </select>
          </div>
        </div>
        <div class="cmd-add-row" id="cmdTimeoutRow" style="display:none;">
          <input class="glass-input" type="number" id="cmdTimeoutMs" placeholder="${l.l10n.t("Milliseconds (e.g. 1500)")}" min="100" step="100" style="flex:1;min-width:0;" />
          <button class="stepper-btn" id="cmdTimeoutApplyBtn" title="${l.l10n.t("Apply")}">&#10003;</button>
        </div>
        <div class="cmd-summary-divider"></div>
        <div id="cmdSummaryList" class="cmd-summary-list"></div>
        <div class="btn-group" style="margin-top: 10px;">
          <button class="glass-btn primary" id="reopenGridBtn">
            <span class="btn-icon">&#8635;</span> ${l.l10n.t("Reopen Grid")}
          </button>
        </div>
      </div>
    </div>

    <!-- Broadcast Input -->
    <div class="glass-card" data-section="broadcast">
      <div class="section-header collapsible">
        <div class="section-label">${l.l10n.t("Broadcast Input")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${l.l10n.t("Send text to selected terminals. Check All to send to all cells, uncheck for individual selection.")}
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div id="broadcastTargets" class="broadcast-targets hidden"></div>
        <div class="cmd-add-row" style="flex-direction: column; gap: 4px;">
          <textarea class="glass-input" id="broadcastInput" placeholder="${l.l10n.t("Type command\u2026")}" rows="3" style="width: 100%; resize: vertical; font-family: var(--vscode-editor-fontFamily, monospace); font-size: 12px; line-height: 1.4;"></textarea>
          <div style="display: flex; justify-content: flex-end;">
            <button class="stepper-btn" id="broadcastSendBtn" title="${l.l10n.t("Send")}" style="width: 50px;">${l.l10n.t("Send")}</button>
          </div>
        </div>
      </div>
    </div>

    <div class="glass-card" data-section="actions">
      <div class="section-header collapsible">
        <div class="section-label">${l.l10n.t("Actions")}</div>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div class="btn-group">
          <button class="glass-btn" id="reloadBtn">
            <span class="btn-icon">&#8635;</span> ${l.l10n.t("Reload Window")}
          </button>
        </div>
      </div>
    </div>

    <div class="hint">
      ${l.l10n.t(`Grid opens as an editor tab.
Ctrl+Wheel to zoom individual cells.`).replace(`
`,"<br>")}
    </div>
  </div>

  <script nonce="${t}">
    var __i18n = ${JSON.stringify({installing:l.l10n.t("Installing\u2026"),ideDefault:l.l10n.t("IDE Default"),remove:l.l10n.t("Remove"),addFontFile:l.l10n.t("Add font file\u2026"),all:l.l10n.t("All"),noStartupCommands:l.l10n.t("No startup commands configured"),noProjects:l.l10n.t("No projects registered"),selectPreset:l.l10n.t("Select preset\u2026"),reload:l.l10n.t("Reload"),retry:l.l10n.t("Retry"),ptyInstalled:l.l10n.t("node-pty installed successfully!"),ptyInstalledHint:l.l10n.t("Reload the window to activate."),theme:l.l10n.t("Theme"),shellAuto:l.l10n.t("IDE Default"),shell:l.l10n.t("Shell")})};
    var vscode = acquireVsCodeApi();

    // node-pty install button
    var ptyInstallBtn = document.getElementById('ptyInstallBtn');
    if (ptyInstallBtn) {
      ptyInstallBtn.addEventListener('click', function() {
        ptyInstallBtn.textContent = __i18n.installing;
        ptyInstallBtn.disabled = true;
        vscode.postMessage({ type: 'installNodePty' });
      });
    }

    var MAX_ROWS = 4, MAX_COLS = 5;
    var selectedRows = 2, selectedCols = 3;
    var hoverRow = -1, hoverCol = -1;

    var saved = vscode.getState();
    if (saved) { selectedRows = saved.rows || 2; selectedCols = saved.cols || 3; }

    var gridEl = document.getElementById('gridSelector');
    gridEl.style.gridTemplateColumns = 'repeat(' + MAX_COLS + ', 1fr)';
    var cells = [];

    for (var r = 0; r < MAX_ROWS; r++) {
      for (var c = 0; c < MAX_COLS; c++) {
        (function(row, col) {
          var cell = document.createElement('div');
          cell.className = 'grid-cell';
          cell.addEventListener('mouseenter', function() { hoverRow = row; hoverCol = col; render(); });
          cell.addEventListener('click', function() {
            selectedRows = row + 1; selectedCols = col + 1;
            hoverRow = -1; hoverCol = -1;
            render();
            vscode.setState({ rows: selectedRows, cols: selectedCols });
          });
          gridEl.appendChild(cell);
          cells.push({ el: cell, row: row, col: col });
        })(r, c);
      }
    }

    gridEl.addEventListener('mouseleave', function() { hoverRow = -1; hoverCol = -1; render(); });

    function render() {
      var isH = hoverRow >= 0;
      var aR = isH ? hoverRow : selectedRows - 1;
      var aC = isH ? hoverCol : selectedCols - 1;
      for (var i = 0; i < cells.length; i++) {
        var inside = cells[i].row <= aR && cells[i].col <= aC;
        cells[i].el.classList.toggle('highlight', inside && isH);
        cells[i].el.classList.toggle('selected', inside && !isH);
      }
      var dR = aR + 1, dC = aC + 1;
      document.getElementById('sizeLabel').innerHTML =
        '<span class="num">' + dR + '</span> \\u00d7 <span class="num">' + dC + '</span>';
    }
    render();

    document.getElementById('openGridBtn').addEventListener('click', function() {
      vscode.postMessage({ type: 'openGrid', rows: selectedRows, cols: selectedCols });
    });
    document.getElementById('reopenGridBtn').addEventListener('click', function() {
      vscode.postMessage({ type: 'reopenGrid' });
    });
    document.getElementById('reloadBtn').addEventListener('click', function() {
      vscode.postMessage({ type: 'reload' });
    });

    // \u2500\u2500 Cell Merge preview grid \u2500\u2500
    var mergeGridEl = document.getElementById('mergeGrid');
    var mergeBtn = document.getElementById('mergeBtn');
    var unmergeBtn = document.getElementById('unmergeBtn');
    var mergeClearBtn = document.getElementById('mergeClearBtn');
    var mergeCells = [];       // { el, row, col }
    var mergedRegions = [];    // { startRow, startCol, rowSpan, colSpan }
    var mergeSelStart = null;  // { row, col }
    var mergeSelEnd = null;    // { row, col }
    var mergeDragging = false;
    var mergeRows = selectedRows, mergeCols = selectedCols;

    function buildMergeGrid() {
      mergeRows = selectedRows;
      mergeCols = selectedCols;
      mergeGridEl.innerHTML = '';
      mergeCells = [];
      mergeGridEl.style.gridTemplateColumns = 'repeat(' + mergeCols + ', 1fr)';
      for (var r = 0; r < mergeRows; r++) {
        for (var c = 0; c < mergeCols; c++) {
          (function(row, col) {
            var cell = document.createElement('div');
            cell.className = 'merge-cell';
            cell.textContent = String(row * mergeCols + col + 1);
            cell.addEventListener('mousedown', function(e) {
              e.preventDefault();
              mergeDragging = true;
              mergeSelStart = { row: row, col: col };
              mergeSelEnd = { row: row, col: col };
              renderMergeGrid();
            });
            cell.addEventListener('mouseenter', function() {
              if (mergeDragging && mergeSelStart) {
                mergeSelEnd = { row: row, col: col };
                renderMergeGrid();
              }
            });
            mergeGridEl.appendChild(cell);
            mergeCells.push({ el: cell, row: row, col: col });
          })(r, c);
        }
      }
      renderMergeGrid();
    }

    document.addEventListener('mouseup', function() {
      if (mergeDragging) {
        mergeDragging = false;
        renderMergeGrid();
      }
    });

    function getSelectionRect() {
      if (!mergeSelStart || !mergeSelEnd) return null;
      var r1 = Math.min(mergeSelStart.row, mergeSelEnd.row);
      var r2 = Math.max(mergeSelStart.row, mergeSelEnd.row);
      var c1 = Math.min(mergeSelStart.col, mergeSelEnd.col);
      var c2 = Math.max(mergeSelStart.col, mergeSelEnd.col);
      if (r1 === r2 && c1 === c2) return null; // single cell = no selection
      return { r1: r1, r2: r2, c1: c1, c2: c2 };
    }

    function getMergedRegionAt(row, col) {
      for (var i = 0; i < mergedRegions.length; i++) {
        var m = mergedRegions[i];
        if (row >= m.startRow && row < m.startRow + m.rowSpan &&
            col >= m.startCol && col < m.startCol + m.colSpan) {
          return m;
        }
      }
      return null;
    }

    // Returns { absorbed: [indices], conflicts: [indices] }
    // absorbed = fully inside selection \u2192 will be removed on merge
    // conflicts = partially overlapping \u2192 blocks merge
    function checkSelectionMergeCompat(rect) {
      var absorbed = [], conflicts = [];
      for (var i = 0; i < mergedRegions.length; i++) {
        var m = mergedRegions[i];
        var mR1 = m.startRow, mR2 = m.startRow + m.rowSpan - 1;
        var mC1 = m.startCol, mC2 = m.startCol + m.colSpan - 1;
        var overlaps = !(mR2 < rect.r1 || mR1 > rect.r2 || mC2 < rect.c1 || mC1 > rect.c2);
        if (!overlaps) continue;
        var fullyContained = mR1 >= rect.r1 && mR2 <= rect.r2 && mC1 >= rect.c1 && mC2 <= rect.c2;
        if (fullyContained) { absorbed.push(i); } else { conflicts.push(i); }
      }
      return { absorbed: absorbed, conflicts: conflicts };
    }

    function renderMergeGrid() {
      var sel = getSelectionRect();
      // Check if single selected cell is inside a merged region (for unmerge)
      var clickedRegion = null;
      if (!sel && mergeSelStart && !mergeDragging) {
        clickedRegion = getMergedRegionAt(mergeSelStart.row, mergeSelStart.col);
      }

      for (var i = 0; i < mergeCells.length; i++) {
        var mc = mergeCells[i];
        var el = mc.el;
        el.className = 'merge-cell';
        // Explicit grid position for every cell to prevent auto-placement issues
        el.style.gridColumn = String(mc.col + 1);
        el.style.gridRow = String(mc.row + 1);
        el.style.display = '';
        el.textContent = String(mc.row * mergeCols + mc.col + 1);

        // Mark merged cells
        var region = getMergedRegionAt(mc.row, mc.col);
        if (region) {
          if (mc.row === region.startRow && mc.col === region.startCol) {
            el.classList.add('merged', 'merged-origin');
            el.style.gridColumn = (mc.col + 1) + ' / span ' + region.colSpan;
            el.style.gridRow = (mc.row + 1) + ' / span ' + region.rowSpan;
            var cellNums = [];
            for (var rr = region.startRow; rr < region.startRow + region.rowSpan; rr++) {
              for (var cc = region.startCol; cc < region.startCol + region.colSpan; cc++) {
                cellNums.push(rr * mergeCols + cc + 1);
              }
            }
            el.textContent = cellNums.join('+');
          } else {
            el.style.display = 'none';
          }
        }

        // Mark selection
        if (sel && mc.row >= sel.r1 && mc.row <= sel.r2 && mc.col >= sel.c1 && mc.col <= sel.c2) {
          el.classList.add('selecting');
        }

        // Highlight clicked merged region for unmerge
        if (clickedRegion && region === clickedRegion) {
          el.classList.add('selecting');
        }
      }

      // Update buttons
      var compat = sel ? checkSelectionMergeCompat(sel) : null;
      var canMerge = sel && compat && compat.conflicts.length === 0;
      mergeBtn.disabled = !canMerge;
      unmergeBtn.disabled = !clickedRegion;
    }

    mergeBtn.addEventListener('click', function() {
      var sel = getSelectionRect();
      if (!sel) return;
      var compat = checkSelectionMergeCompat(sel);
      if (compat.conflicts.length > 0) return;
      // Remove absorbed regions (reverse order to keep indices valid)
      var toRemove = compat.absorbed.slice().sort(function(a, b) { return b - a; });
      for (var i = 0; i < toRemove.length; i++) {
        mergedRegions.splice(toRemove[i], 1);
      }
      mergedRegions.push({
        startRow: sel.r1, startCol: sel.c1,
        rowSpan: sel.r2 - sel.r1 + 1, colSpan: sel.c2 - sel.c1 + 1
      });
      mergeSelStart = null;
      mergeSelEnd = null;
      renderMergeGrid();
      vscode.postMessage({ type: 'saveMergeRegions', regions: mergedRegions, rows: selectedRows, cols: selectedCols });
    });

    unmergeBtn.addEventListener('click', function() {
      if (!mergeSelStart) return;
      var region = getMergedRegionAt(mergeSelStart.row, mergeSelStart.col);
      if (!region) return;
      var idx = mergedRegions.indexOf(region);
      if (idx >= 0) mergedRegions.splice(idx, 1);
      mergeSelStart = null;
      mergeSelEnd = null;
      renderMergeGrid();
      vscode.postMessage({ type: 'saveMergeRegions', regions: mergedRegions, rows: selectedRows, cols: selectedCols });
    });

    mergeClearBtn.addEventListener('click', function() {
      mergedRegions = [];
      mergeSelStart = null;
      mergeSelEnd = null;
      renderMergeGrid();
      vscode.postMessage({ type: 'saveMergeRegions', regions: mergedRegions, rows: selectedRows, cols: selectedCols });
    });

    // Rebuild merge grid when grid size changes
    var origGridClick = null;
    function hookGridSizeChange() {
      var observer = new MutationObserver(function() {
        if (mergeRows !== selectedRows || mergeCols !== selectedCols) {
          mergedRegions = [];
          mergeSelStart = null;
          mergeSelEnd = null;
          buildMergeGrid();
          vscode.postMessage({ type: 'saveMergeRegions', regions: mergedRegions, rows: selectedRows, cols: selectedCols });
        }
      });
      observer.observe(document.getElementById('sizeLabel'), { childList: true, subtree: true });
    }
    hookGridSizeChange();
    buildMergeGrid();

    // \u2500\u2500 Collapsible sections \u2500\u2500
    var collapsedSections = {};
    document.querySelectorAll('.section-header.collapsible').forEach(function(header) {
      header.addEventListener('click', function(e) {
        if (e.target.closest('.tip-wrap')) return;
        var card = header.closest('.glass-card');
        if (!card) return;
        card.classList.toggle('collapsed');
        var section = card.dataset.section;
        if (section) {
          collapsedSections[section] = card.classList.contains('collapsed');
          vscode.postMessage({ type: 'saveSectionStates', states: collapsedSections });
        }
      });
    });

    function applySectionStates(states) {
      if (!states) return;
      collapsedSections = states;
      document.querySelectorAll('.glass-card[data-section]').forEach(function(card) {
        var section = card.dataset.section;
        if (states[section]) {
          card.classList.add('collapsed');
        } else {
          card.classList.remove('collapsed');
        }
      });
    }

    // \u2500\u2500 Settings \u2500\u2500
    var curZoom = 100, curFontFamily = '', curBg = '', curFg = '';
    var curThemeName = '';
    var themeNames = [''];
    var activeSettingsTab = 'all';
    var cellOverrides = {}; // { 0: { bgColor, fgColor, fontFamily, themeName }, ... }
    var settingsTabsEl = document.getElementById('settingsTabs');
    var builtinFonts = [
      { value: '', label: __i18n.ideDefault },
      { value: 'MesloLGS NF', label: 'MesloLGS NF' },
      { value: 'JetBrainsMono Nerd Font', label: 'JetBrainsMono NF' },
      { value: 'Cascadia Code', label: 'Cascadia Code' },
      { value: 'Cascadia Mono', label: 'Cascadia Mono' },
      { value: 'JetBrains Mono', label: 'JetBrains Mono' },
      { value: 'Fira Code', label: 'Fira Code' },
      { value: 'Source Code Pro', label: 'Source Code Pro' },
      { value: 'D2Coding', label: 'D2Coding' },
      { value: 'Ubuntu Mono', label: 'Ubuntu Mono' },
      { value: 'Menlo', label: 'Menlo' },
      { value: 'Monaco', label: 'Monaco' },
      { value: 'Consolas', label: 'Consolas' },
      { value: 'Courier New', label: 'Courier New' }
    ];
    var customFontNames = [];
    var dropdownOpen = false;

    // \u2500\u2500 Theme dropdown \u2500\u2500
    var themeDisplay = document.getElementById('themeDisplay');
    var themeDisplayText = document.getElementById('themeDisplayText');
    var themeDropdownEl = document.getElementById('themeDropdown');
    var themeDropdownOpen = false;

    function getThemeDisplayName(val) {
      if (!val) return __i18n.ideDefault;
      return val;
    }

    function toggleThemeDropdown(show) {
      themeDropdownOpen = typeof show === 'boolean' ? show : !themeDropdownOpen;
      themeDropdownEl.classList.toggle('show', themeDropdownOpen);
      themeDisplay.classList.toggle('open', themeDropdownOpen);
    }

    function selectTheme(name) {
      if (activeSettingsTab === 'all') {
        curThemeName = name;
        themeDisplayText.textContent = getThemeDisplayName(name);
        toggleThemeDropdown(false);
        vscode.postMessage({ type: 'setConfig', key: 'colorTheme', value: name });
        cellOverrides = {};
        vscode.postMessage({ type: 'clearAllCellOverrides' });
        updateTabOverrideIndicators();
      } else {
        var cid = parseInt(activeSettingsTab, 10);
        if (!cellOverrides[cid]) cellOverrides[cid] = { bgColor: '', fgColor: '', fontFamily: '', themeName: '' };
        cellOverrides[cid].themeName = name;
        themeDisplayText.textContent = getThemeDisplayName(name);
        toggleThemeDropdown(false);
        vscode.postMessage({ type: 'setCellConfig', cellId: cid, bgColor: cellOverrides[cid].bgColor, fgColor: cellOverrides[cid].fgColor, fontFamily: cellOverrides[cid].fontFamily, themeName: name });
        updateTabOverrideIndicators();
      }
    }

    function buildThemeDropdown() {
      themeDropdownEl.innerHTML = '';
      var currentTheme = activeSettingsTab === 'all' ? curThemeName : (cellOverrides[parseInt(activeSettingsTab, 10)] || {}).themeName || curThemeName;
      for (var i = 0; i < themeNames.length; i++) {
        (function(name) {
          var opt = document.createElement('div');
          opt.className = 'font-opt' + (currentTheme === name ? ' active' : '');
          var nameEl = document.createElement('span');
          nameEl.className = 'font-opt-name';
          nameEl.textContent = name || __i18n.ideDefault;
          opt.appendChild(nameEl);
          opt.addEventListener('click', function(e) { e.stopPropagation(); selectTheme(name); });
          themeDropdownEl.appendChild(opt);
        })(themeNames[i]);
      }
    }

    themeDisplay.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleDropdown(false); // close font dropdown
      toggleShellDropdown(false); // close shell dropdown
      buildThemeDropdown();
      toggleThemeDropdown();
    });

    // \u2500\u2500 Shell dropdown \u2500\u2500
    var shellDisplay = document.getElementById('shellDisplay');
    var shellDisplayText = document.getElementById('shellDisplayText');
    var shellDropdownEl = document.getElementById('shellDropdown');
    var shellDropdownOpen = false;
    var curShellType = '';
    var availableShells = [{ name: __i18n.shellAuto, path: '' }];

    function getShellDisplayName(val) {
      if (!val) return __i18n.shellAuto;
      var lv = val.toLowerCase();
      for (var i = 0; i < availableShells.length; i++) {
        if (availableShells[i].path.toLowerCase() === lv) return availableShells[i].name;
      }
      // Match by filename only (e.g. "cmd.exe" matches "C:WindowsSystem32cmd.exe")
      var base = lv.replace(/^.*[\\/\\\\]/, '');
      for (var i = 0; i < availableShells.length; i++) {
        var sp = availableShells[i].path.toLowerCase().replace(/^.*[\\/\\\\]/, '');
        if (sp === base) return availableShells[i].name;
      }
      return val;
    }

    function toggleShellDropdown(show) {
      shellDropdownOpen = typeof show === 'boolean' ? show : !shellDropdownOpen;
      shellDropdownEl.classList.toggle('show', shellDropdownOpen);
      shellDisplay.classList.toggle('open', shellDropdownOpen);
    }

    function selectShell(path) {
      if (activeCmdTab === 'all') {
        curShellType = path;
        shellDisplayText.textContent = getShellDisplayName(path);
        toggleShellDropdown(false);
        vscode.postMessage({ type: 'setConfig', key: 'shellType', value: path });
        // Clear all per-cell shell overrides
        for (var k in cellOverrides) {
          if (cellOverrides[k]) cellOverrides[k].shellType = '';
        }
        vscode.postMessage({ type: 'clearAllCellShells' });
        renderCmdSummary();
      } else {
        var cid = parseInt(activeCmdTab, 10);
        if (!cellOverrides[cid]) cellOverrides[cid] = { bgColor: '', fgColor: '', fontFamily: '', themeName: '', shellType: '' };
        cellOverrides[cid].shellType = path;
        shellDisplayText.textContent = getShellDisplayName(path);
        toggleShellDropdown(false);
        vscode.postMessage({ type: 'setShellForCell', cellId: cid, shellType: path });
        updateCmdTabIndicators();
      }
    }

    function buildShellDropdown() {
      shellDropdownEl.innerHTML = '';
      var currentShell = activeCmdTab === 'all' ? curShellType : (cellOverrides[parseInt(activeCmdTab, 10)] || {}).shellType || curShellType;
      for (var i = 0; i < availableShells.length; i++) {
        (function(shell) {
          var opt = document.createElement('div');
          opt.className = 'font-opt' + (currentShell === shell.path ? ' active' : '');
          var nameEl = document.createElement('span');
          nameEl.className = 'font-opt-name';
          nameEl.textContent = shell.name;
          opt.appendChild(nameEl);
          opt.addEventListener('click', function(e) { e.stopPropagation(); selectShell(shell.path); });
          shellDropdownEl.appendChild(opt);
        })(availableShells[i]);
      }
    }

    shellDisplay.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleDropdown(false);
      toggleThemeDropdown(false);
      buildShellDropdown();
      toggleShellDropdown();
    });

    // \u2500\u2500 Per-cell sequential startup steps \u2500\u2500
    var cmdPresetEl = document.getElementById('cmdPreset');
    var cmdCustomInput = document.getElementById('cmdCustom');
    var cmdTimeoutRow = document.getElementById('cmdTimeoutRow');
    var cmdTimeoutMsInput = document.getElementById('cmdTimeoutMs');
    var defaultSteps = [];

    function getStepsForTarget(target) {
      if (target === 'all') return defaultSteps || [];
      var ov = cellOverrides[parseInt(String(target), 10)] || {};
      if (ov.startupSteps && ov.startupSteps.length > 0) return ov.startupSteps;
      if (ov.startupCommand) return [{ type: 'command', input: ov.startupCommand }];
      return [];
    }

    function addStep(step) {
      var target = activeCmdTab === 'all' ? 'all' : parseInt(activeCmdTab, 10);
      if (target === 'all') {
        defaultSteps.push(step);
      } else {
        if (!cellOverrides[target]) cellOverrides[target] = {};
        if (!cellOverrides[target].startupSteps) cellOverrides[target].startupSteps = [];
        cellOverrides[target].startupSteps.push(step);
      }
      vscode.postMessage({ type: 'addStep', target: target, step: step });
      updateCmdTabIndicators();
    }

    cmdPresetEl.addEventListener('change', function() {
      var val = this.value;
      if (val === '__timeout__') {
        cmdTimeoutRow.style.display = 'flex';
        cmdTimeoutMsInput.focus();
        this.value = '';
        return;
      }
      if (val === '__enter__') {
        cmdTimeoutRow.style.display = 'none';
        cmdCustomInput.value = '';
        addStep({ type: 'command', input: '' });
        this.value = '';
        return;
      }
      if (val) {
        cmdTimeoutRow.style.display = 'none';
        cmdCustomInput.value = val;
        this.value = '';
        cmdCustomInput.focus();
      }
    });

    document.getElementById('cmdApplyBtn').addEventListener('click', function() {
      var val = cmdCustomInput.value.trim();
      // Allow empty string if user explicitly wants an Enter step by typing nothing and clicking apply?
      // But user usually wants to type something. Enter step is handled by dropdown.
      if (val) {
        addStep({ type: 'command', input: val });
        cmdCustomInput.value = '';
      }
    });

    cmdCustomInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        document.getElementById('cmdApplyBtn').click();
      }
    });

    document.getElementById('cmdTimeoutApplyBtn').addEventListener('click', function() {
      var ms = parseInt(cmdTimeoutMsInput.value, 10);
      if (ms > 0) {
        addStep({ type: 'timeout', ms: ms });
        cmdTimeoutMsInput.value = '';
        cmdTimeoutRow.style.display = 'none';
      }
    });

    cmdTimeoutMsInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        document.getElementById('cmdTimeoutApplyBtn').click();
      }
    });

    // \u2500\u2500 Font dropdown \u2500\u2500
    var fontDisplay = document.getElementById('fontDisplay');
    var fontDisplayText = document.getElementById('fontDisplayText');
    var fontDropdown = document.getElementById('fontDropdown');

    function getDisplayName(val) {
      if (!val) return __i18n.ideDefault;
      for (var i = 0; i < builtinFonts.length; i++) {
        if (builtinFonts[i].value === val) return builtinFonts[i].label;
      }
      return val;
    }

    function toggleDropdown(show) {
      dropdownOpen = typeof show === 'boolean' ? show : !dropdownOpen;
      fontDropdown.classList.toggle('show', dropdownOpen);
      fontDisplay.classList.toggle('open', dropdownOpen);
    }

    function selectFont(val) {
      if (activeSettingsTab === 'all') {
        curFontFamily = val;
        fontDisplayText.textContent = getDisplayName(val);
        toggleDropdown(false);
        vscode.postMessage({ type: 'setConfig', key: 'fontFamily', value: val });
        cellOverrides = {};
        vscode.postMessage({ type: 'clearAllCellOverrides' });
        updateTabOverrideIndicators();
      } else {
        var cid = parseInt(activeSettingsTab, 10);
        if (!cellOverrides[cid]) cellOverrides[cid] = { bgColor: '', fgColor: '', fontFamily: '', themeName: '' };
        cellOverrides[cid].fontFamily = val;
        fontDisplayText.textContent = getDisplayName(val);
        toggleDropdown(false);
        vscode.postMessage({ type: 'setCellConfig', cellId: cid, bgColor: cellOverrides[cid].bgColor, fgColor: cellOverrides[cid].fgColor, fontFamily: val, themeName: cellOverrides[cid].themeName });
        updateTabOverrideIndicators();
      }
    }

    function buildDropdown() {
      fontDropdown.innerHTML = '';
      for (var i = 0; i < builtinFonts.length; i++) {
        (function(f) {
          var opt = document.createElement('div');
          opt.className = 'font-opt' + (curFontFamily === f.value ? ' active' : '');
          var name = document.createElement('span');
          name.className = 'font-opt-name';
          name.textContent = f.label;
          opt.appendChild(name);
          opt.addEventListener('click', function(e) { e.stopPropagation(); selectFont(f.value); });
          fontDropdown.appendChild(opt);
        })(builtinFonts[i]);
      }
      if (customFontNames.length > 0) {
        var divider = document.createElement('div');
        divider.className = 'font-divider';
        fontDropdown.appendChild(divider);
        for (var j = 0; j < customFontNames.length; j++) {
          (function(name) {
            var opt = document.createElement('div');
            opt.className = 'font-opt' + (curFontFamily === name ? ' active' : '');
            var nameEl = document.createElement('span');
            nameEl.className = 'font-opt-name';
            nameEl.textContent = name;
            opt.appendChild(nameEl);
            var del = document.createElement('button');
            del.className = 'font-opt-del';
            del.textContent = '\\u00d7';
            del.title = __i18n.remove;
            del.addEventListener('click', function(e) {
              e.stopPropagation();
              vscode.postMessage({ type: 'removeFont', name: name });
              if (curFontFamily === name) selectFont('');
            });
            opt.appendChild(del);
            opt.addEventListener('click', function(e) { e.stopPropagation(); selectFont(name); });
            fontDropdown.appendChild(opt);
          })(customFontNames[j]);
        }
      }
      var divider2 = document.createElement('div');
      divider2.className = 'font-divider';
      fontDropdown.appendChild(divider2);
      var addBtn = document.createElement('div');
      addBtn.className = 'font-opt-add';
      addBtn.innerHTML = '<span>+</span><span>' + __i18n.addFontFile + '</span>';
      addBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleDropdown(false);
        vscode.postMessage({ type: 'browseFont' });
      });
      fontDropdown.appendChild(addBtn);
    }

    fontDisplay.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleThemeDropdown(false); // close theme dropdown
      toggleShellDropdown(false); // close shell dropdown
      buildDropdown();
      toggleDropdown();
    });
    document.addEventListener('click', function() { toggleDropdown(false); toggleThemeDropdown(false); toggleShellDropdown(false); });

    // \u2500\u2500 Color pickers \u2500\u2500
    function setupColor(prefix, configKey) {
      var input = document.getElementById(prefix + 'ColorInput');
      var fill = document.getElementById(prefix + 'SwatchFill');
      var valEl = document.getElementById(prefix + 'Val');
      var resetBtn = document.getElementById(prefix + 'Reset');
      var overrideKey = prefix === 'bg' ? 'bgColor' : 'fgColor';

      function updateColorUI(color) {
        if (color) {
          fill.style.background = color;
          valEl.textContent = color;
          input.value = color;
          resetBtn.classList.remove('hidden');
        } else {
          fill.style.background = prefix === 'bg'
            ? 'var(--vscode-terminal-background, var(--vscode-editor-background, #1e1e1e))'
            : 'var(--vscode-terminal-foreground, var(--vscode-editor-foreground, #ccc))';
          valEl.textContent = __i18n.ideDefault;
          resetBtn.classList.add('hidden');
        }
      }

      input.addEventListener('input', function() {
        var val = input.value;
        if (activeSettingsTab === 'all') {
          if (prefix === 'bg') curBg = val; else curFg = val;
          updateColorUI(val);
          vscode.postMessage({ type: 'setConfig', key: configKey, value: val });
          cellOverrides = {};
          vscode.postMessage({ type: 'clearAllCellOverrides' });
          updateTabOverrideIndicators();
        } else {
          var cid = parseInt(activeSettingsTab, 10);
          if (!cellOverrides[cid]) cellOverrides[cid] = { bgColor: '', fgColor: '', fontFamily: '', themeName: '' };
          cellOverrides[cid][overrideKey] = val;
          updateColorUI(val);
          vscode.postMessage({ type: 'setCellConfig', cellId: cid, bgColor: cellOverrides[cid].bgColor, fgColor: cellOverrides[cid].fgColor, fontFamily: cellOverrides[cid].fontFamily, themeName: cellOverrides[cid].themeName });
          updateTabOverrideIndicators();
        }
      });

      function doReset() {
        if (activeSettingsTab === 'all') {
          if (prefix === 'bg') curBg = ''; else curFg = '';
          updateColorUI('');
          vscode.postMessage({ type: 'setConfig', key: configKey, value: '' });
          cellOverrides = {};
          vscode.postMessage({ type: 'clearAllCellOverrides' });
          updateTabOverrideIndicators();
        } else {
          var cid = parseInt(activeSettingsTab, 10);
          if (!cellOverrides[cid]) cellOverrides[cid] = { bgColor: '', fgColor: '', fontFamily: '', themeName: '' };
          cellOverrides[cid][overrideKey] = '';
          updateColorUI('');
          vscode.postMessage({ type: 'setCellConfig', cellId: cid, bgColor: cellOverrides[cid].bgColor, fgColor: cellOverrides[cid].fgColor, fontFamily: cellOverrides[cid].fontFamily, themeName: cellOverrides[cid].themeName });
          updateTabOverrideIndicators();
        }
      }
      resetBtn.addEventListener('click', doReset);
      valEl.addEventListener('click', function() {
        // In All tab, always allow reset (clears per-cell overrides even if global is already IDE Default)
        if (valEl.textContent === __i18n.ideDefault && activeSettingsTab !== 'all') return;
        doReset();
      });
      valEl.style.cursor = 'pointer';

      return updateColorUI;
    }

    var updateBgUI = setupColor('bg', 'backgroundColor');
    var updateFgUI = setupColor('fg', 'foregroundColor');

    // \u2500\u2500 Zoom \u2500\u2500
    document.getElementById('zoomDown').addEventListener('click', function() {
      curZoom = Math.max(50, curZoom - 10);
      updateSettingsUI();
      vscode.postMessage({ type: 'setConfig', key: 'zoomPercent', value: curZoom });
    });
    document.getElementById('zoomUp').addEventListener('click', function() {
      curZoom = Math.min(300, curZoom + 10);
      updateSettingsUI();
      vscode.postMessage({ type: 'setConfig', key: 'zoomPercent', value: curZoom });
    });

    function updateSettingsUI() {
      document.getElementById('zoomVal').textContent = curZoom + '%';
      showTabValues();
    }

    function showTabValues() {
      if (activeSettingsTab === 'all') {
        themeDisplayText.textContent = getThemeDisplayName(curThemeName);
        fontDisplayText.textContent = getDisplayName(curFontFamily);
        updateBgUI(curBg);
        updateFgUI(curFg);
      } else {
        var cid = parseInt(activeSettingsTab, 10);
        var ov = cellOverrides[cid] || {};
        themeDisplayText.textContent = getThemeDisplayName(ov.themeName || curThemeName);
        fontDisplayText.textContent = getDisplayName(ov.fontFamily || curFontFamily);
        updateBgUI(ov.bgColor || curBg);
        updateFgUI(ov.fgColor || curFg);
      }
    }

    function showCmdTabValues() {
      if (activeCmdTab === 'all') {
        shellDisplayText.textContent = getShellDisplayName(curShellType);
      } else {
        var cid = parseInt(activeCmdTab, 10);
        var ov = cellOverrides[cid] || {};
        shellDisplayText.textContent = getShellDisplayName(ov.shellType || curShellType);
      }
      cmdPresetEl.value = '';
      cmdCustomRow.style.display = 'none';
      cmdTimeoutRow.style.display = 'none';
      renderCmdSummary();
    }

    function buildSettingsTabs(rows, cols, labels, hidden) {
      var hiddenSet = {};
      if (hidden) for (var h = 0; h < hidden.length; h++) hiddenSet[hidden[h]] = true;
      settingsTabsEl.innerHTML = '';
      if (rows <= 0 || cols <= 0) {
        settingsTabsEl.classList.add('hidden');
        activeSettingsTab = 'all';
        return;
      }
      var total = rows * cols;
      settingsTabsEl.classList.remove('hidden');
      // All tab
      var allBtn = document.createElement('button');
      allBtn.className = 'stab active';
      allBtn.dataset.tab = 'all';
      allBtn.textContent = __i18n.all;
      allBtn.addEventListener('click', function() { switchSettingsTab('all'); });
      settingsTabsEl.appendChild(allBtn);
      // Per-cell tabs (skip hidden/merged cells)
      for (var i = 0; i < total; i++) {
        if (hiddenSet[i]) continue;
        (function(idx) {
          var btn = document.createElement('button');
          btn.className = 'stab';
          btn.dataset.tab = String(idx);
          var r = Math.floor(idx / cols);
          var c = idx % cols;
          var region = getMergedRegionAt(r, c);
          var label = labels[idx];
          if (!label && region) {
            var nums = [];
            for (var rr = region.startRow; rr < region.startRow + region.rowSpan; rr++) {
              for (var cc = region.startCol; cc < region.startCol + region.colSpan; cc++) {
                nums.push(rr * cols + cc + 1);
              }
            }
            label = nums.join('+');
          }
          btn.textContent = label || String(idx + 1);
          btn.addEventListener('click', function() { switchSettingsTab(String(idx)); });
          settingsTabsEl.appendChild(btn);
        })(i);
      }
      activeSettingsTab = 'all';
      updateTabOverrideIndicators();
    }

    function switchSettingsTab(tab) {
      activeSettingsTab = tab;
      var btns = settingsTabsEl.querySelectorAll('.stab');
      for (var i = 0; i < btns.length; i++) {
        btns[i].classList.toggle('active', btns[i].dataset.tab === tab);
      }
      showTabValues();
    }

    function updateTabOverrideIndicators() {
      var btns = settingsTabsEl.querySelectorAll('.stab');
      for (var i = 0; i < btns.length; i++) {
        var tab = btns[i].dataset.tab;
        if (tab === 'all') continue;
        var ov = cellOverrides[parseInt(tab, 10)];
        var hasOv = ov && (ov.bgColor || ov.fgColor || ov.fontFamily || ov.themeName);
        btns[i].classList.toggle('has-override', !!hasOv);
      }
    }

    // \u2500\u2500 Startup Commands tabs (independent) \u2500\u2500
    var cmdTabsEl = document.getElementById('cmdTabs');
    var activeCmdTab = 'all';

    function buildCmdTabs(rows, cols, labels, hidden) {
      var hiddenSet = {};
      if (hidden) for (var h = 0; h < hidden.length; h++) hiddenSet[hidden[h]] = true;
      var prevTab = activeCmdTab;
      cmdTabsEl.innerHTML = '';
      if (rows <= 0 || cols <= 0) {
        cmdTabsEl.classList.add('hidden');
        activeCmdTab = 'all';
        return;
      }
      var total = rows * cols;
      cmdTabsEl.classList.remove('hidden');
      // Check if previous tab still valid (and not hidden)
      var validPrev = prevTab === 'all' || (parseInt(prevTab, 10) < total && !hiddenSet[parseInt(prevTab, 10)]);
      var restoreTab = validPrev ? prevTab : 'all';
      var allBtn = document.createElement('button');
      allBtn.className = 'stab' + (restoreTab === 'all' ? ' active' : '');
      allBtn.dataset.tab = 'all';
      allBtn.textContent = __i18n.all;
      allBtn.addEventListener('click', function() { switchCmdTab('all'); });
      cmdTabsEl.appendChild(allBtn);
      for (var i = 0; i < total; i++) {
        if (hiddenSet[i]) continue;
        (function(idx) {
          var btn = document.createElement('button');
          btn.className = 'stab' + (restoreTab === String(idx) ? ' active' : '');
          btn.dataset.tab = String(idx);
          var r = Math.floor(idx / cols);
          var c = idx % cols;
          var region = getMergedRegionAt(r, c);
          var label = labels[idx];
          if (!label && region) {
            var nums = [];
            for (var rr = region.startRow; rr < region.startRow + region.rowSpan; rr++) {
              for (var cc = region.startCol; cc < region.startCol + region.colSpan; cc++) {
                nums.push(rr * cols + cc + 1);
              }
            }
            label = nums.join('+');
          }
          btn.textContent = label || String(idx + 1);
          btn.addEventListener('click', function() { switchCmdTab(String(idx)); });
          cmdTabsEl.appendChild(btn);
        })(i);
      }
      activeCmdTab = restoreTab;
      updateCmdTabIndicators();
    }

    function switchCmdTab(tab) {
      activeCmdTab = tab;
      var btns = cmdTabsEl.querySelectorAll('.stab');
      for (var i = 0; i < btns.length; i++) {
        btns[i].classList.toggle('active', btns[i].dataset.tab === tab);
      }
      showCmdTabValues();
    }

    function updateCmdTabIndicators() {
      var btns = cmdTabsEl.querySelectorAll('.stab');
      for (var b = 0; b < btns.length; b++) {
        var tab = btns[b].dataset.tab;
        if (tab === 'all') continue;
        var cid = parseInt(tab, 10);
        var ov = cellOverrides[cid] || {};
        var hasOv = ov.shellType || (ov.startupSteps && ov.startupSteps.length > 0) || ov.startupCommand;
        btns[b].classList.toggle('has-override', !!hasOv);
      }
      renderCmdSummary();
    }

    function getCellLabel(idx) {
      var btns = cmdTabsEl.querySelectorAll('.stab');
      for (var j = 0; j < btns.length; j++) {
        if (btns[j].dataset.tab === String(idx)) return btns[j].textContent;
      }
      return String(idx + 1);
    }

    function escapeStepHtml(str) {
      var d = document.createElement('div');
      d.textContent = str;
      return d.innerHTML;
    }

    function getDragAfterElement(container, y) {
      var elements = Array.prototype.slice.call(container.querySelectorAll('.cmd-step-item:not(.dragging)'));
      var closest = null;
      var closestOffset = Number.NEGATIVE_INFINITY;
      for (var i = 0; i < elements.length; i++) {
        var box = elements[i].getBoundingClientRect();
        var offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closestOffset) {
          closestOffset = offset;
          closest = elements[i];
        }
      }
      return closest;
    }

    function renderStepGroup(container, target, label, steps, shellInfo) {
      var group = document.createElement('div');
      group.className = 'cmd-step-group';

      var header = document.createElement('div');
      header.className = 'cmd-step-group-header';
      var headerText = label;
      if (shellInfo) headerText += ' \xB7 ' + shellInfo;
      header.textContent = headerText;
      group.appendChild(header);

      var stepList = document.createElement('div');
      stepList.className = 'cmd-step-list';
      stepList.dataset.target = String(target);

      for (var i = 0; i < steps.length; i++) {
        (function(step, idx) {
          var row = document.createElement('div');
          row.className = 'cmd-step-item';
          row.draggable = true;
          row.dataset.index = String(idx);

          var handle = document.createElement('span');
          handle.className = 'cmd-step-handle';
          handle.textContent = '\u2261';
          row.appendChild(handle);

          var num = document.createElement('span');
          num.className = 'cmd-step-num';
          num.textContent = String(idx + 1);
          row.appendChild(num);

          var txt = document.createElement('span');
          txt.className = 'cmd-step-text';
          if (step.type === 'timeout') {
            txt.innerHTML = '<span class="cmd-step-icon">\u23F1</span> ' + step.ms + 'ms';
            txt.title = 'Click to edit timeout';
            txt.style.cursor = 'pointer';
            (function(st, ix, tgt) {
              txt.addEventListener('click', function() {
                var cur = st.ms;
                var inp = document.createElement('input');
                inp.type = 'number';
                inp.min = '100';
                inp.step = '100';
                inp.value = String(cur);
                inp.style.cssText = 'width:70px;font-size:11px;padding:1px 4px;background:var(--vscode-input-background);color:var(--vscode-input-foreground);border:1px solid var(--vscode-input-border,#555);border-radius:3px;';
                txt.textContent = '';
                txt.appendChild(inp);
                inp.focus();
                inp.select();
                function commit() {
                  var v = parseInt(inp.value, 10);
                  if (!v || v < 0) v = cur;
                  st.ms = v;
                  txt.innerHTML = '<span class="cmd-step-icon">\u23F1</span> ' + v + 'ms';
                  vscode.postMessage({ type: 'updateStep', target: tgt, index: ix, step: { type: 'timeout', ms: v } });
                }
                inp.addEventListener('blur', commit);
                inp.addEventListener('keydown', function(ev) {
                  if (ev.key === 'Enter') { inp.blur(); }
                  if (ev.key === 'Escape') { inp.value = String(cur); inp.blur(); }
                });
              });
            })(step, idx, target);
          } else if (step.input === '' || step.input === undefined) {
            txt.innerHTML = '<span class="cmd-step-icon">\u21B5</span> Enter';
            txt.title = 'Enter';
          } else {
            txt.innerHTML = '<span class="cmd-step-icon">\u25B6</span> ' + escapeStepHtml(step.input);
            txt.title = step.input;
          }
          row.appendChild(txt);

          var del = document.createElement('button');
          del.className = 'cmd-step-del';
          del.textContent = '\xD7';
          del.addEventListener('click', function() {
            if (target === 'all') {
              defaultSteps.splice(idx, 1);
            } else {
              var ov = cellOverrides[target];
              if (ov && ov.startupSteps) ov.startupSteps.splice(idx, 1);
            }
            vscode.postMessage({ type: 'removeStep', target: target, index: idx });
            updateCmdTabIndicators();
          });
          row.appendChild(del);

          row.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', JSON.stringify({ target: target, index: idx }));
            e.dataTransfer.effectAllowed = 'move';
            row.classList.add('dragging');
          });
          row.addEventListener('dragend', function() {
            row.classList.remove('dragging');
          });

          stepList.appendChild(row);
        })(steps[i], i);
      }

      // Drop zone
      stepList.addEventListener('dragover', function(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        var dragging = stepList.querySelector('.dragging');
        if (!dragging) return;
        var afterEl = getDragAfterElement(stepList, e.clientY);
        if (afterEl) {
          stepList.insertBefore(dragging, afterEl);
        } else {
          stepList.appendChild(dragging);
        }
      });

      stepList.addEventListener('drop', function(e) {
        e.preventDefault();
        var items = stepList.querySelectorAll('.cmd-step-item');
        var newSteps = [];
        for (var j = 0; j < items.length; j++) {
          var oldIdx = parseInt(items[j].dataset.index, 10);
          newSteps.push(steps[oldIdx]);
        }
        if (target === 'all') {
          defaultSteps = newSteps;
        } else {
          if (!cellOverrides[target]) cellOverrides[target] = {};
          cellOverrides[target].startupSteps = newSteps;
        }
        vscode.postMessage({ type: 'reorderSteps', target: target, steps: newSteps });
        updateCmdTabIndicators();
      });

      group.appendChild(stepList);
      container.appendChild(group);
    }

    function renderCmdSummary() {
      var list = document.getElementById('cmdSummaryList');
      list.innerHTML = '';

      // "All" group: shell info + default steps
      var allShell = curShellType ? getShellDisplayName(curShellType) : '';
      var allSteps = defaultSteps || [];
      if (allShell || allSteps.length > 0) {
        renderStepGroup(list, 'all', __i18n.all, allSteps, allShell);
      }

      // Per-cell groups - use actual tab IDs
      var btns = cmdTabsEl.querySelectorAll('.stab:not([data-tab="all"])');
      for (var i = 0; i < btns.length; i++) {
        var cid = parseInt(btns[i].dataset.tab, 10);
        var ov = cellOverrides[cid] || {};
        var cellShell = ov.shellType ? getShellDisplayName(ov.shellType) : '';
        var cellSteps = getStepsForTarget(cid);
        if (cellShell || cellSteps.length > 0) {
          renderStepGroup(list, cid, getCellLabel(cid), cellSteps, cellShell);
        }
      }
    }

    // \u2500\u2500 Projects \u2500\u2500
    var projects = [];
    var workspacePath = '';

    document.getElementById('addCurrentProjectBtn').addEventListener('click', function() {
      vscode.postMessage({ type: 'addCurrentProject' });
    });
    document.getElementById('browseProjectBtn').addEventListener('click', function() {
      vscode.postMessage({ type: 'browseProject' });
    });

    function renderProjectList() {
      var list = document.getElementById('projectList');
      list.innerHTML = '';
      if (projects.length === 0) {
        var empty = document.createElement('div');
        empty.className = 'cmd-empty';
        empty.textContent = __i18n.noProjects;
        list.appendChild(empty);
        return;
      }
      for (var i = 0; i < projects.length; i++) {
        (function(idx) {
          var p = projects[idx];
          var item = document.createElement('div');
          item.className = 'cmd-item';
          item.style.cursor = 'pointer';
          if (p.path === workspacePath) {
            item.style.borderColor = 'var(--vscode-focusBorder, rgba(0,127,212,0.6))';
            item.style.background = 'rgba(0,127,212,.06)';
          }

          var nameEl = document.createElement('span');
          nameEl.className = 'cmd-item-text';
          nameEl.style.fontFamily = 'inherit';
          nameEl.textContent = p.name;
          nameEl.title = p.path;
          item.appendChild(nameEl);

          var del = document.createElement('button');
          del.className = 'cmd-item-del';
          del.textContent = '\\u00d7';
          del.title = __i18n.remove;
          del.addEventListener('click', function(e) {
            e.stopPropagation();
            vscode.postMessage({ type: 'removeProject', index: idx });
          });
          item.appendChild(del);

          item.addEventListener('click', function(e) {
            vscode.postMessage({ type: 'openProject', path: p.path, newWindow: e.ctrlKey || e.metaKey });
          });

          list.appendChild(item);
        })(i);
      }
    }

    // \u2500\u2500 Presets \u2500\u2500
    var presets = [];
    var curPresetName = '';

    document.getElementById('presetSelect').addEventListener('change', function() {
      var nameInput = document.getElementById('presetNameInput');
      curPresetName = this.value;
      nameInput.value = curPresetName;
    });

    document.getElementById('presetSaveBtn').addEventListener('click', function() {
      var name = document.getElementById('presetNameInput').value.trim();
      if (!name) return;
      vscode.postMessage({ type: 'savePreset', name: name });
    });

    document.getElementById('presetLoadBtn').addEventListener('click', function() {
      var name = document.getElementById('presetSelect').value;
      if (!name) {
        vscode.postMessage({ type: 'loadPreset', name: 'terminal-grid' });
        return;
      }
      vscode.postMessage({ type: 'loadPreset', name: name });
    });

    document.getElementById('presetDeleteBtn').addEventListener('click', function() {
      var name = document.getElementById('presetSelect').value;
      if (!name) return;
      vscode.postMessage({ type: 'deletePreset', name: name });
    });

    function renderPresetDropdown(selectedName) {
      var sel = document.getElementById('presetSelect');
      var nameInput = document.getElementById('presetNameInput');
      if (selectedName !== undefined) curPresetName = selectedName;
      
      sel.innerHTML = '<option value="">' + __i18n.selectPreset + '</option>';
      for (var i = 0; i < presets.length; i++) {
        var opt = document.createElement('option');
        opt.value = presets[i].name;
        opt.textContent = presets[i].name;
        if (presets[i].name === curPresetName) {
          opt.selected = true;
        }
        sel.appendChild(opt);
      }
      if (curPresetName) {
        nameInput.value = curPresetName;
      }
    }

    // \u2500\u2500 Broadcast \u2500\u2500
    var broadcastTargetsEl = document.getElementById('broadcastTargets');
    var curGridTotal = 0;

    function buildBroadcastTargets(rows, cols, labels, hidden) {
      var hiddenSet = {};
      if (hidden) for (var h = 0; h < hidden.length; h++) hiddenSet[hidden[h]] = true;
      broadcastTargetsEl.innerHTML = '';
      if (rows <= 0 || cols <= 0) {
        broadcastTargetsEl.classList.add('hidden');
        return;
      }
      var total = rows * cols;
      broadcastTargetsEl.classList.remove('hidden');
      // All checkbox
      var allLabel = document.createElement('label');
      allLabel.className = 'broadcast-target all-label';
      var allCb = document.createElement('input');
      allCb.type = 'checkbox'; allCb.checked = true; allCb.dataset.cell = 'all';
      allLabel.appendChild(allCb);
      allLabel.appendChild(document.createTextNode(' ' + __i18n.all));
      broadcastTargetsEl.appendChild(allLabel);
      // Per-cell checkboxes (skip hidden/merged cells)
      for (var i = 0; i < total; i++) {
        if (hiddenSet[i]) continue;
        var lbl = document.createElement('label');
        lbl.className = 'broadcast-target';
        var cb = document.createElement('input');
        cb.type = 'checkbox'; cb.checked = false;
        cb.dataset.cell = String(i);
        lbl.appendChild(cb);
        
        var r = Math.floor(i / cols);
        var c = i % cols;
        var region = getMergedRegionAt(r, c);
        var label = labels[i];
        if (!label && region) {
          var nums = [];
          for (var rr = region.startRow; rr < region.startRow + region.rowSpan; rr++) {
            for (var cc = region.startCol; cc < region.startCol + region.colSpan; cc++) {
              nums.push(rr * cols + cc + 1);
            }
          }
          label = nums.join('+');
        }
        lbl.appendChild(document.createTextNode(' ' + (label || (i + 1))));
        broadcastTargetsEl.appendChild(lbl);
      }
      // All click \u2192 uncheck all individuals
      allCb.addEventListener('change', function() {
        if (allCb.checked) {
          var cbs = broadcastTargetsEl.querySelectorAll('input[data-cell]:not([data-cell="all"])');
          for (var j = 0; j < cbs.length; j++) { cbs[j].checked = false; }
        }
      });
      // Individual click \u2192 uncheck All; if all individuals checked \u2192 switch to All
      var indivCbs = broadcastTargetsEl.querySelectorAll('input[data-cell]:not([data-cell="all"])');
      for (var k = 0; k < indivCbs.length; k++) {
        indivCbs[k].addEventListener('change', function() {
          if (this.checked) allCb.checked = false;
          var allChecked = true;
          for (var j = 0; j < indivCbs.length; j++) {
            if (!indivCbs[j].checked) { allChecked = false; break; }
          }
          if (allChecked) {
            allCb.checked = true;
            for (var j = 0; j < indivCbs.length; j++) { indivCbs[j].checked = false; }
          }
        });
      }
    }

    function getSelectedCellIds() {
      var allCb = broadcastTargetsEl.querySelector('input[data-cell="all"]');
      if (allCb && allCb.checked) return null; // all
      var ids = [];
      var cbs = broadcastTargetsEl.querySelectorAll('input[data-cell]:not([data-cell="all"])');
      for (var j = 0; j < cbs.length; j++) {
        if (cbs[j].checked) ids.push(parseInt(cbs[j].dataset.cell, 10));
      }
      return ids;
    }

    document.getElementById('broadcastSendBtn').addEventListener('click', function() {
      var input = document.getElementById('broadcastInput');
      var text = input.value;
      if (!text) return;
      var ids = getSelectedCellIds();
      if (ids === null) {
        vscode.postMessage({ type: 'broadcast', text: text });
      } else if (ids.length > 0) {
        vscode.postMessage({ type: 'broadcastToCell', cellIds: ids, text: text });
      }
      input.value = '';
    });

    document.getElementById('broadcastInput').addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        document.getElementById('broadcastSendBtn').click();
      }
    });

    // \u2500\u2500 Messages \u2500\u2500
    window.addEventListener('message', function(event) {
      var msg = event.data;
      if (msg.type === 'ptyInstallResult') {
        var banner = document.getElementById('ptyBanner');
        var btn = document.getElementById('ptyInstallBtn');
        if (msg.success) {
          if (banner) {
            banner.style.borderColor = 'rgba(0,200,100,.35)';
            banner.style.background = 'linear-gradient(135deg, rgba(0,200,100,.12), rgba(0,180,80,.08))';
          }
          if (btn) {
            btn.textContent = __i18n.reload;
            btn.disabled = false;
            btn.onclick = function() { vscode.postMessage({ type: 'reload' }); };
          }
          var textEl = document.querySelector('.pty-banner-text');
          if (textEl) textEl.innerHTML = '<b>' + __i18n.ptyInstalled + '</b><br>' + __i18n.ptyInstalledHint;
        } else {
          if (btn) { btn.textContent = __i18n.retry; btn.disabled = false; }
        }
      }
      if (msg.type === 'mcpPort') {
        var portInfo = document.getElementById('mcpPortInfo');
        var portValue = document.getElementById('mcpPortValue');
        if (portInfo) portInfo.style.display = msg.port > 0 ? 'block' : 'none';
        if (portValue) portValue.textContent = msg.port;
      }
      if (msg.type === 'configValues') {
        curZoom = msg.zoom;
        curFontFamily = msg.fontFamily;
        curBg = msg.bgColor || '';
        curFg = msg.fgColor || '';
        curThemeName = msg.colorTheme || '';
        curShellType = msg.shellType || '';
        themeNames = msg.themeNames || [''];
        availableShells = msg.availableShells || [{ name: __i18n.shellAuto, path: '' }];
        customFontNames = msg.customFonts || [];
        projects = msg.projects || [];
        presets = msg.presets || [];
        workspacePath = msg.workspacePath || '';
        cellOverrides = msg.cellOverrides || {};
        defaultSteps = msg.defaultSteps || [];

        // Restore merge regions BEFORE building tabs
        if (msg.mergedRegions && msg.mergedRegions.length > 0) {
          mergedRegions = msg.mergedRegions;
        } else {
          mergedRegions = [];
        }

        updateSettingsUI();
        renderProjectList();
        renderPresetDropdown(msg.loadedPresetName);

        var rows = msg.gridRows || 0;
        var cols = msg.gridCols || 0;
        var curHiddenCells = msg.hiddenCells || [];
        buildBroadcastTargets(rows, cols, msg.cellLabels || [], curHiddenCells);
        buildSettingsTabs(rows, cols, msg.cellLabels || [], curHiddenCells);
        buildCmdTabs(rows, cols, msg.cellLabels || [], curHiddenCells);
        showCmdTabValues();
        applySectionStates(msg.sectionStates || {});

        if (mergedRegions.length > 0) {
          if (mergeRows !== selectedRows || mergeCols !== selectedCols) {
            buildMergeGrid();
          } else {
            renderMergeGrid();
          }
        }
      }
    });

    vscode.postMessage({ type: 'getConfig' });
  </script>
</body>
</html>`}};function ve(){let i="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let s=0;s<32;s++)i+=t.charAt(Math.floor(Math.random()*t.length));return i}var Y=k(require("http"));var j=class{constructor(t){this._server=null;this._port=t}start(t=10){return new Promise((s,o)=>{this._server=this._createServer();let r=e=>{this._server.removeAllListeners("error"),this._server.on("error",n=>{n.code==="EADDRINUSE"&&e<t?(this._port++,r(e+1)):o(n)}),this._server.listen(this._port,"127.0.0.1",()=>{let n=this._server.address();this._port=n.port,s(this._port)})};r(0)})}_createServer(){return Y.createServer((t,s)=>{if(s.setHeader("Content-Type","application/json"),t.method==="OPTIONS"){s.writeHead(204),s.end();return}let o=new URL(t.url||"/",`http://127.0.0.1:${this._port}`);t.method==="GET"&&o.pathname==="/api/health"?(s.writeHead(200),s.end(JSON.stringify({status:"ok"}))):t.method==="GET"&&o.pathname==="/api/info"?this._handleInfo(s):t.method==="POST"&&o.pathname==="/api/send"?this._readBody(t).then(r=>this._handleSend(r,s)):t.method==="POST"&&o.pathname==="/api/read"?this._readBody(t).then(r=>this._handleRead(r,s)):t.method==="POST"&&o.pathname==="/api/broadcast"?this._readBody(t).then(r=>this._handleBroadcast(r,s)):(s.writeHead(404),s.end(JSON.stringify({error:"Not found"})))})}stop(){this._server?.close(),this._server=null}getPort(){return this._port}_handleInfo(t){let s=f.currentPanel;if(!s){t.writeHead(200),t.end(JSON.stringify({grid:null}));return}t.writeHead(200),t.end(JSON.stringify({grid:{rows:s.getRows(),cols:s.getCols(),cellCount:s.getCellCount(),cellLabels:s.getCellLabels()}}))}_handleSend(t,s){let o=f.currentPanel;if(!o){s.writeHead(200),s.end(JSON.stringify({success:!1,error:"No grid open"}));return}let r=typeof t.cellId=="number"?t.cellId:-1,e=typeof t.text=="string"?t.text:"",a=t.submit===!0?o.sendInputToCell(r,e):o.sendToCell(r,e);s.writeHead(200),s.end(JSON.stringify({success:a}))}_handleRead(t,s){let o=f.currentPanel;if(!o){s.writeHead(200),s.end(JSON.stringify({output:null,error:"No grid open"}));return}let r=typeof t.cellId=="number"?t.cellId:-1,e=typeof t.lines=="number"?t.lines:void 0,n=o.readCell(r,e);s.writeHead(200),s.end(JSON.stringify({output:n}))}_handleBroadcast(t,s){let o=f.currentPanel;if(!o){s.writeHead(200),s.end(JSON.stringify({success:!1,error:"No grid open"}));return}let r=typeof t.text=="string"?t.text:"",e=t.submit===!0,n=o.getCellCount();if(e)o.broadcastInput(r);else for(let a=0;a<n;a++)o.sendToCell(a,r);s.writeHead(200),s.end(JSON.stringify({success:!0,cellCount:n}))}_readBody(t){return new Promise(s=>{let o="";t.on("data",r=>{o+=r}),t.on("end",()=>{try{s(JSON.parse(o))}catch{s({})}})})}};function be(i,t){return{command:"node",args:[_.join(i,"mcp-server.js")],env:{TERMINAL_GRID_PORT:String(t)}}}function K(i,t,s){try{let o=_.dirname(i);x.existsSync(o)||x.mkdirSync(o,{recursive:!0});let r={};x.existsSync(i)&&(r=JSON.parse(x.readFileSync(i,"utf-8"))),(!r.mcpServers||typeof r.mcpServers!="object")&&(r.mcpServers={}),r.mcpServers["terminal-grid"]=be(t,s),x.writeFileSync(i,JSON.stringify(r,null,2),"utf-8")}catch{}}function he(i,t,s){try{if(!x.existsSync(i))return;let o=JSON.parse(x.readFileSync(i,"utf-8")),r=o?.mcpServers;if(!r||typeof r!="object")return;let e=r["terminal-grid"];if(!e||!Array.isArray(e.args)||e.args.length===0)return;let n=_.join(t,"mcp-server.js");if(e.args[0]===n)return;e.args[0]=n,e.env={...e.env,TERMINAL_GRID_PORT:String(s)},x.writeFileSync(i,JSON.stringify(o,null,2),"utf-8")}catch{}}function X(i,t){try{let s=_.join(D.homedir(),".codex","config.toml"),o=_.join(i,"mcp-server.js").replace(/\\/g,"\\\\");if(x.existsSync(s)){let n=x.readFileSync(s,"utf-8");if(n.includes("[mcp_servers.terminal-grid]")){let a=n.replace(/(\[mcp_servers\.terminal-grid\][\s\S]*?args\s*=\s*\[")([^"]*)("])/,`$1${o}$3`);a!==n&&x.writeFileSync(s,a,"utf-8");return}}let r=`
[mcp_servers.terminal-grid]
command = "node"
args = ["${o}"]

[mcp_servers.terminal-grid.env]
TERMINAL_GRID_PORT = "${t}"
`,e=_.dirname(s);x.existsSync(e)||x.mkdirSync(e,{recursive:!0}),x.appendFileSync(s,r,"utf-8")}catch{}}function Q(i,t){K(_.join(D.homedir(),".claude.json"),i,t);let s=process.platform==="win32"?process.env.APPDATA||_.join(D.homedir(),"AppData","Roaming"):process.platform==="darwin"?_.join(D.homedir(),"Library","Application Support"):_.join(D.homedir(),".config");K(_.join(s,"Claude","claude_desktop_config.json"),i,t);for(let o of p.workspace.workspaceFolders||[])he(_.join(o.uri.fsPath,".mcp.json"),i,t)}var F,O;function we(i){let t=p.workspace.workspaceFolders?.[0];if(t){let e=_.join(t.uri.fsPath,"terminal-grid","terminal-grid.json"),n=null;if(x.existsSync(e))try{n=JSON.parse(x.readFileSync(e,"utf-8"))}catch(a){console.error("Failed to parse local terminal-grid.json",a)}else{let d=i.globalState.get("projectPresets",{})[t.uri.fsPath];d&&(n=i.globalState.get("presets",[]).find(m=>m.name===d))}if(n){let a=p.workspace.getConfiguration("terminalGrid");if(a.update("defaultRows",n.rows,p.ConfigurationTarget.Global),a.update("defaultCols",n.cols,p.ConfigurationTarget.Global),a.update("zoomPercent",n.zoomPercent,p.ConfigurationTarget.Global),a.update("fontFamily",n.fontFamily,p.ConfigurationTarget.Global),a.update("backgroundColor",n.bgColor,p.ConfigurationTarget.Global),a.update("foregroundColor",n.fgColor,p.ConfigurationTarget.Global),a.update("colorTheme",n.colorTheme||"",p.ConfigurationTarget.Global),a.update("shellType",n.shellType||"",p.ConfigurationTarget.Global),i.globalState.update("startupCommands",n.startupCommands||[]),i.globalState.update("cellLabels",n.cellLabels||[]),i.globalState.update("defaultCommand",n.defaultCommand||""),n.defaultSteps?i.globalState.update("defaultSteps",n.defaultSteps):n.defaultCommand?i.globalState.update("defaultSteps",[{type:"command",input:n.defaultCommand}]):i.globalState.update("defaultSteps",[]),n.cellStepsOverrides){let d=i.globalState.get("cellOverrides",{});for(let[c,m]of Object.entries(n.cellStepsOverrides)){d[Number(c)]||(d[Number(c)]={});let h=m;Array.isArray(h.startupSteps)&&(d[Number(c)].startupSteps=h.startupSteps)}i.globalState.update("cellOverrides",d)}i.globalState.update("mergedRegions",n.mergedRegions||[])}}let s=new N(i),o=p.workspace.getConfiguration("terminalGrid").get("apiPort",7890);o>0&&(F=new j(o),F.start().then(e=>{O=p.window.createStatusBarItem(p.StatusBarAlignment.Right,50),O.text=`$(broadcast) TG :${e}`,O.tooltip=p.l10n.t("Terminal Grid API active on port {0}",e),O.command="terminalGrid.copyMcpConfig",O.show(),i.subscriptions.push(O),s.setMcpPort(e),Q(i.extensionPath,e),X(i.extensionPath,e)}).catch(e=>{p.window.showWarningMessage(p.l10n.t("Terminal Grid API bridge failed to start: {0}",e.message))}));let r=p.lm;if(typeof r?.registerMcpServerDefinitionProvider=="function"){let e=new p.EventEmitter,n=o,a=r.registerMcpServerDefinitionProvider;i.subscriptions.push(a("terminalGrid",{onDidChangeMcpServerDefinitions:e.event,provideMcpServerDefinitions:async()=>{if(n<=0)return[];let d=p.McpStdioServerDefinition;return d?[new d("Terminal Grid","node",[_.join(i.extensionPath,"mcp-server.js")],{TERMINAL_GRID_PORT:String(n)},i.extension.packageJSON.version)]:[]}}),e),i.subscriptions.push(p.workspace.onDidChangeConfiguration(d=>{d.affectsConfiguration("terminalGrid.apiPort")&&(n=p.workspace.getConfiguration("terminalGrid").get("apiPort",7890),e.fire())}))}i.subscriptions.push(p.workspace.onDidChangeConfiguration(e=>{if(e.affectsConfiguration("terminalGrid.apiPort")){let n=p.workspace.getConfiguration("terminalGrid").get("apiPort",7890);n>0&&(Q(i.extensionPath,n),X(i.extensionPath,n))}})),i.subscriptions.push(p.window.registerWebviewViewProvider(N.viewType,s)),i.subscriptions.push(p.commands.registerCommand("terminalGrid._refreshSidebar",()=>{s.sendConfig()})),i.subscriptions.push(p.window.registerWebviewPanelSerializer("terminalGrid",{async deserializeWebviewPanel(e,n){let a=i.globalState.get("lastGrid");a?f.revive(e,i,a.rows,a.cols):e.dispose()}})),i.subscriptions.push(p.commands.registerCommand("terminalGrid.openGrid",()=>{let e=p.workspace.getConfiguration("terminalGrid"),n=e.get("defaultRows",2),a=e.get("defaultCols",3);f.createOrShow(i,n,a)}),p.commands.registerCommand("terminalGrid.openCustomGrid",(e,n)=>{f.createOrShow(i,e,n)}),p.commands.registerCommand("terminalGrid.open2x2",()=>f.createOrShow(i,2,2)),p.commands.registerCommand("terminalGrid.open2x3",()=>f.createOrShow(i,2,3)),p.commands.registerCommand("terminalGrid.open3x3",()=>f.createOrShow(i,3,3)),p.commands.registerCommand("terminalGrid.sendToCell",(e,n)=>f.currentPanel?.sendToCell(e,n)??!1),p.commands.registerCommand("terminalGrid.readCell",(e,n)=>f.currentPanel?.readCell(e,n)??null),p.commands.registerCommand("terminalGrid.getGridInfo",()=>{let e=f.currentPanel;return e?{rows:e.getRows(),cols:e.getCols(),cellCount:e.getCellCount(),cellLabels:e.getCellLabels()}:null}),p.commands.registerCommand("terminalGrid.testAPI",async()=>{let e=p.window.createOutputChannel("Terminal Grid Tests");e.show(),e.appendLine(`=== Terminal Grid API Tests ===
`);let n=0,a=0;function d(w,S,L){let E=S?"PASS":"FAIL";S?n++:a++,e.appendLine(`[${E}] ${w}${L?" \u2014 "+L:""}`)}let c=await p.commands.executeCommand("terminalGrid.getGridInfo");if(!c){e.appendLine("[FAIL] getGridInfo returned null. Open a grid first.");return}d("getGridInfo returns object",!!c,JSON.stringify(c)),d("rows is number",typeof c.rows=="number",`rows=${c.rows}`),d("cols is number",typeof c.cols=="number",`cols=${c.cols}`),d("cellCount = rows*cols",c.cellCount===c.rows*c.cols,`${c.cellCount}`),d("cellLabels is array",Array.isArray(c.cellLabels),`length=${c.cellLabels.length}`),d("cellLabels.length = cellCount",c.cellLabels.length===c.cellCount);let m=await p.commands.executeCommand("terminalGrid.sendToCell",0,"echo __API_TEST__\r");d("sendToCell(0) returns true",m===!0);let h=await p.commands.executeCommand("terminalGrid.sendToCell",999,"x\r");d("sendToCell(999) returns false",h===!1,`got ${h}`);let b=await p.commands.executeCommand("terminalGrid.sendToCell",0,"TYPED_ONLY");d("sendToCell without \\r returns true",b===!0),await new Promise(w=>setTimeout(w,2e3)),await p.commands.executeCommand("terminalGrid.sendToCell",0,"");let v=await p.commands.executeCommand("terminalGrid.readCell",0);d("readCell(0) returns string",typeof v=="string",`length=${v?.length??0}`),d("readCell(0) contains test marker",!!v&&v.includes("__API_TEST__"));let u=await p.commands.executeCommand("terminalGrid.readCell",0,3);d("readCell(0, 3) returns string",typeof u=="string");let C=await p.commands.executeCommand("terminalGrid.readCell",0,0);d("readCell(0, 0) returns empty",C==="",`got "${C}"`);let T=await p.commands.executeCommand("terminalGrid.readCell",999);if(d("readCell(999) returns null",T===null,`got ${T}`),c.cellCount>1){let w=await p.commands.executeCommand("terminalGrid.sendToCell",1,"echo CELL1_OK\r");d("sendToCell(1) returns true",w===!0),await new Promise(L=>setTimeout(L,1500));let S=await p.commands.executeCommand("terminalGrid.readCell",1);d("readCell(1) contains CELL1_OK",!!S&&S.includes("CELL1_OK"))}e.appendLine(`
=== ${n} passed, ${a} failed ===`),a===0?p.window.showInformationMessage(p.l10n.t("Terminal Grid API: All {0} tests passed!",n)):p.window.showWarningMessage(p.l10n.t("Terminal Grid API: {0} test(s) failed. See output.",a))}),p.commands.registerCommand("terminalGrid.copyMcpConfig",()=>{let e=F?.getPort()??7890,a={mcpServers:{"terminal-grid":{command:"node",args:[_.join(i.extensionPath,"mcp-server.js")],env:{TERMINAL_GRID_PORT:String(e)}}}};p.env.clipboard.writeText(JSON.stringify(a,null,2)),p.window.showInformationMessage(p.l10n.t("Terminal Grid MCP config copied to clipboard (port {0})",e))}))}function ye(){F?.stop(),F=void 0,f.currentPanel?.dispose()}0&&(module.exports={activate,deactivate});
