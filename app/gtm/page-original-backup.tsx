'use client'

import { useState, useEffect } from 'react'
import { Sidebar } from '@/components/sidebar'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ArrowRight,
  ArrowLeft,
  Target,
  TrendingUp,
  DollarSign,
  Users,
  Calendar,
  BarChart3,
  CheckCircle2,
  Zap,
  Rocket,
  AlertTriangle,
  PieChart,
  Activity,
  Award,
  Play,
  Pause,
  Shield,
  XCircle,
  LucideIcon,
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

// ============================================
// TYPES
// ============================================

interface Slide {
  id: string
  title: string
  category: string
  icon: LucideIcon
  gradient: string
  phase: string
}

// ============================================
// SLIDES DATA - CEO GTM STRATEGY REVIEW
// ============================================

const slides: Slide[] = [
  // PHASE 1: EXECUTIVE SUMMARY (Slides 1-3)
  {
    id: 'executive-summary',
    title: 'GTM Strategy at a Glance',
    category: 'Executive Summary',
    icon: Target,
    gradient: 'from-[#065D7E] via-[#087a9e] to-[#11D4D8]',
    phase: '1',
  },
  {
    id: 'targets-metrics',
    title: '6-Month Targets & Success Metrics',
    category: 'Executive Summary',
    icon: BarChart3,
    gradient: 'from-[#065D7E] to-[#11D4D8]',
    phase: '1',
  },
  {
    id: 'investment-roi',
    title: 'Investment & ROI Summary',
    category: 'Executive Summary',
    icon: DollarSign,
    gradient: 'from-[#0a7aa0] via-[#11D4D8] to-[#087a9e]',
    phase: '1',
  },

  // PHASE 2: STRATEGY (Slides 4-6)
  {
    id: 'channel-strategy',
    title: 'Acquisition Strategy: 60% Paid + 40% Organic',
    category: 'Strategy',
    icon: PieChart,
    gradient: 'from-[#11D4D8] via-[#065D7E] to-[#0a7aa0]',
    phase: '2',
  },
  {
    id: 'content-strategy',
    title: 'Content Engine: What We\'re Saying',
    category: 'Strategy',
    icon: Zap,
    gradient: 'from-[#065D7E] to-[#11D4D8]',
    phase: '2',
  },
  {
    id: 'positioning-messaging',
    title: 'Positioning & Messaging Framework',
    category: 'Strategy',
    icon: Target,
    gradient: 'from-[#0a7aa0] via-[#065D7E] to-[#11D4D8]',
    phase: '2',
  },

  // PHASE 3: EXECUTION PLAN (Slides 7-11)
  {
    id: 'timeline-milestones',
    title: '6-Month Timeline & Key Milestones',
    category: 'Execution Plan',
    icon: Calendar,
    gradient: 'from-[#065D7E] to-[#11D4D8]',
    phase: '3',
  },
  {
    id: 'month-1-detail',
    title: 'Month 1: Foundation Sprint (Day-by-Day)',
    category: 'Execution Plan',
    icon: Rocket,
    gradient: 'from-[#11D4D8] via-[#0a7aa0] to-[#065D7E]',
    phase: '3',
  },
  {
    id: 'kpis-tracking',
    title: 'KPIs & Weekly Tracking Cadence',
    category: 'Execution Plan',
    icon: BarChart3,
    gradient: 'from-[#065D7E] to-[#11D4D8]',
    phase: '3',
  },
  {
    id: 'budget-allocation',
    title: 'Budget Allocation & Spend Phasing',
    category: 'Execution Plan',
    icon: DollarSign,
    gradient: 'from-[#11D4D8] to-[#065D7E]',
    phase: '3',
  },
  {
    id: 'team-roles',
    title: 'Team Structure & Roles',
    category: 'Execution Plan',
    icon: Users,
    gradient: 'from-[#0a7aa0] via-[#11D4D8] to-[#065D7E]',
    phase: '3',
  },

  // PHASE 4: RISK MANAGEMENT (Slides 12-13)
  {
    id: 'risk-mitigation',
    title: 'Top 5 Risks & Mitigation Plans',
    category: 'Risk Management',
    icon: Shield,
    gradient: 'from-[#065D7E] via-[#11D4D8] to-[#0a7aa0]',
    phase: '4',
  },
  {
    id: 'decision-frameworks',
    title: 'Month 3 Pivot Framework & Decision Gates',
    category: 'Risk Management',
    icon: Activity,
    gradient: 'from-[#11D4D8] to-[#065D7E]',
    phase: '4',
  },

  // PHASE 5: THE ASK (Slide 14)
  {
    id: 'approval-next-steps',
    title: 'Approval Required & Next Steps',
    category: 'The Ask',
    icon: CheckCircle2,
    gradient: 'from-[#065D7E] via-[#11D4D8] to-[#0a7aa0]',
    phase: '5',
  },
]

const phases = [
  'Phase 1: Executive Summary',
  'Phase 2: Strategy',
  'Phase 3: Execution Plan',
  'Phase 4: Risk Management',
  'Phase 5: The Ask',
]

// ============================================
// SLIDE CONTENT RENDERERS
// ============================================

