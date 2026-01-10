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
  Clock,
  Globe,
  ShoppingCart,
  Search,
  LucideIcon,
} from 'lucide-react'
import Link from 'next/link'

// Type definitions for slide content
interface Stat {
  label: string
  value: string
  subvalue?: string
}

interface KeyPoint {
  label: string
  value: string
  icon: LucideIcon
}

interface Metric {
  label: string
  value: string
  note: string
}

interface KPI {
  metric: string
  target: string
  why: string
  icon: LucideIcon
}

interface Segment {
  label: string
  value: string
  icon: LucideIcon
}

interface FunnelStage {
  stage: string
  rate: string
  users: string
  color: string
}

interface Differentiator {
  title: string
  desc: string
}

interface Channel {
  channel: string
  budget?: string
  percent: string
  role: string
}

interface OrganicChannel {
  channel: string
  percent: string
  role: string
}

interface Month {
  month: string
  users: string
  focus: string
  milestone: string
}

interface BudgetItem {
  category: string
  amount: string
  percent: string
  color: string
}

interface BudgetPhase {
  phase: string
  spend: string
  note: string
}

interface Week {
  week: string
  theme: string
  targets: { trials: string; cpa: string; spend: string }
  actions: string[]
}

interface Risk {
  risk: string
  prob: string
  impact: string
  mitigation: string
}

interface TeamMember {
  role: string
  type: string
  scope: string
  responsibilities: string[]
}

interface Review {
  type: string
  duration: string
  frequency: string
  participants: string
  agenda: string[]
}

interface SlideContent {
  headline?: string
  stats?: Stat[]
  keyPoints?: KeyPoint[]
  metrics?: Metric[]
  kpis?: KPI[]
  segments?: Segment[]
  painPoints?: string[]
  funnel?: FunnelStage[]
  definition?: string
  timeToAha?: string
  tagline?: string
  differentiators?: Differentiator[]
  paid?: Channel[]
  organic?: OrganicChannel[]
  notUsing?: string[]
  months?: Month[]
  allocation?: BudgetItem[]
  phasing?: BudgetPhase[]
  secondary?: string[]
  weeks?: Week[]
  successCriteria?: string[]
  risks?: Risk[]
  warningSigns?: string[]
  team?: TeamMember[]
  reviews?: Review[]
  preLaunch?: string[]
  mantra?: string
  cta?: string
}

interface Slide {
  id: string
  title: string
  subtitle: string
  category: string
  icon: LucideIcon
  gradient: string
  content: SlideContent
}

