import LeftSidebar from "@/components/left-sidebar"
import MainChat from "@/components/main-chat"
import RightSidebar from "@/components/right-sidebar"

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-background text-foreground">
      <LeftSidebar />
      <MainChat />
      <RightSidebar />
    </div>
  )
}
