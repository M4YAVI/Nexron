"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Layers, Palette, Zap, Code2, Shield, Rocket, FileCode, Box } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Electron 33",
    description: "Latest Electron with enhanced security and performance",
    badge: "v33.2.0",
    color: "text-yellow-500",
  },
  {
    icon: Layers,
    title: "Next.js 16",
    description: "App Router, Server Actions, and all modern features",
    badge: "Latest",
    color: "text-foreground",
  },
  {
    icon: Code2,
    title: "TypeScript",
    description: "Full type safety with strict mode enabled",
    badge: "Strict",
    color: "text-blue-500",
  },
  {
    icon: Palette,
    title: "Tailwind CSS",
    description: "Utility-first CSS with dark mode support",
    badge: "v4",
    color: "text-cyan-500",
  },
  {
    icon: Box,
    title: "shadcn/ui",
    description: "Beautiful, accessible component library",
    badge: "Included",
    color: "text-foreground",
  },
  {
    icon: Shield,
    title: "Secure IPC",
    description: "Context isolation with type-safe preload scripts",
    badge: "Protected",
    color: "text-green-500",
  },
  {
    icon: Rocket,
    title: "Electron Builder",
    description: "Build for macOS, Windows, and Linux",
    badge: "Cross-platform",
    color: "text-orange-500",
  },
  {
    icon: FileCode,
    title: "Hot Reload",
    description: "Fast refresh in development mode",
    badge: "Dev",
    color: "text-pink-500",
  },
]

export function FeatureCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((feature) => (
        <Card key={feature.title} className="group transition-all hover:shadow-lg hover:border-primary/50">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <feature.icon className={`h-8 w-8 ${feature.color}`} />
              <Badge variant="secondary" className="text-xs">
                {feature.badge}
              </Badge>
            </div>
            <CardTitle className="text-lg">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{feature.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
