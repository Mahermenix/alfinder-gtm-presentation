import { Sidebar } from '@/components/sidebar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Calendar } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// This would normally read from the content.json or markdown files
// For now, we'll show a placeholder that indicates the story content
const gtmStories: Record<string, { title: string; description: string }> = {
  'story-01-target-audience': {
    title: '1. Target Audience & Competitive Landscape',
    description: 'Understanding our ideal customer and competitive positioning in the MENA e-commerce search market.',
  },
  'story-02-conversion-funnel': {
    title: '2. Conversion Funnel & Aha Moment',
    description: 'Mapping the customer journey from trial signup to paid conversion with key engagement metrics.',
  },
  'story-03-channel-strategy': {
    title: '3. Channel Strategy',
    description: 'Multi-channel approach combining paid media, organic growth, and strategic partnerships.',
  },
  'story-04-lead-generation': {
    title: '4. Lead Generation & Acquisition',
    description: 'Detailed tactics for acquiring qualified trial signups within target CPA.',
  },
  'story-05-budget-roi': {
    title: '5. Budget & ROI Projections',
    description: 'Financial breakdown showing unit economics, LTV:CAC ratios, and expected returns.',
  },
  'story-06-timeline-kpis': {
    title: '6. Timeline, Milestones & KPIs',
    description: '6-month execution roadmap with clear milestones and success metrics.',
  },
  'story-07-master-plan': {
    title: '7. Master GTM Plan',
    description: 'Comprehensive integration of all GTM elements into actionable execution plan.',
  },
}

export default function GTMStoryPage({ params }: { params: { slug: string } }) {
  const story = gtmStories[params.slug]

  if (!story) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <Sidebar />

      <main className="lg:ml-72">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
              GTM Strategy
            </Badge>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-pink-500 bg-clip-text text-transparent">
              {story.title}
            </h1>
            <p className="text-xl text-muted-foreground">{story.description}</p>
          </div>

          {/* Content Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Story Content
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800 font-medium mb-2">📄 Content Loading...</p>
                <p className="text-yellow-700 text-sm">
                  This story page is ready to display the full markdown content from{' '}
                  <code className="bg-yellow-100 px-1 py-0.5 rounded">
                    _bmad-output/GTM/Stories/{params.slug}.md
                  </code>
                </p>
                <p className="text-yellow-700 text-sm mt-2">
                  The content will be automatically loaded from the markdown file in the next update.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-semibold">What's Included:</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Detailed analysis and strategic recommendations</li>
                  <li>Data-driven insights and metrics</li>
                  <li>Actionable next steps and execution plans</li>
                  <li>Supporting research and references</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <p className="text-sm font-medium text-muted-foreground mb-2">Previous Story</p>
                <Link
                  href="/gtm/story-01-target-audience"
                  className="text-lg font-semibold hover:text-primary transition-colors"
                >
                  ← Target Audience
                </Link>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-pink-500">
              <CardContent className="p-6">
                <p className="text-sm font-medium text-muted-foreground mb-2">Next Story</p>
                <Link
                  href="/gtm/story-02-conversion-funnel"
                  className="text-lg font-semibold hover:text-primary transition-colors"
                >
                  Conversion Funnel →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(gtmStories).map((slug) => ({
    slug,
  }))
}