// Slide data
const slides: Slide[] = [
  {
    id: 'title',
    title: 'The Master GTM Plan',
    subtitle: '6-Month Execution Roadmap',
    category: 'Overview',
    icon: Rocket,
    gradient: 'from-purple-600 via-pink-600 to-orange-500',
    content: {
      headline: 'Alfinder Go-to-Market Strategy',
      stats: [
        { label: 'Target', value: '300 Paying Users', subvalue: '(Stretch Goal)' },
        { label: 'Timeline', value: '6 Months', subvalue: 'Execution Plan' },
        { label: 'Budget', value: '$20,000', subvalue: 'Total Investment' },
        { label: 'ROI', value: '200%', subvalue: 'Stretch Scenario' },
      ],
    },
  },
  {
    id: 'executive-summary',
    title: 'Executive Summary',
    subtitle: 'The complete GTM strategy at a glance',
    category: 'Overview',
    icon: Target,
    gradient: 'from-blue-600 via-cyan-600 to-teal-500',
    content: {
      headline: 'The Core Strategy',
      keyPoints: [
        { label: 'Target Market', value: 'Saudi & Gulf e-commerce merchants on Salla/Zid', icon: Users },
        { label: 'Core Problem', value: 'Arabic searches return 20% "no results"', icon: Search },
        { label: 'Our Solution', value: 'AI-powered search that understands dialects', icon: Zap },
        { label: 'Channels', value: 'Google Ads (60%), Instagram (40%), Salla Store (40% organic)', icon: TrendingUp },
      ],
    },
  },
  {
    id: 'unit-economics',
    title: 'Unit Economics',
    subtitle: 'The financial foundation',
    category: 'Economics',
    icon: DollarSign,
    gradient: 'from-green-600 via-emerald-600 to-teal-500',
    content: {
      headline: 'Healthy Economics Model',
      metrics: [
        { label: 'CPA', value: '$80', note: 'Per trial (starting target)' },
        { label: 'LTV', value: '$1,224', note: '383 SAR × 12 months' },
        { label: 'LTV:CAC', value: '3.7:1', note: 'Healthy ratio (>3:1)' },
        { label: 'Payback', value: '3.2 months', note: 'Quick recovery' },
        { label: 'ARPU', value: '$102/mo', note: '383 SAR/month' },
        { label: 'ROI', value: '90-200%', note: 'Conservative to stretch' },
      ],
    },
  },
  {
    id: 'target-audience',
    title: 'Target Audience',
    subtitle: 'Who we\'re targeting',
    category: 'Strategy',
    icon: Users,
    gradient: 'from-purple-600 via-violet-600 to-indigo-500',
    content: {
      headline: 'Primary ICP: Saudi/Gulf Salla Merchants',
      segments: [
        { label: 'Location', value: 'Saudi 60%, UAE 20%, Kuwait 10%', icon: Globe },
        { label: 'Scale', value: '1K-10K monthly visitors', icon: Activity },
        { label: 'Revenue', value: '10-100K SAR monthly', icon: DollarSign },
        { label: 'Platform', value: 'Salla or Zid', icon: ShoppingCart },
      ],
      painPoints: [
        '20% Arabic searches return "no results"',
        'Customers search in dialect (not MSA)',
        'Lost sales from failed searches',
        'Built-in search doesn\'t understand dialects',
      ],
    },
  },
  {
    id: 'conversion-funnel',
    title: 'Conversion Funnel',
    subtitle: 'How users convert to paying',
    category: 'Strategy',
    icon: BarChart3,
    gradient: 'from-orange-600 via-amber-600 to-yellow-500',
    content: {
      headline: 'The Aha Moment Journey',
      funnel: [
        { stage: 'Trial Signup', rate: '100%', users: '100 users', color: 'bg-blue-500' },
        { stage: 'Aha Moment', rate: '80%', users: '80 users', color: 'bg-purple-500' },
        { stage: 'Day 7 Payment', rate: '25%', users: '25 users', color: 'bg-pink-500' },
        { stage: 'Paying User', rate: '21%', users: '21 users', color: 'bg-green-500' },
      ],
      definition: 'Aha Moment = Search in dialect + get relevant results in that dialect',
      timeToAha: '<5 minutes from install',
    },
  },
  {
    id: 'positioning',
    title: 'Positioning & Messaging',
    subtitle: 'How we communicate value',
    category: 'Strategy',
    icon: Award,
    gradient: 'from-rose-600 via-pink-600 to-fuchsia-500',
    content: {
      headline: 'The Search That Understands Arabic',
      tagline: '"Stop losing sales when customers search in dialect."',
      differentiators: [
        { title: 'Dialect Understanding', desc: 'Not just MSA - Gulf, Egyptian, Levantine, Maghrebi' },
        { title: 'One-Click Setup', desc: 'Install in 5 minutes on Salla/Zid/Shopify' },
        { title: 'AI-Powered', desc: 'Continuous learning from customer searches' },
        { title: 'Affordable', desc: '$102/month (383 SAR/month) - SME-friendly' },
      ],
    },
  },
  {
    id: 'channels',
    title: 'Channel Strategy',
    subtitle: 'Where we acquire customers',
    category: 'Acquisition',
    icon: TrendingUp,
    gradient: 'from-cyan-600 via-blue-600 to-indigo-500',
    content: {
      headline: 'Multi-Channel Acquisition Mix',
      paid: [
        { channel: 'Google Search Ads', budget: '$4,800', percent: '60%', role: 'Primary driver' },
        { channel: 'Instagram Ads', budget: '$3,200', percent: '40%', role: 'Visual awareness' },
      ],
      organic: [
        { channel: 'Salla App Store', percent: '40%', role: 'Primary organic source' },
        { channel: 'Community + Email', percent: '25%', role: 'Trust building' },
        { channel: 'Instagram (organic)', percent: '15%', role: 'Brand awareness' },
        { channel: 'LinkedIn (organic)', percent: '10%', role: 'B2B credibility' },
      ],
      notUsing: ['Twitter/X ads (CPC $3-8+)', 'LinkedIn ads (CPC $5-10+)', 'TikTok ads (B2C audience)', 'Facebook ads (declining in KSA)'],
    },
  },
  {
    id: 'timeline',
    title: '6-Month Timeline',
    subtitle: 'Roadmap to success',
    category: 'Execution',
    icon: Calendar,
    gradient: 'from-indigo-600 via-purple-600 to-pink-500',
    content: {
      headline: 'Month-by-Month Growth Plan',
      months: [
        { month: 'Month 1', users: '0 (foundation)', focus: 'Launch all channels', milestone: 'GTM Launch Complete' },
        { month: 'Month 2', users: '10-20', focus: 'First paying users', milestone: 'Reinvestment Loop Active' },
        { month: 'Month 3', users: '35-50', focus: 'Validation phase', milestone: 'Break-Even Achieved' },
        { month: 'Month 4', users: '60-80', focus: 'Scaling winners', milestone: 'Cash Flow Positive' },
        { month: 'Month 5', users: '90-115', focus: 'Aggressive growth', milestone: 'Conservative Target Close' },
        { month: 'Month 6', users: '140-150 / 300', focus: 'Final push', milestone: 'Target Achieved' },
      ],
    },
  },
  {
    id: 'budget-allocation',
    title: 'Budget Allocation',
    subtitle: '$20K investment breakdown',
    category: 'Economics',
    icon: PieChart,
    gradient: 'from-emerald-600 via-green-600 to-teal-500',
    content: {
      headline: 'Strategic Budget Distribution',
      allocation: [
        { category: 'Paid Media', amount: '$8,000', percent: '40%', color: 'from-blue-500 to-cyan-500' },
        { category: 'Content Production', amount: '$4,000', percent: '20%', color: 'from-purple-500 to-pink-500' },
        { category: 'Freelancers & Services', amount: '$5,000', percent: '25%', color: 'from-orange-500 to-amber-500' },
        { category: 'Tools & Software', amount: '$2,000', percent: '10%', color: 'from-green-500 to-emerald-500' },
        { category: 'Retention & Optimization', amount: '$1,000', percent: '5%', color: 'from-rose-500 to-pink-500' },
      ],
      phasing: [
        { phase: 'Month 1', spend: '$3,000-3,500', note: 'Foundation + setup' },
        { phase: 'Month 2', spend: '$3,500-4,000', note: 'Optimization' },
        { phase: 'Month 3-4', spend: '$4,000-5,000', note: 'Max testing + scaling' },
        { phase: 'Month 5-6', spend: '$5,000-6,000', note: 'Aggressive growth' },
      ],
    },
  },
  {
    id: 'kpis',
    title: 'KPI Dashboard',
    subtitle: 'Metrics that matter',
    category: 'Metrics',
    icon: BarChart3,
    gradient: 'from-violet-600 via-purple-600 to-fuchsia-500',
    content: {
      headline: 'Top 5 Metrics to Track Weekly',
      kpis: [
        { metric: 'Paying Users', target: '0 → 150/300', why: 'Primary GTM success measure', icon: Users },
        { metric: 'CPA (Blended)', target: '<$80', why: 'Acquisition efficiency', icon: DollarSign },
        { metric: 'LTV:CAC Ratio', target: '>3:1', why: 'Business health indicator', icon: PieChart },
        { metric: 'Monthly Churn', target: '<5%', why: 'Retention quality', icon: Activity },
        { metric: 'MRR', target: '$0 → $15K/$30K', why: 'Business scale', icon: TrendingUp },
      ],
      secondary: ['Trial Signups', 'Trial-to-Paid Conversion (25%)', 'Trial Activation (80%)', 'Organic vs Paid Split (40/60)', 'Payback Period (<3 months)'],
    },
  },
  {
    id: 'month-1',
    title: 'Month 1 Sprint',
    subtitle: 'Week-by-week execution',
    category: 'Execution',
    icon: Rocket,
    gradient: 'from-red-600 via-orange-600 to-amber-500',
    content: {
      headline: 'Foundation Phase: Days 1-30',
      weeks: [
        {
          week: 'Week 1',
          theme: 'Setup & Launch',
          targets: { trials: '20-25', cpa: '<$50', spend: '$1,000-1,200' },
          actions: ['Launch Google & Instagram ads', 'Publish first 2 blog posts', 'Join Salla/Zid communities', 'Set up all tracking'],
        },
        {
          week: 'Week 2',
          theme: 'Content & Engagement',
          targets: { trials: '25-30', cpa: '<$48', spend: '$2,000-2,500' },
          actions: ['Full performance review', 'Reallocate budget to winners', 'Funnel optimization', 'Test payment messaging'],
        },
        {
          week: 'Week 3',
          theme: 'Optimization & Testing',
          targets: { trials: '25-30', cpa: '<$45', spend: '$2,800-3,200' },
          actions: ['Expand winning keywords', 'A/B test landing pages', 'Narrow audience targeting', 'Calculate reinvestment'],
        },
        {
          week: 'Week 4',
          theme: 'Review & Planning',
          targets: { trials: '75-90 total', cpa: '<$45', spend: '$3,000-3,500' },
          actions: ['Full Month 1 review', 'Document learnings', 'Create Month 2 plan', 'Celebrate completion!'],
        },
      ],
      successCriteria: ['All channels operational', '75+ trials generated', 'CPA <$50 achieved', 'Content engine running'],
    },
  },
  {
    id: 'risks',
    title: 'Risk Management',
    subtitle: 'What could go wrong',
    category: 'Planning',
    icon: AlertTriangle,
    gradient: 'from-slate-600 via-gray-600 to-zinc-500',
    content: {
      headline: 'Proactive Risk Mitigation',
      risks: [
        { risk: 'CPA stuck above $50', prob: 'Medium', impact: 'High', mitigation: 'Pause underperformers, test new creatives, narrow targeting' },
        { risk: 'Trial-to-Paid below 15%', prob: 'Medium', impact: 'High', mitigation: 'Improve onboarding, extend trial, check PMF' },
        { risk: 'Monthly churn above 7%', prob: 'Low', impact: 'High', mitigation: 'Customer success, fix churn reasons' },
        { risk: 'Month 3 milestone missed', prob: 'Medium', impact: 'Critical', mitigation: 'Full GTM review, pivot or persevere' },
        { risk: 'Budget burned too fast', prob: 'Low', impact: 'High', mitigation: 'Pause ads, review spending, rely on organic' },
      ],
      warningSigns: ['CPA >$50 for 3+ weeks', 'Trial-to-Paid <15% for 2+ months', 'Churn >7% for 3+ months', '<20 users by Month 3', '>$10K spent by Month 3'],
    },
  },
  {
    id: 'team',
    title: 'Team & Roles',
    subtitle: 'Who executes what',
    category: 'Execution',
    icon: Users,
    gradient: 'from-teal-600 via-cyan-600 to-sky-500',
    content: {
      headline: 'Lean Team Structure',
      team: [
        { role: 'Founder', type: 'Full-time', scope: 'Strategy, execution, management', responsibilities: ['GTM strategy', 'Budget management', 'Community', 'Customer support'] },
        { role: 'Content Writer', type: 'Freelance 10h/wk', scope: 'Blog, social, email', responsibilities: ['2 blog posts/week', 'LinkedIn posts', 'Instagram captions', 'Email sequences'] },
        { role: 'Graphic Designer', type: 'Freelance 5h/wk', scope: 'Visual content', responsibilities: ['Social graphics', 'Ad creatives', 'Blog images', 'Landing page visuals'] },
        { role: 'Analytics Specialist', type: 'Freelance 5h/wk', scope: 'Paid media & tracking', responsibilities: ['Google Ads', 'Instagram Ads', 'Weekly reports', 'Campaign optimization'] },
      ],
    },
  },
  {
    id: 'review-cadence',
    title: 'Review Cadence',
    subtitle: 'How we stay on track',
    category: 'Execution',
    icon: Clock,
    gradient: 'from-lime-600 via-green-600 to-emerald-500',
    content: {
      headline: 'Three-Tier Review System',
      reviews: [
        {
          type: 'Weekly Review',
          duration: '30 min',
          frequency: 'Every Friday',
          participants: 'Founder (solo)',
          agenda: ['Dashboard review', 'Channel performance', 'Quick wins', 'Next week plan'],
        },
        {
          type: 'Monthly Review',
          duration: '1 hour',
          frequency: 'Last Friday',
          participants: 'Founder + Freelancers',
          agenda: ['Dashboard deep dive', 'Financial review', 'Channel ranking', 'Next month planning'],
        },
        {
          type: 'Quarterly Review',
          duration: '2 hours',
          frequency: 'End of Month 3 & 6',
          participants: 'Founder + Advisors',
          agenda: ['Strategic assessment', 'Unit economics review', 'Market analysis', 'Pivot or persevere decision'],
        },
      ],
    },
  },
  {
    id: 'next-steps',
    title: 'Next Steps',
    subtitle: 'Ready to launch',
    category: 'Execution',
    icon: Rocket,
    gradient: 'from-pink-600 via-rose-600 to-red-500',
    content: {
      headline: 'Ready for Execution',
      preLaunch: [
        'Read entire Master Plan (1-2 hours)',
        'Complete Pre-Launch Checklist',
        'Hire freelancers',
        'Set up tracking (analytics, conversion, budget)',
        'Prepare Day 1 assets (ads, content, emails)',
      ],
      mantra: 'The strategy is sound. The economics are validated. The plan is actionable. Now it\'s time to EXECUTE.',
      cta: 'Launch Date: [FILL IN DATE]',
    },
  },
]

