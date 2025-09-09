import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ThankYouPaymentPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <div className="mb-8">
          <Image src="/logo.png" alt="FLC Logo" width={80} height={80} className="mx-auto rounded-full mb-6" />
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Welcome to the Founding Circle!</h1>

        <Card className="border-green-200 bg-green-50 mb-8">
          <CardContent className="p-8">
            <p className="text-lg text-green-800 mb-4">
              🎉 <strong>Congratulations!</strong> You've secured your spot as one of the first 50 founding members.
            </p>
            <p className="text-green-700">
              Your journey to strategic career positioning starts now. You'll receive an email shortly with next steps
              and access details.
            </p>
          </CardContent>
        </Card>

        <Link
          href="/"
          className="inline-block group relative overflow-hidden bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
        >
          <span className="relative z-10">Back to Home</span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
      </div>
    </div>
  )
}
