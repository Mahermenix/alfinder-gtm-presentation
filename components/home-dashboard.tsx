'use client'

import Image from 'next/image'
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
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'

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
      {/* Hero Section - Futuristic Design */}
      <section id="hero" className="relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#065D7E] via-[#0a7aa0] to-[#11D4D8]" />

        {/* Decorative patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTMwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNDR6Ii8+PC9nPjwvZz48L3N2Zz4=')] [length:60px_60px]" />
        </div>

        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#11D4D8]/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#065D7E]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            {/* Badge */}
            <Badge className="mb-8 bg-white/20 text-white border-white/30 text-sm px-5 py-2 backdrop-blur-sm animate-fade-in">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              Executive Presentation 2026
            </Badge>

            {/* Logo */}
            <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.05s' }}>
              <div className="inline-block relative w-32 h-32 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border-2 border-white/30 p-2 shadow-2xl">
                <div className="w-full h-full rounded-xl bg-white flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://alfinder.ai/dist/img/logo.png"
                    alt="Alfinder Logo"
                    width={128}
                    height={128}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Go-to-Market Strategy
            </h1>

            {/* Subtitle - Made white for better readability */}
            <p className="text-xl sm:text-2xl text-white max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              AI-powered search that understands Arabic dialects. A comprehensive 6-month strategy to scale from 80 to 160-300 paying users.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link href="/gtm">
                <Button
                  size="lg"
                  className="gap-2 bg-white text-[#065D7E] hover:bg-[#F0FBFB] shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 px-8 py-6 text-lg"
                >
                  <Target className="w-5 h-5" />
                  Go-to-Market Strategy
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/research">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-6 text-lg"
                >
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Browse Research
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Wave decoration - Alfinder branded */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F0FBFB" />
          </svg>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Executive Summary - Clean Design */}
        <section className="animate-fade-in">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#11D4D8]/10 text-[#065D7E] border-[#11D4D8]/20 text-xs px-4 py-1.5">
              OVERVIEW
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#065D7E] mb-4">Executive Summary</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              AI-powered search that understands Arabic dialects, targeting Saudi & Gulf e-commerce merchants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#065D7E]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#065D7E]">
                  <div className="p-2 rounded-lg bg-[#065D7E]/10">
                    <Target className="w-5 h-5 text-[#065D7E]" />
                  </div>
                  Target Market
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>Saudi & Gulf e-commerce merchants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>Salla/Zid platform users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>1K-10K monthly visitors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>Arabic search pain points</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#11D4D8]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#065D7E]">
                  <div className="p-2 rounded-lg bg-[#11D4D8]/10">
                    <Zap className="w-5 h-5 text-[#11D4D8]" />
                  </div>
                  Value Proposition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>Understands Arabic dialects (not just MSA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>One-click 5-minute setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>AI-powered continuous learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>Reduce lost sales by 20%</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#065D7E]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#065D7E]">
                  <div className="p-2 rounded-lg bg-[#065D7E]/10">
                    <Globe className="w-5 h-5 text-[#065D7E]" />
                  </div>
                  Market Opportunity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>TAM: 11.7M global merchants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>SAM: 1.2M MENA merchants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>Currently: 80 active users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>Target: 160-300 users in 6 months</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Metrics Dashboard - Alfinder Branded */}
        <section id="metrics" className="animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
            <div>
              <Badge className="mb-3 bg-[#11D4D8]/10 text-[#065D7E] border-[#11D4D8]/20 text-xs px-4 py-1.5">
                METRICS
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#065D7E] mb-2">Key Targets</h2>
              <p className="text-gray-500">6-month performance projections</p>
            </div>
            <Badge className="text-sm px-5 py-2.5 bg-gradient-to-r from-[#065D7E] to-[#11D4D8] text-white border-0 shadow-lg">
              $20K Budget
            </Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Paying Users (Month 6)"
              value="160-300"
              target="Conservative: 160, Stretch: 300"
              icon={Users}
              description="6-month target"
            />
            <MetricCard
              title="Target CPA"
              value={40}
              variant="currency"
              target="$35 (optimized)"
              icon={DollarSign}
              description="Cost per trial signup"
            />
            <MetricCard
              title="LTV:CAC Ratio"
              value="5.2"
              target=">3:1"
              icon={TrendingUp}
              description="Healthy unit economics (net LTV)"
            />
            <MetricCard
              title="Expected ROI"
              value={1.8}
              variant="percentage"
              target="250% (stretch)"
              icon={BarChart3}
              description="Conservative projection (6-month)"
            />
          </div>
        </section>

        {/* Unit Economics - Clean Cards */}
        <section className="animate-fade-in">
          <div className="mb-12">
            <Badge className="mb-3 bg-[#11D4D8]/10 text-[#065D7E] border-[#11D4D8]/20 text-xs px-4 py-1.5">
              ECONOMICS
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#065D7E]">Unit Economics</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardDescription className="text-gray-500">Monthly Revenue (Gross)</CardDescription>
                <CardTitle className="text-2xl text-[#065D7E]">$102</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">383 SAR/month per user</p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardDescription className="text-gray-500">Monthly Contribution</CardDescription>
                <CardTitle className="text-2xl text-[#065D7E]">$80</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">After fees, hosting, support (~22% margin)</p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardDescription className="text-gray-500">Net Lifetime Value</CardDescription>
                <CardTitle className="text-2xl text-[#065D7E]">$1,040</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">$80 × 13 months (realistic retention)</p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardDescription className="text-gray-500">Payback Period</CardDescription>
                <CardTitle className="text-2xl text-[#065D7E]">2.5 months</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">$200 CAC ÷ $80/month contribution</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Conversion Funnel - Branded Colors */}
        <section className="animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FunnelChart
              stages={[
                {
                  label: 'Trial Signups',
                  value: 100,
                  color: '#065D7E',
                  description: 'Merchant installs Alfinder',
                },
                {
                  label: 'Aha Moment',
                  value: 80,
                  color: '#11D4D8',
                  description: 'Experiences dialect search success',
                },
                {
                  label: 'Day 7 Payment Prompt',
                  value: 33,
                  color: '#0a7aa0',
                  description: 'Reaches payment decision point',
                },
                {
                  label: 'Paying Customers',
                  value: 33,
                  color: '#044256',
                  description: '33% net conversion (5 paying per 15 trials)',
                },
              ]}
            />

            <div className="space-y-6">
              {/* Channel Strategy Card */}
              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#11D4D8]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#065D7E]">
                    <div className="p-2 rounded-lg bg-[#11D4D8]/10">
                      <BarChart3 className="w-5 h-5 text-[#11D4D8]" />
                    </div>
                    Channel Strategy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Google Search Ads</span>
                      <span className="text-sm text-[#11D4D8] font-semibold">60%</span>
                    </div>
                    <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#065D7E] to-[#11D4D8] w-[60%] rounded-full shadow-lg shadow-[#11D4D8]/30" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Instagram Ads</span>
                      <span className="text-sm text-[#11D4D8] font-semibold">40%</span>
                    </div>
                    <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#11D4D8] to-[#065D7E] w-[40%] rounded-full shadow-lg shadow-[#11D4D8]/30" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Organic Channels Card */}
              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#065D7E]">
                    <div className="p-2 rounded-lg bg-[#065D7E]/10">
                      <Zap className="w-5 h-5 text-[#065D7E]" />
                    </div>
                    Organic Channels
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-[#F0FBFB] transition-colors">
                    <span className="text-sm text-gray-700">Salla App Store</span>
                    <Badge className="bg-[#11D4D8]/10 text-[#11D4D8] border-[#11D4D8]/20">40%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-[#F0FBFB] transition-colors">
                    <span className="text-sm text-gray-700">Community + Email</span>
                    <Badge className="bg-[#11D4D8]/10 text-[#11D4D8] border-[#11D4D8]/20">25%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-[#F0FBFB] transition-colors">
                    <span className="text-sm text-gray-700">Instagram Organic</span>
                    <Badge className="bg-[#11D4D8]/10 text-[#11D4D8] border-[#11D4D8]/20">15%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-[#F0FBFB] transition-colors">
                    <span className="text-sm text-gray-700">LinkedIn Organic</span>
                    <Badge className="bg-[#11D4D8]/10 text-[#11D4D8] border-[#11D4D8]/20">10%</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Reinvestment Model */}
              <Card className="bg-white border border-[#11D4D8]/20 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#11D4D8]/20">
                      <Sparkles className="w-5 h-5 text-[#11D4D8]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#065D7E] mb-1">Reinvestment Model</p>
                      <p className="text-sm text-gray-600">
                        Every paying user adds $50 back to acquisition budget (first 2.5 months of margin), creating a self-funding growth loop.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 6-Month Timeline - Modern Design */}
        <section className="animate-fade-in">
          <div className="mb-12">
            <Badge className="mb-3 bg-[#11D4D8]/10 text-[#065D7E] border-[#11D4D8]/20 text-xs px-4 py-1.5">
              ROADMAP
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#065D7E]">6-Month Roadmap</h2>
          </div>

          <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-8">
              <div className="space-y-6">
                {[
                  { month: 'Month 1', users: '0 (foundation)', focus: 'Launch all channels', milestone: 'GTM Launch Complete', color: 'from-[#065D7E] to-[#11D4D8]' },
                  { month: 'Month 2', users: '10-20', focus: 'First paying users', milestone: 'Reinvestment Loop Active', color: 'from-[#11D4D8] to-[#0a7aa0]' },
                  { month: 'Month 3', users: '40-60', focus: 'Validation phase', milestone: 'Break-Even Achieved', color: 'from-[#065D7E] to-[#11D4D8]' },
                  { month: 'Month 4', users: '80-110', focus: 'Scaling winners', milestone: 'Cash Flow Positive', color: 'from-[#11D4D8] to-[#0a7aa0]' },
                  { month: 'Month 5', users: '120-140', focus: 'Aggressive growth', milestone: 'Conservative Target Close', color: 'from-[#065D7E] to-[#11D4D8]' },
                  { month: 'Month 6', users: '160-300', focus: 'Final push', milestone: 'Target Achieved', color: 'from-[#11D4D8] to-[#065D7E]' },
                ].map((item, index) => (
                  <div key={item.month} className="relative pl-10 pb-6 last:pb-0">
                    {/* Timeline indicator */}
                    <div className={`absolute left-0 top-1 w-10 h-10 rounded-xl bg-gradient-to-br shadow-lg flex items-center justify-center text-white text-sm font-bold ${item.color}`}>
                      {index + 1}
                    </div>

                    {/* Timeline line */}
                    <div className="absolute left-5 top-11 bottom-0 w-0.5 bg-gradient-to-b from-[#11D4D8] to-[#065D7E] last:hidden opacity-30" />

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <p className="font-bold text-[#065D7E] text-lg">{item.month}</p>
                        <p className="text-sm text-gray-500">{item.focus}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-[#11D4D8]">{item.users} users</p>
                        <Badge variant="outline" className="text-xs border-[#11D4D8]/30 text-[#065D7E]">
                          {item.milestone}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Budget Allocation - Branded Gradient Cards */}
        <section className="animate-fade-in">
          <div className="mb-12">
            <Badge className="mb-3 bg-[#11D4D8]/10 text-[#065D7E] border-[#11D4D8]/20 text-xs px-4 py-1.5">
              BUDGET
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#065D7E]">Budget Allocation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <Card className="bg-gradient-to-br from-[#065D7E] to-[#0a7aa0] text-white border-0 shadow-xl shadow-[#065D7E]/30 hover-lift">
              <CardContent className="p-6">
                <p className="text-white/70 text-sm mb-2">Paid Media</p>
                <p className="text-3xl font-bold mb-1">$12,000</p>
                <p className="text-white/70 text-sm">60% of budget</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#11D4D8] to-[#0a7aa0] text-white border-0 shadow-xl shadow-[#11D4D8]/30 hover-lift">
              <CardContent className="p-6">
                <p className="text-white/70 text-sm mb-2">Content Production</p>
                <p className="text-3xl font-bold mb-1">$3,000</p>
                <p className="text-white/70 text-sm">15% of budget</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#065D7E] to-[#11D4D8] text-white border-0 shadow-xl shadow-[#11D4D8]/30 hover-lift">
              <CardContent className="p-6">
                <p className="text-white/70 text-sm mb-2">Freelancers</p>
                <p className="text-3xl font-bold mb-1">$3,000</p>
                <p className="text-white/70 text-sm">15% of budget</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#11D4D8] to-[#065D7E] text-white border-0 shadow-xl shadow-[#11D4D8]/30 hover-lift">
              <CardContent className="p-6">
                <p className="text-white/70 text-sm mb-2">Tools & Software</p>
                <p className="text-3xl font-bold mb-1">$1,000</p>
                <p className="text-white/70 text-sm">5% of budget</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#0a7aa0] to-[#065D7E] text-white border-0 shadow-xl shadow-[#065D7E]/30 hover-lift">
              <CardContent className="p-6">
                <p className="text-white/70 text-sm mb-2">Retention</p>
                <p className="text-3xl font-bold mb-1">$1,000</p>
                <p className="text-white/70 text-sm">5% of budget</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Research Findings - Clean Layout */}
        <section id="research" className="animate-fade-in">
          <div className="mb-12">
            <Badge className="mb-3 bg-[#11D4D8]/10 text-[#065D7E] border-[#11D4D8]/20 text-xs px-4 py-1.5">
              RESEARCH
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#065D7E] mb-4">Key Research Findings</h2>
            <p className="text-gray-500 max-w-2xl">Comprehensive analysis from 70+ research documents</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow border-t-4 border-t-[#065D7E]">
              <CardHeader>
                <CardTitle className="text-[#065D7E]">Market Research</CardTitle>
                <CardDescription>14 comprehensive studies</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>MENA region shows strong growth potential</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>Arabic search gap is underserved market</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>E-commerce adoption accelerating in Gulf</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>AI/ML adoption among merchants growing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow border-t-4 border-t-[#11D4D8]">
              <CardHeader>
                <CardTitle className="text-[#065D7E]">Competitive Analysis</CardTitle>
                <CardDescription>13 competitors analyzed</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>Algolia dominates but not Arabic-focused</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>Lableb is main Arabic competitor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>Dialect understanding is key differentiator</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>One-click setup is competitive advantage</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow border-t-4 border-t-[#065D7E]">
              <CardHeader>
                <CardTitle className="text-[#065D7E]">Alfinder Analysis</CardTitle>
                <CardDescription>18 deep-dive studies</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>80 real active users (strong foundation)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>30% churn rate needs attention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>Arabic dialect accuracy is excellent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>Zero prior marketing (greenfield)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow border-t-4 border-t-[#11D4D8]">
              <CardHeader>
                <CardTitle className="text-[#065D7E]">Partnership Opportunities</CardTitle>
                <CardDescription>10 strategic partners identified</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>Salla strategic partnership priority</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>Zid/Amazon cross-border opportunity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>Tabby/Tamara payment gateways</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>Digital agency program potential</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action - Futuristic Gradient */}
        <section className="text-center py-16 animate-fade-in">
          <Card className="bg-gradient-to-br from-[#065D7E] via-[#11D4D8] to-[#065D7E] text-white border-0 shadow-2xl shadow-[#11D4D8]/30 overflow-hidden relative">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIiIGZpbGw9IiNmZmZmZmYiLz48L2c+PC9zdmc+')] [length:40px_40px]" />
            </div>

            <CardContent className="p-12 relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Dive Deeper?</h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Explore the complete GTM strategy, research artifacts, and execution plans
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="gap-2 bg-white text-[#065D7E] hover:bg-[#F0FBFB] shadow-xl hover:scale-105 transition-all duration-300 px-8 py-6 text-lg"
                  onClick={() => scrollToSection('metrics')}
                >
                  <Target className="w-5 h-5" />
                  View Full Strategy
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 backdrop-blur-sm shadow-lg hover:scale-105 transition-all duration-300 px-8 py-6 text-lg"
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

      {/* Footer - Clean Design */}
      <footer className="border-t border-[#11D4D8]/10 bg-white/50 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              Made with love by <a href="https://mahher.com" target="_blank" rel="noopener noreferrer" className="text-[#11D4D8] hover:text-[#065D7E] font-medium transition-colors">Mo Maher</a>
            </p>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="text-xs border-[#11D4D8]/20 text-[#065D7E]">
                7 GTM Stories
              </Badge>
              <Badge variant="outline" className="text-xs border-[#11D4D8]/20 text-[#065D7E]">
                70+ Research Files
              </Badge>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button - Futuristic */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 rounded-2xl bg-gradient-to-br from-[#065D7E] to-[#11D4D8] text-white shadow-xl shadow-[#11D4D8]/30 hover:shadow-2xl hover:shadow-[#11D4D8]/50 transition-all duration-300 hover:scale-110 active:scale-95 animate-fade-in"
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
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
