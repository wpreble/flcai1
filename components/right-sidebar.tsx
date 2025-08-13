import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, FileText, TrendingUp, MessageCircle, DollarSign, Rocket, ChevronDown } from "lucide-react"

const RightSidebar = () => {
  return (
    <aside className="w-80 flex-shrink-0 bg-card border-l border-border flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <h2 className="text-lg font-semibold text-foreground">Framework Vault</h2>
        <p className="text-sm text-muted-foreground">Quick Access & Analysis</p>
      </div>

      {/* Framework Tools */}
      <div className="flex-1 p-4 space-y-2 overflow-y-auto">
        <Button variant="outline" className="w-full justify-start h-12 bg-background hover:bg-secondary border-border">
          <Target className="mr-3 h-4 w-4 text-primary flex-shrink-0" />
          <span className="text-sm font-medium">Career Alignment & Goal Setting</span>
        </Button>

        <Button variant="outline" className="w-full justify-start h-12 bg-background hover:bg-secondary border-border">
          <FileText className="mr-3 h-4 w-4 text-primary flex-shrink-0" />
          <span className="text-sm font-medium">Resume & Job Search Engine</span>
        </Button>

        <Button variant="outline" className="w-full justify-start h-12 bg-background hover:bg-secondary border-border">
          <TrendingUp className="mr-3 h-4 w-4 text-primary flex-shrink-0" />
          <span className="text-sm font-medium">Adversity × Opportunity Tool</span>
        </Button>

        <Button variant="outline" className="w-full justify-start h-12 bg-background hover:bg-secondary border-border">
          <MessageCircle className="mr-3 h-4 w-4 text-primary flex-shrink-0" />
          <span className="text-sm font-medium">Interview & Evaluation Prep</span>
        </Button>

        <Button variant="outline" className="w-full justify-start h-12 bg-background hover:bg-secondary border-border">
          <DollarSign className="mr-3 h-4 w-4 text-primary flex-shrink-0" />
          <span className="text-sm font-medium">Offer, Negotiation & Decision</span>
        </Button>

        <Button variant="outline" className="w-full justify-start h-12 bg-background hover:bg-secondary border-border">
          <Rocket className="mr-3 h-4 w-4 text-primary flex-shrink-0" />
          <span className="text-sm font-medium">Onboarding & Career Growth</span>
        </Button>
      </div>

      {/* Global Notes */}
      <div className="p-4 border-t border-border flex-shrink-0">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-muted-foreground">Global Notes</h3>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </div>

        <Card className="bg-secondary/50 border-border">
          <CardContent className="p-3">
            <p className="text-xs text-muted-foreground text-center">Start a chat to create notes</p>
          </CardContent>
        </Card>
      </div>
    </aside>
  )
}

export default RightSidebar
