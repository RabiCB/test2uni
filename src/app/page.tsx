


import { GraduationCap, Globe, BookOpen, Users, Star, TrendingUp, CheckCircle, ArrowRight, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {


  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">Test2Uni</h1>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#features"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </a>
              <a
                href="#universities"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Universities
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Success Stories
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </a>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </nav>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left side - Hero content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Master Your Tests,
                  <span className="text-primary block">Find Your University</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Prepare for IELTS, PTE, TOEFL, and more while discovering the perfect university abroad. Your journey
                  to international education starts here.
                </p>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">1000+</div>
                  <div className="text-sm text-muted-foreground">Universities</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                  <BookOpen className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-card-foreground">Test Prep Resources</h3>
                    <p className="text-sm text-muted-foreground">Practice questions, tips, and tutorials</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                  <Globe className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-card-foreground">University Database</h3>
                    <p className="text-sm text-muted-foreground">Browse institutions worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                  <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-card-foreground">Personal Dashboard</h3>
                    <p className="text-sm text-muted-foreground">Track progress and saved content</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                  <GraduationCap className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-card-foreground">Expert Guidance</h3>
                    <p className="text-sm text-muted-foreground">Curated resources and tips</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Enhanced content with Auth form */}
            <div className="lg:pl-8 space-y-8">
              {/* Hero Image/Visual */}
              <div className="relative">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10 border border-border flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/modern-university-study.png"
                    alt="Students preparing for international education"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
               
              </div>

              {/* Key Benefits */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Why Choose Test2Uni?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">Most revelant Questions</span>
                  </div>
                
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                     <span className="text-sm text-muted-foreground">Real-time progress tracking & analytics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">University database</span>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
                      <span className="text-xs font-semibold text-primary">S</span>
                    </div>~
                    <div className="w-8 h-8 rounded-full bg-secondary/20 border-2 border-background flex items-center justify-center">
                      <span className="text-xs font-semibold text-secondary">R</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
                      <span className="text-xs font-semibold text-primary">M</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Join 50,000+ students</div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">4.9/5 rating</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground italic">
                  {`"Test2Uni helped me achieve my target IELTS score and get into my dream university!"`}
                </p>
              </div>

                      
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Everything You Need to Succeed</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive tools and resources designed to help you achieve your international education goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Comprehensive Test Prep</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Access thousands of practice questions, detailed explanations, and expert tips for IELTS, PTE,
                    TOEFL, GRE, and GMAT.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>10,000+ practice questions</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Video tutorials & explanations</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Mock tests & scoring</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-secondary/10">
                      <Globe className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold">Global University Database</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Explore over 1,000 universities worldwide with detailed information about programs, requirements,
                    and deadlines.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span>1,000+ universities</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span>Advanced filtering & search</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span>Application tracking</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Progress Tracking</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Monitor your preparation progress with detailed analytics and personalized study recommendations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Performance analytics</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Study streaks & achievements</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Personalized recommendations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Success Stories</h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of students who achieved their dreams with Test2Uni
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {`"Test2Uni helped me improve my IELTS score from 6.5 to 8.0! The practice questions were exactly like
                    the real exam."`}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">SA</span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Sarah Ahmed</div>
                      <div className="text-xs text-muted-foreground">Now studying at University of Toronto</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {`"The university database saved me months of research. I found the perfect program and got accepted!"`}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-secondary">RK</span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Raj Kumar</div>
                      <div className="text-xs text-muted-foreground">Now studying at Stanford University</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {`"Amazing platform! The progress tracking kept me motivated throughout my PTE preparation journey."`}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">ML</span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Maria Lopez</div>
                      <div className="text-xs text-muted-foreground">Now studying at University of Melbourne</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Choose Your Plan</h2>
              <p className="text-lg text-muted-foreground">Start free and upgrade as you progress in your journey</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold mb-2">Free</h3>
                    <div className="text-3xl font-bold text-foreground mb-1">$0</div>
                    <div className="text-sm text-muted-foreground">Forever</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">100 practice questions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">Basic university search</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">Progress tracking</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full bg-transparent">
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-primary bg-primary/5">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-2">
                      Most Popular
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Pro</h3>
                    <div className="text-3xl font-bold text-foreground mb-1">$29</div>
                    <div className="text-sm text-muted-foreground">per month</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">Unlimited practice questions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">Advanced university filters</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">Mock tests & scoring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">Video tutorials</span>
                    </li>
                  </ul>
                  <Button className="w-full">Start Pro Trial</Button>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold mb-2">Premium</h3>
                    <div className="text-3xl font-bold text-foreground mb-1">$49</div>
                    <div className="text-sm text-muted-foreground">per month</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">Everything in Pro</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">1-on-1 expert guidance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">Application assistance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">Priority support</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full bg-transparent">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Ready to Start Your Journey?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of students who have successfully prepared for their tests and found their dream
                universities with Test2Uni.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-base">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="text-base bg-transparent">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">Test2Uni</span>
              </div>
              <p className="text-sm text-muted-foreground">Your pathway to international education success.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Test Prep
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Universities
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Status
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Test2Uni. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
