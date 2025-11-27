"use client"

import { useEffect, useState } from "react"
import { useNativeTheme, useElectron } from "@/hooks/use-electron"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Monitor } from "lucide-react"

export function ThemeToggle() {
  const { isElectron } = useElectron()
  const { theme, changeTheme } = useNativeTheme()
  const [mounted, setMounted] = useState(false)
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    setMounted(true)
    if (!isElectron) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setCurrentTheme(prefersDark ? "dark" : "light")
      document.documentElement.classList.toggle("dark", prefersDark)
    }
  }, [isElectron])

  useEffect(() => {
    if (isElectron) {
      setCurrentTheme(theme)
      document.documentElement.classList.toggle("dark", theme === "dark")
    }
  }, [theme, isElectron])

  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark"
    setCurrentTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
    if (isElectron) {
      changeTheme(newTheme)
    }
  }

  if (!mounted) return null

  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="icon" onClick={toggleTheme} className="relative bg-transparent">
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      {isElectron && (
        <Button variant="ghost" size="icon" onClick={() => changeTheme("system")} title="Use system theme">
          <Monitor className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}
