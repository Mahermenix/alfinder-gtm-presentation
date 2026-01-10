import { Sidebar } from '@/components/sidebar'
import { FunnelChart } from '@/components/charts/funnel-chart'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, BarChart3, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function VisualizationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />

      <main className="lg:ml-72">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
              Visualizations
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient-brand">
              GTM Visualizations
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Interactive charts and diagrams illustrating the Alfinder go-to-market strategy
            </p>
          </div>

          {/* Visualizations Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Conversion Funnel */}
            <div className="lg:col-span-2">
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
                    value: 25,
                    color: '#0a7aa0',
                    description: 'Reaches payment decision point',
                  },
                  {
                    label: 'Paying Customers',
                    value: 21,
                    color: '#044256',
                    description: '21% net conversion (95% retention)',
                  },
                ]}
              />
            </div>

            {/* Coming Soon Cards */}
            {[
              { title: 'Customer Journey Map', description: 'End-to-end user experience visualization' },
              { title: 'Market Sizing Chart', description: 'TAM, SAM, SOM breakdown' },
              { title: 'Competitive Matrix', description: 'Feature comparison across competitors' },
              { title: 'Budget Timeline', description: '6-month spend allocation' },
              { title: 'Channel Performance', description: 'Expected ROI by channel' },
              { title: 'KPI Dashboard', description: 'Real-time metrics tracking' },
            ].map((viz) => (
              <Card key={viz.title} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#065D7E]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#065D7E]">
                    <div className="p-2 rounded-lg bg-[#065D7E]/10">
                      <BarChart3 className="w-5 h-5 text-[#065D7E]" />
                    </div>
                    {viz.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{viz.description}</p>
                  <Badge className="mt-3 bg-[#11D4D8]/10 text-[#11D4D8] border-[#11D4D8]/20">
                    Coming Soon
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Info Card */}
          <Card className="mt-8 bg-white border border-[#11D4D8]/20 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#11D4D8]/20">
                  <Sparkles className="w-5 h-5 text-[#11D4D8]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#065D7E] mb-1">Interactive Visualizations</p>
                  <p className="text-sm text-gray-600">
                    More visualizations will be added as we implement additional chart types and data displays.
                    Each visualization will be interactive and exportable for presentations.
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
