import { Card, CardContent } from "@/components/ui/card"
import { Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ThankYouWaitlistPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <div className="mb-8">
          <Image src="/logo.png" alt="FLC Logo" width={80} height={80} className="mx-auto rounded-full mb-6" />
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="h-10 w-10 text-blue-600" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">You're on the Priority List!</h1>

        <Card className="border-blue-200 bg-blue-50 mb-8">
          <CardContent className="p-8">
            <p className="text-lg text-blue-800 mb-4">
              🚀 <strong>Great choice!</strong> You'll be among the first to know when we open more spots.
            </p>
            <p className="text-blue-700">
              We'll notify you immediately when founding member spots become available, plus you'll get exclusive
              updates on our progress.
            </p>
          </CardContent>
        </Card>

        <Link
          href="/"
          className="inline-block group relative overflow-hidden bg-transparent border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
        >
          <span className="relative z-10">Back to Home</span>
        </Link>
      </div>
    </div>
  )
}
