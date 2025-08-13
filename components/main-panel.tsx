import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Lightbulb, Mic, Moon, Plus, Send, Settings, SlidersHorizontal, User } from "lucide-react"
import Image from "next/image"

const MainPanel = () => {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <header className="flex items-center justify-between p-4 border-b border-border">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-lg font-semibold">
              FLC AI v1
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>FLC AI v1</DropdownMenuItem>
            <DropdownMenuItem>FLC AI v2 (Beta)</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Moon className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
        <Image src="/logo.png" alt="FLC Logo" width={96} height={96} className="mb-4" />
        <h2 className="text-3xl font-bold mb-2 text-foreground">Because life can be Meaningful and Sweet</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          We help bridge the gap between vision and execution. How can I help you today?
        </p>

        <Card className="max-w-2xl bg-card border-border">
          <CardContent className="p-6 flex items-start space-x-4">
            <Lightbulb className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
            <p className="text-left text-muted-foreground">
              "We equip the next generation of leaders, entrepreneurs, and professionals to thrive." -{" "}
              <span className="font-semibold text-foreground">FLC AI</span>
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="p-4 border-t border-border">
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 flex space-x-2">
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <Plus className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <SlidersHorizontal className="h-5 w-5" />
            </Button>
          </div>
          <Input placeholder="Ask FLC AI..." className="pl-24 pr-24 h-14 rounded-full bg-card text-lg" />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex space-x-1">
            <Button size="icon" variant="ghost" className="h-10 w-10">
              <Mic className="h-5 w-5" />
            </Button>
            <Button size="icon" className="h-10 w-10 rounded-full bg-primary text-primary-foreground">
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPanel
