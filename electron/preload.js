const { contextBridge, ipcRenderer } = require("electron")

// Expose protected methods to the renderer process
contextBridge.exposeInMainWorld("electronAPI", {
  // App info
  getAppInfo: () => ipcRenderer.invoke("get-app-info"),

  // Theme management
  getTheme: () => ipcRenderer.invoke("get-theme"),
  setTheme: (theme) => ipcRenderer.invoke("set-theme", theme),
  onThemeChange: (callback) => {
    ipcRenderer.on("theme-changed", (_, theme) => callback(theme))
    return () => ipcRenderer.removeAllListeners("theme-changed")
  },

  // Platform info
  platform: process.platform,

  // Window controls (for custom title bar if needed)
  minimize: () => ipcRenderer.send("window-minimize"),
  maximize: () => ipcRenderer.send("window-maximize"),
  close: () => ipcRenderer.send("window-close"),
})
