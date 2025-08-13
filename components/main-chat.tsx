import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, Mic, Send, Lightbulb } from "lucide-react"
import Image from "next/image"

const MainChat = () => {
  return (
    <main className="flex-1 flex flex-col bg-background min-h-0">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center p-8 min-h-0">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
          <Image src="/logo.png" alt="FLC Logo" width={32} height={32} className="rounded-full" />
        </div>

        <h1 className="text-3xl font-bold mb-4 text-foreground">FLC AI</h1>
        <p className="text-muted-foreground mb-2 max-w-md">
          Welcome to FLC AI. I am your guide for career development, strategic planning, and turning adversity into
          opportunity.
        </p>
        <p className="text-muted-foreground mb-8 max-w-md">How can I assist you on your journey today?</p>

        {/* Suggestion Card */}
        <Card className="max-w-2xl bg-amber-50 border-amber-200">
          <CardContent className="p-4 flex items-start space-x-3">
            <Lightbulb className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <p className="text-left text-amber-800 italic">
              "Run framework assessments, analyze career gaps, or generate strategic plans to accelerate your
              professional growth."
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Chat Input */}
      <div className="p-8 flex-shrink-0">
        <div className="max-w-4xl mx-auto">
          {/* Large Input Field */}
          <div className="relative mb-4">
            <Input
              placeholder="Ask FLC AI"
              className="w-full h-16 px-6 text-lg rounded-2xl bg-secondary/50 border-border focus:bg-background transition-colors"
            />
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button size="icon" variant="ghost" className="h-10 w-10 rounded-full">
                <Plus className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="h-10 w-10 rounded-full">
                <Mic className="h-5 w-5" />
              </Button>
            </div>

            <Button size="icon" className="h-12 w-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white">
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainChat
