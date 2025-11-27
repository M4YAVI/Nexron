import { app, BrowserWindow, ipcMain, nativeTheme } from "electron"
import path from "path"
import serve from "electron-serve"
import { fileURLToPath } from "url"
import { dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const isProd = process.env.NODE_ENV === "production" || app.isPackaged

// Serve static files in production
const loadURL = isProd ? serve({ directory: "out" }) : null

let mainWindow

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    backgroundColor: nativeTheme.shouldUseDarkColors ? "#0a0a0a" : "#ffffff",
    titleBarStyle: process.platform === "darwin" ? "hiddenInset" : "default",
    trafficLightPosition: { x: 16, y: 16 },
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      webSecurity: true,
    },
    show: false,
  })

  // Show window when ready to prevent visual flash
  mainWindow.once("ready-to-show", () => {
    mainWindow.show()
  })

  // Load the app
  if (isProd) {
    await loadURL(mainWindow)
  } else {
    await mainWindow.loadURL("http://localhost:3000")
    // Open DevTools in development
    mainWindow.webContents.openDevTools()
  }

  mainWindow.on("closed", () => {
    mainWindow = null
  })
}

// Handle app ready
app.whenReady().then(createWindow)

// Quit when all windows are closed (except on macOS)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})

// Re-create window on macOS when dock icon is clicked
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// IPC Handlers
ipcMain.handle("get-app-info", () => {
  return {
    name: app.getName(),
    version: app.getVersion(),
    electron: process.versions.electron,
    chrome: process.versions.chrome,
    node: process.versions.node,
    platform: process.platform,
  }
})

ipcMain.handle("get-theme", () => {
  return nativeTheme.shouldUseDarkColors ? "dark" : "light"
})

ipcMain.handle("set-theme", (_, theme) => {
  nativeTheme.themeSource = theme
  return nativeTheme.shouldUseDarkColors ? "dark" : "light"
})

// Listen for system theme changes
nativeTheme.on("updated", () => {
  if (mainWindow) {
    mainWindow.webContents.send("theme-changed", nativeTheme.shouldUseDarkColors ? "dark" : "light")
  }
})
