"use client"

import { useAppInfo } from "@/hooks/use-electron"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, Chrome, Package, Monitor, Zap } from "lucide-react"

export function ElectronInfo() {
  const { isElectron, appInfo } = useAppInfo()

  if (!isElectron) {
    return (
      <Card className="border-dashed border-2 border-muted-foreground/20">
        <CardHeader className="text-center">
          <CardTitle className="text-muted-foreground">Browser Mode</CardTitle>
          <CardDescription>Running in browser. Launch with Electron to see native features.</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Badge variant="secondary" className="text-sm">
            Run: npm run dev
          </Badge>
        </CardContent>
      </Card>
    )
  }

  if (!appInfo) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-8">
          <div className="animate-spin h-6 w-6 border-2 border-primary border-t-transparent rounded-full" />
        </CardContent>
      </Card>
    )
  }

  const infoItems = [
    { icon: Package, label: "App Version", value: appInfo.version },
    { icon: Zap, label: "Electron", value: `v${appInfo.electron}` },
    { icon: Chrome, label: "Chrome", value: `v${appInfo.chrome}` },
    { icon: Cpu, label: "Node.js", value: `v${appInfo.node}` },
    { icon: Monitor, label: "Platform", value: appInfo.platform },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-yellow-500" />
          {appInfo.name}
        </CardTitle>
        <CardDescription>Running in Electron environment</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {infoItems.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2 rounded-lg bg-muted/50 p-3 text-center">
              <item.icon className="h-5 w-5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{item.label}</span>
              <span className="text-sm font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