const categories = ['Overview', 'Strategy', 'Acquisition', 'Economics', 'Metrics', 'Execution', 'Planning']

export default function GTMPresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevSlide()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide, filteredSlides.length])

  // Render different slide content based on slide type
  const renderSlideContent = () => {
    const { content, id } = currentSlideData

    switch (id) {
      case 'title':
      case 'executive-summary':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.stats?.map((stat, idx) => (
              <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <p className="text-white/70 text-sm mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  {stat.subvalue && <p className="text-white/60 text-sm mt-1">{stat.subvalue}</p>}
                </CardContent>
              </Card>
            ))}
            {content.keyPoints?.map((point, idx) => {
              const PointIcon = point.icon
              return (
                <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-white/20">
                        <PointIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white/70 text-sm">{point.label}</p>
                        <p className="text-lg font-semibold text-white mt-1">{point.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )

      case 'unit-economics':
      case 'kpis':
        return (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {content.metrics?.map((metric, idx) => (
              <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-5">
                  <p className="text-white/70 text-sm mb-1">{metric.label}</p>
                  <p className="text-4xl font-bold text-white">{metric.value}</p>
                  {metric.note && <p className="text-white/60 text-xs mt-2">{metric.note}</p>}
                </CardContent>
              </Card>
            ))}
            {content.kpis?.map((kpi, idx) => {
              const KpiIcon = kpi.icon
              return (
                <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <KpiIcon className="w-4 h-4 text-white/70" />
                      <p className="text-white/70 text-xs">{kpi.metric}</p>
                    </div>
                    <p className="text-2xl font-bold text-white">{kpi.target}</p>
                    <p className="text-white/60 text-xs mt-2">{kpi.why}</p>
                  </CardContent>
                </Card>
              )
            })}
            {content.secondary && (
              <Card className="md:col-span-3 bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-5">
                  <p className="text-white/70 text-sm mb-3">Secondary Metrics</p>
                  <div className="flex flex-wrap gap-2">
                    {content.secondary.map((metric, idx) => (
                      <Badge key={idx} className="bg-white/20 text-white border-white/30">
                        {metric}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )

      case 'target-audience':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {content.segments?.map((seg, idx) => {
                const SegIcon = seg.icon
                return (
                  <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="p-4 text-center">
                      <SegIcon className="w-8 h-8 text-white/70 mx-auto mb-2" />
                      <p className="text-white/60 text-xs">{seg.label}</p>
                      <p className="text-lg font-semibold text-white">{seg.value}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
            {content.painPoints && (
              <Card className="bg-red-500/20 backdrop-blur-sm border-red-400/30">
                <CardContent className="p-5">
                  <p className="text-white/90 font-semibold mb-3">Key Pain Points</p>
                  <ul className="space-y-2">
                    {content.painPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-white/80 text-sm">
                        <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        )

      case 'conversion-funnel':
        return (
          <div className="space-y-6">
            <div className="space-y-3">
              {content.funnel?.map((stage, idx) => (
                <Card key={idx} className="overflow-hidden">
                  <div className="flex items-center">
                    <div className={`${stage.color} w-32 flex-shrink-0 flex items-center justify-center`}>
                      <span className="text-white font-bold">{stage.rate}</span>
                    </div>
                    <div className="flex-1 p-4 bg-white/10 backdrop-blur-sm">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-white font-semibold">{stage.stage}</p>
                          <p className="text-white/60 text-sm">{stage.users}</p>
                        </div>
                        <CheckCircle2 className="w-6 h-6 text-white/50" />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {content.definition && (
                <Card className="bg-purple-500/20 backdrop-blur-sm border-purple-400/30">
                  <CardContent className="p-4">
                    <p className="text-white/70 text-sm">Aha Moment</p>
                    <p className="text-white font-semibold mt-1">{content.definition}</p>
                  </CardContent>
                </Card>
              )}
              {content.timeToAha && (
                <Card className="bg-cyan-500/20 backdrop-blur-sm border-cyan-400/30">
                  <CardContent className="p-4">
                    <p className="text-white/70 text-sm">Time to Aha</p>
                    <p className="text-white font-semibold mt-1">{content.timeToAha}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        )

      case 'positioning':
        return (
          <div className="space-y-6">
            {content.tagline && (
              <Card className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <p className="text-white/70 text-sm mb-2">Tagline</p>
                  <p className="text-2xl font-bold text-white italic">"{content.tagline}"</p>
                </CardContent>
              </Card>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.differentiators?.map((diff, idx) => (
                <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">{diff.title}</p>
                        <p className="text-white/70 text-sm mt-1">{diff.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case 'channels':
        return (
          <div className="space-y-6">
            {content.paid && (
              <div>
                <p className="text-white/70 text-sm mb-3 font-semibold">Paid Channels (${content.paid.reduce((sum, c) => sum + (parseInt(c.budget?.replace(/\D/g, '') || '0')), 0).toLocaleString()} total)</p>
                <div className="space-y-3">
                  {content.paid.map((channel, idx) => (
                    <Card key={idx} className="bg-blue-500/20 backdrop-blur-sm border-blue-400/30">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-white font-semibold">{channel.channel}</p>
                            <p className="text-white/60 text-sm">{channel.role}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-white font-bold">{channel.budget}</p>
                            <p className="text-white/60 text-sm">{channel.percent}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            {content.organic && (
              <div>
                <p className="text-white/70 text-sm mb-3 font-semibold">Organic Channels</p>
                <div className="grid grid-cols-2 gap-3">
                  {content.organic.map((channel, idx) => (
                    <Card key={idx} className="bg-green-500/20 backdrop-blur-sm border-green-400/30">
                      <CardContent className="p-3">
                        <p className="text-white font-semibold text-sm">{channel.channel}</p>
                        <p className="text-white/60 text-xs">{channel.percent} • {channel.role}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            {content.notUsing && (
              <Card className="bg-red-500/20 backdrop-blur-sm border-red-400/30">
                <CardContent className="p-4">
                  <p className="text-white/70 text-sm mb-2">Not Using (Too Expensive/Ineffective)</p>
                  <div className="flex flex-wrap gap-2">
                    {content.notUsing.map((item, idx) => (
                      <Badge key={idx} className="bg-red-500/30 text-white border-red-400/50">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )

      case 'timeline':
        return (
          <div className="space-y-4">
            {content.months?.map((month, idx) => (
              <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden">
                <div className="flex">
                  <div className="bg-gradient-to-b from-purple-500 to-pink-500 w-1 flex-shrink-0" />
                  <CardContent className="p-4 flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-white font-semibold">{month.month}</p>
                        <p className="text-white/60 text-sm">{month.focus}</p>
                        <p className="text-white/50 text-xs mt-1">{month.milestone}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-white">{month.users}</p>
                        <p className="text-white/60 text-xs">paying users</p>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        )

      case 'budget-allocation':
        return (
          <div className="space-y-6">
            <div className="space-y-3">
              {content.allocation?.map((item, idx) => (
                <Card key={idx} className={`bg-gradient-to-r ${item.color} bg-opacity-20 backdrop-blur-sm border-white/20`}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-white font-semibold">{item.category}</p>
                        <p className="text-white/60 text-sm">{item.percent} of budget</p>
                      </div>
                      <p className="text-2xl font-bold text-white">{item.amount}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              {content.phasing?.map((phase, idx) => (
                <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-3">
                    <p className="text-white font-semibold text-sm">{phase.phase}</p>
                    <p className="text-white text-lg">{phase.spend}</p>
                    <p className="text-white/60 text-xs">{phase.note}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case 'month-1':
        return (
          <div className="space-y-4">
            {content.weeks?.map((week, idx) => (
              <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden">
                <div className={`bg-gradient-to-r ${idx === 0 ? 'from-blue-500 to-cyan-500' : idx === 1 ? 'from-purple-500 to-pink-500' : idx === 2 ? 'from-orange-500 to-amber-500' : 'from-green-500 to-emerald-500'} p-3`}>
                  <p className="text-white font-bold">{week.week}: {week.theme}</p>
                </div>
                <CardContent className="p-4">
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    <div>
                      <p className="text-white/60 text-xs">Trials</p>
                      <p className="text-white font-semibold">{week.targets.trials}</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-xs">CPA</p>
                      <p className="text-white font-semibold">{week.targets.cpa}</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-xs">Spend</p>
                      <p className="text-white font-semibold">{week.targets.spend}</p>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {week.actions.map((action, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2 text-white/80 text-xs">
                        <CheckCircle2 className="w-3 h-3 mt-0.5 flex-shrink-0 text-green-400" />
                        {action}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
            {content.successCriteria && (
              <Card className="bg-green-500/20 backdrop-blur-sm border-green-400/30">
                <CardContent className="p-4">
                  <p className="text-white/90 font-semibold mb-2">Month 1 Success Criteria</p>
                  <div className="flex flex-wrap gap-2">
                    {content.successCriteria.map((criteria, idx) => (
                      <Badge key={idx} className="bg-green-500/30 text-white border-green-400/50">
                        {criteria}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )

      case 'risks':
        return (
          <div className="space-y-4">
            {content.risks?.map((risk, idx) => (
              <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <p className="text-white font-semibold">{risk.risk}</p>
                        <Badge className={`text-xs ${risk.prob === 'High' ? 'bg-red-500/30' : risk.prob === 'Medium' ? 'bg-orange-500/30' : 'bg-yellow-500/30'}`}>
                          {risk.prob}
                        </Badge>
                      </div>
                      <p className="text-white/70 text-sm">{risk.mitigation}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            {content.warningSigns && (
              <Card className="bg-red-500/20 backdrop-blur-sm border-red-400/30">
                <CardContent className="p-4">
                  <p className="text-white/90 font-semibold mb-2">Early Warning Signs</p>
                  <ul className="space-y-1">
                    {content.warningSigns.map((sign, idx) => (
                      <li key={idx} className="text-white/80 text-sm flex items-start gap-2">
                        <span className="text-red-400">⚠</span>
                        {sign}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        )

      case 'team':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.team?.map((member, idx) => (
              <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">{member.role}</p>
                      <p className="text-white/60 text-xs">{member.type}</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm mb-2">{member.scope}</p>
                  <div className="flex flex-wrap gap-1">
                    {member.responsibilities.map((resp, rIdx) => (
                      <Badge key={rIdx} className="text-xs bg-white/20 text-white border-white/30">
                        {resp}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )

      case 'review-cadence':
        return (
          <div className="space-y-4">
            {content.reviews?.map((review, idx) => (
              <Card key={idx} className={`bg-white/10 backdrop-blur-sm border-white/20 ${idx === 0 ? 'border-l-4 border-l-blue-500' : idx === 1 ? 'border-l-4 border-l-purple-500' : 'border-l-4 border-l-pink-500'}`}>
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-white font-bold text-lg">{review.type}</p>
                      <p className="text-white/60 text-sm">{review.frequency} • {review.duration}</p>
                    </div>
                    <Badge className="bg-white/20 text-white border-white/30">
                      {review.participants}
                    </Badge>
                  </div>
                  <ul className="space-y-1">
                    {review.agenda.map((item, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2 text-white/80 text-sm">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        )

      case 'next-steps':
        return (
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Rocket className="w-12 h-12 text-white mx-auto mb-4" />
                <p className="text-white text-xl font-bold mb-2">{content.headline}</p>
                {content.mantra && <p className="text-white/80 italic">"{content.mantra}"</p>}
              </CardContent>
            </Card>
            {content.preLaunch && (
              <div>
                <p className="text-white/70 text-sm mb-3 font-semibold">Pre-Launch Checklist</p>
                <div className="space-y-2">
                  {content.preLaunch.map((item, idx) => (
                    <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20">
                      <CardContent className="p-3">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">
                            {idx + 1}
                          </div>
                          <p className="text-white/90 text-sm">{item}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            {content.cta && (
              <Card className="bg-gradient-to-r from-green-500/30 to-emerald-500/30 backdrop-blur-sm border-green-400/30">
                <CardContent className="p-5 text-center">
                  <p className="text-white/70 text-sm mb-1">Launch Target</p>
                  <p className="text-2xl font-bold text-white">{content.cta}</p>
                </CardContent>
              </Card>
            )}
          </div>
        )

      default:
        return null
    }
  }

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
                <Badge className="bg-white/20 text-white border-white/30">
                  {currentSlide + 1} / {filteredSlides.length}
                </Badge>
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
                  All Slides
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
                        <p className="text-white/70 mt-1">{currentSlideData.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide Content */}
                <div className="p-6 md:p-8">
                  {renderSlideContent()}
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
                <p className="text-white/40 text-xs">Use arrow keys or click to navigate • Press Space for next slide</p>
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
