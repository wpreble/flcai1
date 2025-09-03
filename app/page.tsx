import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Zap } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
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
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground leading-tight">
            Stop Chasing Opportunities.
            <br />
            <span className="text-primary">Start Attracting Them.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            Turn your skills and experiences into strategic career leverage using Samuel's story-to-strategy
            methodology, now available 24/7 through AI—and see results in your first 30 days.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="group relative overflow-hidden bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <span className="relative z-10">Secure My Limited Founders Circle Spot for $49</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="group relative overflow-hidden bg-transparent border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <span className="relative z-10">or Join Priority Waitlist</span>
            </button>
          </div>
        </div>
      </section>

      {/* Problem Section - Dark Brown */}
      <section className="bg-amber-900 text-white py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            You're Qualified. You're Ambitious.
            <br />
            <span className="text-amber-200">So Why Are You Still Stuck?</span>
          </h2>

          <Card className="bg-amber-800 border-amber-700 mb-12">
            <CardContent className="p-8">
              <p className="text-lg text-amber-100 italic leading-relaxed">
                "I've sent 200+ applications in 3 months and got 2 interviews. I know I'm doing something wrong but
                don't know what."
              </p>
              <p className="text-sm text-amber-200 mt-4">— Career frustration from professional community</p>
            </CardContent>
          </Card>

          <p className="text-xl text-amber-100 leading-relaxed">
            Most professionals play career <strong className="text-white">defense</strong>—perfect resumes, endless
            applications, hoping someone notices their potential. Meanwhile, strategic professionals play career{" "}
            <strong className="text-yellow-300">offense</strong>.
          </p>
        </div>
      </section>

      {/* Before/After Comparison - White */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            The Difference? <span className="text-primary">Story-Based Positioning</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Career Defense */}
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-red-800">Career Defense (Before)</h3>
                <ul className="space-y-4 text-red-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    Sending 50+ applications weekly
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    Getting ghosted by recruiters
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    Competing on resume keywords
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    Reactive job searching
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    Hoping someone notices potential
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Career Offense */}
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-green-800">Career Offense (After)</h3>
                <ul className="space-y-4 text-green-700">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                    Opportunities reaching out to you
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                    Strategic career positioning
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                    Compelling narrative leverage
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                    Proactive opportunity creation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                    Confident value communication
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <p className="text-xl text-center text-muted-foreground mt-12 leading-relaxed">
            Imagine going from job seeker to opportunity magnet using proven frameworks that transform your scattered
            experiences into compelling career stories.
          </p>
        </div>
      </section>

      {/* Methodology Section - Dark Brown */}
      <section className="bg-amber-900 text-white py-24">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Samuel's Story-to-Strategy Methodology</h2>
          <p className="text-xl text-amber-100 mb-16">Now Available Through AI</p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    1
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-amber-900">Story Archaeology</h3>
                <p className="text-amber-800 leading-relaxed">
                  Uncover and structure your unique career narrative using proven storytelling frameworks that turn
                  scattered experiences into compelling positioning.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    2
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-amber-900">Strategic Positioning</h3>
                <p className="text-amber-800 leading-relaxed">
                  Transform your story into leverage for negotiations, interviews, and opportunities that align with
                  your strengths and purpose.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    3
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-amber-900">Opportunity Alignment</h3>
                <p className="text-amber-800 leading-relaxed">
                  Match your positioned story with roles and paths that amplify your impact—whether advancing in your
                  career or exploring entrepreneurial moves.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section - Light */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8 text-foreground">Join the Founding Circle</h2>

          <Card className="border-primary bg-primary/5 max-w-2xl mx-auto">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-primary mb-2">
                  $49<span className="text-2xl text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground">Locked-in pricing for first 50 members (then $67/month)</p>
              </div>

              <div className="text-left space-y-4 mb-8">
                <h3 className="font-semibold text-lg mb-4">What You Get:</h3>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>14-day free trial (no charge until you continue)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>50 bonus AI coaching credits ($50 value)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Monthly group coaching with Samuel</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Lifetime $49/month pricing lock</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Exclusive founding member status</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Exclusive inside look and use of upcoming features</span>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
                <p className="text-red-800 font-semibold flex items-center">
                  <Zap className="mr-2 h-5 w-5" />
                  Only 50 Founding Circle spots available
                </p>
              </div>

              <button className="group relative overflow-hidden w-full bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white h-14 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 mb-4">
                <span className="relative z-10">Secure My Spot for $49</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <p className="text-sm text-muted-foreground">
                $49 deposit only charged if you continue after 14-day trial
                <br />
                Bonus credits never expire • Cancel anytime
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section - Light Gray */}
      <section className="bg-secondary/30 py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Frequently Asked Questions</h2>

          <div className="space-y-8">
            <Card className="border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  How is Career Navigator different from other career tools?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  There are more tools customized for success which has helped Samuel accelerate their careers, income,
                  and transform their life. However, we will unlock them as we go, like a story. Stick around. Founding
                  Members get first dibs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Can AI really understand complex career situations?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The AI scales Samuel's frameworks, not generic advice. According to Princeton research, structured
                  coaching methodologies improve AI effectiveness by 40%. You're getting proven systems for narrative
                  construction and strategic positioning, plus monthly group sessions with Samuel for complex situations
                  requiring human insight.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Why should I pay before the product is fully built?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your $49 deposit is only charged after your 14-day free trial. You get 50 bonus AI credits ($50 value)
                  and lifetime $49/month pricing before it rises to $67/month. First 50 founding members also shape
                  platform development based on real community needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-foreground">How quickly will I see career results?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Based on Samuel's coaching data, 78% of clients see clarity on career narrative within 7 days. Most
                  attract different opportunities within 30 days. Sustainable transformation typically requires 60-90
                  days as you implement positioning strategies and build momentum through consistent application.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Dark Brown */}
      <section className="bg-amber-900 text-white py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Ready to Stop Chasing and Start Attracting?
          </h2>
          <p className="text-xl text-amber-100 mb-12">
            Join the first 50 strategic career navigators in the Feeling Like Chocolate community.
          </p>

          <button className="group relative overflow-hidden bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 mb-6">
            <span className="relative z-10">Secure My Spot for $49</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <p className="text-amber-200">Only charged if you continue after 14-day trial • 50 bonus credits included</p>
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
