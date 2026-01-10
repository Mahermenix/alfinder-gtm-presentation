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
  Globe,
  XCircle,
  LucideIcon,
  Play,
  Pause,
  ChevronRight,
} from 'lucide-react'
import Link from 'next/link'

// ============================================
// TYPES
// ============================================

interface Slide {
  id: string
  title: string
  category: string
  icon: LucideIcon
  gradient: string
}

// ============================================
// SLIDES DATA
// ============================================

const slides: Slide[] = [
  // SECTION 1: THE OPPORTUNITY
  {
    id: 'opportunity',
    title: 'The Opportunity: Arabic Search is Broken',
    category: 'The Problem',
    icon: AlertTriangle,
    gradient: 'from-red-600 via-orange-600 to-amber-500',
  },
  {
    id: 'market-size',
    title: 'Market Size: 1.2M Merchants Waiting',
    category: 'The Problem',
    icon: Globe,
    gradient: 'from-orange-600 via-amber-600 to-yellow-500',
  },
  {
    id: 'customer-pain',
    title: 'The Customer: Losing 20% of Sales',
    category: 'The Problem',
    icon: Users,
    gradient: 'from-amber-600 via-yellow-600 to-lime-500',
  },

  // SECTION 2: THE SOLUTION
  {
    id: 'solution',
    title: 'Alfinder: Search That Understands Dialects',
    category: 'The Solution',
    icon: Zap,
    gradient: 'from-emerald-600 via-teal-600 to-cyan-500',
  },
  {
    id: 'aha-moment',
    title: 'The Aha Moment: <5 Minutes to Value',
    category: 'The Solution',
    icon: Award,
    gradient: 'from-teal-600 via-cyan-600 to-sky-500',
  },
  {
    id: 'positioning',
    title: 'Why Alfinder Wins',
    category: 'The Solution',
    icon: Target,
    gradient: 'from-cyan-600 via-blue-600 to-indigo-500',
  },

  // SECTION 3: THE ECONOMICS
  {
    id: 'unit-economics',
    title: 'Unit Economics: 3.7x LTV:CAC',
    category: 'The Numbers',
    icon: DollarSign,
    gradient: 'from-green-600 via-emerald-600 to-teal-500',
  },
  {
    id: 'revenue-scenarios',
    title: 'Revenue: $46K to $93K in 6 Months',
    category: 'The Numbers',
    icon: TrendingUp,
    gradient: 'from-emerald-600 via-green-600 to-lime-500',
  },
  {
    id: 'budget-allocation',
    title: 'Budget: $20K with Self-Funding Loop',
    category: 'The Numbers',
    icon: PieChart,
    gradient: 'from-lime-600 via-green-600 to-emerald-500',
  },

  // SECTION 4: THE STRATEGY
  {
    id: 'acquisition-channels',
    title: 'Acquisition: 60% Paid + 40% Organic',
    category: 'Go-to-Market',
    icon: TrendingUp,
    gradient: 'from-blue-600 via-indigo-600 to-violet-500',
  },
  {
    id: 'content-engine',
    title: 'Content Engine: 48 Posts in 6 Months',
    category: 'Go-to-Market',
    icon: BarChart3,
    gradient: 'from-indigo-600 via-violet-600 to-purple-500',
  },
  {
    id: 'paid-media',
    title: 'Paid Media: Google + Instagram',
    category: 'Go-to-Market',
    icon: Target,
    gradient: 'from-violet-600 via-purple-600 to-fuchsia-500',
  },

  // SECTION 5: THE TIMELINE
  {
    id: '6-month-roadmap',
    title: '6-Month Roadmap: 0 to 150+ Users',
    category: 'Execution',
    icon: Calendar,
    gradient: 'from-purple-600 via-pink-600 to-rose-500',
  },
  {
    id: 'kpis',
    title: 'KPIs: Top 5 Metrics to Track',
    category: 'Execution',
    icon: BarChart3,
    gradient: 'from-pink-600 via-rose-600 to-red-500',
  },

  // SECTION 6: MONTH 1 SPRINT
  {
    id: 'month-1-overview',
    title: 'Month 1: Foundation Sprint',
    category: 'Month 1 Plan',
    icon: Rocket,
    gradient: 'from-red-600 via-orange-600 to-amber-500',
  },
  {
    id: 'week-1',
    title: 'Week 1: Launch Everything',
    category: 'Month 1 Plan',
    icon: Play,
    gradient: 'from-orange-600 via-amber-600 to-yellow-500',
  },
  {
    id: 'week-2',
    title: 'Week 2: Content & Engagement',
    category: 'Month 1 Plan',
    icon: Activity,
    gradient: 'from-amber-600 via-yellow-600 to-lime-500',
  },
  {
    id: 'week-3-4',
    title: 'Week 3-4: Optimize & Review',
    category: 'Month 1 Plan',
    icon: CheckCircle2,
    gradient: 'from-lime-600 via-green-600 to-emerald-500',
  },

  // SECTION 7: READY TO LAUNCH
  {
    id: 'team',
    title: 'Team: Lean & Focused',
    category: 'Ready to Launch',
    icon: Users,
    gradient: 'from-teal-600 via-cyan-600 to-sky-500',
  },
  {
    id: 'next-steps',
    title: 'Ready to Execute',
    category: 'Ready to Launch',
    icon: Rocket,
    gradient: 'from-cyan-600 via-blue-600 to-indigo-500',
  },
]

const categories = ['The Problem', 'The Solution', 'The Numbers', 'Go-to-Market', 'Execution', 'Month 1 Plan', 'Ready to Launch']

// ============================================
// SLIDE CONTENT RENDERERS
// ============================================