const renderSlideContent = (slideId: string) => {
  switch (slideId) {
    // ============================================
    // PHASE 1: EXECUTIVE SUMMARY
    // ============================================
    case 'executive-summary':
      return (
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-[#065D7E] text-sm font-semibold tracking-wider uppercase mb-3">6-Month GTM Strategy</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Strategy at a Glance</h2>
            <p className="text-gray-500 text-lg">Alfinder Go-to-Market Plan | CEO Review</p>
          </div>

          {/* One-Pager Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#065D7E]/10">
                    <Target className="w-5 h-5 text-[#065D7E]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#065D7E] text-xs font-semibold mb-1 tracking-wider uppercase">Target ICP</p>
                    <p className="text-gray-900 font-bold text-lg mb-1">Saudi/Gulf Merchants</p>
                    <p className="text-gray-500 text-sm">Salla/Zid platforms, 1K-10K monthly visitors, 10-100K SAR/month</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#11D4D8]/10">
                    <TrendingUp className="w-5 h-5 text-[#11D4D8]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#11D4D8] text-xs font-semibold mb-1 tracking-wider uppercase">Growth Target</p>
                    <p className="text-gray-900 font-bold text-lg mb-1">140-150 paying users</p>
                    <p className="text-gray-500 text-sm">Conservative: $46K revenue | Stretch: 300 users, $93K revenue</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#0a7aa0]/10">
                    <PieChart className="w-5 h-5 text-[#0a7aa0]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#0a7aa0] text-xs font-semibold mb-1 tracking-wider uppercase">Channel Mix</p>
                    <p className="text-gray-900 font-bold text-lg mb-1">60% Paid + 40% Organic</p>
                    <p className="text-gray-500 text-sm">Google/Instagram ads + Salla App Store + Content + Community</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#065D7E]/10">
                    <DollarSign className="w-5 h-5 text-[#065D7E]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#065D7E] text-xs font-semibold mb-1 tracking-wider uppercase">Unit Economics</p>
                    <p className="text-gray-900 font-bold text-lg mb-1">3.7x LTV:CAC, 3.2mo payback</p>
                    <p className="text-gray-500 text-sm">$1,224 LTV, $330 CAC, 90-200% ROI over 6 months</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* The Core Message */}
          <Card className="border-0 shadow-md bg-gradient-to-br from-[#F0FBFB] to-white">
            <CardContent className="p-8">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-[#11D4D8]/10 flex-shrink-0">
                  <Target className="w-7 h-7 text-[#11D4D8]" />
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-xl mb-3">Core Strategy</p>
                  <p className="text-gray-600 leading-relaxed">
                    Launch balanced acquisition (paid + organic) targeting Saudi/Gulf Salla/Zid merchants.
                    Achieve 140-150 paying users in 6 months with $20K investment. Break-even by Month 3.
                    Self-funding from Month 4 via reinvestment loop.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-5 text-center">
                <p className="text-3xl font-bold text-[#11D4D8] mb-1">$20K</p>
                <p className="text-gray-500 text-sm font-medium">Total Investment</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-5 text-center">
                <p className="text-3xl font-bold text-[#065D7E] mb-1">$80</p>
                <p className="text-gray-500 text-sm font-medium">Target CPA</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-5 text-center">
                <p className="text-3xl font-bold text-[#0a7aa0] mb-1">25%</p>
                <p className="text-gray-500 text-sm font-medium">Trial Conversion</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-5 text-center">
                <p className="text-3xl font-bold text-[#11D4D8] mb-1">&lt;5%</p>
                <p className="text-gray-500 text-sm font-medium">Monthly Churn</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )

    case 'targets-metrics':
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-[#11D4D8] text-lg mb-2 font-semibold">SUCCESS METRICS</p>
            <h2 className="text-4xl font-bold text-gray-900">6-Month Targets & KPIs</h2>
          </div>

          {/* Primary Success Metrics */}
          <Card className="glass-card border-l-4 border-l-[#11D4D8]">
            <CardContent className="p-6">
              <p className="text-[#11D4D8] text-sm font-semibold mb-4">PRIMARY SUCCESS METRIC</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-900 font-bold text-2xl mb-1">Paying Users</p>
                  <p className="text-gray-600">From 0 to 140-150 in 6 months</p>
                </div>
                <div className="text-right">
                  <p className="text-5xl font-bold text-gray-900">140-150</p>
                  <p className="text-gray-500 text-sm">conservative</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Supporting Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="glass-card">
              <CardContent className="p-5">
                <p className="text-gray-500 text-sm mb-2">REVENUE (Month 6)</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <p className="text-3xl font-bold text-gray-900">$14-15K</p>
                  <p className="text-gray-600 text-sm">MRR</p>
                </div>
                <p className="text-gray-600 text-sm">Conservative: $46K total | Stretch: $93K total</p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-5">
                <p className="text-gray-500 text-sm mb-2">TRIAL SIGNUPS (6 months)</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <p className="text-3xl font-bold text-gray-900">560-600</p>
                  <p className="text-gray-600 text-sm">total trials</p>
                </div>
                <p className="text-gray-600 text-sm">25% trial-to-paid conversion rate</p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-5">
                <p className="text-gray-500 text-sm mb-2">CPA (Blended)</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <p className="text-3xl font-bold text-gray-900">&lt;$80</p>
                  <p className="text-gray-600 text-sm">target</p>
                </div>
                <p className="text-gray-600 text-sm">Stretch goal: &lt;$60 through optimization</p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-5">
                <p className="text-gray-500 text-sm mb-2">MONTHLY CHURN</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <p className="text-3xl font-bold text-gray-900">&lt;5%</p>
                  <p className="text-gray-600 text-sm">target</p>
                </div>
                <p className="text-gray-600 text-sm">Critical for sustainable growth</p>
              </CardContent>
            </Card>
          </div>

          {/* Monthly Milestones */}
          <Card className="glass-card">
            <CardContent className="p-6">
              <p className="text-gray-900 font-semibold mb-4">MONTHLY MILESTONES</p>
              <div className="space-y-2">
                {[
                  { month: 'M1', metric: '75-90 trials', milestone: 'GTM Launch Complete' },
                  { month: 'M2', metric: '10-20 paying users', milestone: 'Reinvestment Loop Active' },
                  { month: 'M3', metric: '35-50 paying users', milestone: 'Break-Even Achieved' },
                  { month: 'M4', metric: '60-80 paying users', milestone: 'Cash Flow Positive' },
                  { month: 'M5', metric: '90-115 paying users', milestone: 'Conservative Target Close' },
                  { month: 'M6', metric: '140-150 paying users', milestone: 'Target Achieved ✓' },
                ].map((item) => (
                  <div key={item.month} className="flex items-center justify-between p-3 rounded-lg bg-white/10">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-[#065D7E] text-gray-900">{item.month}</Badge>
                      <span className="text-gray-900 font-semibold">{item.metric}</span>
                    </div>
                    <Badge className="bg-white/20 text-gray-900 border-white/30 text-xs">{item.milestone}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )

    case 'investment-roi':
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-[#11D4D8] text-lg mb-2 font-semibold">FINANCIAL SUMMARY</p>
            <h2 className="text-4xl font-bold text-gray-900">Investment & ROI</h2>
          </div>

          {/* The Bottom Line */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="glass-card border-l-4 border-l-[#065D7E]">
              <CardContent className="p-6 text-center">
                <p className="text-gray-500 text-sm mb-2">INVESTMENT</p>
                <p className="text-4xl font-bold text-gray-900 mb-1">$20,000</p>
                <p className="text-gray-600 text-sm">6-month runway</p>
              </CardContent>
            </Card>

            <Card className="glass-card border-l-4 border-l-[#11D4D8]">
              <CardContent className="p-6 text-center">
                <p className="text-gray-500 text-sm mb-2">CONSERVATIVE RETURN</p>
                <p className="text-4xl font-bold text-gray-900 mb-1">$46,000</p>
                <p className="text-gray-600 text-sm">90% ROI</p>
              </CardContent>
            </Card>

            <Card className="glass-card border-l-4 border-l-[#0a7aa0]">
              <CardContent className="p-6 text-center">
                <p className="text-gray-500 text-sm mb-2">STRETCH RETURN</p>
                <p className="text-4xl font-bold text-gray-900 mb-1">$93,000</p>
                <p className="text-gray-600 text-sm">200% ROI</p>
              </CardContent>
            </Card>
          </div>

          {/* Unit Economics Deep Dive */}
          <Card className="glass-card">
            <CardContent className="p-6">
              <p className="text-gray-900 font-semibold mb-4">UNIT ECONOMICS</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-gray-500 text-sm">LTV (Lifetime Value)</p>
                  <p className="text-2xl font-bold text-gray-900">$1,224</p>
                  <p className="text-gray-600 text-xs">383 SAR × 12 months</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">CAC (Acquisition Cost)</p>
                  <p className="text-2xl font-bold text-gray-900">$330</p>
                  <p className="text-gray-600 text-xs">Per paying user</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">LTV:CAC Ratio</p>
                  <p className="text-2xl font-bold text-[#11D4D8]">3.7:1</p>
                  <p className="text-gray-600 text-xs">Healthy (&gt;3:1)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payback Timeline */}
          <Card className="glass-card border-l-4 border-l-[#11D4D8]">
            <CardContent className="p-6">
              <p className="text-gray-900 font-semibold mb-4">PAYBACK TIMELINE</p>
              <div className="grid grid-cols-4 gap-3 text-center">
                <div>
                  <p className="text-gray-500 text-xs mb-1">MONTH 3</p>
                  <p className="text-xl font-bold text-[#0a7aa0]">Break-Even</p>
                  <p className="text-gray-600 text-xs mt-1">Investment recovered</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">MONTH 4</p>
                  <p className="text-xl font-bold text-[#11D4D8]">Cash Flow +</p>
                  <p className="text-gray-600 text-xs mt-1">Self-funding starts</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">MONTH 6</p>
                  <p className="text-xl font-bold text-[#065D7E]">2.3-4.6x</p>
                  <p className="text-gray-600 text-xs mt-1">Total return</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">PAYBACK</p>
                  <p className="text-xl font-bold text-[#11D4D8]">3.2 mo</p>
                  <p className="text-gray-600 text-xs mt-1">Per customer</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Self-Funding Loop */}
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Activity className="w-8 h-8 text-[#11D4D8] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[#065D7E] font-bold text-lg mb-2">Self-Funding Loop</p>
                  <p className="text-gray-900/90">
                    Each paying user generates <strong className="text-[#11D4D8]">$80/month</strong> reinvestment.
                    This reduces effective CPA from $80 to ~$62 over time. By Month 4, the strategy pays for itself.
                    <strong className="text-[#065D7E]"> Sustainable growth engine.</strong>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )

    // ============================================
    // PHASE 2: STRATEGY
    // ============================================
    case 'channel-strategy':
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-[#11D4D8] text-lg mb-2 font-semibold">ACQUISITION STRATEGY</p>
            <h2 className="text-4xl font-bold text-gray-900">60% Paid + 40% Organic</h2>
            <p className="text-gray-600 mt-2">Balanced approach for predictable + scalable growth</p>
          </div>

          {/* Channel Split Visual */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Paid Channels */}
            <Card className="glass-card border-l-4 border-l-[#065D7E]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[#065D7E] font-bold text-lg">PAID CHANNELS</p>
                  <Badge className="bg-[#065D7E] text-gray-900">60%</Badge>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-gray-900 font-semibold">Google Search Ads</p>
                      <p className="text-[#11D4D8] font-bold">$4,800</p>
                    </div>
                    <p className="text-gray-600 text-sm">Primary acquisition driver</p>
                    <p className="text-gray-500 text-xs mt-1">Target: 50 keywords, CPA $35-40</p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-gray-900 font-semibold">Instagram Ads</p>
                      <p className="text-[#11D4D8] font-bold">$3,200</p>
                    </div>
                    <p className="text-gray-600 text-sm">Awareness + retargeting</p>
                    <p className="text-gray-500 text-xs mt-1">Target: 5 creatives, CPA $40-45</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-gray-500 text-sm">Total Paid Budget: <span className="text-gray-900 font-bold">$8,000 (40%)</span></p>
                </div>
              </CardContent>
            </Card>

            {/* Organic Channels */}
            <Card className="glass-card border-l-4 border-l-[#11D4D8]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[#11D4D8] font-bold text-lg">ORGANIC CHANNELS</p>
                  <Badge className="bg-[#11D4D8] text-gray-900">40%</Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-white/10">
                    <span className="text-gray-900">Salla App Store</span>
                    <Badge className="bg-white/20 text-gray-900 border-white/30">40%</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-white/10">
                    <span className="text-gray-900">Community + Email</span>
                    <Badge className="bg-white/20 text-gray-900 border-white/30">25%</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-white/10">
                    <span className="text-gray-900">Instagram Organic</span>
                    <Badge className="bg-white/20 text-gray-900 border-white/30">15%</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-white/10">
                    <span className="text-gray-900">LinkedIn Organic</span>
                    <Badge className="bg-white/20 text-gray-900 border-white/30">10%</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-white/10">
                    <span className="text-gray-900">Content SEO</span>
                    <Badge className="bg-white/20 text-gray-900 border-white/30">10%</Badge>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-gray-500 text-sm">Budget: <span className="text-gray-900 font-bold">$5,000 (content + tools)</span></p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Channels NOT Using */}
          <Card className="glass-card">
            <CardContent className="p-5">
              <p className="text-gray-500 text-sm mb-3">NOT USING (Too Expensive/Ineffective for this ICP)</p>
              <div className="flex flex-wrap gap-2">
                {['Twitter/X (CPC $3-8+)', 'LinkedIn ads (CPC $5-10+)', 'TikTok (B2C audience)', 'Facebook (declining)', 'Influencers (low ROI for B2B)'].map((item) => (
                  <Badge key={item} className="bg-white/10 text-gray-600 border-white/20">
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )

    case 'content-strategy':
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-[#11D4D8] text-lg mb-2 font-semibold">CONTENT ENGINE</p>
            <h2 className="text-4xl font-bold text-gray-900">What We're Saying & Where</h2>
          </div>

          {/* Content Volume */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="glass-card">
              <CardContent className="p-5 text-center">
                <p className="text-4xl font-bold text-[#11D4D8] mb-2">48</p>
                <p className="text-gray-600">Blog posts in 6 months</p>
                <p className="text-gray-500 text-sm">2x per week</p>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-5 text-center">
                <p className="text-4xl font-bold text-[#065D7E] mb-2">100+</p>
                <p className="text-gray-600">Social posts</p>
                <p className="text-gray-500 text-sm">Repurposed content</p>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-5 text-center">
                <p className="text-4xl font-bold text-[#0a7aa0] mb-2">24</p>
                <p className="text-gray-600">Email newsletters</p>
                <p className="text-gray-500 text-sm">Monthly + campaigns</p>
              </CardContent>
            </Card>
          </div>

          {/* Content Pillars */}
          <Card className="glass-card border-l-4 border-l-[#11D4D8]">
            <CardContent className="p-6">
              <p className="text-gray-900 font-semibold mb-4">CONTENT PILLARS (Topic Distribution)</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="p-4 rounded-lg bg-white/10 text-center">
                  <Badge className="bg-[#065D7E] text-gray-900 mb-2">30%</Badge>
                  <p className="text-gray-900 font-semibold">Problem</p>
                  <p className="text-gray-600 text-xs">Lost sales, dialect issues</p>
                </div>
                <div className="p-4 rounded-lg bg-white/10 text-center">
                  <Badge className="bg-[#11D4D8] text-gray-900 mb-2">30%</Badge>
                  <p className="text-gray-900 font-semibold">Solution</p>
                  <p className="text-gray-600 text-xs">How Alfinder works</p>
                </div>
                <div className="p-4 rounded-lg bg-white/10 text-center">
                  <Badge className="bg-[#0a7aa0] text-gray-900 mb-2">20%</Badge>
                  <p className="text-gray-900 font-semibold">Social Proof</p>
                  <p className="text-gray-600 text-xs">Case studies, testimonials</p>
                </div>
                <div className="p-4 rounded-lg bg-white/10 text-center">
                  <Badge className="bg-[#065D7E] text-gray-900 mb-2">20%</Badge>
                  <p className="text-gray-900 font-semibold">How-To</p>
                  <p className="text-gray-600 text-xs">Guides, best practices</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content Distribution */}
          <Card className="glass-card">
            <CardContent className="p-6">
              <p className="text-gray-900 font-semibold mb-4">DISTRIBUTION STRATEGY</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#11D4D8] flex-shrink-0 mt-1" />
                  <p className="text-gray-900/90"><strong className="text-[#065D7E]">Blog → LinkedIn/Instagram:</strong> Every blog post repurposed into 3-5 social posts</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#11D4D8] flex-shrink-0 mt-1" />
                  <p className="text-gray-900/90"><strong className="text-[#065D7E]">Email Newsletter:</strong> Weekly digest of top content + exclusive tips</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#11D4D8] flex-shrink-0 mt-1" />
                  <p className="text-gray-900/90"><strong className="text-[#065D7E]">Community Engagement:</strong> Share value-first content in Salla/Zid communities</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#11D4D8] flex-shrink-0 mt-1" />
                  <p className="text-gray-900/90"><strong className="text-[#065D7E]">SEO:</strong> Long-tail keyword targeting for organic traffic</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sample Content Calendar */}
          <Card className="glass-card">
            <CardContent className="p-6">
              <p className="text-gray-900 font-semibold mb-4">SAMPLE WEEK (Month 1)</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="p-3 rounded-lg bg-white/10">
                  <p className="text-[#11D4D8] font-semibold mb-1">Monday</p>
                  <p className="text-gray-900/90">Blog: "5 Signs Your E-commerce Search is Losing Sales"</p>
                </div>
                <div className="p-3 rounded-lg bg-white/10">
                  <p className="text-[#065D7E] font-semibold mb-1">Tuesday</p>
                  <p className="text-gray-900/90">LinkedIn: Post + Instagram carousel</p>
                </div>
                <div className="p-3 rounded-lg bg-white/10">
                  <p className="text-[#0a7aa0] font-semibold mb-1">Wednesday</p>
                  <p className="text-gray-900/90">Blog: "How Gulf Merchants Are Fixing Arabic Search"</p>
                </div>
                <div className="p-3 rounded-lg bg-white/10">
                  <p className="text-[#11D4D8] font-semibold mb-1">Thursday</p>
                  <p className="text-gray-900/90">Community: Value-first answer + soft CTA</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )

    case 'positioning-messaging':
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-[#11D4D8] text-lg mb-2 font-semibold">POSITIONING FRAMEWORK</p>
            <h2 className="text-4xl font-bold text-gray-900">How We Talk About Alfinder</h2>
          </div>

          {/* Core Tagline */}
          <Card className="glass-card border-l-4 border-l-[#11D4D8]">
            <CardContent className="p-8 text-center">
              <Target className="w-12 h-12 text-[#11D4D8] mx-auto mb-4" />
              <p className="text-2xl md:text-3xl font-bold text-[#065D7E] italic">
                "Stop losing sales when customers search in dialect"
              </p>
            </CardContent>
          </Card>

          {/* Value Propositions */}
          <div className="space-y-3">
            {[
              {
                title: '20% More Sales',
                desc: 'Capture sales currently lost to "no results" when customers search in Arabic dialects',
                metric: '+20%',
                color: 'text-[#11D4D8]',
              },
              {
                title: '5-Minute Setup',
                desc: 'One-click integration with Salla/Zid. No developer needed. Start seeing results today.',
                metric: '5 min',
                color: 'text-[#065D7E]',
              },
              {
                title: 'Understands All Dialects',
                desc: 'Gulf (جوال), Egyptian (موبايل), Levantine, Maghrebi - not just Modern Standard Arabic',
                metric: '4+ dialects',
                color: 'text-[#0a7aa0]',
              },
              {
                title: 'Affordable for SMEs',
                desc: 'Only $102/month (383 SAR). Pays for itself in days. Cancel anytime.',
                metric: '$102/mo',
                color: 'text-[#11D4D8]',
              },
            ].map((prop, idx) => (
              <Card key={idx} className="glass-card">
                <CardContent className="p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#065D7E] to-[#11D4D8] flex items-center justify-center flex-shrink-0">
                      <p className="text-xl font-bold text-gray-900">{prop.metric}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-semibold text-lg">{prop.title}</p>
                      <p className="text-gray-600 text-sm">{prop.desc}</p>
                    </div>
                    <CheckCircle2 className="w-6 h-6 text-[#11D4D8] flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Competitive Positioning */}
          <Card className="glass-card">
            <CardContent className="p-6">
              <p className="text-gray-900 font-semibold mb-4">COMPETITIVE POSITIONING</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-900/90"><strong className="text-gray-900">vs. Built-in Search:</strong> They only match exact keywords. We understand dialect context.</p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-900/90"><strong className="text-gray-900">vs. Algolia/Doofinder:</strong> Built for Western languages. We're built for Arabic dialects.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#11D4D8] flex-shrink-0 mt-1" />
                  <p className="text-gray-900/90"><strong className="text-[#065D7E]">Our Edge:</strong> Purpose-built for Arabic e-commerce. One-click setup. SME pricing.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* The Aha Moment */}
          <Card className="glass-card border-l-4 border-l-[#065D7E]">
            <CardContent className="p-6">
              <p className="text-gray-900 font-semibold mb-3">THE AHA MOMENT (What Converts Trials)</p>
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-[#11D4D8] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-900/90 mb-2">
                    Merchant searches <strong className="text-[#11D4D8]">"جوال"</strong> (Gulf dialect) → gets relevant results in that dialect.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong className="text-[#065D7E]">That's the moment they convert.</strong> 80% of trials reach aha moment → 25% convert to paying.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )

    // ============================================
    // PHASE 3: EXECUTION PLAN
    // ============================================
    case 'timeline-milestones':
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-[#11D4D8] text-lg mb-2 font-semibold">EXECUTION ROADMAP</p>
            <h2 className="text-4xl font-bold text-gray-900">6-Month Timeline & Milestones</h2>
          </div>

          {/* Monthly Timeline */}
          <div className="space-y-3">
            {[
              { month: 'Month 1', users: '0 (foundation)', focus: 'Launch all channels, build funnel', milestone: 'GTM Launch Complete', budget: '$3-3.5K', color: 'border-l-[#065D7E]' },
              { month: 'Month 2', users: '10-20', focus: 'First conversions, optimization', milestone: 'Reinvestment Loop Active', budget: '$3-3.5K', color: 'border-l-[#0a7aa0]' },
              { month: 'Month 3', users: '35-50', focus: 'Scale winners, pause losers', milestone: 'Break-Even Achieved', budget: '$3.5-4K', color: 'border-l-[#11D4D8]' },
              { month: 'Month 4', users: '60-80', focus: 'Aggressive scaling', milestone: 'Cash Flow Positive', budget: '$3-4K', color: 'border-l-[#065D7E]' },
              { month: 'Month 5', users: '90-115', focus: 'Maximize channels', milestone: 'Conservative Target Close', budget: '$3-4K', color: 'border-l-[#0a7aa0]' },
              { month: 'Month 6', users: '140-150 / 300', focus: 'Final push', milestone: 'Target Achieved', budget: '$3-3.5K', color: 'border-l-[#11D4D8]' },
            ].map((item) => (
              <Card key={item.month} className="glass-card border-l-4 overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <p className="text-gray-900 font-bold">{item.month}</p>
                        <Badge className="bg-white/20 text-gray-900 border-white/30 text-xs">{item.milestone}</Badge>
                      </div>
                      <p className="text-gray-600 text-sm mb-1">{item.focus}</p>
                      <p className="text-gray-500 text-xs">Budget: {item.budget}</p>
                    </div>
                    <div className="text-right ml-4">
                      <p className="text-2xl font-bold text-gray-900">{item.users}</p>
                      <p className="text-gray-500 text-xs">paying users</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 7 Major Milestones */}
          <Card className="glass-card">
            <CardContent className="p-6">
              <p className="text-gray-900 font-semibold mb-4">7 MAJOR MILESTONES (Decision Gates)</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#11D4D8]" />
                  <p className="text-gray-900/90">M1W4: GTM Launch Complete (75+ trials)</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#11D4D8]" />
                  <p className="text-gray-900/90">M2W6: Reinvestment Loop Active</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#11D4D8]" />
                  <p className="text-gray-900/90">M3W10: Break-Even Achieved</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#11D4D8]" />
                  <p className="text-gray-900/90">M3W11: Proven Channels Identified</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#11D4D8]" />
                  <p className="text-gray-900/90">M4W13: Cash Flow Positive</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#11D4D8]" />
                  <p className="text-gray-900/90">M5-6: Conservative Target (140-150 users)</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#11D4D8]" />
                  <p className="text-gray-900/90">M6 (Best): Stretch Target (300 users)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )

    case 'month-1-detail':
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-[#11D4D8] text-lg mb-2 font-semibold">EXECUTION DETAIL</p>
            <h2 className="text-4xl font-bold text-gray-900">Month 1: Foundation Sprint</h2>
            <p className="text-gray-600 mt-2">Day-by-day execution plan</p>
          </div>

          {/* Month 1 Goals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="glass-card">
              <CardContent className="p-5 text-center">
                <p className="text-gray-500 text-sm mb-1">PAYING USERS</p>
                <p className="text-3xl font-bold text-gray-900">0</p>
                <p className="text-gray-600 text-xs">(expected - foundation)</p>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-5 text-center">
                <p className="text-gray-500 text-sm mb-1">TRIALS</p>
                <p className="text-3xl font-bold text-[#0a7aa0]">75-90</p>
                <p className="text-gray-600 text-xs">by end of month</p>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-5 text-center">
                <p className="text-gray-500 text-sm mb-1">BUDGET</p>
                <p className="text-3xl font-bold text-[#11D4D8]">$3-3.5K</p>
                <p className="text-gray-600 text-xs">Month 1 spend</p>
              </CardContent>
            </Card>
          </div>

          {/* Week 1 - Day by Day */}
          <Card className="glass-card border-l-4 border-l-[#065D7E]">
            <CardContent className="p-6">
              <p className="text-[#065D7E] font-bold text-lg mb-4">WEEK 1: DAYS 1-7 (Setup & Launch)</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#065D7E] flex items-center justify-center text-gray-900 text-xs font-bold flex-shrink-0">1</div>
                  <div>
                    <p className="text-gray-900 font-semibold">Day 1 (Monday): Infrastructure</p>
                    <p className="text-gray-600 text-sm">Analytics setup, Ads accounts, App Store optimization, Email sequences</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0a7aa0] flex items-center justify-center text-gray-900 text-xs font-bold flex-shrink-0">2</div>
                  <div>
                    <p className="text-gray-900 font-semibold">Day 2 (Tuesday): Launch Campaigns</p>
                    <p className="text-gray-600 text-sm">Google Ads (50 keywords), Instagram Ads (5 creatives), First 2 blog posts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#11D4D8] flex items-center justify-center text-gray-900 text-xs font-bold flex-shrink-0">3</div>
                  <div>
                    <p className="text-gray-900 font-semibold">Day 3 (Wednesday): Community</p>
                    <p className="text-gray-600 text-sm">Join Salla/Zid communities, First 10 outreach emails, Social calendar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#065D7E] flex items-center justify-center text-gray-900 text-xs font-bold flex-shrink-0">4</div>
                  <div>
                    <p className="text-gray-900 font-semibold">Day 4 (Thursday): First Optimization</p>
                    <p className="text-gray-600 text-sm">Analyze performance, Pause losers (CPA &gt;$60), Double winners (CPA &lt;$40)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0a7aa0] flex items-center justify-center text-gray-900 text-xs font-bold flex-shrink-0">5</div>
                  <div>
                    <p className="text-gray-900 font-semibold">Day 5 (Friday): Weekly Review</p>
                    <p className="text-gray-600 text-sm">2 more blog posts, Social posts, Document learnings</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Weeks 2-4 Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="glass-card">
              <CardContent className="p-4">
                <p className="text-[#0a7aa0] text-sm font-semibold mb-2">WEEK 2</p>
                <p className="text-gray-900 font-semibold mb-1">Content & Engagement</p>
                <p className="text-gray-600 text-sm">Performance review, 4 blog posts, Community engagement, Funnel optimization</p>
                <div className="mt-2 pt-2 border-t border-white/20">
                  <p className="text-[#11D4D8] text-xs">Target: 25-30 trials</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-4">
                <p className="text-[#065D7E] text-sm font-semibold mb-2">WEEK 3</p>
                <p className="text-gray-900 font-semibold mb-1">Optimization & Testing</p>
                <p className="text-gray-600 text-sm">Expand winners, A/B test landing pages, Narrow targeting, Calculate reinvestment</p>
                <div className="mt-2 pt-2 border-t border-white/20">
                  <p className="text-[#11D4D8] text-xs">Target: 25-30 trials</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-4">
                <p className="text-[#11D4D8] text-sm font-semibold mb-2">WEEK 4</p>
                <p className="text-gray-900 font-semibold mb-1">Review & Planning</p>
                <p className="text-gray-600 text-sm">Full Month 1 review, Document learnings, Create Month 2 plan, Celebrate!</p>
                <div className="mt-2 pt-2 border-t border-white/20">
                  <p className="text-[#11D4D8] text-xs">Total: 75-90 trials ✓</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Success Criteria */}
          <Card className="glass-card border-l-4 border-l-[#11D4D8]">
            <CardContent className="p-6">
              <p className="text-gray-900 font-semibold mb-3">MONTH 1 SUCCESS CRITERIA</p>
              <div className="flex flex-wrap gap-2">
                {['All channels operational', '75+ trials generated', 'CPA &lt;$50 achieved', 'Content engine running', 'Ready to scale'].map((criteria) => (
                  <Badge key={criteria} className="bg-white/20 text-gray-900 border-white/30">
                    {criteria}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )

    case 'kpis-tracking':
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-[#11D4D8] text-lg mb-2 font-semibold">MEASUREMENT FRAMEWORK</p>
            <h2 className="text-4xl font-bold text-gray-900">KPIs & Weekly Tracking Cadence</h2>
          </div>

          {/* Top 5 KPIs */}
          <div className="space-y-3">
            {[
              {
                name: 'Paying Users',
                target: '0 → 150/300',
                why: 'Primary GTM success measure',
                icon: Users,
                color: 'bg-[#065D7E]/20',
              },
              {
                name: 'CPA (Blended)',
                target: '&lt;$80 (stretch: &lt;$60)',
                why: 'Acquisition efficiency',
                icon: DollarSign,
                color: 'bg-[#11D4D8]/20',
              },
              {
                name: 'LTV:CAC Ratio',
                target: '&gt;3:1 (projecting 3.7:1)',
                why: 'Business health indicator',
                icon: PieChart,
                color: 'bg-[#0a7aa0]/20',
              },
              {
                name: 'Monthly Churn',
                target: '&lt;5%',
                why: 'Retention quality',
                icon: Activity,
                color: 'bg-[#065D7E]/20',
              },
              {
                name: 'MRR',
                target: '$0 → $15K/$30K',
                why: 'Business scale',
                icon: TrendingUp,
                color: 'bg-[#11D4D8]/20',
              },
            ].map((kpi, idx) => {
              const KpiIcon = kpi.icon
              return (
                <Card key={idx} className="glass-card">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${kpi.color}`}>
                        <KpiIcon className="w-6 h-6 text-[#065D7E]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <p className="text-gray-900 font-semibold text-lg">{kpi.name}</p>
                          <p className="text-2xl font-bold text-gray-900">{kpi.target}</p>
                        </div>
                        <p className="text-gray-600 text-sm">{kpi.why}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Review Cadence */}
          <Card className="glass-card border-l-4 border-l-[#11D4D8]">
            <CardContent className="p-6">
              <p className="text-gray-900 font-semibold mb-4">REVIEW CADENCE</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Badge className="bg-[#065D7E] text-gray-900">Weekly</Badge>
                  <div className="flex-1">
                    <p className="text-gray-900 font-semibold">30min KPI Review</p>
                    <p className="text-gray-600 text-sm">Every Friday: Review KPIs + channel performance, pause losers, double winners</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-[#0a7aa0] text-gray-900">Monthly</Badge>
                  <div className="flex-1">
                    <p className="text-gray-900 font-semibold">1hr Deep Dive</p>
                    <p className="text-gray-600 text-sm">Full funnel analysis, budget reallocation, next month planning</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-[#11D4D8] text-gray-900">Quarterly</Badge>
                  <div className="flex-1">
                    <p className="text-gray-900 font-semibold">2hr Strategic Review</p>
                    <p className="text-gray-600 text-sm">Pivot decisions, major strategy shifts, stakeholder updates</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Secondary Metrics */}
          <Card className="glass-card">
            <CardContent className="p-5">
              <p className="text-gray-500 text-sm mb-3">SECONDARY METRICS (Track but Don't Optimize Blindly)</p>
              <div className="flex flex-wrap gap-2">
                {['Trial Signups', 'Trial-to-Paid (25%)', 'Trial Activation (80%)', 'Organic vs Paid (40/60)', 'Payback (&lt;3 mo)', 'Salla App Store ranking'].map((metric) => (
                  <Badge key={metric} className="bg-white/20 text-gray-900 border-white/30">
                    {metric}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )

    case 'budget-allocation':
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-[#11D4D8] text-lg mb-2 font-semibold">BUDGET BREAKDOWN</p>
            <h2 className="text-4xl font-bold text-gray-900">$20K Allocation & Spend Phasing</h2>
          </div>

          {/* Budget Breakdown */}
          <div className="space-y-3">
            {[
              { cat: 'Paid Media (Google + Instagram)', amt: '$8,000', pct: '40%', desc: 'Primary acquisition driver', mo: '$1.3K/mo avg', color: 'border-l-[#065D7E]' },
              { cat: 'Freelancers & Services', amt: '$5,000', pct: '25%', desc: 'Content writer, designer, analytics', mo: '$833/mo', color: 'border-l-[#0a7aa0]' },
              { cat: 'Content Production', amt: '$4,000', pct: '20%', desc: 'Blog posts, social content, videos', mo: '$667/mo', color: 'border-l-[#11D4D8]' },
              { cat: 'Tools & Software', amt: '$2,000', pct: '10%', desc: 'Analytics, email, design tools', mo: '$333/mo', color: 'border-l-[#065D7E]' },
              { cat: 'Retention & Optimization', amt: '$1,000', pct: '5%', desc: 'Customer success, churn reduction', mo: '$167/mo', color: 'border-l-[#0a7aa0]' },
            ].map((item) => (
              <Card key={item.cat} className={cn("glass-card border-l-4", item.color)}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <p className="text-gray-900 font-semibold">{item.cat}</p>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                      <p className="text-gray-500 text-xs mt-1">{item.mo} average</p>
                    </div>
                    <div className="text-right ml-4">
                      <p className="text-2xl font-bold text-gray-900">{item.amt}</p>
                      <p className="text-gray-500 text-sm">{item.pct}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Monthly Spend Phasing */}
          <Card className="glass-card border-l-4 border-l-[#11D4D8]">
            <CardContent className="p-6">
              <p className="text-gray-900 font-semibold mb-4">MONTHLY SPEND PHASING</p>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2 text-center">
                <div className="p-3 rounded-lg bg-white/10">
                  <p className="text-gray-500 text-xs">M1</p>
                  <p className="text-lg font-bold text-gray-900">$3-3.5K</p>
                  <p className="text-gray-600 text-xs">Launch</p>
                </div>
                <div className="p-3 rounded-lg bg-white/10">
                  <p className="text-gray-500 text-xs">M2</p>
                  <p className="text-lg font-bold text-gray-900">$3-3.5K</p>
                  <p className="text-gray-600 text-xs">Optimize</p>
                </div>
                <div className="p-3 rounded-lg bg-white/10">
                  <p className="text-gray-500 text-xs">M3</p>
                  <p className="text-lg font-bold text-gray-900">$3.5-4K</p>
                  <p className="text-gray-600 text-xs">Scale</p>
                </div>
                <div className="p-3 rounded-lg bg-white/10">
                  <p className="text-gray-500 text-xs">M4</p>
                  <p className="text-lg font-bold text-gray-900">$3-4K</p>
                  <p className="text-gray-600 text-xs">Growth</p>
                </div>
                <div className="p-3 rounded-lg bg-white/10">
                  <p className="text-gray-500 text-xs">M5</p>
                  <p className="text-lg font-bold text-gray-900">$3-4K</p>
                  <p className="text-gray-600 text-xs">Maximize</p>
                </div>
                <div className="p-3 rounded-lg bg-white/10">
                  <p className="text-gray-500 text-xs">M6</p>
                  <p className="text-lg font-bold text-gray-900">$3-3.5K</p>
                  <p className="text-gray-600 text-xs">Push</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reinvestment Strategy */}
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Activity className="w-8 h-8 text-[#11D4D8] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[#065D7E] font-bold text-lg mb-2">REINVESTMENT STRATEGY</p>
                  <p className="text-gray-900/90">
                    Each paying user generates <strong className="text-[#11D4D8]">$80/month</strong> for reinvestment.
                    Month 1-3: Use initial budget. Month 4-6: Reinvestment reduces burn. By Month 6, strategy is self-funding.
                    <strong className="text-[#065D7E]"> Sustainable growth loop.</strong>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )

    case 'team-roles':
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-[#11D4D8] text-lg mb-2 font-semibold">TEAM STRUCTURE</p>
            <h2 className="text-4xl font-bold text-gray-900">Roles & Responsibilities</h2>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="glass-card">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-[#065D7E] to-[#11D4D8]">
                    <Users className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold">Founder</p>
                    <p className="text-gray-500 text-xs">Full-time</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">Strategy, execution, management</p>
                <div className="flex flex-wrap gap-1">
                  {['GTM strategy', 'Budget management', 'Community', 'Customer support', 'Stakeholder updates'].map((resp) => (
                    <Badge key={resp} className="text-xs bg-white/20 text-gray-900 border-white/30">
                      {resp}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-[#0a7aa0] to-[#11D4D8]">
                    <Activity className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold">Content Writer</p>
                    <p className="text-gray-500 text-xs">Freelance 10h/wk</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">Blog, social, email</p>
                <div className="flex flex-wrap gap-1">
                  {['2 blog posts/week', 'LinkedIn posts', 'Instagram captions', 'Email sequences'].map((resp) => (
                    <Badge key={resp} className="text-xs bg-white/20 text-gray-900 border-white/30">
                      {resp}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-[#11D4D8] to-[#065D7E]">
                    <Award className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold">Graphic Designer</p>
                    <p className="text-gray-500 text-xs">Freelance 5h/wk</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">Visual content</p>
                <div className="flex flex-wrap gap-1">
                  {['Social graphics', 'Ad creatives', 'Blog images', 'Landing page visuals'].map((resp) => (
                    <Badge key={resp} className="text-xs bg-white/20 text-gray-900 border-white/30">
                      {resp}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-[#065D7E] to-[#0a7aa0]">
                    <BarChart3 className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold">Analytics Specialist</p>
                    <p className="text-gray-500 text-xs">Freelance 5h/wk</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">Paid media & tracking</p>
                <div className="flex flex-wrap gap-1">
                  {['Google Ads', 'Instagram Ads', 'Weekly reports', 'Campaign optimization'].map((resp) => (
                    <Badge key={resp} className="text-xs bg-white/20 text-gray-900 border-white/30">
                      {resp}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Why This Works */}
          <Card className="glass-card border-l-4 border-l-[#11D4D8]">
            <CardContent className="p-6">
              <p className="text-gray-900 font-semibold mb-3">TEAM PHILOSOPHY</p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#11D4D8]" />
                  <p className="text-gray-900/90"><strong className="text-[#065D7E]">Lean:</strong> 1 founder + 3 freelancers = Low overhead, fast decisions</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#11D4D8]" />
                  <p className="text-gray-900/90"><strong className="text-[#065D7E]">Focused:</strong> Clear ownership, defined deliverables, weekly accountability</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#11D4D8]" />
                  <p className="text-gray-900/90"><strong className="text-[#065D7E]">Scalable:</strong> Freelancers scale up/down based on performance</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#11D4D8]" />
                  <p className="text-gray-900/90"><strong className="text-[#065D7E]">Cost-Efficient:</strong> ~$5K/month total team cost</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )

    // ============================================
    // PHASE 4: RISK MANAGEMENT
    // ============================================
    case 'risk-mitigation':
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-[#11D4D8] text-lg mb-2 font-semibold">RISK MANAGEMENT</p>
            <h2 className="text-4xl font-bold text-gray-900">Top 5 Risks & Mitigation Plans</h2>
            <p className="text-gray-600 mt-2">We've planned for failure. That's why we'll succeed.</p>
          </div>

          {/* Top 5 Risks */}
          <div className="space-y-3">
            {[
              {
                risk: 'CPA stuck above $50',
                prob: 'Medium',
                impact: 'High',
                mitigation: 'Week 1: Pause underperformers | Week 2: Test 4 new creatives | Week 3: Narrow targeting | Week 4: Pivot channel if needed',
                trigger: 'CPA &gt;$60 for 2+ weeks',
              },
              {
                risk: 'Trial-to-Paid below 15%',
                prob: 'Medium',
                impact: 'High',
                mitigation: 'Month 2: Analyze funnel | Month 2: Improve onboarding | Month 3: Extend trial to 14 days | Month 3: If still below, PMF issue',
                trigger: 'Conversion &lt;15% for 4+ weeks',
              },
              {
                risk: 'Monthly churn above 7%',
                prob: 'Low',
                impact: 'High',
                mitigation: 'Month 2: Interview churned users | Month 2: Implement customer success | Month 3: Fix top 3 churn reasons',
                trigger: 'Churn &gt;7% for 2+ months',
              },
              {
                risk: 'Month 3 milestone missed (&lt;20 users)',
                prob: 'Medium',
                impact: 'Critical',
                mitigation: 'Full GTM strategy review | Decision: Pivot or persevere? | If pivot: New market/positioning | If persevere: Major execution improvements',
                trigger: 'M3 &lt;20 paying users',
              },
              {
                risk: 'Budget burned too fast',
                prob: 'Low',
                impact: 'High',
                mitigation: 'Immediately: Pause all ad spend | Week 1: Review all spending | Week 2: Reallocate conservatively | Month 4: Rely on organic + reinvestment',
                trigger: 'Burn rate &gt;$4K/mo',
              },
            ].map((item, idx) => (
              <Card key={idx} className="glass-card">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4 mb-3">
                    <Shield className="w-6 h-6 text-[#11D4D8] flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <p className="text-gray-900 font-bold text-lg">{item.risk}</p>
                        <Badge className={cn(
                          'text-xs',
                          item.prob === 'High' ? 'bg-red-500/20 text-red-300 border-red-300/30' : 'bg-yellow-500/20 text-yellow-300 border-yellow-300/30'
                        )}>
                          Prob: {item.prob}
                        </Badge>
                        <Badge className={cn(
                          'text-xs',
                          item.impact === 'Critical' ? 'bg-red-500/20 text-red-300 border-red-300/30' : 'bg-orange-500/20 text-orange-300 border-orange-300/30'
                        )}>
                          {item.impact}
                        </Badge>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 mb-2">
                        <p className="text-gray-500 text-xs mb-1">MITIGATION PLAN</p>
                        <p className="text-gray-900/90 text-sm">{item.mitigation}</p>
                      </div>
                      <p className="text-gray-500 text-xs">Trigger: {item.trigger}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )

    case 'decision-frameworks':
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-[#11D4D8] text-lg mb-2 font-semibold">DECISION GATES</p>
            <h2 className="text-4xl font-bold text-gray-900">Month 3 Pivot Framework</h2>
            <p className="text-gray-600 mt-2">Clear criteria for Go/No-Go decisions</p>
          </div>

          {/* Month 3 Decision Matrix */}
          <Card className="glass-card border-l-4 border-l-[#11D4D8]">
            <CardContent className="p-6">
              <p className="text-[#11D4D8] font-bold text-lg mb-4">MONTH 3: PIVOT OR PERSEVERE?</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                  <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-gray-900 font-bold mb-1">&lt;20 paying users: MAJOR PROBLEM</p>
                    <p className="text-gray-600 text-sm">Far from 35-50 target. → Full GTM review, pivot decision required.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                  <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-gray-900 font-bold mb-1">20-35 paying users: SLIGHTLY BEHIND</p>
                    <p className="text-gray-600 text-sm">Need acceleration. → Investigate blocker, fix, measure 2 weeks.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-gray-900 font-bold mb-1">35-50 paying users: ON TRACK ✓</p>
                    <p className="text-gray-600 text-sm">→ Double down on winners, optimize losers, plan Month 4-6 scaling.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-[#11D4D8]/10 border border-[#11D4D8]/30">
                  <Award className="w-6 h-6 text-[#11D4D8] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-gray-900 font-bold mb-1">50+ paying users: AHEAD OF TARGET 🚀</p>
                    <p className="text-gray-600 text-sm">→ Consider stretch goal (300 users), aggressive scaling.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Decision Gates Timeline */}
          <Card className="glass-card">
            <CardContent className="p-6">
              <p className="text-gray-900 font-semibold mb-4">DECISION GATES (Monthly Checkpoints)</p>
              <div className="space-y-2">
                {[
                  { gate: 'M1 End', decision: 'Is funnel operational?', criteria: '75+ trials, CPA &lt;$60' },
                  { gate: 'M2 End', decision: 'Is reinvestment loop active?', criteria: '10+ paying users, CPA &lt;$80' },
                  { gate: 'M3 End', decision: 'PIVOT OR PERSEVERE?', criteria: '35-50 paying users = On track' },
                  { gate: 'M4 End', decision: 'Cash flow positive?', criteria: '60+ users, self-funding' },
                  { gate: 'M5 End', decision: 'Conservative target achievable?', criteria: '90+ users' },
                  { gate: 'M6 End', decision: 'Target achieved!', criteria: '140-150 paying users' },
                ].map((item) => (
                  <div key={item.gate} className="flex items-center justify-between p-3 rounded-lg bg-white/10">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-[#065D7E] text-gray-900">{item.gate}</Badge>
                      <span className="text-gray-900 font-semibold">{item.decision}</span>
                    </div>
                    <span className="text-gray-600 text-sm">{item.criteria}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* What Triggers a Pivot */}
          <Card className="glass-card">
            <CardContent className="p-6">
              <p className="text-gray-900 font-semibold mb-3">WHAT TRIGGERS A PIVOT?</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0 mt-2" />
                  <p className="text-gray-900/90"><strong className="text-gray-900">CPA &gt;$100 for 4+ weeks:</strong> Channel not working, need new approach</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0 mt-2" />
                  <p className="text-gray-900/90"><strong className="text-gray-900">Trial-to-paid &lt;10% for 8+ weeks:</strong> Product-market fit issue</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0 mt-2" />
                  <p className="text-gray-900/90"><strong className="text-gray-900">Churn &gt;10% for 2+ months:</strong> Retention crisis</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0 mt-2" />
                  <p className="text-gray-900/90"><strong className="text-gray-900">M3 &lt;20 users:</strong> Strategy fundamentally broken</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )

    // ============================================
    // PHASE 5: THE ASK
    // ============================================
    case 'approval-next-steps':
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-[#11D4D8] text-lg mb-2 font-semibold">NEXT STEPS</p>
            <h2 className="text-4xl font-bold text-gray-900">Approval Required</h2>
            <p className="text-gray-600 mt-2">Ready to execute upon approval</p>
          </div>

          {/* What We Need */}
          <Card className="glass-card border-l-4 border-l-[#065D7E]">
            <CardContent className="p-6">
              <p className="text-gray-900 font-semibold mb-4">WHAT WE NEED FROM YOU</p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#065D7E] to-[#11D4D8] flex items-center justify-center text-gray-900 font-bold flex-shrink-0">1</div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-bold text-lg mb-1">Strategic Approval</p>
                    <p className="text-gray-600">Green light to execute this 6-month GTM strategy</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0a7aa0] to-[#11D4D8] flex items-center justify-center text-gray-900 font-bold flex-shrink-0">2</div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-bold text-lg mb-1">Budget Allocation</p>
                    <p className="text-gray-600">$20K for 6-month GTM execution (self-funding after Month 3)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#11D4D8] to-[#065D7E] flex items-center justify-center text-gray-900 font-bold flex-shrink-0">3</div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-bold text-lg mb-1">Stakeholder Access</p>
                    <p className="text-gray-600">Support when needed (partnerships, introductions, resources)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pre-Launch Checklist */}
          <Card className="glass-card">
            <CardContent className="p-6">
              <p className="text-gray-900 font-semibold mb-4">PRE-LAUNCH CHECKLIST (Before Go-Live)</p>
              <div className="space-y-2">
                {[
                  'Read and approve full GTM strategy',
                  'Hire freelancers (content writer, designer, analytics)',
                  'Set up all tracking (analytics, conversion, budget monitoring)',
                  'Prepare Day 1 assets (ads, creatives, content calendar)',
                  'Confirm launch date',
                  'Approve budget allocation',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-white/10">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/30">
                      <input type="checkbox" className="w-4 h-4" />
                    </div>
                    <p className="text-gray-900/90">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Our Promise */}
          <Card className="glass-card border-l-4 border-l-[#11D4D8]">
            <CardContent className="p-6 text-center">
              <Shield className="w-12 h-12 text-[#11D4D8] mx-auto mb-3" />
              <p className="text-[#065D7E] text-xl font-bold mb-2">OUR PROMISE</p>
              <p className="text-gray-900/90">
                Weekly updates. Full transparency. No surprises.<br />
                You'll know exactly where we stand every Friday.<br />
                <strong className="text-[#11D4D8]">KPIs, challenges, wins - everything.</strong>
              </p>
            </CardContent>
          </Card>

          {/* Launch Target */}
          <Card className="glass-card border-l-4 border-l-[#065D7E]">
            <CardContent className="p-6 text-center">
              <Rocket className="w-12 h-12 text-[#065D7E] mx-auto mb-3" />
              <p className="text-gray-500 text-sm mb-1">TARGET LAUNCH DATE</p>
              <p className="text-3xl font-bold text-gray-900 mb-2">[FILL IN YOUR LAUNCH DATE]</p>
              <p className="text-gray-600 text-sm">This is where the 6-month journey begins 🚀</p>
            </CardContent>
          </Card>

          {/* Bottom Line Summary */}
          <Card className="glass-card bg-gradient-to-br from-[#065D7E]/20 to-[#11D4D8]/20">
            <CardContent className="p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-gray-500 text-xs mb-1">INVESTMENT</p>
                  <p className="text-2xl font-bold text-gray-900">$20K</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">CONSERVATIVE RETURN</p>
                  <p className="text-2xl font-bold text-gray-900">$46K</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">TARGET USERS</p>
                  <p className="text-2xl font-bold text-gray-900">140-150</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )

    default:
      return null
  }
}

// ============================================
// MAIN COMPONENT
// ============================================

export default function GTMPresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const filteredSlides = selectedPhase
    ? slides.filter(s => s.phase === selectedPhase)
    : slides

  const currentSlideData = filteredSlides[currentSlide]
  const SlideIcon = currentSlideData?.icon

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const nextSlide = () => {
    if (currentSlide < filteredSlides.length - 1) {
      goToSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1)
    }
  }

  const handlePhaseClick = (phase: string) => {
    if (selectedPhase === phase) {
      setSelectedPhase(null)
    } else {
      setSelectedPhase(phase)
    }
    setCurrentSlide(0)
  }

  // Reset currentSlide if it's out of bounds after filtering
  useEffect(() => {
    if (filteredSlides.length > 0 && currentSlide >= filteredSlides.length) {
      setCurrentSlide(0)
    }
  }, [filteredSlides.length, currentSlide])

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      if (currentSlide < filteredSlides.length - 1) {
        nextSlide()
      } else {
        setIsPlaying(false)
      }
    }, 8000) // 8 seconds per slide for CEO review (more time to absorb details)

    return () => clearInterval(interval)
  }, [isPlaying, currentSlide, filteredSlides.length])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevSlide()
      } else if (e.key === 'f') {
        setIsPlaying(!isPlaying)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide, filteredSlides.length, isPlaying])

  return (
    <div className="min-h-screen bg-[#F0FBFB]">
      <Sidebar />

      <main className="lg:ml-72">
        <div className="min-h-screen flex flex-col">
          {/* Top Navigation Bar */}
          <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#11D4D8]/20">
            <div className="max-w-6xl mx-auto px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Link href="/" className="text-[#065D7E] hover:text-[#11D4D8] transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                  </Link>
                  <div>
                    <h1 className="text-[#065D7E] font-bold text-lg">Alfinder GTM Strategy</h1>
                    <p className="text-gray-500 text-xs">CEO Review | 6-Month Plan</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-lg bg-[#F0FBFB] hover:bg-[#11D4D8]/10 transition-colors text-[#065D7E]"
                    title={isPlaying ? 'Pause (Press F)' : 'Auto-play (Press F)'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <Badge className="bg-[#F0FBFB] text-[#065D7E] border-[#11D4D8]/30">
                    {currentSlide + 1} / {filteredSlides.length}
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Phase Filter - Navigate by Strategy Phases */}
          <div className="bg-white/50 backdrop-blur-sm border-b border-[#11D4D8]/10">
            <div className="max-w-6xl mx-auto px-4 py-3">
              <div className="flex items-center gap-2 overflow-x-auto">
                <button
                  onClick={() => {
                    setSelectedPhase(null)
                    setCurrentSlide(0)
                  }}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                    selectedPhase === null
                      ? 'bg-[#065D7E] text-gray-900'
                      : 'text-[#065D7E]/70 hover:text-[#065D7E] hover:bg-[#F0FBFB]'
                  )}
                >
                  All Slides ({slides.length})
                </button>
                {phases.map(phase => {
                  const phaseNumber = phase.split(' ')[1].replace(':', '')
                  const phaseSlides = slides.filter(s => s.phase === phaseNumber)
                  return (
                    <button
                      key={phase}
                      onClick={() => handlePhaseClick(phaseNumber)}
                      className={cn(
                        "px-3 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                        selectedPhase === phaseNumber
                          ? 'bg-[#065D7E] text-gray-900'
                          : 'text-[#065D7E]/70 hover:text-[#065D7E] hover:bg-[#F0FBFB]'
                      )}
                    >
                      {phase} ({phaseSlides.length})
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Main Slide Content */}
          <div className="flex-1 flex items-center justify-center p-4 md:p-8">
            <div className="w-full max-w-6xl">
              {!currentSlideData ? (
                <div className="flex items-center justify-center">
                  <p className="text-gray-500">Loading slide...</p>
                </div>
              ) : (
                <>
                  {/* Slide Card */}
                  <Card className="overflow-hidden shadow-2xl bg-white border border-gray-200">
                    {/* Slide Header */}
                    <div className="bg-white border-b border-gray-200 p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-xl bg-[#F0FBFB]">
                            {SlideIcon && <SlideIcon className="w-8 h-8 text-[#065D7E]" />}
                          </div>
                          <div>
                            <Badge className="mb-2 bg-[#F0FBFB] text-[#065D7E] border-[#11D4D8]/30">
                              {currentSlideData.category}
                            </Badge>
                            <h2 className="text-2xl md:text-4xl font-bold text-[#065D7E]">
                              {currentSlideData.title}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Slide Content */}
                    <div className="p-6 md:p-8 bg-white">
                      {renderSlideContent(currentSlideData.id)}
                    </div>
                  </Card>
                </>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="p-3 rounded-xl bg-white shadow-md border border-[#11D4D8]/20 text-[#065D7E] hover:bg-[#F0FBFB] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Previous slide"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>

                {/* Progress Dots */}
                <div className="hidden md:flex items-center gap-2">
                  {filteredSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all",
                        idx === currentSlide ? 'bg-[#065D7E] w-8' : 'bg-[#11D4D8]/30 hover:bg-[#11D4D8]/50'
                      )}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  disabled={currentSlide === filteredSlides.length - 1}
                  className="p-3 rounded-xl bg-white shadow-md border border-[#11D4D8]/20 text-[#065D7E] hover:bg-[#F0FBFB] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next slide"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Keyboard hint */}
              <div className="text-center mt-4">
                <p className="text-gray-500 text-xs">Arrow keys to navigate • Space/Enter for next • F for auto-play</p>
              </div>

              {/* Slide Number Navigation (Mobile) */}
              <div className="md:hidden mt-4 flex flex-wrap gap-2 justify-center">
                {filteredSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={cn(
                      "px-3 py-1 rounded-lg text-xs font-medium transition-all",
                      idx === currentSlide
                        ? 'bg-[#065D7E] text-gray-900'
                        : 'bg-white text-[#065D7E]/70 hover:bg-[#F0FBFB]'
                    )}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
