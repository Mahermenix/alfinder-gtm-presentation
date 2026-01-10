import { Sidebar } from '@/components/sidebar'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Target } from 'lucide-react'
import Link from 'next/link'

const gtmStories = [
  { number: '01', title: 'Target Audience', slug: 'story-01-target-audience', description: 'Understanding our ideal customer' },
  { number: '02', title: 'Conversion Funnel', slug: 'story-02-conversion-funnel', description: 'Customer journey metrics' },
  { number: '03', title: 'Channel Strategy', slug: 'story-03-channel-strategy', description: 'Multi-channel approach' },
  { number: '04', title: 'Lead Generation', slug: 'story-04-lead-generation', description: 'Acquisition tactics' },
  { number: '05', title: 'Budget & ROI', slug: 'story-05-budget-roi', description: 'Financial projections' },
  { number: '06', title: 'Timeline & KPIs', slug: 'story-06-timeline-kpis', description: '6-month roadmap' },
  { number: '07', title: 'Master Plan', slug: 'story-07-master-plan', description: 'Complete strategy' },
]

export default function GTMPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <Sidebar />

      <main className="lg:ml-72">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-12">
            <Badge className="mb-4" variant="gradient">
              GTM Strategy
            </Badge>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Go-to-Market Strategy Stories
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore the complete GTM strategy through our 7 comprehensive stories
            </p>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gtmStories.map((story, index) => (
              <Link
                key={story.slug}
                href={`/gtm/${story.slug}`}
                className="group"
              >
                <Card className="h-full border-l-4 border-l-transparent group-hover:border-l-primary transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                          {story.number}
                        </span>
                        <Target className="w-6 h-6 text-primary" />
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{story.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
