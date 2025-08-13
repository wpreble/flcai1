import { Button } from "@/components/ui/button"
import { MessageSquare, BookOpen, Wrench, FileText, ChevronDown, Settings, Sun, Folder } from "lucide-react"
import Image from "next/image"

const LeftSidebar = () => {
  return (
    <aside className="w-64 flex-shrink-0 bg-card border-r border-border flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="FLC Logo" width={24} height={24} className="rounded-full" />
          <span className="font-semibold text-foreground">FLC AI</span>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Folder className="h-4 w-4" />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-1">
        <Button variant="secondary" className="w-full justify-start bg-amber-100 text-amber-900 hover:bg-amber-200">
          <MessageSquare className="mr-3 h-4 w-4" />
          FLC AI Chat
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <BookOpen className="mr-3 h-4 w-4" />
          Resource Library
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Wrench className="mr-3 h-4 w-4" />
          Tools
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <FileText className="mr-3 h-4 w-4" />
          Journal & Notes
        </Button>
      </nav>

      {/* Chat History */}
      <div className="flex-1 px-4 pb-4 overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Chat History</h3>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <ChevronDown className="h-3 w-3" />
          </Button>
        </div>

        <div className="h-full overflow-y-auto space-y-2 text-sm">
          <div className="p-2 rounded-md hover:bg-secondary cursor-pointer">
            <p className="font-medium text-foreground">Career Alignment Deep Dive</p>
            <p className="text-xs text-muted-foreground">1d ago • 1 msg</p>
            <p className="text-xs text-muted-foreground">Run Alignment Radar</p>
          </div>

          <div className="p-2 rounded-md hover:bg-secondary cursor-pointer">
            <p className="font-medium text-foreground">Resume Gap Analysis</p>
            <p className="text-xs text-muted-foreground">3d ago • 1 msg</p>
            <p className="text-xs text-muted-foreground">Activate ATS Overlap Score</p>
          </div>

          <div className="p-2 rounded-md hover:bg-secondary cursor-pointer">
            <p className="font-medium text-foreground">Adversity Reframing Session</p>
            <p className="text-xs text-muted-foreground">3d ago • 1 msg</p>
            <p className="text-xs text-muted-foreground">Run Strategic Reframing</p>
          </div>

          <div className="p-2 rounded-md hover:bg-secondary cursor-pointer">
            <p className="font-medium text-foreground">Interview Prep Strategy</p>
            <p className="text-xs text-muted-foreground">4d ago • 2 msg</p>
            <p className="text-xs text-muted-foreground">Company Brief + Q&A Bank</p>
          </div>
        </div>

        <Button variant="ghost" size="icon" className="w-full mt-4">
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      {/* Bottom Controls */}
      <div className="p-4 border-t border-border flex items-center justify-between">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Folder className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Sun className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </aside>
  )
}

export default LeftSidebar
