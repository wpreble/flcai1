import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Crown, User, Shield } from "lucide-react"
import Image from "next/image"

export default function ValidationPage() {
  return (
    <div className="min-h-screen">
      {/* Header - Light */}
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="FLC Logo" width={40} height={40} className="rounded-full" />
              <span className="text-xl font-bold text-primary">Feeling Like Chocolate</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Light */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Badge variant="outline" className="text-sm px-4 py-2 mb-8">
            FLC AI —
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground">Early Access</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Be among the first to experience FLC AI — a next-generation productivity platform that combines career
            growth, business strategy, and resilience-building into one integrated system.
          </p>
        </div>
      </section>

      {/* CTA Section - Dark Brown */}
      <section className="bg-amber-900 text-white py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          {/* Decorative Circle with Star */}
          <div className="flex justify-center mb-12">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <Star className="h-8 w-8 text-amber-900 fill-current" />
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white">
            This is your call to
            <br />
            Excellence.
          </h2>

          <div className="space-y-6 text-xl text-amber-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            <p>
              <strong className="text-white">Streamline your career development</strong> with AI-powered goal alignment,
              resume optimization, and opportunity discovery.
            </p>
            <p>
              <strong className="text-white">Turn challenges into catalysts for growth</strong> using our Adversity ×
              Opportunity framework.
            </p>
            <p>
              <strong className="text-white">Master your professional craft</strong> through personalized coaching,
              actionable playbooks, and data-driven insights.
            </p>
            <p>
              <strong className="text-white">Connect with a community</strong> of ambitious professionals and creators
              building their next chapter.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-amber-800 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Join Waitlist
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-amber-900 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Get Priority Access
            </Button>
          </div>
        </div>
      </section>

      {/* Waitlist Form Section - Light */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="border-border">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6">Join the Waitlist</h3>
              <p className="text-muted-foreground mb-6 text-lg">Enter your email below to reserve your spot.</p>
              <p className="text-muted-foreground mb-8">
                You'll receive early access updates, exclusive invites, and transformative resources from the FLC AI
                team.
              </p>

              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-3">
                    Email *
                  </label>
                  <Input id="email" type="email" placeholder="admin@masterymade.com" className="w-full h-12 text-lg" />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-amber-800 hover:bg-amber-700 text-white h-12 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Priority Access Section - Dark Brown */}
      <section className="bg-amber-900 py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-6 text-amber-900">Want to Skip the Line?</h3>
              <p className="text-amber-800 mb-8 text-lg leading-relaxed">
                Make a fully refundable, good-faith deposit to move to the top of the waitlist. If you decide to
                continue, your deposit covers your first month's membership in FLC AI. If you change your mind, you can
                request a full refund at any time—no questions asked.
              </p>

              <Button
                size="lg"
                className="bg-amber-800 hover:bg-amber-700 text-white mb-6 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Get Priority Access
              </Button>

              <p className="text-sm text-amber-700">Powered by Stripe • 100% Refundable</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section - Light */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h3 className="text-3xl font-bold text-center mb-16">How Early Access Works:</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                    <Crown className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-4">Founding Member</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Founding members who pledge support will be eligible for future rewards including early access to new
                  features, inclusion in a private founders community chat, and more.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-4">Early Access</h4>
                <p className="text-muted-foreground leading-relaxed">
                  New members are invited from the waitlist in small groups each week. Your deposit immediately covers
                  your subscription beginning upon access.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-4">100% Refundable</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Deposits guarantee you're first in line and are 100% refundable before you activate your membership.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section - Medium Dark */}
      <section className="bg-amber-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white text-lg">
            Have questions or need support?
            <br />
            Email:{" "}
            <a href="mailto:admin@masterymade.com" className="text-amber-200 hover:text-amber-100 hover:underline">
              admin@masterymade.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer - Darkest */}
      <footer className="bg-amber-950 text-amber-300">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm">© 2025 FLC AI. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
