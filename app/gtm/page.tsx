'use client'

import { useState, useEffect } from 'react'
import { Sidebar } from '@/components/sidebar'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
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
// MODERN CARD COMPONENTS
// ============================================

const ModernCard = ({ children, className = '', highlight = false }: { children: React.ReactNode, className?: string, highlight?: boolean }) => (
  <Card className={cn(
    "border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-white",
    highlight && "ring-1 ring-[#11D4D8]/20",
    className
  )}>
    {children}
  </Card>
)

const AccentBadge = ({ children, color = 'primary', className = '' }: { children: React.ReactNode, color?: 'primary' | 'secondary' | 'accent', className?: string }) => {
  const colors = {
    primary: 'bg-[#065D7E]/10 text-[#065D7E] border-[#065D7E]/20',
    secondary: 'bg-[#0a7aa0]/10 text-[#0a7aa0] border-[#0a7aa0]/20',
    accent: 'bg-[#11D4D8]/10 text-[#11D4D8] border-[#11D4D8]/20',
  }
  return (
    <Badge className={cn("font-medium", colors[color], className)}>
      {children}
    </Badge>
  )
}

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
            <ModernCard>
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
            </ModernCard>

            <ModernCard>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#11D4D8]/10">
                    <TrendingUp className="w-5 h-5 text-[#11D4D8]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#11D4D8] text-xs font-semibold mb-1 tracking-wider uppercase">Growth Target</p>
                    <p className="text-gray-900 font-bold text-lg mb-1">160 paying users</p>
                    <p className="text-gray-500 text-sm">Conservative: $60K revenue | Stretch: 300 users, $114K+ revenue</p>
                  </div>
                </div>
              </CardContent>
            </ModernCard>

            <ModernCard>
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
            </ModernCard>

            <ModernCard>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#065D7E]/10">
                    <DollarSign className="w-5 h-5 text-[#065D7E]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#065D7E] text-xs font-semibold mb-1 tracking-wider uppercase">Unit Economics</p>
                    <p className="text-gray-900 font-bold text-lg mb-1">29.5x LTV:CAC, <1mo payback</p>
                    <p className="text-gray-500 text-sm">$2,360 LTV, $80 CAC, Break-even Month 1</p>
                  </div>
                </div>
              </CardContent>
            </ModernCard>
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
                    Achieve 160 paying users (conservative) or 300 (optimistic) in 6 months with $20K investment. Break-even by Month 1.
                    Self-funding from Month 4 via reinvestment loop.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ModernCard>
              <CardContent className="p-5 text-center">
                <p className="text-3xl font-bold text-[#11D4D8] mb-1">$20K</p>
                <p className="text-gray-500 text-sm font-medium">Total Investment</p>
              </CardContent>
            </ModernCard>
            <ModernCard>
              <CardContent className="p-5 text-center">
                <p className="text-3xl font-bold text-[#065D7E] mb-1">$40</p>
                <p className="text-gray-500 text-sm font-medium">CPA Per Trial</p>
              </CardContent>
            </ModernCard>
            <ModernCard>
              <CardContent className="p-5 text-center">
                <p className="text-3xl font-bold text-[#0a7aa0] mb-1">$80</p>
                <p className="text-gray-500 text-sm font-medium">CAC Per User</p>
              </CardContent>
            </ModernCard>
            <ModernCard>
              <CardContent className="p-5 text-center">
                <p className="text-3xl font-bold text-[#11D4D8] mb-1">33%</p>
                <p className="text-gray-500 text-sm font-medium">Trial Conversion</p>
              </CardContent>
            </ModernCard>
            <ModernCard>
              <CardContent className="p-5 text-center">
                <p className="text-3xl font-bold text-[#11D4D8] mb-1">&lt;5%</p>
                <p className="text-gray-500 text-sm font-medium">Monthly Churn</p>
              </CardContent>
            </ModernCard>
          </div>
        </div>
      )

    case 'targets-metrics':
      return (
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-[#11D4D8] text-sm font-semibold tracking-wider uppercase mb-3">Success Metrics</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">6-Month Targets & KPIs</h2>
          </div>

          {/* Primary Success Metric */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-[#F0FBFB] via-[#e0f5f5] to-[#F0FBFB] border border-[#11D4D8]/20">
            <CardContent className="p-8">
              <p className="text-[#065D7E] text-sm font-semibold mb-4 tracking-wider uppercase">Primary Success Metric</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-900 font-bold text-2xl mb-2">Paying Users</p>
                  <p className="text-gray-600">From 0 to 160 (conservative) or 300 (optimistic) in 6 months</p>
                </div>
                <div className="text-right">
                  <p className="text-6xl font-bold text-[#065D7E]">160</p>
                  <p className="text-gray-600 text-sm mt-1">conservative target</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Supporting Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ModernCard>
              <CardContent className="p-6">
                <p className="text-gray-400 text-xs font-semibold mb-2 uppercase tracking-wider">Revenue (Month 6)</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <p className="text-4xl font-bold text-gray-900">$16.3K</p>
                  <p className="text-gray-500 text-sm">MRR</p>
                </div>
                <p className="text-gray-500 text-sm">Conservative: $60K total | Stretch: $114K+ total</p>
              </CardContent>
            </ModernCard>

            <ModernCard>
              <CardContent className="p-6">
                <p className="text-gray-400 text-xs font-semibold mb-2 uppercase tracking-wider">Trial Signups</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <p className="text-4xl font-bold text-gray-900">480-500</p>
                  <p className="text-gray-500 text-sm">total trials</p>
                </div>
                <p className="text-gray-500 text-sm">33% trial-to-paid conversion rate (5 paying per 15 trials)</p>
              </CardContent>
            </ModernCard>

            <ModernCard>
              <CardContent className="p-6">
                <p className="text-gray-400 text-xs font-semibold mb-2 uppercase tracking-wider">CPA (Per Trial)</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <p className="text-4xl font-bold text-gray-900">&lt;$40</p>
                  <p className="text-gray-500 text-sm">target</p>
                </div>
                <p className="text-gray-500 text-sm">CAC per paying user: $80 (all-in, including trial costs)</p>
              </CardContent>
            </ModernCard>

            <ModernCard>
              <CardContent className="p-6">
                <p className="text-gray-400 text-xs font-semibold mb-2 uppercase tracking-wider">Monthly Churn</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <p className="text-4xl font-bold text-gray-900">&lt;5%</p>
                  <p className="text-gray-500 text-sm">target</p>
                </div>
                <p className="text-gray-500 text-sm">Critical for sustainable growth</p>
              </CardContent>
            </ModernCard>
          </div>

          {/* Monthly Milestones */}
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <p className="text-gray-900 font-bold text-lg mb-5">Monthly Milestones</p>
              <div className="space-y-3">
                {[
                  { month: 'M1', metric: '75-90 trials', milestone: 'GTM Launch Complete', color: 'bg-[#065D7E]' },
                  { month: 'M2', metric: '10-20 paying users', milestone: 'Reinvestment Loop Active', color: 'bg-[#0a7aa0]' },
                  { month: 'M3', metric: '40-60 paying users', milestone: 'Break-Even Achieved', color: 'bg-[#11D4D8]' },
                  { month: 'M4', metric: '80-110 paying users', milestone: 'Cash Flow Positive', color: 'bg-[#065D7E]' },
                  { month: 'M5', metric: '120-140 paying users', milestone: 'Conservative Target Close', color: 'bg-[#0a7aa0]' },
                  { month: 'M6', metric: '160 paying users', milestone: 'Target Achieved ✓', color: 'bg-[#11D4D8]' },
                ].map((item) => (
                  <div key={item.month} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-4">
                      <Badge className={cn("text-white", item.color)}>{item.month}</Badge>
                      <span className="text-gray-900 font-semibold">{item.metric}</span>
                    </div>
                    <AccentBadge color="accent">{item.milestone}</AccentBadge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )

    case 'investment-roi':
      return (
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-[#11D4D8] text-sm font-semibold tracking-wider uppercase mb-3">Financial Summary</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Investment & ROI</h2>
          </div>

          {/* The Bottom Line */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-6 text-center">
                <div className="p-3 rounded-xl bg-[#065D7E]/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <DollarSign className="w-8 h-8 text-[#065D7E]" />
                </div>
                <p className="text-gray-400 text-sm font-semibold mb-2 uppercase tracking-wider">Investment</p>
                <p className="text-5xl font-bold text-gray-900 mb-2">$20,000</p>
                <p className="text-gray-500">6-month runway</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-6 text-center">
                <div className="p-3 rounded-xl bg-[#11D4D8]/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-[#11D4D8]" />
                </div>
                <p className="text-gray-400 text-sm font-semibold mb-2 uppercase tracking-wider">Conservative Return</p>
                <p className="text-5xl font-bold text-gray-900 mb-2">$60,000</p>
                <p className="text-gray-500">200% ROI</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-6 text-center">
                <div className="p-3 rounded-xl bg-[#0a7aa0]/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-[#0a7aa0]" />
                </div>
                <p className="text-gray-400 text-sm font-semibold mb-2 uppercase tracking-wider">Stretch Return</p>
                <p className="text-5xl font-bold text-gray-900 mb-2">$114,000+</p>
                <p className="text-gray-500">470%+ ROI</p>
              </CardContent>
            </Card>
          </div>

          {/* Unit Economics Deep Dive */}
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <p className="text-gray-900 font-bold text-lg mb-5">Unit Economics</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="p-4 rounded-xl bg-gray-50 mb-3">
                    <p className="text-gray-400 text-xs font-semibold mb-1 uppercase tracking-wider">LTV (Lifetime Value)</p>
                    <p className="text-3xl font-bold text-gray-900">$2,360</p>
                    <p className="text-gray-500 text-sm mt-1">383 SAR × 20 months</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="p-4 rounded-xl bg-gray-50 mb-3">
                    <p className="text-gray-400 text-xs font-semibold mb-1 uppercase tracking-wider">CAC (Acquisition Cost)</p>
                    <p className="text-3xl font-bold text-gray-900">$80</p>
                    <p className="text-gray-500 text-sm mt-1">Per paying user (all-in)</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="p-4 rounded-xl bg-[#11D4D8]/5 border-2 border-[#11D4D8]/20 mb-3">
                    <p className="text-gray-400 text-xs font-semibold mb-1 uppercase tracking-wider">LTV:CAC Ratio</p>
                    <p className="text-3xl font-bold text-[#11D4D8]">29.5:1</p>
                    <p className="text-gray-500 text-sm mt-1">Exceptional (&gt;3:1)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payback Timeline */}
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <p className="text-gray-900 font-bold text-lg mb-5">Payback Timeline</p>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="p-4 rounded-xl bg-gray-50">
                  <p className="text-gray-400 text-xs mb-1 font-semibold">MONTH 1</p>
                  <p className="text-xl font-bold text-[#0a7aa0] mb-1">Break-Even</p>
                  <p className="text-gray-500 text-xs">&lt;1 month payback</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50">
                  <p className="text-gray-400 text-xs mb-1 font-semibold">MONTH 2</p>
                  <p className="text-xl font-bold text-[#11D4D8] mb-1">Cash Flow +</p>
                  <p className="text-gray-500 text-xs">Self-funding starts</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50">
                  <p className="text-gray-400 text-xs mb-1 font-semibold">MONTH 6</p>
                  <p className="text-xl font-bold text-[#065D7E] mb-1">3-5.7x</p>
                  <p className="text-gray-500 text-xs">Total return</p>
                </div>
                <div className="p-4 rounded-xl bg-[#11D4D8]/5 border-2 border-[#11D4D8]/20">
                  <p className="text-gray-400 text-xs mb-1 font-semibold">PAYBACK</p>
                  <p className="text-xl font-bold text-[#11D4D8] mb-1">0.78 mo</p>
                  <p className="text-gray-500 text-xs">Per customer</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Self-Funding Loop */}
          <Card className="border-0 shadow-md bg-gradient-to-br from-[#F0FBFB] to-white">
            <CardContent className="p-6">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-[#11D4D8]/10 flex-shrink-0">
                  <Activity className="w-7 h-7 text-[#11D4D8]" />
                </div>
                <div>
                  <p className="text-[#065D7E] font-bold text-xl mb-3">Self-Funding Loop</p>
                  <p className="text-gray-600 leading-relaxed">
                    Each paying user generates <span className="font-bold text-[#11D4D8]">$80/month</span> reinvestment.
                    This reduces effective CPA from $40 to ~$35 over time. By Month 2, the strategy pays for itself.
                    <span className="font-bold text-[#065D7E]"> Exceptional economics with &lt;1 month payback.</span>
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
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-[#11D4D8] text-sm font-semibold tracking-wider uppercase mb-3">Acquisition Strategy</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">60% Paid + 40% Organic</h2>
            <p className="text-gray-500 text-lg">Balanced approach for predictable + scalable growth</p>
          </div>

          {/* Channel Split Visual */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Paid Channels */}
            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#065D7E]/10">
                      <DollarSign className="w-5 h-5 text-[#065D7E]" />
                    </div>
                    <p className="text-[#065D7E] font-bold text-xl">Paid Channels</p>
                  </div>
                  <Badge className="bg-[#065D7E] text-white text-base px-4 py-1.5">60%</Badge>
                </div>
                <div className="space-y-4">
                  <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-gray-900 font-bold">Google Search Ads</p>
                      <p className="text-[#11D4D8] font-bold text-lg">$4,800</p>
                    </div>
                    <p className="text-gray-500 text-sm mb-1">Primary acquisition driver (40% of paid)</p>
                    <p className="text-gray-400 text-xs">Target: 50 keywords, CPA $70-80</p>
                  </div>
                  <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-gray-900 font-bold">Instagram Ads</p>
                      <p className="text-[#11D4D8] font-bold text-lg">$3,600</p>
                    </div>
                    <p className="text-gray-500 text-sm mb-1">Awareness + retargeting (30% of paid)</p>
                    <p className="text-gray-400 text-xs">Target: 5 creatives, CPA $70-80</p>
                  </div>
                  <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-gray-900 font-bold">Salla/Zid App Stores</p>
                      <p className="text-[#11D4D8] font-bold text-lg">$3,600</p>
                    </div>
                    <p className="text-gray-500 text-sm mb-1">Platform campaigns (30% of paid)</p>
                    <p className="text-gray-400 text-xs">Featured placement, reviews optimization</p>
                  </div>
                </div>
                <div className="mt-5 pt-5 border-t border-gray-200">
                  <p className="text-gray-400 text-sm">Total Paid Budget: <span className="text-gray-900 font-bold">$12,000 (60%)</span></p>
                </div>
              </CardContent>
            </Card>

            {/* Organic Channels */}
            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#11D4D8]/10">
                      <Users className="w-5 h-5 text-[#11D4D8]" />
                    </div>
                    <p className="text-[#11D4D8] font-bold text-xl">Organic Channels</p>
                  </div>
                  <Badge className="bg-[#11D4D8] text-white text-base px-4 py-1.5">40%</Badge>
                </div>
                <div className="space-y-3">
                  {[
                    { channel: 'Salla App Store', pct: '40%' },
                    { channel: 'Community + Email', pct: '25%' },
                    { channel: 'Instagram Organic', pct: '15%' },
                    { channel: 'LinkedIn Organic', pct: '10%' },
                    { channel: 'Content SEO', pct: '10%' },
                  ].map((item) => (
                    <div key={item.channel} className="flex justify-between items-center p-4 rounded-xl bg-gray-50 border border-gray-100">
                      <span className="text-gray-900 font-medium">{item.channel}</span>
                      <AccentBadge color="accent">{item.pct}</AccentBadge>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-5 border-t border-gray-200">
                  <p className="text-gray-400 text-sm">Budget: <span className="text-gray-900 font-bold">$5,000 (content + tools)</span></p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Channels NOT Using */}
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <p className="text-gray-400 text-xs font-semibold mb-4 uppercase tracking-wider">Not Using (Too Expensive/Ineffective for this ICP)</p>
              <div className="flex flex-wrap gap-2">
                {['Twitter/X (CPC $3-8+)', 'LinkedIn ads (CPC $5-10+)', 'TikTok (B2C audience)', 'Facebook (declining)', 'Influencers (low ROI for B2B)'].map((item) => (
                  <Badge key={item} className="bg-gray-100 text-gray-500 border-0 font-normal">
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
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-[#11D4D8] text-sm font-semibold tracking-wider uppercase mb-3">Content Engine</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">What We're Saying & Where</h2>
          </div>

          {/* Content Volume */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ModernCard>
              <CardContent className="p-6 text-center">
                <div className="p-4 rounded-xl bg-[#11D4D8]/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-[#11D4D8]" />
                </div>
                <p className="text-5xl font-bold text-[#11D4D8] mb-2">48</p>
                <p className="text-gray-900 font-semibold">Blog posts in 6 months</p>
                <p className="text-gray-500 text-sm">2x per week</p>
              </CardContent>
            </ModernCard>
            <ModernCard>
              <CardContent className="p-6 text-center">
                <div className="p-4 rounded-xl bg-[#065D7E]/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Activity className="w-8 h-8 text-[#065D7E]" />
                </div>
                <p className="text-5xl font-bold text-[#065D7E] mb-2">100+</p>
                <p className="text-gray-900 font-semibold">Social posts</p>
                <p className="text-gray-500 text-sm">Repurposed content</p>
              </CardContent>
            </ModernCard>
            <ModernCard>
              <CardContent className="p-6 text-center">
                <div className="p-4 rounded-xl bg-[#0a7aa0]/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-[#0a7aa0]" />
                </div>
                <p className="text-5xl font-bold text-[#0a7aa0] mb-2">24</p>
                <p className="text-gray-900 font-semibold">Email newsletters</p>
                <p className="text-gray-500 text-sm">Monthly + campaigns</p>
              </CardContent>
            </ModernCard>
          </div>

          {/* Content Pillars */}
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <p className="text-gray-900 font-bold text-lg mb-5">Content Pillars (Topic Distribution)</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-5 rounded-xl bg-gray-50 text-center">
                  <AccentBadge color="primary" className="mb-3">30%</AccentBadge>
                  <p className="text-gray-900 font-bold mb-1">Problem</p>
                  <p className="text-gray-500 text-sm">Lost sales, dialect issues</p>
                </div>
                <div className="p-5 rounded-xl bg-gray-50 text-center">
                  <AccentBadge color="accent" className="mb-3">30%</AccentBadge>
                  <p className="text-gray-900 font-bold mb-1">Solution</p>
                  <p className="text-gray-500 text-sm">How Alfinder works</p>
                </div>
                <div className="p-5 rounded-xl bg-gray-50 text-center">
                  <AccentBadge color="secondary" className="mb-3">20%</AccentBadge>
                  <p className="text-gray-900 font-bold mb-1">Social Proof</p>
                  <p className="text-gray-500 text-sm">Case studies, testimonials</p>
                </div>
                <div className="p-5 rounded-xl bg-gray-50 text-center">
                  <AccentBadge color="primary" className="mb-3">20%</AccentBadge>
                  <p className="text-gray-900 font-bold mb-1">How-To</p>
                  <p className="text-gray-500 text-sm">Guides, best practices</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content Distribution */}
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <p className="text-gray-900 font-bold text-lg mb-5">Distribution Strategy</p>
              <div className="space-y-4">
                {[
                  { title: 'Blog → LinkedIn/Instagram', desc: 'Every blog post repurposed into 3-5 social posts', color: 'primary' },
                  { title: 'Email Newsletter', desc: 'Weekly digest of top content + exclusive tips', color: 'secondary' },
                  { title: 'Community Engagement', desc: 'Share value-first content in Salla/Zid communities', color: 'accent' },
                  { title: 'SEO', desc: 'Long-tail keyword targeting for organic traffic', color: 'primary' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className={cn("p-2 rounded-lg", item.color === 'primary' ? 'bg-[#065D7E]/10' : item.color === 'secondary' ? 'bg-[#0a7aa0]/10' : 'bg-[#11D4D8]/10')}>
                      <CheckCircle2 className={cn("w-5 h-5", item.color === 'primary' ? 'text-[#065D7E]' : item.color === 'secondary' ? 'text-[#0a7aa0]' : 'text-[#11D4D8]')} />
                    </div>
                    <div className="flex-1">
                      <p className={cn("font-bold text-gray-900 mb-1", item.color === 'primary' ? 'text-[#065D7E]' : item.color === 'secondary' ? 'text-[#0a7aa0]' : 'text-[#11D4D8]')}>{item.title}</p>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sample Content Calendar */}
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <p className="text-gray-900 font-bold text-lg mb-5">Sample Week (Month 1)</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <p className="text-[#11D4D8] font-bold text-sm mb-2">Monday</p>
                  <p className="text-gray-900">Blog: "5 Signs Your E-commerce Search is Losing Sales"</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <p className="text-[#065D7E] font-bold text-sm mb-2">Tuesday</p>
                  <p className="text-gray-900">LinkedIn: Post + Instagram carousel</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <p className="text-[#0a7aa0] font-bold text-sm mb-2">Wednesday</p>
                  <p className="text-gray-900">Blog: "How Gulf Merchants Are Fixing Arabic Search"</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <p className="text-[#11D4D8] font-bold text-sm mb-2">Thursday</p>
                  <p className="text-gray-900">Community: Value-first answer + soft CTA</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )

    case 'positioning-messaging':
      return (
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-[#11D4D8] text-sm font-semibold tracking-wider uppercase mb-3">Positioning Framework</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">How We Talk About Alfinder</h2>
          </div>

          {/* Core Tagline */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-[#F0FBFB] via-[#e0f5f5] to-[#F0FBFB] border border-[#11D4D8]/20">
            <CardContent className="p-10 text-center">
              <Target className="w-14 h-14 text-[#065D7E] mx-auto mb-5" />
              <p className="text-2xl md:text-3xl font-bold text-[#065D7E] leading-relaxed">
                "Stop losing sales when customers search in dialect"
              </p>
            </CardContent>
          </Card>

          {/* Value Propositions */}
          <div className="space-y-4">
            {[
              {
                title: '20% More Sales',
                desc: 'Capture sales currently lost to "no results" when customers search in Arabic dialects',
                metric: '+20%',
                color: 'bg-[#11D4D8]',
                icon: TrendingUp,
              },
              {
                title: '5-Minute Setup',
                desc: 'One-click integration with Salla/Zid. No developer needed. Start seeing results today.',
                metric: '5 min',
                color: 'bg-[#065D7E]',
                icon: Zap,
              },
              {
                title: 'Understands All Dialects',
                desc: 'Gulf (جوال), Egyptian (موبايل), Levantine, Maghrebi - not just Modern Standard Arabic',
                metric: '4+ dialects',
                color: 'bg-[#0a7aa0]',
                icon: Users,
              },
              {
                title: 'Affordable for SMEs',
                desc: 'Only $102/month (383 SAR). Pays for itself in days. Cancel anytime.',
                metric: '$102/mo',
                color: 'bg-[#11D4D8]',
                icon: DollarSign,
              },
            ].map((prop, idx) => {
              const Icon = prop.icon
              return (
                <ModernCard key={idx}>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-5">
                      <div className={`p-4 rounded-xl ${prop.color} flex-shrink-0`}>
                        <p className="text-xl font-bold text-white">{prop.metric}</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900 font-bold text-lg mb-1">{prop.title}</p>
                        <p className="text-gray-500 text-sm">{prop.desc}</p>
                      </div>
                      <Icon className="w-6 h-6 text-[#11D4D8] flex-shrink-0" />
                    </div>
                  </CardContent>
                </ModernCard>
              )
            })}
          </div>

          {/* Competitive Positioning */}
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <p className="text-gray-900 font-bold text-lg mb-5">Competitive Positioning</p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-red-50 flex-shrink-0">
                    <XCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <p className="text-gray-600 flex-1"><span className="font-bold text-gray-900">vs. Built-in Search:</span> They only match exact keywords. We understand dialect context.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-red-50 flex-shrink-0">
                    <XCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <p className="text-gray-600 flex-1"><span className="font-bold text-gray-900">vs. Algolia/Doofinder:</span> Built for Western languages. We're built for Arabic dialects.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-[#11D4D8]/10 flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-[#11D4D8]" />
                  </div>
                  <p className="text-gray-600 flex-1"><span className="font-bold text-[#065D7E]">Our Edge:</span> Purpose-built for Arabic e-commerce. One-click setup. SME pricing.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* The Aha Moment */}
          <Card className="border-0 shadow-md bg-gradient-to-br from-[#F0FBFB] to-white">
            <CardContent className="p-6">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-[#11D4D8]/10 flex-shrink-0">
                  <Award className="w-7 h-7 text-[#11D4D8]" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 font-bold text-lg mb-3">The Aha Moment (What Converts Trials)</p>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    Merchant searches <span className="font-bold text-[#11D4D8]">"جوال"</span> (Gulf dialect) → gets relevant results in that dialect.
                  </p>
                  <p className="text-gray-500 text-sm">
                    <span className="font-bold text-[#065D7E]">That's the moment they convert.</span> 80% of trials reach aha moment → 25% convert to paying.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )

    case 'targets-metrics':
      return (
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-[#065D7E] text-sm font-semibold tracking-wider uppercase mb-3">Phase 1: Executive Summary</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">6-Month Targets & Success Metrics</h2>
            <p className="text-gray-500 text-lg">Conservative and stretch goals for the GTM strategy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ModernCard highlight>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#065D7E]/10">
                    <Users className="w-5 h-5 text-[#065D7E]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#065D7E] text-xs font-semibold mb-1 tracking-wider uppercase">Paying Users (Month 6)</p>
                    <p className="text-gray-900 font-bold text-2xl mb-1">160</p>
                    <p className="text-gray-500 text-sm">Stretch: 300 users | $114K+ revenue</p>
                  </div>
                </div>
              </CardContent>
            </ModernCard>

            <ModernCard highlight>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#11D4D8]/10">
                    <DollarSign className="w-5 h-5 text-[#11D4D8]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#11D4D8] text-xs font-semibold mb-1 tracking-wider uppercase">Monthly Revenue (Month 6)</p>
                    <p className="text-gray-900 font-bold text-2xl mb-1">$16,320</p>
                    <p className="text-gray-500 text-sm">Stretch: $30,600 | Conservative $60K total</p>
                  </div>
                </div>
              </CardContent>
            </ModernCard>

            <ModernCard highlight>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#0a7aa0]/10">
                    <TrendingUp className="w-5 h-5 text-[#0a7aa0]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#0a7aa0] text-xs font-semibold mb-1 tracking-wider uppercase">Trial-to-Paid Conversion</p>
                    <p className="text-gray-900 font-bold text-2xl mb-1">33%</p>
                    <p className="text-gray-500 text-sm">5 paying users per 15 trials | 33% conversion</p>
                  </div>
                </div>
              </CardContent>
            </ModernCard>

            <ModernCard highlight>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#065D7E]/10">
                    <BarChart3 className="w-5 h-5 text-[#065D7E]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#065D7E] text-xs font-semibold mb-1 tracking-wider uppercase">Target CPA</p>
                    <p className="text-gray-900 font-bold text-2xl mb-1">$80</p>
                    <p className="text-gray-500 text-sm">Optimize to $60 | Cost per trial signup</p>
                  </div>
                </div>
              </CardContent>
            </ModernCard>
          </div>

          <Card className="border-0 shadow-md bg-gradient-to-br from-[#F0FBFB] to-white">
            <CardContent className="p-8">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-[#11D4D8]/10 flex-shrink-0">
                  <Award className="w-7 h-7 text-[#11D4D8]" />
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-xl mb-3">Success Criteria</p>
                  <ul className="text-gray-600 leading-relaxed space-y-2">
                    <li>• Achieve 52-63 paying users by Month 6 (conservative range)</li>
                    <li>• Maintain 5.3x LTV:CAC ratio or better</li>
                    <li>• Keep CPA at or below $80 per trial signup</li>
                    <li>• Achieve break-even by Month 5-6</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )

    case 'investment-roi':
      return (
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-[#065D7E] text-sm font-semibold tracking-wider uppercase mb-3">Phase 1: Executive Summary</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Investment & ROI Summary</h2>
            <p className="text-gray-500 text-lg">$20K budget with clear ROI metrics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ModernCard highlight>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-[#065D7E] text-xs font-semibold mb-2 tracking-wider uppercase">Total Investment</p>
                  <p className="text-gray-900 font-bold text-3xl mb-1">$20,000</p>
                  <p className="text-gray-500 text-sm">6-month budget</p>
                </div>
              </CardContent>
            </ModernCard>

            <ModernCard highlight>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-[#11D4D8] text-xs font-semibold mb-2 tracking-wider uppercase">Expected ROI (Conservative)</p>
                  <p className="text-gray-900 font-bold text-3xl mb-1">+200%</p>
                  <p className="text-gray-500 text-sm">$60K revenue on $20K spend</p>
                </div>
              </CardContent>
            </ModernCard>

            <ModernCard highlight>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-[#0a7aa0] text-xs font-semibold mb-2 tracking-wider uppercase">Break-Even</p>
                  <p className="text-gray-900 font-bold text-3xl mb-1">Month 1</p>
                  <p className="text-gray-500 text-sm">With &lt;1 month payback period</p>
                </div>
              </CardContent>
            </ModernCard>
          </div>

          <Card className="border-0 shadow-md bg-white">
            <CardHeader>
              <CardTitle className="text-[#065D7E]">Budget Allocation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'Paid Media', amount: '$12,000', percent: '60%', color: 'bg-[#065D7E]' },
                  { name: 'Content Production', amount: '$3,000', percent: '15%', color: 'bg-[#11D4D8]' },
                  { name: 'Freelancers', amount: '$3,000', percent: '15%', color: 'bg-[#0a7aa0]' },
                  { name: 'Tools & Software', amount: '$1,000', percent: '5%', color: 'bg-[#065D7E]' },
                  { name: 'Retention', amount: '$1,000', percent: '5%', color: 'bg-[#11D4D8]' },
                ].map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{item.name}</span>
                      <span className="text-sm text-[#065D7E] font-semibold">{item.amount} ({item.percent})</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full`} style={{ width: item.percent }} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )

    case 'channel-strategy':
      return (
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-[#065D7E] text-sm font-semibold tracking-wider uppercase mb-3">Phase 2: Strategy</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Acquisition Strategy: 60% Paid + 40% Organic</h2>
            <p className="text-gray-500 text-lg">Balanced approach to user acquisition</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ModernCard>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#065D7E]/10">
                    <Zap className="w-5 h-5 text-[#065D7E]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#065D7E] text-xs font-semibold mb-1 tracking-wider uppercase">Google Search Ads</p>
                    <p className="text-gray-900 font-bold text-lg mb-1">35% of budget</p>
                    <p className="text-gray-500 text-sm">High intent, Arabic keywords, competitor targeting</p>
                  </div>
                </div>
              </CardContent>
            </ModernCard>

            <ModernCard>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#11D4D8]/10">
                    <Target className="w-5 h-5 text-[#11D4D8]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#11D4D8] text-xs font-semibold mb-1 tracking-wider uppercase">Instagram Ads</p>
                    <p className="text-gray-900 font-bold text-lg mb-1">25% of budget</p>
                    <p className="text-gray-500 text-sm">Visual content, merchant testimonials, demos</p>
                  </div>
                </div>
              </CardContent>
            </ModernCard>

            <ModernCard>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#0a7aa0]/10">
                    <PieChart className="w-5 h-5 text-[#0a7aa0]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#0a7aa0] text-xs font-semibold mb-1 tracking-wider uppercase">Salla App Store</p>
                    <p className="text-gray-900 font-bold text-lg mb-1">40% organic</p>
                    <p className="text-gray-500 text-sm">Featured placement, reviews, ratings optimization</p>
                  </div>
                </div>
              </CardContent>
            </ModernCard>

            <ModernCard>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#065D7E]/10">
                    <Users className="w-5 h-5 text-[#065D7E]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#065D7E] text-xs font-semibold mb-1 tracking-wider uppercase">Community + Email</p>
                    <p className="text-gray-900 font-bold text-lg mb-1">25% organic</p>
                    <p className="text-gray-500 text-sm">Saudi merchant groups, LinkedIn, email nurture</p>
                  </div>
                </div>
              </CardContent>
            </ModernCard>
          </div>

          <Card className="border-0 shadow-md bg-gradient-to-br from-[#F0FBFB] to-white">
            <CardContent className="p-8">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-[#11D4D8]/10 flex-shrink-0">
                  <TrendingUp className="w-7 h-7 text-[#11D4D8]" />
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-xl mb-3">Channel Strategy Rationale</p>
                  <p className="text-gray-600 leading-relaxed">
                    Blend paid acquisition (Google/Instagram ads) for immediate traction with organic channels
                    (Salla Store, community, content) for sustainable long-term growth. This balanced approach
                    mitigates risk while maximizing reach.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )

    case 'content-strategy':
      return (
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-[#065D7E] text-sm font-semibold tracking-wider uppercase mb-3">Phase 2: Strategy</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Content Engine: What We're Saying</h2>
            <p className="text-gray-500 text-lg">Educational content that drives conversions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ModernCard>
              <CardContent className="p-6">
                <h3 className="text-[#065D7E] font-bold mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Content Pillars
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span><strong>Product Demos:</strong> Short videos showing dialect search accuracy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span><strong>Merchant Stories:</strong> Testimonials from early users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span><strong>Educational:</strong> E-commerce search optimization tips</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span><strong>Case Studies:</strong> Before/after search performance</span>
                  </li>
                </ul>
              </CardContent>
            </ModernCard>

            <ModernCard>
              <CardContent className="p-6">
                <h3 className="text-[#11D4D8] font-bold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Distribution Channels
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span><strong>Instagram:</strong> Reels, Stories, Posts (3-4x/week)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span><strong>LinkedIn:</strong> Professional case studies (2x/week)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span><strong>YouTube:</strong> Longer tutorials and demos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span><strong>Email:</strong> Weekly tips to trial users</span>
                  </li>
                </ul>
              </CardContent>
            </ModernCard>
          </div>

          <Card className="border-0 shadow-md bg-white">
            <CardHeader>
              <CardTitle className="text-[#065D7E]">Content Production Investment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-[#F0FBFB] rounded-lg">
                  <p className="text-2xl font-bold text-[#065D7E]">$4,000</p>
                  <p className="text-sm text-gray-600">Monthly content budget</p>
                </div>
                <div className="p-4 bg-[#F0FBFB] rounded-lg">
                  <p className="text-2xl font-bold text-[#11D4D8]">2</p>
                  <p className="text-sm text-gray-600">Freelance content creators</p>
                </div>
                <div className="p-4 bg-[#F0FBFB] rounded-lg">
                  <p className="text-2xl font-bold text-[#0a7aa0]">12-15</p>
                  <p className="text-sm text-gray-600">Pieces per month</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )

    case 'positioning-messaging':
      return (
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-[#065D7E] text-sm font-semibold tracking-wider uppercase mb-3">Phase 2: Strategy</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Positioning & Messaging Framework</h2>
            <p className="text-gray-500 text-lg">How we communicate Alfinder's value</p>
          </div>

          <Card className="border-0 shadow-md bg-white">
            <CardHeader>
              <CardTitle className="text-[#065D7E]">Core Value Proposition</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-6 bg-gradient-to-br from-[#F0FBFB] to-white rounded-lg mb-6">
                <p className="text-xl text-gray-900 font-semibold text-center mb-2">
                  "The Only Arabic Search That Understands Your Customers"
                </p>
                <p className="text-gray-600 text-center">
                  Alfinder understands Saudi, Gulf, and dialectal Arabic—not just Modern Standard Arabic
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ModernCard>
              <CardContent className="p-6">
                <h3 className="text-[#065D7E] font-bold mb-4">Target Audience Pain Points</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Standard search doesn't understand dialect queries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Customers can't find products using colloquial Arabic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Lost sales from "no results" searches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Complex setup for current solutions</span>
                  </li>
                </ul>
              </CardContent>
            </ModernCard>

            <ModernCard>
              <CardContent className="p-6">
                <h3 className="text-[#11D4D8] font-bold mb-4">Alfinder Solutions</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>Understands 7+ Arabic dialects automatically</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>One-click 5-minute setup on Salla/Zid</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>Reduces "no results" by 60-80%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                    <span>AI-powered continuous learning</span>
                  </li>
                </ul>
              </CardContent>
            </ModernCard>
          </div>

          <Card className="border-0 shadow-md bg-gradient-to-br from-[#F0FBFB] to-white">
            <CardContent className="p-8">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-[#11D4D8]/10 flex-shrink-0">
                  <Target className="w-7 h-7 text-[#11D4D8]" />
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-xl mb-3">Key Messaging Pillars</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• <strong>Dialect-First:</strong> Built for dialectal Arabic from day one</li>
                    <li>• <strong>Instant Setup:</strong> One click, 5 minutes, no technical skills needed</li>
                    <li>• <strong>Proven Results:</strong> 80 real users already seeing value</li>
                    <li>• <strong>Made for You:</strong> Designed specifically for Saudi/Gulf merchants</li>
                  </ul>
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
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-[#065D7E] text-sm font-semibold tracking-wider uppercase mb-3">Phase 3: Execution Plan</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">6-Month Timeline & Key Milestones</h2>
            <p className="text-gray-500 text-lg">Monthly objectives and success criteria</p>
          </div>

          <div className="space-y-4">
            {[
              { month: 'Month 1', focus: 'Launch all channels', users: '0 (foundation)', milestone: 'GTM Launch Complete', color: 'from-[#065D7E] to-[#11D4D8]' },
              { month: 'Month 2', focus: 'First paying users', users: '10-20', milestone: 'Reinvestment Loop Active', color: 'from-[#11D4D8] to-[#0a7aa0]' },
              { month: 'Month 3', focus: 'Validation phase', users: '40-60', milestone: 'Break-Even Achieved', color: 'from-[#065D7E] to-[#11D4D8]' },
              { month: 'Month 4', focus: 'Scaling winners', users: '80-110', milestone: 'Cash Flow Positive', color: 'from-[#11D4D8] to-[#0a7aa0]' },
              { month: 'Month 5', focus: 'Aggressive growth', users: '120-140', milestone: 'Conservative Target Close', color: 'from-[#065D7E] to-[#11D4D8]' },
              { month: 'Month 6', focus: 'Final push', users: '160 / 300', milestone: 'Target Achieved', color: 'from-[#11D4D8] to-[#065D7E]' },
            ].map((item, index) => (
              <Card key={item.month} className="border-0 shadow-md bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} text-white flex-shrink-0`}>
                      <span className="text-lg font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{item.month}</h3>
                        <Badge className="bg-[#11D4D8]/10 text-[#11D4D8] border-[#11D4D8]/20 w-fit">{item.milestone}</Badge>
                      </div>
                      <p className="text-gray-600 mb-1"><strong>Focus:</strong> {item.focus}</p>
                      <p className="text-gray-500 text-sm"><strong>Target Users:</strong> {item.users}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )

    case 'month-1-detail':
      return (
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-[#065D7E] text-sm font-semibold tracking-wider uppercase mb-3">Phase 3: Execution Plan</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Month 1: Foundation Sprint</h2>
            <p className="text-gray-500 text-lg">Day-by-day execution plan</p>
          </div>

          <div className="space-y-4">
            {[
              { week: 'Week 1', days: 'Days 1-7', tasks: ['Setup Google Ads account', 'Setup Instagram Ads account', 'Install tracking pixels', 'Create ad account assets', 'Design initial ad creatives', 'Write first ad copy', 'Setup analytics dashboard'], color: 'from-[#065D7E] to-[#11D4D8]' },
              { week: 'Week 2', days: 'Days 8-14', tasks: ['Launch Google Search campaigns', 'Launch Instagram campaigns', 'Monitor initial performance', 'A/B test ad creatives', 'Optimize keyword targeting', 'Refine audience segments'], color: 'from-[#11D4D8] to-[#0a7aa0]' },
              { week: 'Week 3', days: 'Days 15-21', tasks: ['Hire content freelancers', 'Create content calendar', 'Produce first batch of content', 'Setup Salla App Store listing', 'Optimize app description', 'Gather initial reviews'], color: 'from-[#065D7E] to-[#11D4D8]' },
              { week: 'Week 4', days: 'Days 22-30', tasks: ['Double down on winning channels', 'Pause underperforming ads', 'Scale successful creatives', 'Analyze first-week data', 'Prepare Month 2 strategy', 'Document learnings'], color: 'from-[#11D4D8] to-[#065D7E]' },
            ].map((item) => (
              <Card key={item.week} className="border-0 shadow-md bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} text-white flex-shrink-0`}>
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{item.week}</h3>
                        <Badge className="bg-[#11D4D8]/10 text-[#11D4D8] border-[#11D4D8]/20">{item.days}</Badge>
                      </div>
                      <ul className="space-y-2">
                        {item.tasks.map((task, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600">
                            <CheckCircle2 className="w-4 h-4 text-[#11D4D8] mt-0.5 flex-shrink-0" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )

    case 'kpis-tracking':
      return (
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-[#065D7E] text-sm font-semibold tracking-wider uppercase mb-3">Phase 3: Execution Plan</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">KPIs & Weekly Tracking Cadence</h2>
            <p className="text-gray-500 text-lg">Metrics that matter and how we track them</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ModernCard highlight>
              <CardContent className="p-6">
                <h3 className="text-[#065D7E] font-bold mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Weekly KPIs
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex justify-between">
                    <span>Trial Signups</span>
                    <Badge className="bg-[#065D7E]/10 text-[#065D7E] border-0">Primary</Badge>
                  </li>
                  <li className="flex justify-between">
                    <span>Paying Users</span>
                    <Badge className="bg-[#11D4D8]/10 text-[#11D4D8] border-0">Primary</Badge>
                  </li>
                  <li className="flex justify-between">
                    <span>CPA</span>
                    <Badge className="bg-[#0a7aa0]/10 text-[#0a7aa0] border-0">Primary</Badge>
                  </li>
                  <li className="flex justify-between">
                    <span>Conversion Rate</span>
                    <Badge className="bg-[#065D7E]/10 text-[#065D7E] border-0">Secondary</Badge>
                  </li>
                  <li className="flex justify-between">
                    <span>Churn Rate</span>
                    <Badge className="bg-[#11D4D8]/10 text-[#11D4D8] border-0">Secondary</Badge>
                  </li>
                </ul>
              </CardContent>
            </ModernCard>

            <ModernCard highlight>
              <CardContent className="p-6">
                <h3 className="text-[#11D4D8] font-bold mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Tracking Rhythm
                </h3>
                <div className="space-y-4">
                  {[
                    { frequency: 'Daily', tasks: 'Check ad spend, monitor conversions, review anomalies' },
                    { frequency: 'Weekly', tasks: 'Full KPI review, optimize campaigns, plan next week' },
                    { frequency: 'Monthly', tasks: 'Deep analysis, strategy pivot decisions, budget rebalancing' },
                  ].map((item) => (
                    <div key={item.frequency} className="p-3 bg-[#F0FBFB] rounded-lg">
                      <p className="font-bold text-gray-900 mb-1">{item.frequency}</p>
                      <p className="text-sm text-gray-600">{item.tasks}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </ModernCard>
          </div>

          <Card className="border-0 shadow-md bg-white">
            <CardHeader>
              <CardTitle className="text-[#065D7E]">KPI Dashboard Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 bg-[#F0FBFB] rounded-lg text-center">
                  <p className="text-2xl font-bold text-[#065D7E]">Real-time</p>
                  <p className="text-xs text-gray-600">Ad Performance</p>
                </div>
                <div className="p-4 bg-[#F0FBFB] rounded-lg text-center">
                  <p className="text-2xl font-bold text-[#11D4D8]">Daily</p>
                  <p className="text-xs text-gray-600">Conversion Tracking</p>
                </div>
                <div className="p-4 bg-[#F0FBFB] rounded-lg text-center">
                  <p className="text-2xl font-bold text-[#0a7aa0]">Weekly</p>
                  <p className="text-xs text-gray-600">Full Analysis</p>
                </div>
                <div className="p-4 bg-[#F0FBFB] rounded-lg text-center">
                  <p className="text-2xl font-bold text-[#065D7E]">Monthly</p>
                  <p className="text-xs text-gray-600">Strategy Review</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )

    case 'budget-allocation':
      return (
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-[#065D7E] text-sm font-semibold tracking-wider uppercase mb-3">Phase 3: Execution Plan</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Budget Allocation & Spend Phasing</h2>
            <p className="text-gray-500 text-lg">$20K budget spread across 6 months</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ModernCard>
              <CardContent className="p-6">
                <h3 className="text-[#065D7E] font-bold mb-4">Monthly Spend Allocation</h3>
                <div className="space-y-3">
                  {[
                    { month: 'Month 1', spend: '$5,000', note: 'Setup & launch' },
                    { month: 'Month 2', spend: '$4,000', note: 'Optimization phase' },
                    { month: 'Month 3', spend: '$3,500', note: 'Scaling winners' },
                    { month: 'Month 4', spend: '$3,000', note: 'Maintain + optimize' },
                    { month: 'Month 5', spend: '$2,500', note: 'Efficient scaling' },
                    { month: 'Month 6', spend: '$2,000', note: 'Final push' },
                  ].map((item) => (
                    <div key={item.month} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-bold text-gray-900">{item.month}</p>
                        <p className="text-xs text-gray-500">{item.note}</p>
                      </div>
                      <Badge className="bg-[#11D4D8]/10 text-[#11D4D8] border-[#11D4D8]/20">{item.spend}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </ModernCard>

            <ModernCard>
              <CardContent className="p-6">
                <h3 className="text-[#11D4D8] font-bold mb-4">Channel Budget Split</h3>
                <div className="space-y-3">
                  {[
                    { channel: 'Google Search Ads', budget: '$2,800', pct: '35%' },
                    { channel: 'Instagram Ads', budget: '$2,000', pct: '25%' },
                    { channel: 'Freelancers (Content & Ads)', budget: '$4,000', pct: '20%' },
                    { channel: 'Content Production', budget: '$1,600', pct: '20%' },
                    { channel: 'Tools & Software', budget: '$400', pct: '5%' },
                  ].map((item) => (
                    <div key={item.channel}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{item.channel}</span>
                        <span className="text-sm text-[#065D7E] font-semibold">{item.budget}</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#065D7E] to-[#11D4D8] rounded-full" style={{ width: item.pct }} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </ModernCard>
          </div>

          <Card className="border-0 shadow-md bg-white">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#11D4D8]/10 flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-[#11D4D8]" />
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-lg mb-2">Reinvestment Strategy</p>
                  <p className="text-gray-600">
                    Each paying user generates ~$80/month to reinvest in acquisition. By Month 2,
                    reinvestment covers most acquisition costs. By Month 3, the strategy becomes self-funding.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )

    case 'team-roles':
      return (
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-[#065D7E] text-sm font-semibold tracking-wider uppercase mb-3">Phase 3: Execution Plan</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Team Structure & Roles</h2>
            <p className="text-gray-500 text-lg">Lean team with clear responsibilities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ModernCard highlight>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#065D7E]/10">
                    <Users className="w-6 h-6 text-[#065D7E]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#065D7E] font-bold text-lg mb-2">GTM Lead (Founder)</h3>
                    <p className="text-gray-500 text-sm mb-3">Full-time</p>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Strategy & budget decisions</li>
                      <li>• Channel optimization</li>
                      <li>• Partnership outreach</li>
                      <li>• Weekly KPI reviews</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </ModernCard>

            <ModernCard highlight>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#11D4D8]/10">
                    <Zap className="w-6 h-6 text-[#11D4D8]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#11D4D8] font-bold text-lg mb-2">Content Writer & Graphic Designer</h3>
                    <p className="text-gray-500 text-sm mb-3">Part-time, $2,500/mo total</p>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Create social media content</li>
                      <li>• Design ad creatives & graphics</li>
                      <li>• Produce video demos</li>
                      <li>• Write case studies & blog posts</li>
                      <li>• Manage content calendar</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </ModernCard>

            <ModernCard highlight>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#0a7aa0]/10">
                    <Target className="w-6 h-6 text-[#0a7aa0]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#0a7aa0] font-bold text-lg mb-2">Ads Specialist</h3>
                    <p className="text-gray-500 text-sm mb-3">Contractor, $1,500/mo</p>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Manage Google/Instagram ads</li>
                      <li>• A/B test creatives</li>
                      <li>• Optimize targeting</li>
                      <li>• Daily bid management</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </ModernCard>
          </div>

          <Card className="border-0 shadow-md bg-white">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-[#065D7E]">$4,000</p>
                  <p className="text-sm text-gray-600">Monthly freelancer cost</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#11D4D8]">3</p>
                  <p className="text-sm text-gray-600">Team members</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#0a7aa0]">20%</p>
                  <p className="text-sm text-gray-600">Of budget allocated</p>
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
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-[#065D7E] text-sm font-semibold tracking-wider uppercase mb-3">Phase 4: Risk Management</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Top 5 Risks & Mitigation Plans</h2>
            <p className="text-gray-500 text-lg">Proactive risk management strategies</p>
          </div>

          <div className="space-y-4">
            {[
              { risk: 'Higher than expected CPA', impact: 'High', mitigation: 'Optimize ad creatives, refine targeting, expand organic channels' },
              { risk: 'Lower conversion rates', impact: 'Medium', mitigation: 'Improve onboarding experience, add product tutorials' },
              { risk: 'Churn higher than projected', impact: 'High', mitigation: 'Add success team, improve customer support, enhance features' },
              { risk: 'Market timing issues', impact: 'Medium', mitigation: 'Flexible budget allocation, pivot messaging based on feedback' },
              { risk: 'Competitor response', impact: 'Low', mitigation: 'Focus on unique dialect advantage, strengthen partnerships' },
            ].map((item, index) => (
              <ModernCard key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-[#065D7E]/10 flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-[#065D7E]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{item.risk}</h3>
                        <Badge className={item.impact === 'High' ? 'bg-red-100 text-red-700 border-0' : 'bg-yellow-100 text-yellow-700 border-0'}>
                          {item.impact} Impact
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-sm"><strong>Mitigation:</strong> {item.mitigation}</p>
                    </div>
                  </div>
                </CardContent>
              </ModernCard>
            ))}
          </div>
        </div>
      )

    case 'decision-frameworks':
      return (
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-[#065D7E] text-sm font-semibold tracking-wider uppercase mb-3">Phase 4: Risk Management</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Month 3 Pivot Framework & Decision Gates</h2>
            <p className="text-gray-500 text-lg">Data-driven decision making</p>
          </div>

          <Card className="border-0 shadow-md bg-white">
            <CardHeader>
              <CardTitle className="text-[#065D7E]">Month 3 Decision Gates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                  <p className="font-bold text-green-800 mb-1">✓ Continue if:</p>
                  <p className="text-green-700 text-sm">Achieving 35-50 paying users, CPA ≤$80, positive user feedback</p>
                </div>
                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                  <p className="font-bold text-yellow-800 mb-1">⚠ Optimize if:</p>
                  <p className="text-yellow-700 text-sm">10-30 paying users, CPA $80-120, mixed feedback</p>
                </div>
                <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                  <p className="font-bold text-red-800 mb-1">✗ Pivot if:</p>
                  <p className="text-red-700 text-sm">&lt;10 paying users, CPA &gt;$120, negative feedback</p>
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
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-[#065D7E] text-sm font-semibold tracking-wider uppercase mb-3">Phase 5: The Ask</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Approval Required & Next Steps</h2>
            <p className="text-gray-500 text-lg">Ready to execute the GTM strategy</p>
          </div>

          <Card className="border-0 shadow-md bg-gradient-to-br from-[#F0FBFB] via-[#e0f5f5] to-[#F0FBFB] border border-[#11D4D8]/20">
            <CardContent className="p-8 text-center">
              <p className="text-[#065D7E] text-sm font-semibold mb-3 tracking-wider uppercase">Investment Requested</p>
              <p className="text-5xl font-bold mb-2 text-gray-900">$20,000</p>
              <p className="text-gray-600">6-month GTM execution budget</p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ModernCard>
              <CardContent className="p-6">
                <h3 className="text-[#065D7E] font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Approval Required For
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• $20K budget allocation</li>
                  <li>• Google & Instagram ad accounts</li>
                  <li>• Freelancer hiring approval</li>
                  <li>• Salla partnership outreach</li>
                </ul>
              </CardContent>
            </ModernCard>

            <ModernCard>
              <CardContent className="p-6">
                <h3 className="text-[#11D4D8] font-bold mb-4 flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Next Steps
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Week 1: Setup ad accounts & tracking</li>
                  <li>• Week 2: Launch first campaigns</li>
                  <li>• Week 3: Hire content freelancers</li>
                  <li>• Week 4: Salla partnership outreach</li>
                </ul>
              </CardContent>
            </ModernCard>
          </div>

          <Card className="border-0 shadow-md bg-white">
            <CardContent className="p-8 text-center">
              <p className="text-gray-900 font-bold text-xl mb-2">Ready to launch upon approval</p>
              <p className="text-gray-600">All preparation complete. Execution can begin immediately.</p>
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
    }, 8000)

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
          <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Link href="/" className="text-[#065D7E] hover:text-[#11D4D8] transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                  </Link>
                  <div>
                    <h1 className="text-[#065D7E] font-bold text-lg">Alfinder GTM Strategy</h1>
                    <p className="text-gray-400 text-xs">CEO Review | 6-Month Plan</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-[#065D7E]"
                    title={isPlaying ? 'Pause (Press F)' : 'Auto-play (Press F)'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <Badge className="bg-gray-100 text-[#065D7E] border-0">
                    {currentSlide + 1} / {filteredSlides.length}
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Phase Filter */}
          <div className="bg-white/50 backdrop-blur-sm border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-4 py-3">
              <div className="flex items-center gap-2 overflow-x-auto">
                <button
                  onClick={() => {
                    setSelectedPhase(null)
                    setCurrentSlide(0)
                  }}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                    selectedPhase === null
                      ? 'bg-[#065D7E] text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
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
                        "px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                        selectedPhase === phaseNumber
                          ? 'bg-[#065D7E] text-white shadow-sm'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
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
                  <p className="text-gray-400">Loading slide...</p>
                </div>
              ) : (
                <>
                  {/* Slide Card */}
                  <Card className="overflow-hidden shadow-lg bg-white border border-gray-200">
                    {/* Slide Header */}
                    <div className="bg-white border-b border-gray-200 p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-xl bg-[#F0FBFB]">
                            {SlideIcon && <SlideIcon className="w-8 h-8 text-[#065D7E]" />}
                          </div>
                          <div>
                            <Badge className="mb-2 bg-[#F0FBFB] text-[#065D7E] border-0 font-normal">
                              {currentSlideData.category}
                            </Badge>
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
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
                  className="p-3 rounded-xl bg-white shadow-md border border-gray-200 text-[#065D7E] hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
                        idx === currentSlide ? 'bg-[#065D7E] w-8' : 'bg-gray-300 hover:bg-gray-400'
                      )}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  disabled={currentSlide === filteredSlides.length - 1}
                  className="p-3 rounded-xl bg-white shadow-md border border-gray-200 text-[#065D7E] hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next slide"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Keyboard hint */}
              <div className="text-center mt-4">
                <p className="text-gray-400 text-xs">Arrow keys to navigate • Space/Enter for next • F for auto-play</p>
              </div>

              {/* Slide Number Navigation (Mobile) */}
              <div className="md:hidden mt-4 flex flex-wrap gap-2 justify-center">
                {filteredSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                      idx === currentSlide
                        ? 'bg-[#065D7E] text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
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