const renderSlideContent = (slideId: string) => {
  switch (slideId) {
    // ============================================
    // SECTION 1: THE PROBLEM
    // ============================================
    case 'opportunity':
      return (
        <div className="space-y-8">
          {/* Headline */}
          <div className="text-center mb-8">
            <p className="text-white/60 text-lg mb-4">THE PROBLEM</p>
            <h2 className="text-5xl font-bold text-white mb-4">Arabic Search is Broken</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              E-commerce platforms in the MENA region struggle with search because customers search in dialect, not Modern Standard Arabic
            </p>
          </div>

          {/* Problem Statement */}
          <Card className="bg-red-500/20 backdrop-blur-sm border-red-400/30">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-red-500/30">
                  <AlertTriangle className="w-8 h-8 text-red-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white mb-2">The "No Results" Problem</p>
                  <p className="text-white/80 text-lg">
                    When a Saudi customer searches for <span className="text-red-400 font-semibold">"جوال"</span> (mobile) but the product is listed as <span className="text-red-400 font-semibold">"موبايل"</span>, traditional search returns nothing
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Impact */}
          <div className="grid grid-cols-3 gap-4">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-6">
                <p className="text-5xl font-bold text-red-400 mb-2">20%</p>
                <p className="text-white/70">of searches return "no results"</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-6">
                <p className="text-5xl font-bold text-orange-400 mb-2">Lost Sales</p>
                <p className="text-white/70">Customers can't find products</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-6">
                <p className="text-5xl font-bold text-amber-400 mb-2">Frustrated</p>
                <p className="text-white/70">Both merchants & shoppers</p>
              </CardContent>
            </Card>
          </div>

          {/* Why It Happens */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="p-6">
              <p className="text-white/60 text-sm mb-4">WHY IT HAPPENS</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  <p className="text-white/80">Built-in search only matches exact keywords</p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  <p className="text-white/80">No dialect understanding (Gulf, Egyptian, Levantine, Maghrebi)</p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  <p className="text-white/80">Western solutions don't support Arabic properly</p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  <p className="text-white/80">Translation tools miss the dialect nuance</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )

    case 'market-size':
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-white/60 text-lg mb-2">MARKET SIZE</p>
            <h2 className="text-4xl font-bold text-white">1.2M Merchants in MENA</h2>
            <p className="text-white/70 mt-2">A massive, underserved market waiting for a solution</p>
          </div>

          {/* TAM SAM SOM */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <Card className="bg-gradient-to-br from-orange-500/30 to-amber-500/30 backdrop-blur-sm border-orange-400/30">
              <CardContent className="p-6 text-center">
                <p className="text-white/60 text-sm mb-2">TAM</p>
                <p className="text-4xl font-bold text-white mb-1">11.7M</p>
                <p className="text-white/70 text-sm">Global Arabic-speaking merchants</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-amber-500/30 to-yellow-500/30 backdrop-blur-sm border-amber-400/30">
              <CardContent className="p-6 text-center">
                <p className="text-white/60 text-sm mb-2">SAM</p>
                <p className="text-4xl font-bold text-white mb-1">1.2M</p>
                <p className="text-white/70 text-sm">MENA merchants on Salla/Zid/Shopify</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-yellow-500/30 to-lime-500/30 backdrop-blur-sm border-yellow-400/30">
              <CardContent className="p-6 text-center">
                <p className="text-white/60 text-sm mb-2">SOM (6 mo)</p>
                <p className="text-4xl font-bold text-white mb-1">300</p>
                <p className="text-white/70 text-sm">paying users with $20K budget</p>
              </CardContent>
            </Card>
          </div>

          {/* Target Market */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <p className="text-white font-semibold text-lg mb-4">PRIMARY ICP: Saudi/Gulf E-commerce Merchants</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-white/60 text-sm">PLATFORM</p>
                  <p className="text-white text-lg">Salla or Zid</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm">SCALE</p>
                  <p className="text-white text-lg">1K-10K monthly visitors</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm">REVENUE</p>
                  <p className="text-white text-lg">10-100K SAR/month</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm">LOCATION</p>
                  <p className="text-white text-lg">KSA 60%, UAE 20%, Kuwait 10%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Decision Maker */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <p className="text-white font-semibold text-lg mb-4">DECISION MAKER</p>
              <div className="flex items-center gap-4">
                <Users className="w-12 h-12 text-amber-400" />
                <div>
                  <p className="text-white text-lg">Founder/Owner (90% have full budget authority)</p>
                  <p className="text-white/60 text-sm">25-40 years old • Non-technical (70%)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )

    case 'customer-pain':
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-white/60 text-lg mb-2">CUSTOMER PAIN</p>
            <h2 className="text-4xl font-bold text-white">Losing 20% of Sales</h2>
            <p className="text-white/70 mt-2">The real impact on merchants' businesses</p>
          </div>

          {/* The Pain Story */}
          <Card className="bg-gradient-to-r from-amber-500/20 to-red-500/20 backdrop-blur-sm border-amber-400/30">
            <CardContent className="p-8">
              <p className="text-white/60 text-sm mb-4">THE MERCHANT'S STORY</p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-amber-500/30 flex items-center justify-center text-amber-400 font-bold flex-shrink-0">1</div>
                  <p className="text-white/90 text-lg">Customer searches for <span className="text-amber-400 font-semibold">"جوال"</span> (Gulf dialect for mobile)</p>
                </div>
                <ChevronRight className="w-6 h-6 text-white/40 mx-auto" />
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange-500/30 flex items-center justify-center text-orange-400 font-bold flex-shrink-0">2</div>
                  <p className="text-white/90 text-lg">Product is listed as <span className="text-orange-400 font-semibold">"موبايل"</span> (MSA/Egyptian)</p>
                </div>
                <ChevronRight className="w-6 h-6 text-white/40 mx-auto" />
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-500/30 flex items-center justify-center text-red-400 font-bold flex-shrink-0">3</div>
                  <p className="text-white/90 text-lg">Search returns <span className="text-red-400 font-semibold">"No results found"</span></p>
                </div>
                <ChevronRight className="w-6 h-6 text-white/40 mx-auto" />
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-500/30 flex items-center justify-center text-red-400 font-bold flex-shrink-0">4</div>
                  <p className="text-white/90 text-lg">Customer leaves → <span className="text-red-400 font-semibold">Lost sale</span></p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* The Impact */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-red-500/20 backdrop-blur-sm border-red-400/30">
              <CardContent className="p-6">
                <p className="text-white/60 text-sm mb-2">REVENUE IMPACT</p>
                <p className="text-3xl font-bold text-white mb-1">-20%</p>
                <p className="text-white/70 text-sm">Potential sales lost</p>
              </CardContent>
            </Card>
            <Card className="bg-orange-500/20 backdrop-blur-sm border-orange-400/30">
              <CardContent className="p-6">
                <p className="text-white/60 text-sm mb-2">CUSTOMER FRUSTRATION</p>
                <p className="text-3xl font-bold text-white mb-1">High</p>
                <p className="text-white/70 text-sm">Poor experience = churn</p>
              </CardContent>
            </Card>
          </div>

          {/* Why They Buy */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <p className="text-white font-semibold mb-4">WHY THEY BUY</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <p className="text-white"><span className="text-green-400 font-semibold">Primary:</span> Reduce lost sales (revenue impact)</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <p className="text-white"><span className="text-blue-400 font-semibold">Secondary:</span> Improve customer experience</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  <p className="text-white"><span className="text-purple-400 font-semibold">Tertiary:</span> AI adoption / competitive advantage</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )

    // ============================================
    // SECTION 2: THE SOLUTION
    // ============================================
    case 'solution':
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-white/60 text-lg mb-2">THE SOLUTION</p>
            <h2 className="text-4xl font-bold text-white mb-2">Alfinder: Search That Understands Dialects</h2>
            <p className="text-xl text-emerald-400 font-semibold italic">"The search that understands Arabic."</p>
          </div>

          {/* Core Value Prop */}
          <Card className="bg-gradient-to-br from-emerald-500/30 to-teal-500/30 backdrop-blur-sm border-emerald-400/30">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-xl bg-emerald-500/30">
                  <Zap className="w-12 h-12 text-emerald-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-xl mb-2">AI-Powered Dialect Understanding</p>
                  <p className="text-white/80 text-lg">
                    Alfinder understands Gulf (جوال), Egyptian (موبايل), Levantine, and Maghrebi dialects - not just Modern Standard Arabic
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Differentiators */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/20">
                    <Globe className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Dialect Understanding</p>
                    <p className="text-white/60 text-sm">Gulf, Egyptian, Levantine, Maghrebi</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-teal-500/20">
                    <Zap className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">One-Click Setup</p>
                    <p className="text-white/60 text-sm">Install in 5 minutes on Salla/Zid</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/20">
                    <Activity className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">AI-Powered</p>
                    <p className="text-white/60 text-sm">Continuous learning from searches</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <DollarSign className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Affordable</p>
                    <p className="text-white/60 text-sm">$102/month (383 SAR) - SME-friendly</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Competitive Advantage */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="p-6">
              <p className="text-white font-semibold mb-4">COMPETITIVE ADVANTAGE</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <p className="text-white/80"><span className="text-white font-semibold">vs. Built-in Search:</span> Understands dialects (built-in only matches keywords)</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <p className="text-white/80"><span className="text-white font-semibold">vs. Algolia/Doofinder:</span> Built for Arabic dialects (others are Western-centric)</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <p className="text-white/80"><span className="text-white font-semibold">vs. Translation:</span> Real dialect understanding (not just keyword translation)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )

    case 'aha-moment':
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-white/60 text-lg mb-2">THE AHA MOMENT</p>
            <h2 className="text-4xl font-bold text-white">&lt;5 Minutes to Value</h2>
            <p className="text-white/70 mt-2">The moment everything clicks for the merchant</p>
          </div>

          {/* Definition */}
          <Card className="bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-sm border-purple-400/30">
            <CardContent className="p-8 text-center">
              <Award className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <p className="text-2xl font-bold text-white mb-2">
                Search in Arabic dialect + get relevant results in that dialect
              </p>
              <p className="text-white/70">That's the aha moment. When they see it working, they're sold.</p>
            </CardContent>
          </Card>

          {/* Conversion Funnel */}
          <div className="space-y-3">
            <p className="text-white font-semibold text-lg">THE CONVERSION FUNNEL</p>
            {[
              { stage: 'Trial Signup', rate: '100%', desc: 'Merchant installs Alfinder', color: 'bg-blue-500' },
              { stage: 'Aha Moment', rate: '80%', desc: 'Sees dialect search working', color: 'bg-purple-500' },
              { stage: 'Day 7 Payment', rate: '25%', desc: 'Prompted to upgrade', color: 'bg-pink-500' },
              { stage: 'Paying User', rate: '21%', desc: 'Subscribes ($102/mo)', color: 'bg-green-500' },
            ].map((item) => (
              <Card key={item.stage} className="overflow-hidden">
                <div className="flex items-center">
                  <div className={`${item.color} w-24 flex-shrink-0 flex items-center justify-center`}>
                    <span className="text-white font-bold">{item.rate}</span>
                  </div>
                  <div className="flex-1 p-4 bg-white/10 backdrop-blur-sm">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-white font-semibold">{item.stage}</p>
                        <p className="text-white/60 text-sm">{item.desc}</p>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-white/50" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-5">
                <p className="text-white/60 text-sm">TIME TO AHA</p>
                <p className="text-3xl font-bold text-white">&lt;5 min</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-5">
                <p className="text-white/60 text-sm">AHA MOMENT TARGET</p>
                <p className="text-3xl font-bold text-white">80%</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )

    case 'positioning':
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-white/60 text-lg mb-2">POSITIONING</p>
            <h2 className="text-4xl font-bold text-white">Why Alfinder Wins</h2>
          </div>

          {/* Tagline */}
          <Card className="bg-gradient-to-r from-cyan-500/30 to-blue-500/30 backdrop-blur-sm border-cyan-400/30">
            <CardContent className="p-8 text-center">
              <Target className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <p className="text-2xl font-bold text-white italic">
                "Stop losing sales when customers search in dialect"
              </p>
            </CardContent>
          </Card>

          {/* Value Props */}
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                title: '20% More Sales from Arabic Searches',
                desc: 'Capture the 20% of sales currently lost to "no results"',
                metric: '+20%',
              },
              {
                title: '5-Minute Setup',
                desc: 'One-click integration with Salla/Zid. No developer needed.',
                metric: '5 min',
              },
              {
                title: 'Understands All Dialects',
                desc: 'Gulf, Egyptian, Levantine, Maghrebi - not just MSA',
                metric: '4+ dialects',
              },
              {
                title: 'Affordable for SMEs',
                desc: 'Only $102/month (383 SAR) - pays for itself in days',
                metric: '$102/mo',
              },
            ].map((prop, idx) => (
              <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center flex-shrink-0">
                      <p className="text-xl font-bold text-white">{prop.metric}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-semibold text-lg">{prop.title}</p>
                      <p className="text-white/60 text-sm">{prop.desc}</p>
                    </div>
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )

    // ============================================
    // SECTION 3: THE ECONOMICS
    // ============================================
    case 'unit-economics':
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-white/60 text-lg mb-2">UNIT ECONOMICS</p>
            <h2 className="text-4xl font-bold text-white">3.7x LTV:CAC Ratio</h2>
            <p className="text-white/70 mt-2">A healthy, sustainable business model</p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-4">
            <Card className="bg-green-500/20 backdrop-blur-sm border-green-400/30">
              <CardContent className="p-5">
                <p className="text-white/60 text-sm">LTV</p>
                <p className="text-3xl font-bold text-white">$1,224</p>
                <p className="text-white/70 text-xs mt-1">383 SAR × 12 months</p>
              </CardContent>
            </Card>
            <Card className="bg-blue-500/20 backdrop-blur-sm border-blue-400/30">
              <CardContent className="p-5">
                <p className="text-white/60 text-sm">CAC (Blended)</p>
                <p className="text-3xl font-bold text-white">$330</p>
                <p className="text-white/70 text-xs mt-1">Per paying user</p>
              </CardContent>
            </Card>
            <Card className="bg-emerald-500/20 backdrop-blur-sm border-emerald-400/30">
              <CardContent className="p-5">
                <p className="text-white/60 text-sm">LTV:CAC</p>
                <p className="text-3xl font-bold text-white">3.7:1</p>
                <p className="text-white/70 text-xs mt-1">Healthy (&gt;3:1)</p>
              </CardContent>
            </Card>
          </div>

          {/* Economics Breakdown */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <p className="text-white font-semibold mb-4">ECONOMICS BREAKDOWN</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <p className="text-white/80">ARPU (Monthly Revenue)</p>
                  <p className="text-white font-bold">$102/month</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-white/80">Customer Lifetime</p>
                  <p className="text-white font-bold">12 months</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-white/80">CPA (Cost per Trial)</p>
                  <p className="text-white font-bold">$80</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-white/80">Trial-to-Paid Conversion</p>
                  <p className="text-white font-bold">25%</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-white/80">Monthly Churn</p>
                  <p className="text-white font-bold">&lt;5%</p>
                </div>
                <div className="border-t border-white/20 pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <p className="text-white font-semibold">Payback Period</p>
                    <p className="text-emerald-400 font-bold">3.2 months ✓</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What This Means */}
          <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border-green-400/30">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-bold text-lg mb-2">What This Means</p>
                  <p className="text-white/80">
                    For every $1 we spend on acquisition, we get $3.70 back over the customer lifetime.
                    This is a healthy, sustainable business model with room to scale.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )

    case 'revenue-scenarios':
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-white/60 text-lg mb-2">REVENUE SCENARIOS</p>
            <h2 className="text-4xl font-bold text-white">$46K to $93K in 6 Months</h2>
            <p className="text-white/70 mt-2">Two scenarios based on execution</p>
          </div>

          {/* Scenarios */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-blue-500/30 to-cyan-500/30 backdrop-blur-sm border-blue-400/30">
              <CardContent className="p-6">
                <p className="text-blue-300 text-sm font-semibold mb-2">CONSERVATIVE</p>
                <p className="text-white/60 text-sm mb-4">Achievable with steady execution</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-white/60 text-xs">Paying Users</p>
                    <p className="text-3xl font-bold text-white">140-150</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs">Revenue (6 mo)</p>
                    <p className="text-3xl font-bold text-white">$46,000</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs">ROI</p>
                    <p className="text-3xl font-bold text-blue-400">90%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-sm border-purple-400/30">
              <CardContent className="p-6">
                <p className="text-purple-300 text-sm font-semibold mb-2">STRETCH</p>
                <p className="text-white/60 text-sm mb-4">Aggressive execution & optimization</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-white/60 text-xs">Paying Users</p>
                    <p className="text-3xl font-bold text-white">300</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs">Revenue (6 mo)</p>
                    <p className="text-3xl font-bold text-white">$93,000</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs">ROI</p>
                    <p className="text-3xl font-bold text-purple-400">200%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Investment */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white/60 text-sm">TOTAL INVESTMENT</p>
                  <p className="text-4xl font-bold text-white">$20,000</p>
                </div>
                <div className="text-right">
                  <p className="text-white/60 text-sm">TIMEFRAME</p>
                  <p className="text-4xl font-bold text-white">6 Months</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Revenue Path */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="p-6">
              <p className="text-white font-semibold mb-4">MONTHLY REVENUE TRAJECTORY (CONSERVATIVE)</p>
              <div className="grid grid-cols-6 gap-2">
                {[
                  { mo: 'M1', rev: '$0' },
                  { mo: 'M2', rev: '$1-2K' },
                  { mo: 'M3', rev: '$3.5-5K' },
                  { mo: 'M4', rev: '$6-8K' },
                  { mo: 'M5', rev: '$9-12K' },
                  { mo: 'M6', rev: '$14-15K' },
                ].map((item) => (
                  <div key={item.mo} className="text-center">
                    <p className="text-white/60 text-xs">{item.mo}</p>
                    <p className="text-white font-semibold">{item.rev}</p>
                  </div>
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
            <p className="text-white/60 text-lg mb-2">BUDGET ALLOCATION</p>
            <h2 className="text-4xl font-bold text-white">$20K with Self-Funding Loop</h2>
            <p className="text-white/70 mt-2">Every paying user adds $80 back to the budget</p>
          </div>

          {/* Budget Breakdown */}
          <div className="space-y-3">
            {[
              { cat: 'Paid Media', amt: '$8,000', pct: '40%', color: 'from-blue-500 to-cyan-500', desc: 'Google + Instagram ads' },
              { cat: 'Freelancers & Services', amt: '$5,000', pct: '25%', color: 'from-purple-500 to-pink-500', desc: 'Content writer, designer, analytics' },
              { cat: 'Content Production', amt: '$4,000', pct: '20%', color: 'from-orange-500 to-amber-500', desc: 'Blog posts, social content, videos' },
              { cat: 'Tools & Software', amt: '$2,000', pct: '10%', color: 'from-green-500 to-emerald-500', desc: 'Analytics, email, design tools' },
              { cat: 'Retention & Optimization', amt: '$1,000', pct: '5%', color: 'from-red-500 to-rose-500', desc: 'Customer success, churn reduction' },
            ].map((item) => (
              <Card key={item.cat} className={`bg-gradient-to-r ${item.color} bg-opacity-20 backdrop-blur-sm border-white/20`}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white font-semibold">{item.cat}</p>
                      <p className="text-white/60 text-sm">{item.desc}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-white">{item.amt}</p>
                      <p className="text-white/60 text-sm">{item.pct}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Self-Funding Loop */}
          <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border-green-400/30">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Activity className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-white font-bold text-lg mb-2">Self-Funding Loop</p>
                  <p className="text-white/80">
                    Each paying user generates $80 that goes back into acquisition. This reduces effective CPA from $80 to ~$62 over time,
                    creating a self-sustaining growth engine.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )

    // ============================================
    // SECTION 4: THE STRATEGY
    // ============================================
    case 'acquisition-channels':
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-white/60 text-lg mb-2">CHANNEL STRATEGY</p>
            <h2 className="text-4xl font-bold text-white">60% Paid + 40% Organic</h2>
            <p className="text-white/70 mt-2">Balanced approach for sustainable growth</p>
          </div>

          {/* Paid Channels */}
          <div>
            <p className="text-white/70 text-sm mb-3 font-semibold">PAID CHANNELS (60% of users)</p>
            <div className="space-y-3">
              <Card className="bg-blue-500/20 backdrop-blur-sm border-blue-400/30">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white font-semibold">Google Search Ads</p>
                      <p className="text-white/60 text-sm">Primary acquisition driver</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-bold">$4,800</p>
                      <p className="text-white/60 text-sm">60% of paid</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-purple-500/20 backdrop-blur-sm border-purple-400/30">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white font-semibold">Instagram Ads</p>
                      <p className="text-white/60 text-sm">Visual awareness + retargeting</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-bold">$3,200</p>
                      <p className="text-white/60 text-sm">40% of paid</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Organic Channels */}
          <div>
            <p className="text-white/70 text-sm mb-3 font-semibold">ORGANIC CHANNELS (40% of users)</p>
            <div className="grid grid-cols-2 gap-3">
              <Card className="bg-green-500/20 backdrop-blur-sm border-green-400/30">
                <CardContent className="p-3">
                  <p className="text-white font-semibold text-sm">Salla App Store</p>
                  <p className="text-white/60 text-xs">40% • Primary organic</p>
                </CardContent>
              </Card>
              <Card className="bg-green-500/20 backdrop-blur-sm border-green-400/30">
                <CardContent className="p-3">
                  <p className="text-white font-semibold text-sm">Community + Email</p>
                  <p className="text-white/60 text-xs">25% • Trust building</p>
                </CardContent>
              </Card>
              <Card className="bg-green-500/20 backdrop-blur-sm border-green-400/30">
                <CardContent className="p-3">
                  <p className="text-white font-semibold text-sm">Instagram Organic</p>
                  <p className="text-white/60 text-xs">15% • Brand awareness</p>
                </CardContent>
              </Card>
              <Card className="bg-green-500/20 backdrop-blur-sm border-green-400/30">
                <CardContent className="p-3">
                  <p className="text-white font-semibold text-sm">LinkedIn Organic</p>
                  <p className="text-white/60 text-xs">10% • B2B credibility</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Not Using */}
          <Card className="bg-red-500/20 backdrop-blur-sm border-red-400/30">
            <CardContent className="p-4">
              <p className="text-white/70 text-sm mb-2">NOT USING (Too Expensive/Ineffective)</p>
              <div className="flex flex-wrap gap-2">
                {['Twitter/X (CPC $3-8+)', 'LinkedIn ads (CPC $5-10+)', 'TikTok (B2C audience)', 'Facebook (declining)'].map((item) => (
                  <Badge key={item} className="bg-red-500/30 text-white border-red-400/50">
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )

    case 'content-engine':
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-white/60 text-lg mb-2">CONTENT ENGINE</p>
            <h2 className="text-4xl font-bold text-white">48 Posts in 6 Months</h2>
            <p className="text-white/70 mt-2">2x blog posts/week = Consistent content flow</p>
          </div>

          {/* Content Pillars */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <p className="text-white font-semibold mb-4">CONTENT PILLARS</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
                  <p className="text-blue-400 text-sm font-semibold mb-1">30% Problem Education</p>
                  <p className="text-white/70 text-sm">"Why Arabic search fails"</p>
                </div>
                <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/30">
                  <p className="text-purple-400 text-sm font-semibold mb-1">30% Solution Education</p>
                  <p className="text-white/70 text-sm">"How AI understands dialects"</p>
                </div>
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                  <p className="text-green-400 text-sm font-semibold mb-1">20% Social Proof</p>
                  <p className="text-white/70 text-sm">"X merchant increased sales by 20%"</p>
                </div>
                <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/30">
                  <p className="text-orange-400 text-sm font-semibold mb-1">20% How-To Guides</p>
                  <p className="text-white/70 text-sm">"Install on Salla in 5 minutes"</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Distribution */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <p className="text-white font-semibold mb-4">CONTENT DISTRIBUTION</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-white/80">Blog</p>
                  <p className="text-white font-semibold">2x posts/week</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-white/80">LinkedIn</p>
                  <p className="text-white font-semibold">2x posts/week (repurposed)</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-white/80">Instagram</p>
                  <p className="text-white font-semibold">3x feed + daily Stories + 2x Reels</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-white/80">Email Newsletter</p>
                  <p className="text-white font-semibold">Weekly curated content</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Production */}
          <div className="grid grid-cols-3 gap-4">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-4 text-center">
                <p className="text-white/60 text-xs">WRITER</p>
                <p className="text-white font-semibold">Freelancer</p>
                <p className="text-white/60 text-xs">Arabic + English</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-4 text-center">
                <p className="text-white/60 text-xs">DESIGNER</p>
                <p className="text-white font-semibold">Freelancer</p>
                <p className="text-white/60 text-xs">Canva templates</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-4 text-center">
                <p className="text-white/60 text-xs">VIDEO</p>
                <p className="text-white font-semibold">Founder</p>
                <p className="text-white/60 text-xs">iPhone demos</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )

    case 'paid-media':
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-white/60 text-lg mb-2">PAID MEDIA EXECUTION</p>
            <h2 className="text-4xl font-bold text-white">Google + Instagram</h2>
          </div>

          {/* Google Search Ads */}
          <Card className="bg-blue-500/20 backdrop-blur-sm border-blue-400/30">
            <CardContent className="p-6">
              <p className="text-blue-300 font-semibold mb-4">GOOGLE SEARCH ADS</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-white/60 text-xs">KEYWORDS</p>
                  <p className="text-white font-semibold">50-100 high-intent</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs">MATCH TYPES</p>
                  <p className="text-white font-semibold">60% Exact, 30% Phrase</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs">BUDGET</p>
                  <p className="text-white font-semibold">$1,200-1,600/mo</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs">TARGET CPA</p>
                  <p className="text-white font-semibold">$35-40/trial</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Instagram Ads */}
          <Card className="bg-purple-500/20 backdrop-blur-sm border-purple-400/30">
            <CardContent className="p-6">
              <p className="text-purple-300 font-semibold mb-4">INSTAGRAM ADS</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-white/60 text-xs">FORMAT</p>
                  <p className="text-white font-semibold">60% Feed, 30% Stories</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs">CREATIVE</p>
                  <p className="text-white font-semibold">Carousel + Video demos</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs">BUDGET</p>
                  <p className="text-white font-semibold">$800-1,066/mo</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs">TARGET CPA</p>
                  <p className="text-white font-semibold">$40-45/trial</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Optimization */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <p className="text-white font-semibold mb-3">WEEK 1 OPTIMIZATION</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <p className="text-white/80">Pause worst performers (CPA &gt;$60)</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <p className="text-white/80">Double down on winners (CPA &lt;$40)</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <p className="text-white/80">A/B test creatives weekly</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )

    // ============================================
    // SECTION 5: THE TIMELINE
    // ============================================
    case '6-month-roadmap':
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-white/60 text-lg mb-2">6-MONTH ROADMAP</p>
            <h2 className="text-4xl font-bold text-white">0 to 150+ Paying Users</h2>
            <p className="text-white/70 mt-2">Month-by-month growth trajectory</p>
          </div>

          {/* Timeline */}
          <div className="space-y-3">
            {[
              { month: 'Month 1', users: '0 (foundation)', focus: 'Launch all channels', milestone: 'GTM Launch Complete', color: 'from-blue-500 to-cyan-500' },
              { month: 'Month 2', users: '10-20', focus: 'First paying users', milestone: 'Reinvestment Loop Active', color: 'from-purple-500 to-pink-500' },
              { month: 'Month 3', users: '35-50', focus: 'Validation phase', milestone: 'Break-Even Achieved', color: 'from-pink-500 to-rose-500' },
              { month: 'Month 4', users: '60-80', focus: 'Scaling winners', milestone: 'Cash Flow Positive', color: 'from-orange-500 to-amber-500' },
              { month: 'Month 5', users: '90-115', focus: 'Aggressive growth', milestone: 'Conservative Target Close', color: 'from-amber-500 to-yellow-500' },
              { month: 'Month 6', users: '140-150 / 300', focus: 'Final push', milestone: 'Target Achieved', color: 'from-green-500 to-emerald-500' },
            ].map((item) => (
              <Card key={item.month} className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden">
                <div className="flex">
                  <div className={`bg-gradient-to-b ${item.color} w-1.5 flex-shrink-0`}></div>
                  <CardContent className="p-4 flex-1">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <p className="text-white font-bold">{item.month}</p>
                                                          <Badge className="bg-white/20 text-white border-white/30 text-xs">{item.milestone}</Badge>
                                                        </div>
                        <p className="text-white/70 text-sm">{item.focus}</p>
                      </div>
                      <div className="text-right ml-4">
                        <p className="text-2xl font-bold text-white">{item.users}</p>
                        <p className="text-white/50 text-xs">paying users</p>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* 7 Major Milestones */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="p-5">
              <p className="text-white font-semibold mb-3">7 MAJOR MILESTONES</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <p className="text-white/80">M1W4: GTM Launch Complete</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <p className="text-white/80">M2W6: Reinvestment Loop Active</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <p className="text-white/80">M3W10: Break-Even Achieved</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <p className="text-white/80">M3W11: Proven Channels Identified</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <p className="text-white/80">M4W13: Cash Flow Positive</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <p className="text-white/80">M5-6: Conservative Target (140-150)</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <p className="text-white/80">M6 (Best): Stretch Target (300)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )

    case 'kpis':
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-white/60 text-lg mb-2">KPI DASHBOARD</p>
            <h2 className="text-4xl font-bold text-white">Top 5 Metrics to Track</h2>
            <p className="text-white/70 mt-2">Track these weekly to stay on course</p>
          </div>

          {/* Top 5 KPIs */}
          <div className="space-y-3">
            {[
              {
                name: 'Paying Users',
                target: '0 → 150/300',
                why: 'Primary GTM success measure',
                icon: Users,
                color: 'from-blue-500 to-cyan-500',
              },
              {
                name: 'CPA (Blended)',
                target: '<$80 (stretch: <$60)',
                why: 'Acquisition efficiency',
                icon: DollarSign,
                color: 'from-green-500 to-emerald-500',
              },
              {
                name: 'LTV:CAC Ratio',
                target: '>3:1 (projecting 3.7:1)',
                why: 'Business health indicator',
                icon: PieChart,
                color: 'from-purple-500 to-pink-500',
              },
              {
                name: 'Monthly Churn',
                target: '<5%',
                why: 'Retention quality',
                icon: Activity,
                color: 'from-orange-500 to-amber-500',
              },
              {
                name: 'MRR',
                target: '$0 → $15K/$30K',
                why: 'Business scale',
                icon: TrendingUp,
                color: 'from-emerald-500 to-teal-500',
              },
            ].map((kpi, idx) => {
              const KpiIcon = kpi.icon
              return (
                <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${kpi.color} bg-opacity-20`}>
                        <KpiIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <p className="text-white font-semibold text-lg">{kpi.name}</p>
                                                          <p className="text-2xl font-bold text-white">{kpi.target}</p>
                                                        </div>
                                                        <p className="text-white/60 text-sm">{kpi.why}</p>
                                                      </div>
                                                    </div>
                                                  </CardContent>
                                                </Card>
                                              )
                                            })}
                                          </div>

                                          {/* Secondary Metrics */}
                                          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                                            <CardContent className="p-5">
                                              <p className="text-white/70 text-sm mb-3">SECONDARY METRICS (Track but Don't Optimize Blindly)</p>
                                              <div className="flex flex-wrap gap-2">
                                                {['Trial Signups', 'Trial-to-Paid (25%)', 'Trial Activation (80%)', 'Organic vs Paid (40/60)', 'Payback (<3 mo)'].map((metric) => (
                                                  <Badge key={metric} className="bg-white/10 text-white border-white/20">
                                                    {metric}
                                                  </Badge>
                                                ))}
                                              </div>
                                            </CardContent>
                                          </Card>
                                        </div>
                                      )

    // ============================================
    // SECTION 6: MONTH 1 SPRINT
    // ============================================
    case 'month-1-overview':
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-white/60 text-lg mb-2">MONTH 1: FOUNDATION SPRINT</p>
            <h2 className="text-4xl font-bold text-white">Get Everything Operational</h2>
          </div>

          {/* Month 1 Goals */}
          <div className="grid grid-cols-3 gap-4">
            <Card className="bg-orange-500/20 backdrop-blur-sm border-orange-400/30">
              <CardContent className="p-5 text-center">
                <p className="text-white/60 text-sm mb-1">PAYING USERS</p>
                <p className="text-3xl font-bold text-white">0</p>
                <p className="text-white/70 text-xs">(expected)</p>
              </CardContent>
            </Card>
            <Card className="bg-amber-500/20 backdrop-blur-sm border-amber-400/30">
              <CardContent className="p-5 text-center">
                <p className="text-white/60 text-sm mb-1">TRIALS</p>
                <p className="text-3xl font-bold text-white">75-90</p>
                <p className="text-white/70 text-xs">by end of month</p>
              </CardContent>
            </Card>
            <Card className="bg-yellow-500/20 backdrop-blur-sm border-yellow-400/30">
              <CardContent className="p-5 text-center">
                <p className="text-white/60 text-sm mb-1">BUDGET</p>
                <p className="text-3xl font-bold text-white">$3-3.5K</p>
                <p className="text-white/70 text-xs">Week 1 spending</p>
              </CardContent>
            </Card>
          </div>

          {/* Week Overview */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <p className="text-white font-semibold mb-4">WEEKLY FOCUS</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-500/10 border border-blue-500/30">
                  <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center text-blue-400 font-bold flex-shrink-0">1</div>
                  <div>
                    <p className="text-white font-semibold">Week 1: Setup & Launch</p>
                                                    <p className="text-white/60 text-sm">Get everything operational</p>
                                                  </div>
                                                </div>
                                                <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-500/10 border border-purple-500/30">
                                                  <div className="w-8 h-8 rounded-full bg-purple-500/30 flex items-center justify-center text-purple-400 font-bold flex-shrink-0">2</div>
                                                  <div>
                                                    <p className="text-white font-semibold">Week 2: Content & Engagement</p>
                                                    <p className="text-white/60 text-sm">Build presence + gather feedback</p>
                                                  </div>
                                                </div>
                                                <div className="flex items-center gap-3 p-3 rounded-lg bg-orange-500/10 border border-orange-500/30">
                                                  <div className="w-8 h-8 rounded-full bg-orange-500/30 flex items-center justify-center text-orange-400 font-bold flex-shrink-0">3</div>
                                                  <div>
                                                    <p className="text-white font-semibold">Week 3: Optimization & Testing</p>
                                                    <p className="text-white/60 text-sm">A/B test, narrow targeting</p>
                                                  </div>
                                                </div>
                                                <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/30">
                                                  <div className="w-8 h-8 rounded-full bg-green-500/30 flex items-center justify-center text-green-400 font-bold flex-shrink-0">4</div>
                                                  <div>
                                                    <p className="text-white font-semibold">Week 4: Review & Planning</p>
                                                    <p className="text-white/60 text-sm">Full review + Month 2 plan</p>
                                                  </div>
                                                </div>
                                              </div>
                                            </CardContent>
                                          </Card>

                                          {/* Success Criteria */}
                                          <Card className="bg-green-500/20 backdrop-blur-sm border-green-400/30">
                                            <CardContent className="p-5">
                                              <p className="text-white/90 font-semibold mb-3">MONTH 1 SUCCESS CRITERIA</p>
                                              <div className="flex flex-wrap gap-2">
                                                {['All channels operational', '75+ trials generated', 'CPA <$50 achieved', 'Content engine running'].map((criteria) => (
                                                  <Badge key={criteria} className="bg-green-500/30 text-white border-green-400/50">
                                                    {criteria}
                                                  </Badge>
                                                ))}
                                              </div>
                                            </CardContent>
                                          </Card>
                                        </div>
                                      )

    case 'week-1':
      return (
        <div className="space-y-4">
          <div className="text-center mb-4">
            <p className="text-white/60 mb-2">WEEK 1: DAYS 1-7</p>
            <h2 className="text-3xl font-bold text-white">Setup & Launch</h2>
          </div>

          {/* Day-by-Day */}
          {[
            {
              day: 'Day 1 (Monday)',
              theme: 'Infrastructure Setup',
              tasks: [
                'Set up Google Analytics, Mixpanel, conversion tracking',
                'Create Google Search Ads account + billing',
                'Create Instagram Ads account + Meta Pixel',
                'Optimize Salla App Store listing',
                'Set up email sequences',
              ],
            },
            {
              day: 'Day 2 (Tuesday)',
              theme: 'Launch Campaigns',
              tasks: [
                'Create Google Search Ads campaign (50 keywords, 3 ad variations)',
                'Create Instagram Ads campaign (3 ad sets, 5 creatives)',
                'Publish first 2 blog posts',
                'Repurpose to LinkedIn + Instagram',
              ],
            },
            {
              day: 'Day 3 (Wednesday)',
              theme: 'Community & Outreach',
              tasks: [
                'Join Salla/Zid communities (introduce yourself)',
                'Send first 10 outreach emails',
                'Set up social media calendar (Months 1-3)',
                'Test trial signup flow end-to-end',
              ],
            },
            {
              day: 'Day 4 (Thursday)',
              theme: 'Initial Optimization',
              tasks: [
                'Analyze initial ad performance',
                'Pause worst performers (CPA >$60)',
                'Double down on winners (CPA <$40)',
                'Respond to Salla app store reviews',
              ],
            },
            {
              day: 'Day 5 (Friday)',
              theme: 'Content & Review',
              tasks: [
                'Publish 2 more blog posts (total: 4)',
                'Post 2x LinkedIn + 3x Instagram',
                'Weekly review: What worked?',
              ],
            },
            {
              day: 'Day 6-7 (Weekend)',
              theme: 'Testing & Planning',
              tasks: [
                'A/B test ad creatives',
                'Optimize best keywords',
                'Send 10-15 more emails',
                'Plan Week 2 activities',
              ],
            },
          ].map((dayPlan) => (
            <Card key={dayPlan.day} className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500">
                    <Play className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-bold">{dayPlan.day}</p>
                    <p className="text-white/60 text-sm">{dayPlan.theme}</p>
                  </div>
                </div>
                <ul className="space-y-1 ml-9">
                  {dayPlan.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/80 text-sm">
                      <CheckCircle2 className="w-3 h-3 mt-1 flex-shrink-0 text-green-400" />
                      {task}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}

          {/* Week 1 Targets */}
          <Card className="bg-orange-500/20 backdrop-blur-sm border-orange-400/30">
            <CardContent className="p-4">
              <p className="text-white/90 font-semibold mb-2">WEEK 1 TARGETS</p>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <p className="text-white/60 text-xs">TRIALS</p>
                  <p className="text-white font-bold">20-25</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs">CPA</p>
                  <p className="text-white font-bold">&lt;$50</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs">SPEND</p>
                  <p className="text-white font-bold">$1,000-1,200</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )

    case 'week-2':
      return (
        <div className="space-y-4">
          <div className="text-center mb-4">
            <p className="text-white/60 mb-2">WEEK 2: DAYS 8-14</p>
            <h2 className="text-3xl font-bold text-white">Content & Engagement</h2>
          </div>

          {/* Focus Areas */}
          <Card className="bg-purple-500/20 backdrop-blur-sm border-purple-400/30">
            <CardContent className="p-6">
              <p className="text-white font-semibold mb-4">WEEK 2 FOCUS AREAS</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white/10">
                  <p className="text-white/80 text-sm mb-1">Performance Review</p>
                  <p className="text-white font-semibold">Full Week 1 Analysis</p>
                  <p className="text-white/60 text-xs">Channel-by-channel breakdown</p>
                </div>
                <div className="p-4 rounded-lg bg-white/10">
                  <p className="text-white/80 text-sm mb-1">Content Production</p>
                  <p className="text-white font-semibold">4 Blog Posts</p>
                  <p className="text-white/60 text-xs">2x/week schedule</p>
                </div>
                <div className="p-4 rounded-lg bg-white/10">
                  <p className="text-white/80 text-sm mb-1">Community Engagement</p>
                  <p className="text-white font-semibold">Daily Activity</p>
                  <p className="text-white/60 text-xs">Salla + Zid + Telegram</p>
                </div>
                <div className="p-4 rounded-lg bg-white/10">
                  <p className="text-white/80 text-sm mb-1">Funnel Optimization</p>
                  <p className="text-white font-semibold">Test Payment Messaging</p>
                  <p className="text-white/60 text-xs">Day 7 upgrade prompts</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Week 2 Targets */}
          <Card className="bg-purple-500/20 backdrop-blur-sm border-purple-400/30">
            <CardContent className="p-4">
              <p className="text-white/90 font-semibold mb-2">WEEK 2 TARGETS</p>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <p className="text-white/60 text-xs">TRIALS</p>
                  <p className="text-white font-bold">25-30</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs">CPA</p>
                  <p className="text-white font-bold">&lt;$48</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs">SPEND</p>
                  <p className="text-white font-bold">$2,000-2,500</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Activities */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-5">
              <p className="text-white font-semibold mb-3">KEY ACTIVITIES</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <p className="text-white/80">Reallocate budget to winning channels</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <p className="text-white/80">Create case study from early feedback</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <p className="text-white/80">Publish 3x Instagram + 2x LinkedIn</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <p className="text-white/80">Send 15-20 outreach emails</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )

    case 'week-3-4':
      return (
        <div className="space-y-4">
          <div className="text-center mb-4">
            <p className="text-white/60 mb-2">WEEKS 3-4: DAYS 15-30</p>
            <h2 className="text-3xl font-bold text-white">Optimize & Review</h2>
          </div>

          {/* Week 3 */}
          <Card className="bg-orange-500/20 backdrop-blur-sm border-orange-400/30">
            <CardContent className="p-5">
              <p className="text-orange-300 font-semibold mb-3">WEEK 3: OPTIMIZATION & TESTING</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <p className="text-white/80">Expand winning keywords</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <p className="text-white/80">A/B test landing pages</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <p className="text-white/80">Narrow audience targeting</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <p className="text-white/80">Calculate reinvestment amounts</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <p className="text-white/60 text-xs">TRIALS</p>
                  <p className="text-white font-bold">25-30</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs">CPA</p>
                  <p className="text-white font-bold">&lt;$45</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs">SPEND</p>
                  <p className="text-white font-bold">$2,800-3,200</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Week 4 */}
          <Card className="bg-green-500/20 backdrop-blur-sm border-green-400/30">
            <CardContent className="p-5">
              <p className="text-green-300 font-semibold mb-3">WEEK 4: REVIEW & PLANNING</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <p className="text-white/80">Full Month 1 review (all metrics)</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <p className="text-white/80">Document all learnings</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <p className="text-white/80">Create Month 2 execution plan</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <p className="text-white/80">Celebrate completion! 🎉</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <p className="text-white/60 text-xs">TOTAL TRIALS</p>
                  <p className="text-white font-bold">75-90</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs">FINAL CPA</p>
                  <p className="text-white font-bold">&lt;$45</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs">TOTAL SPEND</p>
                  <p className="text-white font-bold">$3,000-3,500</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Month 1 Success */}
          <Card className="bg-gradient-to-br from-green-500/30 to-emerald-500/30 backdrop-blur-sm border-green-400/30">
            <CardContent className="p-6 text-center">
              <Rocket className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <p className="text-white font-bold text-xl mb-2">MONTH 1 SUCCESS = GTM LAUNCH COMPLETE</p>
              <p className="text-white/80">All channels operational • 75+ trials • CPA on target • Ready to scale</p>
            </CardContent>
          </Card>
        </div>
      )

    // ============================================
    // SECTION 7: READY TO LAUNCH
    // ============================================
    case 'team':
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-white/60 text-lg mb-2">TEAM & ROLES</p>
            <h2 className="text-4xl font-bold text-white">Lean & Focused</h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Founder</p>
                    <p className="text-white/60 text-xs">Full-time</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm mb-3">Strategy, execution, management</p>
                <div className="flex flex-wrap gap-1">
                  {['GTM strategy', 'Budget management', 'Community', 'Customer support'].map((resp) => (
                    <Badge key={resp} className="text-xs bg-white/10 text-white border-white/20">
                      {resp}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Content Writer</p>
                    <p className="text-white/60 text-xs">Freelance 10h/wk</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm mb-3">Blog, social, email</p>
                <div className="flex flex-wrap gap-1">
                  {['2 blog posts/week', 'LinkedIn posts', 'Instagram captions', 'Email sequences'].map((resp) => (
                    <Badge key={resp} className="text-xs bg-white/10 text-white border-white/20">
                      {resp}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Graphic Designer</p>
                    <p className="text-white/60 text-xs">Freelance 5h/wk</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm mb-3">Visual content</p>
                <div className="flex flex-wrap gap-1">
                  {['Social graphics', 'Ad creatives', 'Blog images', 'Landing page visuals'].map((resp) => (
                    <Badge key={resp} className="text-xs bg-white/10 text-white border-white/20">
                      {resp}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Analytics Specialist</p>
                    <p className="text-white/60 text-xs">Freelance 5h/wk</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm mb-3">Paid media & tracking</p>
                <div className="flex flex-wrap gap-1">
                  {['Google Ads', 'Instagram Ads', 'Weekly reports', 'Campaign optimization'].map((resp) => (
                    <Badge key={resp} className="text-xs bg-white/10 text-white border-white/20">
                      {resp}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )

    case 'next-steps':
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-white/60 text-lg mb-2">READY TO EXECUTE</p>
            <h2 className="text-4xl font-bold text-white">The Strategy is Sound</h2>
            <p className="text-white/70 mt-2">The economics are validated. The plan is actionable.</p>
          </div>

          <Card className="bg-gradient-to-br from-cyan-500/30 to-blue-500/30 backdrop-blur-sm border-cyan-400/30">
            <CardContent className="p-8 text-center">
              <Rocket className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <p className="text-white text-2xl font-bold mb-3">Now it's time to EXECUTE.</p>
              <p className="text-white/80 text-lg italic">
                "The best GTM plan is worthless without execution. Let's make it happen."
              </p>
            </CardContent>
          </Card>

          {/* Pre-Launch Checklist */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <p className="text-white font-semibold mb-4">PRE-LAUNCH CHECKLIST</p>
              <div className="space-y-2">
                {[
                  'Read entire Master Plan (1-2 hours)',
                  'Complete Pre-Launch Checklist',
                  'Hire freelancers (content, design, analytics)',
                  'Set up tracking (analytics, conversion, budget)',
                  'Prepare Day 1 assets (ads, content, emails)',
                  'Set launch date 📅',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <p className="text-white/90">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-green-500/30 to-emerald-500/30 backdrop-blur-sm border-green-400/30">
            <CardContent className="p-6 text-center">
              <p className="text-white/70 text-sm mb-1">LAUNCH TARGET</p>
              <p className="text-3xl font-bold text-white mb-1">[FILL IN YOUR LAUNCH DATE]</p>
              <p className="text-white/80 text-sm">This is where the journey begins 🚀</p>
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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const currentSlideData = slides[currentSlide]
  const SlideIcon = currentSlideData.icon

  const filteredSlides = selectedCategory
    ? slides.filter(s => s.category === selectedCategory)
    : slides

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

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null)
      setCurrentSlide(0)
    } else {
      setSelectedCategory(category)
      setCurrentSlide(0)
    }
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      if (currentSlide < filteredSlides.length - 1) {
        nextSlide()
      } else {
        setIsPlaying(false)
      }
    }, 5000) // 5 seconds per slide

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      <Sidebar />

      <main className="lg:ml-72">
        <div className="min-h-screen flex flex-col">
          {/* Top Navigation Bar */}
          <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
            <div className="max-w-6xl mx-auto px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Link href="/" className="text-white/60 hover:text-white transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                  </Link>
                  <div>
                    <h1 className="text-white font-bold text-lg">Alfinder GTM Presentation</h1>
                    <p className="text-white/60 text-xs">Master Plan 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
                    title={isPlaying ? 'Pause (Press F)' : 'Auto-play (Press F)'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <Badge className="bg-white/20 text-white border-white/30">
                    {currentSlide + 1} / {filteredSlides.length}
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="bg-black/10 backdrop-blur-sm border-b border-white/10">
            <div className="max-w-6xl mx-auto px-4 py-3">
              <div className="flex items-center gap-2 overflow-x-auto">
                <button
                  onClick={() => {
                    setSelectedCategory(null)
                    setCurrentSlide(0)
                  }}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    selectedCategory === null
                      ? 'bg-white text-gray-900'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  All Slides ({slides.length})
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-white text-gray-900'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Slide Content */}
          <div className="flex-1 flex items-center justify-center p-4 md:p-8">
            <div className="w-full max-w-6xl">
              {/* Slide Card */}
              <Card className={`overflow-hidden shadow-2xl bg-gradient-to-br ${currentSlideData.gradient}`}>
                {/* Slide Header */}
                <div className="bg-black/20 backdrop-blur-sm border-b border-white/10 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                        <SlideIcon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <Badge className="mb-2 bg-white/20 text-white border-white/30">
                          {currentSlideData.category}
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                          {currentSlideData.title}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide Content */}
                <div className="p-6 md:p-8">
                  {renderSlideContent(currentSlideData.id)}
                </div>
              </Card>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentSlide ? 'bg-white w-8' : 'bg-white/30 hover:bg-white/50'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  disabled={currentSlide === filteredSlides.length - 1}
                  className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next slide"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Keyboard hint */}
              <div className="text-center mt-4">
                <p className="text-white/40 text-xs">Arrow keys to navigate • Space/Enter for next • F for auto-play</p>
              </div>

              {/* Slide Number Navigation (Mobile) */}
              <div className="md:hidden mt-4 flex flex-wrap gap-2 justify-center">
                {filteredSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      idx === currentSlide
                        ? 'bg-white text-gray-900'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
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
