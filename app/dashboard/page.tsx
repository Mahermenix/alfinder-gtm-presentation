import { Sidebar } from '@/components/sidebar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, TrendingUp, Users, DollarSign, Target, Calendar, BarChart3, Sparkles, Activity } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />

      <main className="lg:ml-72">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#11D4D8] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Overview
          </Link>

          {/* Header */}
          <div className="mb-8">
            <Badge className="mb-4 bg-[#11D4D8]/10 text-[#065D7E] border-[#11D4D8]/20">
              Live Dashboard
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
              Marketing Strategy Dashboard
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Real-time monitoring of GTM campaign performance, KPIs, and stakeholder metrics
            </p>
          </div>

          {/* Campaign Status Banner */}
          <Card className="mb-8 bg-gradient-to-r from-[#F0FBFB] via-[#e0f5f5] to-[#F0FBFB] border border-[#11D4D8]/20 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[#065D7E]/10 backdrop-blur-sm">
                    <Activity className="w-8 h-8 text-[#065D7E]" />
                  </div>
                  <div>
                    <p className="text-[#065D7E] text-sm font-semibold uppercase tracking-wider mb-1">Campaign Status</p>
                    <p className="text-2xl font-bold text-gray-900">Pre-Launch Phase</p>
                    <p className="text-gray-600 text-sm mt-1">Preparing for campaign kickoff</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#065D7E] text-sm font-semibold uppercase tracking-wider mb-1">Launch Date</p>
                  <p className="text-xl font-bold text-gray-900">TBD</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Performance Indicators */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Target className="w-6 h-6 text-[#065D7E]" />
              Key Performance Indicators
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Target Users */}
              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#065D7E]">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-[#065D7E]/10">
                      <Users className="w-5 h-5 text-[#065D7E]" />
                    </div>
                    <p className="text-sm font-semibold text-gray-600">Target Users</p>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-1">140-150</p>
                  <p className="text-sm text-gray-500">Paying users (6 months)</p>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Current:</span>
                      <span className="font-semibold text-[#065D7E]">0</span>
                    </div>
                    <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#065D7E] to-[#11D4D8] rounded-full" style={{ width: '0%' }} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Revenue Target */}
              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#11D4D8]">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-[#11D4D8]/10">
                      <DollarSign className="w-5 h-5 text-[#11D4D8]" />
                    </div>
                    <p className="text-sm font-semibold text-gray-600">Revenue Target</p>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-1">$46K</p>
                  <p className="text-sm text-gray-500">Conservative (6 months)</p>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Current:</span>
                      <span className="font-semibold text-[#11D4D8]">$0</span>
                    </div>
                    <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#11D4D8] to-[#065D7E] rounded-full" style={{ width: '0%' }} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Conversion Rate */}
              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#0a7aa0]">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-[#0a7aa0]/10">
                      <TrendingUp className="w-5 h-5 text-[#0a7aa0]" />
                    </div>
                    <p className="text-sm font-semibold text-gray-600">Conversion Rate</p>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-1">21%</p>
                  <p className="text-sm text-gray-500">Trial to paying</p>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Target:</span>
                      <span className="font-semibold text-[#0a7aa0]">21%</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">Net conversion rate</p>
                  </div>
                </CardContent>
              </Card>

              {/* CAC Target */}
              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#065D7E]">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-[#065D7E]/10">
                      <Target className="w-5 h-5 text-[#065D7E]" />
                    </div>
                    <p className="text-sm font-semibold text-gray-600">Target CAC</p>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-1">$330</p>
                  <p className="text-sm text-gray-500">Per customer</p>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Payback:</span>
                      <span className="font-semibold text-[#065D7E]">3.2 months</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">LTV:CAC ratio 3.7x</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Campaign Progress Timeline */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-[#065D7E]" />
              Campaign Timeline & Milestones
            </h2>
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    { month: 'Month 1', status: 'pending', title: 'Foundation Sprint', tasks: 'Setup, partnerships, initial campaigns' },
                    { month: 'Month 2', status: 'pending', title: 'Content & Optimization', tasks: 'Content production, optimization' },
                    { month: 'Month 3', status: 'pending', title: 'Scale Phase 1', tasks: 'Double down on winners' },
                    { month: 'Month 4', status: 'pending', title: 'Scale Phase 2', tasks: 'Expand successful channels' },
                    { month: 'Month 5', status: 'pending', title: 'Optimization', tasks: 'Refine and optimize' },
                    { month: 'Month 6', status: 'pending', title: 'Review & Plan', tasks: 'Evaluate and plan next phase' },
                  ].map((phase, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-24 text-sm font-semibold ${phase.status === 'active' ? 'text-[#11D4D8]' : phase.status === 'completed' ? 'text-green-600' : 'text-gray-400'}`}>
                        {phase.month}
                      </div>
                      <div className={`flex-1 p-4 rounded-lg border ${phase.status === 'active' ? 'bg-[#11D4D8]/5 border-[#11D4D8]/30' : phase.status === 'completed' ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-semibold text-gray-900">{phase.title}</p>
                          {phase.status === 'pending' && <Badge className="bg-gray-200 text-gray-600 border-0">Upcoming</Badge>}
                          {phase.status === 'active' && <Badge className="bg-[#11D4D8] text-white border-0">In Progress</Badge>}
                          {phase.status === 'completed' && <Badge className="bg-green-600 text-white border-0">Completed</Badge>}
                        </div>
                        <p className="text-sm text-gray-600">{phase.tasks}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Channel Performance */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-[#065D7E]" />
              Channel Performance (Projected)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { channel: 'Google Ads', budget: '$4,000', expectedUsers: '60-70', roi: '150-200%', color: '[#065D7E]' },
                { channel: 'Instagram Ads', budget: '$4,000', expectedUsers: '50-60', roi: '125-175%', color: '[#11D4D8]' },
                { channel: 'Salla App Store', budget: '$0', expectedUsers: '15-20', roi: '∞', color: '[#0a7aa0]' },
                { channel: 'Content Marketing', budget: '$2,000', expectedUsers: '10-15', roi: '100-150%', color: '[#065D7E]' },
                { channel: 'Community Building', budget: '$2,000', expectedUsers: '5-10', roi: '75-125%', color: '[#11D4D8]' },
              ].map((ch) => (
                <Card key={ch.channel} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-{ch.color}">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900">{ch.channel}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Budget:</span>
                      <span className="font-semibold text-gray-900">{ch.budget}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Expected Users:</span>
                      <span className="font-semibold text-gray-900">{ch.expectedUsers}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Projected ROI:</span>
                      <span className="font-semibold text-green-600">{ch.roi}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Info Card */}
          <Card className="bg-gradient-to-br from-[#F0FBFB] to-white border border-[#11D4D8]/20 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#11D4D8]/20">
                  <Sparkles className="w-5 h-5 text-[#11D4D8]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#065D7E] mb-1">Live Dashboard</p>
                  <p className="text-sm text-gray-600">
                    This dashboard will be updated in real-time as the campaign progresses. Stakeholders can monitor
                    key metrics, track progress against targets, and identify optimization opportunities.
                    Data refreshes automatically every 24 hours.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
