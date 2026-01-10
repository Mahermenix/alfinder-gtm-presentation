import { Sidebar } from '@/components/sidebar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Calendar, ArrowLeft as ArrowLeftIcon, ArrowRight as ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import { MarkdownRenderer } from '@/components/markdown-renderer'

async function getContent() {
  const contentPath = path.join(process.cwd(), 'app', 'data', 'content.json')
  const fileContent = fs.readFileSync(contentPath, 'utf-8')
  return JSON.parse(fileContent)
}

// All GTM stories in order
const gtmStories: Record<string, { title: string; description: string; index: number }> = {
  'story-01-target-audience': {
    title: '1. Target Audience & Competitive Landscape',
    description: 'Understanding our ideal customer and competitive positioning in the MENA e-commerce search market.',
    index: 0,
  },
  'story-02-conversion-funnel': {
    title: '2. Conversion Funnel & Aha Moment',
    description: 'Mapping the customer journey from trial signup to paid conversion with key engagement metrics.',
    index: 1,
  },
  'story-03-channel-strategy': {
    title: '3. Channel Strategy',
    description: 'Multi-channel approach combining paid media, organic growth, and strategic partnerships.',
    index: 2,
  },
  'story-04-lead-generation': {
    title: '4. Lead Generation & Acquisition',
    description: 'Detailed tactics for acquiring qualified trial signups within target CPA.',
    index: 3,
  },
  'story-05-budget-roi': {
    title: '5. Budget & ROI Projections',
    description: 'Financial breakdown showing unit economics, LTV:CAC ratios, and expected returns.',
    index: 4,
  },
  'story-06-timeline-kpis': {
    title: '6. Timeline, Milestones & KPIs',
    description: '6-month execution roadmap with clear milestones and success metrics.',
    index: 5,
  },
  'story-07-master-plan': {
    title: '7. Master GTM Plan',
    description: 'Comprehensive integration of all GTM elements into actionable execution plan.',
    index: 6,
  },
}

const storySlugs = Object.keys(gtmStories)

export default async function GTMStoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const story = gtmStories[slug]
  const content = await getContent()

  // Find the story content from content.json
  const storyContent = content.gtm?.find((s: any) => s.slug === slug)

  if (!story) {
    notFound()
  }

  // Get previous and next story
  const currentIndex = story.index
  const previousStory = currentIndex > 0 ? storySlugs[currentIndex - 1] : null
  const nextStory = currentIndex < storySlugs.length - 1 ? storySlugs[currentIndex + 1] : null

  return (
    <div className="min-h-screen flex flex-col">
      <Sidebar />

      <main className="lg:ml-72 flex-1 flex flex-col">
        {/* Fixed Navigation Header - Always Visible */}
        <div className="sticky top-0 z-10 bg-[#F0FBFB]/95 backdrop-blur-sm border-b border-[#11D4D8]/10 px-4 sm:px-6 lg:px-8 py-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#11D4D8] mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Overview
            </Link>
            <div className="flex items-center justify-between">
              <Badge className="bg-[#11D4D8]/10 text-[#065D7E] border-[#11D4D8]/20">
                GTM Strategy {story.index + 1}/7
              </Badge>
              <div className="flex gap-3">
                {previousStory && (
                  <Link
                    href={`/gtm/${previousStory}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#11D4D8]/20 hover:border-[#11D4D8] hover:shadow-md transition-all text-sm font-medium text-[#065D7E]"
                  >
                    <ArrowLeftIcon className="w-4 h-4" />
                    Previous
                  </Link>
                )}
                {nextStory && (
                  <Link
                    href={`/gtm/${nextStory}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#065D7E] to-[#11D4D8] text-white hover:shadow-lg transition-all text-sm font-medium"
                  >
                    Next
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#065D7E]">
                {story.title}
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl leading-relaxed">{story.description}</p>
            </div>

            {/* Content Card */}
            {storyContent ? (
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#065D7E]">
                    <div className="p-2 rounded-lg bg-[#065D7E]/10">
                      <Calendar className="w-5 h-5 text-[#065D7E]" />
                    </div>
                    Story Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <MarkdownRenderer content={storyContent.content} />
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-gradient-to-br from-[#065D7E]/5 to-[#11D4D8]/5 border border-[#11D4D8]/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#11D4D8]/20">
                      <svg className="w-5 h-5 text-[#11D4D8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.707.293H19a2 2 0 012 2v11a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#065D7E] mb-1">Content Not Found</p>
                      <p className="text-sm text-gray-600">
                        This story content could not be loaded from the content database.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
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
