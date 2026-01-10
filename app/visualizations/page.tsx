import { Sidebar } from '@/components/sidebar'
import { FunnelChart } from '@/components/charts/funnel-chart'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, BarChart3 } from 'lucide-react'
import Link from 'next/link'

export default function VisualizationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <Sidebar />

      <main className="lg:ml-72">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Overview
          </Link>

          {/* Header */}
          <div className="mb-8">
            <Badge className="mb-4" variant="gradient">
              Visualizations
            </Badge>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-pink-500 bg-clip-text text-transparent">
              GTM Visualizations
            </h1>
            <p className="text-xl text-muted-foreground">
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
              <Card key={viz.title} className="border-l-4 border-l-primary/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    {viz.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{viz.description}</p>
                  <Badge variant="secondary" className="mt-3">
                    Coming Soon
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Info Card */}
          <Card className="mt-8 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5">
            <CardContent className="p-6">
              <p className="text-sm font-medium mb-2">💡 Interactive Visualizations</p>
              <p className="text-sm text-muted-foreground">
                More visualizations will be added as we implement additional chart types and data displays.
                Each visualization will be interactive and exportable for presentations.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
