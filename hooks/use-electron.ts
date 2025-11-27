"use client"

import { useEffect, useState, useCallback } from "react"
import type { ElectronAPI } from "@/types/electron"

export function useElectron() {
  const [isElectron, setIsElectron] = useState(false)
  const [electronAPI, setElectronAPI] = useState<ElectronAPI | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && window.electronAPI) {
      setIsElectron(true)
      setElectronAPI(window.electronAPI)
    }
  }, [])

  return { isElectron, electronAPI }
}

export function useAppInfo() {
  const { isElectron, electronAPI } = useElectron()
  const [appInfo, setAppInfo] = useState<{
    name: string
    version: string
    electron: string
    chrome: string
    node: string
    platform: string
  } | null>(null)

  useEffect(() => {
    if (isElectron && electronAPI) {
      electronAPI.getAppInfo().then(setAppInfo)
    }
  }, [isElectron, electronAPI])

  return { isElectron, appInfo }
}

export function useNativeTheme() {
  const { isElectron, electronAPI } = useElectron()
  const [theme, setTheme] = useState<"dark" | "light">("light")

  useEffect(() => {
    if (isElectron && electronAPI) {
      electronAPI.getTheme().then(setTheme)
      const unsubscribe = electronAPI.onThemeChange(setTheme)
      return unsubscribe
    }
  }, [isElectron, electronAPI])

  const changeTheme = useCallback(
    async (newTheme: "dark" | "light" | "system") => {
      if (electronAPI) {
        const result = await electronAPI.setTheme(newTheme)
        setTheme(result)
      }
    },
    [electronAPI],
  )

  return { theme, changeTheme, isElectron }
}
