export interface ElectronAPI {
  getAppInfo: () => Promise<{
    name: string
    version: string
    electron: string
    chrome: string
    node: string
    platform: string
  }>
  getTheme: () => Promise<"dark" | "light">
  setTheme: (theme: "dark" | "light" | "system") => Promise<"dark" | "light">
  onThemeChange: (callback: (theme: "dark" | "light") => void) => () => void
  platform: string
  minimize: () => void
  maximize: () => void
  close: () => void
}

declare global {
  interface Window {
    electronAPI?: ElectronAPI
  }
}
