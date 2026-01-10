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
    <div className="min-h-screen">
      <Sidebar />

      <main className="lg:ml-72">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
              GTM Strategy
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient-brand">
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

          {/* Navigation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Previous Story */}
            {previousStory ? (
              <Link
                href={`/gtm/${previousStory}`}
                className="group"
              >
                <Card className="glass-card hover-lift border-l-4 border-l-[#065D7E] h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 rounded-lg bg-[#065D7E]/10 group-hover:bg-[#065D7E]/20 transition-colors">
                    <ArrowLeftIcon className="w-4 h-4 text-[#065D7E]" />
                  </div>
                  <p className="text-sm font-medium text-gray-500">Previous Story</p>
                </div>
                <p className="text-lg font-bold text-[#065D7E] group-hover:text-[#11D4D8] transition-colors">
                  {gtmStories[previousStory].title}
                </p>
                <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                  {gtmStories[previousStory].description}
                </p>
              </CardContent>
            </Card>
              </Link>
            ) : (
              <Card className="border-l-4 border-l-gray-300 opacity-50">
                <CardContent className="p-6">
                  <p className="text-sm font-medium text-gray-400 mb-2">Previous Story</p>
                  <p className="text-gray-400">First story</p>
                </CardContent>
              </Card>
            )}

            {/* Next Story */}
            {nextStory ? (
              <Link
                href={`/gtm/${nextStory}`}
                className="group"
              >
                <Card className="glass-card hover-lift border-l-4 border-l-[#11D4D8] h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-[#11D4D8]/10 group-hover:bg-[#11D4D8]/20 transition-colors">
                          <ArrowRightIcon className="w-4 h-4 text-[#11D4D8]" />
                        </div>
                        <p className="text-sm font-medium text-gray-500">Next Story</p>
                      </div>
                    </div>
                    <p className="text-lg font-bold text-[#065D7E] group-hover:text-[#11D4D8] transition-colors">
                      {gtmStories[nextStory].title}
                    </p>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                      {gtmStories[nextStory].description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ) : (
              <Card className="border-l-4 border-l-gray-300 opacity-50">
                <CardContent className="p-6">
                  <p className="text-sm font-medium text-gray-400 mb-2">Next Story</p>
                  <p className="text-gray-400">Last story</p>
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
