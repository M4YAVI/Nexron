import { ElectronInfo } from "@/components/electron-info"
import { ThemeToggle } from "@/components/theme-toggle"
import { FeatureCards } from "@/components/feature-cards"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Terminal, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-semibold leading-none">Electron + Next.js</h1>
              <p className="text-xs text-muted-foreground">Starter Template</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <Badge variant="secondary" className="mb-4">
            <Terminal className="mr-1 h-3 w-3" />
            Ready to Build
          </Badge>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Modern Desktop Apps
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Made Simple
            </span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground text-pretty">
            A production-ready starter combining the power of Electron with the developer experience of Next.js. Build
            beautiful, cross-platform desktop applications with TypeScript and Tailwind CSS.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="https://www.electronjs.org/docs" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Electron Docs
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
                Next.js Docs
              </a>
            </Button>
          </div>
        </section>

        {/* Electron Info */}
        <section className="mb-12">
          <ElectronInfo />
        </section>

        {/* Features */}
        <section className="mb-12">
          <div className="mb-6 text-center">
            <h3 className="mb-2 text-2xl font-semibold">{"What's Included"}</h3>
            <p className="text-muted-foreground">Everything you need to build modern desktop applications</p>
          </div>
          <FeatureCards />
        </section>

        {/* Quick Start */}
        <section className="mb-12">
          <div className="rounded-xl border bg-card p-6">
            <h3 className="mb-4 text-xl font-semibold">Quick Start</h3>
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4 font-mono text-sm">
                <p className="text-muted-foreground"># Install dependencies</p>
                <p className="text-foreground">npm install</p>
                <p className="mt-2 text-muted-foreground"># Run in development</p>
                <p className="text-foreground">npm run dev</p>
                <p className="mt-2 text-muted-foreground"># Build for production</p>
                <p className="text-foreground">npm run build:electron</p>
              </div>
              <div className="grid gap-4 text-sm sm:grid-cols-3">
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium">Development</h4>
                  <p className="text-muted-foreground">Hot reload with Next.js dev server and Electron</p>
                </div>
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium">Production</h4>
                  <p className="text-muted-foreground">Static export served by Electron for offline use</p>
                </div>
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium">Distribution</h4>
                  <p className="text-muted-foreground">Build installers for Mac, Windows, and Linux</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Built with Electron, Next.js, TypeScript, and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}
