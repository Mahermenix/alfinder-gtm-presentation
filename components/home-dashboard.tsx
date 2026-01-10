'use client'

import { MetricCard } from '@/components/charts/metric-card'
import { FunnelChart } from '@/components/charts/funnel-chart'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Target,
  TrendingUp,
  DollarSign,
  Users,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Zap,
  Globe,
  ShoppingCart,
  Sparkles,
} from 'lucide-react'

export function HomeDashboard() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-primary via-purple-600 to-pink-500 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:32px_32px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm px-4 py-1.5">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              Executive Presentation
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Alfinder Go-to-Market Strategy
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              A comprehensive 6-month strategy to grow from 80 to 300+ paying users
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2"
                onClick={() => scrollToSection('metrics')}
              >
                <Target className="w-5 h-5" />
                View Strategy
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 hover:bg-white/20"
                onClick={() => scrollToSection('research')}
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                Explore Research
              </Button>
            </div>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Executive Summary */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Executive Summary</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AI-powered search that understands Arabic dialects, targeting Saudi & Gulf e-commerce merchants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-500" />
                  Target Market
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Saudi & Gulf e-commerce merchants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Salla/Zid platform users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>1K-10K monthly visitors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Arabic search pain points</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-pink-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-pink-500" />
                  Value Proposition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Understands Arabic dialects (not just MSA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>One-click 5-minute setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>AI-powered continuous learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Reduce lost sales by 20%</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-500" />
                  Market Opportunity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>TAM: 11.7M global merchants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>SAM: 1.2M MENA merchants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Currently: 80 active users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Target: 300 users in 6 months</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Metrics Dashboard */}
        <section id="metrics">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Key Metrics & Targets</h2>
              <p className="text-muted-foreground">6-month performance projections</p>
            </div>
            <Badge variant="gradient" className="text-sm px-4 py-2">
              $20K Budget
            </Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Paying Users (Month 6)"
              value="140-150"
              target="300 (stretch)"
              icon={Users}
              description="Conservative vs stretch goal"
            />
            <MetricCard
              title="Target CPA"
              value={80}
              variant="currency"
              target="$60 (optimized)"
              icon={DollarSign}
              description="Cost per trial signup"
            />
            <MetricCard
              title="LTV:CAC Ratio"
              value="3.7"
              target=">3:1"
              icon={TrendingUp}
              description="Healthy unit economics"
            />
            <MetricCard
              title="Expected ROI"
              value={90}
              variant="percentage"
              target="200% (stretch)"
              icon={BarChart3}
              description="Conservative projection"
            />
          </div>
        </section>

        {/* Unit Economics */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Unit Economics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Monthly Revenue</CardDescription>
                <CardTitle className="text-2xl">$102</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">383 SAR/month per user</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Customer Lifetime</CardDescription>
                <CardTitle className="text-2xl">12 months</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Based on 5% monthly churn</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Lifetime Value</CardDescription>
                <CardTitle className="text-2xl">$1,224</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">383 SAR × 12 months</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Payback Period</CardDescription>
                <CardTitle className="text-2xl">3.2 months</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Time to recover CAC</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Conversion Funnel */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FunnelChart
              stages={[
                {
                  label: 'Trial Signups',
                  value: 100,
                  color: '#6366f1',
                  description: 'Merchant installs Alfinder',
                },
                {
                  label: 'Aha Moment',
                  value: 80,
                  color: '#8b5cf6',
                  description: 'Experiences dialect search success',
                },
                {
                  label: 'Day 7 Payment Prompt',
                  value: 25,
                  color: '#a855f7',
                  description: 'Reaches payment decision point',
                },
                {
                  label: 'Paying Customers',
                  value: 21,
                  color: '#ec4899',
                  description: '21% net conversion (95% retention)',
                },
              ]}
            />

            <div className="space-y-6">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5 text-green-500" />
                    Channel Strategy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Google Search Ads</span>
                      <span className="text-sm text-muted-foreground">60%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 w-[60%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Instagram Ads</span>
                      <span className="text-sm text-muted-foreground">40%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-pink-500 to-pink-600 w-[40%]" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-purple-500" />
                    Organic Channels
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Salla App Store</span>
                    <Badge variant="secondary">40%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Community + Email</span>
                    <Badge variant="secondary">25%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Instagram Organic</span>
                    <Badge variant="secondary">15%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">LinkedIn Organic</span>
                    <Badge variant="secondary">10%</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5">
                <CardContent className="p-6">
                  <p className="text-sm font-medium mb-2">💡 Reinvestment Model</p>
                  <p className="text-sm text-muted-foreground">
                    Every paying user adds $80 back to acquisition budget, creating a self-funding growth loop.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 6-Month Timeline */}
        <section>
          <h2 className="text-3xl font-bold mb-8">6-Month Roadmap</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {[
                  { month: 'Month 1', users: '0 (foundation)', focus: 'Launch all channels', milestone: 'GTM Launch Complete' },
                  { month: 'Month 2', users: '10-20', focus: 'First paying users', milestone: 'Reinvestment Loop Active' },
                  { month: 'Month 3', users: '35-50', focus: 'Validation phase', milestone: 'Break-Even Achieved' },
                  { month: 'Month 4', users: '60-80', focus: 'Scaling winners', milestone: 'Cash Flow Positive' },
                  { month: 'Month 5', users: '90-115', focus: 'Aggressive growth', milestone: 'Conservative Target Close' },
                  { month: 'Month 6', users: '140-150 / 300', focus: 'Final push', milestone: 'Target Achieved' },
                ].map((item, index) => (
                  <div key={item.month} className="relative pl-8 pb-4 last:pb-0">
                    <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center text-white text-xs font-bold">
                      {index + 1}
                    </div>
                    <div className="absolute left-3 top-6 bottom-0 w-0.5 bg-gray-200 last:hidden" />
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <p className="font-semibold">{item.month}</p>
                        <p className="text-sm text-muted-foreground">{item.focus}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">{item.users} users</p>
                        <p className="text-sm text-muted-foreground">{item.milestone}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Budget Allocation */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Budget Allocation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardContent className="p-6">
                <p className="text-blue-100 text-sm mb-1">Paid Media</p>
                <p className="text-3xl font-bold">$8,000</p>
                <p className="text-blue-100 text-sm mt-2">40% of budget</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <CardContent className="p-6">
                <p className="text-purple-100 text-sm mb-1">Content Production</p>
                <p className="text-3xl font-bold">$4,000</p>
                <p className="text-purple-100 text-sm mt-2">20% of budget</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-pink-500 to-pink-600 text-white">
              <CardContent className="p-6">
                <p className="text-pink-100 text-sm mb-1">Freelancers</p>
                <p className="text-3xl font-bold">$5,000</p>
                <p className="text-pink-100 text-sm mt-2">25% of budget</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
              <CardContent className="p-6">
                <p className="text-orange-100 text-sm mb-1">Tools & Software</p>
                <p className="text-3xl font-bold">$2,000</p>
                <p className="text-orange-100 text-sm mt-2">10% of budget</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardContent className="p-6">
                <p className="text-green-100 text-sm mb-1">Retention</p>
                <p className="text-3xl font-bold">$1,000</p>
                <p className="text-green-100 text-sm mt-2">5% of budget</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Findings from Research */}
        <section id="research">
          <h2 className="text-3xl font-bold mb-8">Key Research Findings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Market Research</CardTitle>
                <CardDescription>14 comprehensive studies</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>MENA region shows strong growth potential</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Arabic search gap is underserved market</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>E-commerce adoption accelerating in Gulf</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>AI/ML adoption among merchants growing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Competitive Analysis</CardTitle>
                <CardDescription>13 competitors analyzed</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Algolia dominates but not Arabic-focused</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Lableb is main Arabic competitor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Dialect understanding is key differentiator</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>One-click setup is competitive advantage</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Alfinder Analysis</CardTitle>
                <CardDescription>18 deep-dive studies</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>80 real active users (strong foundation)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>30% churn rate needs attention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Arabic dialect accuracy is excellent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Zero prior marketing (greenfield)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Partnership Opportunities</CardTitle>
                <CardDescription>10 strategic partners identified</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Salla strategic partnership priority</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Zid/Amazon cross-border opportunity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Tabby/Tamara payment gateways</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Digital agency program potential</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12">
          <Card className="bg-gradient-to-br from-primary via-purple-600 to-pink-500 text-white border-0">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Dive Deeper?</h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Explore the complete GTM strategy, research artifacts, and execution plans
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2"
                  onClick={() => scrollToSection('metrics')}
                >
                  <Target className="w-5 h-5" />
                  View Full Strategy
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 hover:bg-white/20"
                  onClick={() => scrollToSection('research')}
                >
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Browse Research
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Alfinder GTM Strategy. Built with comprehensive research and analysis.
            </p>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="text-xs">
                7 GTM Stories
              </Badge>
              <Badge variant="outline" className="text-xs">
                70+ Research Files
              </Badge>
              <Badge variant="outline" className="text-xs">
                $20K Budget
              </Badge>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-br from-primary to-pink-500 text-white shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
    </>
  )
}
